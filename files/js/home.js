//empty mocks to avoid errors on mapdata files
var L = {};
L.latLng = function() {};
window.markers = {};

//i18n init to translate search results
$.i18n.init(i18noptions, function() {
	$.i18n.loadNamespace('v', function() {
		$.getScript("files/js/mapdata-velen.js").done(function(script, textStatus) {
			$.i18n.loadNamespace('s', function() {
				$.getScript("files/js/mapdata-skellige.js").done(function(script, textStatus) {
					$.i18n.loadNamespace('w', function() {
						$.getScript("files/js/mapdata-white_orchard.js").done(function(script, textStatus) {
							processData('velen', mapdata_velen);
							processData('skellige', mapdata_skellige);
							processData('white_orchard', mapdata_white_orchard);

							var searchInput = $('#search');

							//bind the search when all scripts are loaded
							searchInput.keyup(function() {
								doSearch();
							});

							//auto search when coming from back button
							if(searchInput.val()) doSearch();

							$('#clear').click(function () {
								$('#search').val('');
								$('#results').empty();
								$('#clear').hide();
								$('#nav').show();
							});
						});
					});
				});
			});
		});
	});
});

//mocks shared.js processData function to generate search results
var mapdata = [];
var processData = function(map_path, data) {
	var mapKey = map_path.charAt(0);
	$.each(data, function(markerType,markers) {
		$.each(markers, function(index,marker) {
			var link = window.location.href.replace(window.location.hash, '')+mapKey+'/#3/'+marker.coords[0][0]+'/'+marker.coords[0][1]+'/m='+marker.coords[0][0]+','+marker.coords[0][1];
			var popupText = marker.popup.replace(/<a\b[^>]*>/i,"").replace(/<\/a>/i, "");
			var popupTitle = (marker.popupTitle ? marker.popupTitle : '' );
			var label;
			if(popupTitle === '') {
				label = marker.label;
			} else if(popupTitle.indexOf(marker.label) > -1) {
				label = popupTitle;
			} else {
				label = marker.label+' ('+popupTitle+')';
			}
			mapdata.push({
				'map': $.t('maps.'+map_path),
				'label':label,
				'popup':popupText,
				'link':link
			});
		});
	});
};

//search function
var doSearch = function() {
	var searchElement = $('#search');
	var resultsElement = $('#results');
	var searchText = searchElement.val();
	if(searchText.length === 0) {
			resultsElement.empty();
			$('#clear').hide();
			$('#nav').show();
			return;
	} else {
		$('#clear').show();
		$('#nav').hide();
	}
	var regex = new RegExp('(?=[^\\s])' + searchText, 'gi');
	var results = [];
	var mapdataLength = mapdata.length;
	for(var i=0;i<mapdataLength;i++) {
		if((mapdata[i].label.search(regex) > -1) || (mapdata[i].popup.search(regex) > -1)) {
			results.push(mapdata[i]);
		}
	}
	resultsElement.empty();
	var count = '<li>'+results.length+' '+$.t('home.resultsFound')+'</li>';
	resultsElement.append($(count));
	var resultsLength = results.length;
	for(var i=0;i<resultsLength;i++) {
		var item = '<li><div><a href="'+results[i].link+'">'+results[i].label+' - '+results[i].map+'</a></div><div class="searchDescription"><div class="truncated" onclick="toggleTruncate(event, this)">'+results[i].popup+'</div></div></li>';
		resultsElement.append($(item));
	}
};

var toggleTruncate = function(e, element) {
	e.preventDefault();
	e.stopPropagation();
	$(element).toggleClass("truncated");
};

$(function() {
	var s = $('#search-input-wrapper');
	var pos = s.position();
	//setup sticky searchbar
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top) {
			if($('#search').val()) {
				s.addClass("sticky");
			}
		} else {
			s.removeClass("sticky");
		}
	});
});
