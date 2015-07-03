var options = {
	debug: false,
	getAsync: true,
	ns: 'general',
	lng: localStorage['lang'],
	fallbackLng: 'en',
	resGetPath: 'files/locales/__lng__/__ns__.json',
	useDataAttrOptions: true,
	lngWhitelist: [ 'de', 'en', 'ru' ]
};
//i18n init to translate search results
$.i18n.init(options, function() {
	$.i18n.loadNamespace('v', function() {
		$.getScript("files/js/mapdata-velen.js").done(function(script, textStatus) {
			$(document).trigger('loadMapdata');
			$(document).unbind('loadMapdata');
			$.i18n.loadNamespace('s', function() {
				$.getScript("files/js/mapdata-skellige.js").done(function(script, textStatus) {
					$(document).trigger('loadMapdata');
					$(document).unbind('loadMapdata');
					$.i18n.loadNamespace('w', function() {
						$.getScript("files/js/mapdata-white_orchard.js").done(function(script, textStatus) {
							$(document).trigger('loadMapdata');
							$(document).unbind('loadMapdata');
							//bind the search when all scripts are loaded
							$('#search').keyup(function() {
								doSearch();
							});
						});
					});
				});
			});
		});
	});
});
var mapdata = [];
var processData = function(data) {
	var mapKey = map_path.charAt(0);
	$.each(data, function(markerType,markers) {
		$.each(markers, function(index,marker) {
			var link = window.location.href.replace(window.location.hash, '')+mapKey+'/#3/'+marker.coords[0][0]+'/'+marker.coords[0][1]+'/m='+marker.coords[0][0]+','+marker.coords[0][1];
			mapdata.push({
				'label':marker.label,
				'popup':marker.popup,
				'popupTitle':(marker.popupTitle ? marker.popupTitle : '' ),
				'link':link
			});
		});
	});
};
//mocks to avoid errors on mapdata files
var L = {};
L.latLng = function() {};
window.markers = {};

var doSearch = function() {
	var searchInput = $('#search').val();
	if(searchInput.length == 0) {
			$('#results').empty();
			return;
	}
	var regex = new RegExp('(?=[^\\s])' + searchInput, 'gi');
	var results = [];
	$.each(mapdata, function(k,v) {
		if((v.label.search(regex) != -1) ||
		(v.popup.search(regex) != -1) ||
		(v.popupTitle.search(regex) != -1))
		{
			results.push(v);
		}
	});
	$('#results').empty();
	$.each(results, function(k,v) {
		var label;
		if(v.popupTitle === '') {
			label = v.label;
		} else if(v.popupTitle.indexOf(v.label) > -1) {
			label = v.popupTitle;
		} else {
			label = v.label+' ('+v.popupTitle+')';
		}
		var item = '<li><a href="'+v.link+'">'+label+'</a><br/><span>'+v.popup+'</span></li>';
		$('#results').append($(item));
	});
};
