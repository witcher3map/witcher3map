$(function()
{
	var mobile = ($('#sidebar').width() < 300);

	if (localStorage['sfw']) {
		$('span#brothel-text').text('Love Interest');
		$('div#sfw').find('a').hide();
		$('div#sfw').find('a.original').show();
	}

	$('div#sidebar').niceScroll({
		cursorcolor  : '#5E4F32',
		cursorborder : 'none',
	});

	$('div#info').niceScroll({
		cursorcolor  : '#5E4F32',
		cursorborder : 'none',
	});

	map = L.map('map', {
		minZoom: 2,
		maxZoom: 5,
		center: [60, -5],
		zoom: 3,
		attributionControl: false,
		zoomControl: false,
		layers: allLayers
	});

	new L.Control.Zoom({ position: 'topright' }).addTo(map);
	new L.Control.Fullscreen({ position: 'topright' }).addTo(map);
	var hash = new L.Hash(map);
	var bounds = new L.LatLngBounds(map.unproject([0, 8192], 5), map.unproject([7168, 0], 5));
	map.setMaxBounds(bounds);

	if (!mobile) {
		var searchData = [];
		$.each(allLayers, function(key, layer) {
			$.each(layer._layers, function(key, marker) {
				searchData.push({ loc : [marker._latlng.lat,marker._latlng.lng] , title : marker._popup._content.replace(/<h1>/, '').replace(/<\/h1>/, ' - ').replace(/\\'/g, '') });
			});
		});

		searchData.sort(function(a,b) {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});

		map.addControl(new L.Control.Search({
			autoResize   : false,
			autoType     : false,
			minLength    : 2,
			position     : 'topright',
			autoCollapse : false,
			zoom         : 5,
			filterJSON   : function(json){ return json; },
			callData     : function(text, callResponse) {
				callResponse($.grep(searchData, function(data) {
					return data.title.match(new RegExp(text, 'i'));
				}));
				setTimeout(function() {
					$('.search-tooltip').getNiceScroll().resize();
				},200);
				return { abort: function(){ console.log('aborted request: ' + text); } };
			}
		}));

		$('.search-tooltip').niceScroll({
			cursorcolor      : '#5E4F32',
			cursorborder     : 'none',
			horizrailenabled : false
		});
	}

	L.tileLayer('/files/maps/novigrad/{z}/{x}/{y}.png', {
		tms: true,
		bounds: bounds,
		noWrap: true
	}).addTo(map);

	map.dragging._draggable.on('predrag', function() {
		var pos = map._initialTopLeftPoint.subtract(this._newPos);
		this._newPos = this._newPos.subtract(map._getBoundsOffset(new L.Bounds(pos, pos.add(map.getSize())), map.options.maxBounds));
	});

	map.on('click', function(e) {
// for dev
//		prompt('', '[' + e.latlng.lat.toFixed(2) + ', ' + e.latlng.lng.toFixed(2) + ']');
		console.log('Clicked at:');
		console.log('[' + e.latlng.lat.toFixed(2) + ', ' + e.latlng.lng.toFixed(2) + ']');
	});

	map.on('popupopen', function(e) {
		$('#info-wrap').stop();
		if (localStorage['sfw'] && e.popup._source._popup._content.match(/prostitute/i)) {
			$('#info').html('<h1>Love Interest</h1>Meet your love interest here');
		} else {
			$('#info').html(e.popup._source._popup._content);
		}
		$('#info').getNiceScroll(0).doScrollTop(0,0);
		$('#info-wrap').fadeIn('fast');
		console.log('Popup at:');
		console.log('[' + e.popup._latlng.lat.toFixed(2) + ', ' + e.popup._latlng.lng.toFixed(2) + ']');
	});

	map.on('popupclose', function(e) {
		$('#info-wrap').fadeOut('fast', function() {
			$('#info').html('');
		});
	});

	$(document).on('click', '*', function() {
		map.closePopup();
	});

	$('div#sidebar').on('mouseover', function() {
		map.closePopup();
	});

	$('ul.key').on('click', 'li', function(e) {
		var marker = $(this).find('i').attr('class');
		if (marker == 'hide') {
			$.each(allLayers, function(key, val) {
				map.removeLayer(val);
			});
			$('ul.key:first li').each(function(id, li) {
				$(li).addClass('layer-disabled');
			});
			return;
		} else if (marker == 'show') {
			$.each(allLayers, function(key, val) {
				map.addLayer(val);
			});
			$('ul.key:first li').each(function(id, li) {
				$(li).removeClass('layer-disabled');
			});
			return;
		}
		if ($(this).hasClass('layer-disabled')) {
			map.addLayer(eval(marker + 'Markers'));
			$(this).removeClass('layer-disabled');
		} else {
			map.removeLayer(eval(marker + 'Markers'));
			$(this).addClass('layer-disabled');
		}
	});

	var origSidebar;
	var origBorder;
	var origHide;
	var origMap;

	$(document).on('click', 'div#hide-sidebar:not(.show-sidebar)', function(e) {
		origSidebar = $('#sidebar').css('left');
		origBorder = $('#sidebar-border').css('left');
		origHide = $('#hide-sidebar').css('left');
		origMap = $('#map').css('left');

		$('#map').css('left', '0px');
		map.invalidateSize();

		var base = $('#sidebar').outerWidth();
		$('#sidebar').animate({left : '-' + base + 'px'}, 200);
		$('#sidebar-border').animate({left : '-' + (base + 15) + 'px'}, 200);
		$('#hide-sidebar').animate({left : '0px'}, 200, function() {
			$('#hide-sidebar').addClass('show-sidebar');
		});
	});

	$(document).on('click', 'div#hide-sidebar.show-sidebar', function(e) {
		$('#sidebar').animate({left : origSidebar}, 200);
		$(this).animate({left : origHide}, 200);
		$('#sidebar-border').animate({left : origBorder}, 200, function()
		{
			$('#map').css('left', origMap);
			map.invalidateSize();
			$('.show-sidebar').removeClass('show-sidebar');
			$('#sidebar').attr('style', '');
			$('#sidebar-border').attr('style', '');
			$('#map').attr('style', '');
		});
	});

	$('div#sfw').on('click', 'a.gotosfw', function(e) {
		e.preventDefault();
		if (confirm('This will change \'Brothel\' to \'Love Interest\', are you sure?')) {
			localStorage['sfw'] = true;
			$('span#brothel-text').text('Love Interest');
			$('div#sfw > a.gotosfw').hide();
			$('div#sfw > a.original').show();
		}
	});

	$('div#sfw').on('click', 'a.original', function(e) {
		e.preventDefault();
		if (confirm('Are you sure you want to go back?')) {
			localStorage.removeItem('sfw');
			$('span#brothel-text').text('Brothel');
			$('div#sfw > a.original').hide();
			$('div#sfw > a.gotosfw').show();
		}
	});

	$('div#copyright').on('click', 'a.js-credits', function(e) {
		e.preventDefault();
		alert('This page makes use of the following Javascript libraries:\n\njQuery (MIT) - http://jquery.com\njQuery.NiceScroll (MIT) - http://git.io/vkLly\nLeaflet (BSD2) - http://leafletjs.com\nLeaflet.label (MIT) - http://git.io/vkfA2\nLeaflet-hash (MIT) - http://git.io/mwK1oA\nLeaflet.fullscreen (BSD2) - http://git.io/vJw5v\nLeaflet Control Search (MIT) - http://git.io/vkCPC\n\nMany thanks to the developers for their hard work');
	});
});