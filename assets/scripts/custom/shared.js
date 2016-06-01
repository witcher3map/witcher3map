L.Icon.Default.imagePath = '../files/images/leaflet';

var getMapdata = function(mapname) {
	$.cachedScript("../files/scripts/mapdata-"+mapname+".js").done(function(script, textStatus) {
		$.cachedScript("../files/scripts/custom.js").done(function(script, textStatus) {
			$(document).i18n();
		});
	});
};

$.i18n.init(i18noptions, function() {
	var namespace = location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)[1];
	$.i18n.loadNamespace(namespace, function() {
		if(namespace == "w") {
			getMapdata('white_orchard');
		} else if (namespace == "v") {
			getMapdata('velen');
		} else if (namespace == "s") {
			getMapdata('skellige');
		} else if (namespace == "t") {
			getMapdata('toussaint');
		} else if (namespace == "k") {
			getMapdata('kaer_morhen');
		}
	});
});

$(function() {
	//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
	$('.dd-selected').on('click', function() {
		setTimeout(function() {
			$("#sidebar").getNiceScroll().resize();
		}, 500);
	});
});

window.createMarker = function (coord, icon, label, popup, dataKey) {
	var mapKey = 'markers-' + map_path + '-hidden';
	var marker = L.marker(coord, setMarker(icon)).bindLabel(label).bindPopup(popup);

	marker.on('contextmenu', function (e) {
		toggleOpacity(e, mapKey);
		updatePills(e, dataKey);
	});

	if (isMarkerInvisible(mapKey, marker.getLatLng().lat, marker.getLatLng().lng)) {
		marker.setOpacity(invisibleMarkerOpacity);
		if(!markerCount[dataKey]) markerCount[dataKey] = 0;
	} else {
		markerCount[dataKey] = (markerCount[dataKey] + 1) || 1;
	}

	return marker;
};

window.setMarker = function (icon, tooltip) {
	return {icon : icon, riseOnHover : true};
};

window.getLatLngKey = function (lat, lng) {
	return lat + ';' + lng;
};

window.isMarkerInvisible = function (mapPath, lat, lng) {
	return invisibleMarkers[mapPath].indexOf(getLatLngKey(lat, lng)) > -1;
};

window.toggleOpacity = function (event, mapPath) {
	var key = getLatLngKey(event.latlng.lat, event.latlng.lng);

	if (event.target && event.target.options.opacity === 1.0) {
		event.target.setOpacity(invisibleMarkerOpacity);
		invisibleMarkers[mapPath].push(key);
	} else {
		event.target.setOpacity(1.0);
		invisibleMarkers[mapPath].splice(invisibleMarkers[mapPath].indexOf(key), 1);
	}

	localStorage[mapPath] = JSON.stringify(invisibleMarkers[mapPath]);
};

window.updatePills = function(event, dataKey) {
	if (event.target && event.target.options.opacity === 1.0) {
		markerCount[dataKey] = (markerCount[dataKey] + 1) || 1;
	} else {
		markerCount[dataKey] = (markerCount[dataKey] - 1) || 0;
	}
	$('ul.key:not(.controls) > li:not(.none) > i.'+dataKey+' ~ :last').text(markerCount[dataKey]);
};

window.resetInvisibleMarkers = function() {
	var mapKey = 'markers-' + map_path + '-hidden';
	invisibleMarkers[mapKey] = [];
	localStorage[mapKey] = JSON.stringify(invisibleMarkers[mapKey]);
	location.reload();
};

window.icons = {};
window.markers = {};
window.invisibleMarkers = {};
window.markerCount = {};
window.notes = {};

var icons = window.icons;
var markers = window.markers;
var invisibleMarkerOpacity = 0.25;

window.processData = function (data) {
	var mapKey = 'markers-' + map_path + '-hidden';

	if(!localStorage[mapKey]) {
		localStorage[mapKey] = JSON.stringify([]);
	}
	invisibleMarkers[mapKey] = JSON.parse(localStorage[mapKey]);

	var notesKey = 'notes'+map_path;
	if(!localStorage[notesKey]) {
		localStorage[notesKey] = JSON.stringify([]);
	}
	notes[map_path] = JSON.parse(localStorage[notesKey]);

	Object.keys(data).forEach(function (dataKey) {
		var items = data[dataKey];
		var groupItems = [];
		items.forEach(function (item) {
			if (item.popupTitle == null) {
				item.popupTitle = item.label;
			}
			item.coords.forEach(function (coord) {
				groupItems.push(createMarker(coord, icons[dataKey], item.label, '<h1>' + item.popupTitle + '</h1>' + item.popup, dataKey));
			});
		});

		markers[dataKey] = L.layerGroup(groupItems);
	});
};

icons.note_marker = L.icon({
	iconUrl  : '../files/images/icons/note_marker.png',
	iconSize : [23, 28]
});

icons.abandoned = L.icon({
	iconUrl  : '../files/images/icons/abandoned.png',
	iconSize : [30, 30]
});

icons.alchemy = L.icon({
	iconUrl  : '../files/images/icons/alchemy.png',
	iconSize : [20, 28]
});

icons.armourer = L.icon({
	iconUrl  : '../files/images/icons/armourer.png',
	iconSize : [24, 34]
});

icons.armourerstable = L.icon({
	iconUrl  : '../files/images/icons/armourerstable.png',
	iconSize : [30, 27]
});

icons.banditcamp = L.icon({
	iconUrl  : '../files/images/icons/banditcamp.png',
	iconSize : [29, 30]
});

icons.barber = L.icon({
	iconUrl  : '../files/images/icons/barber.png',
	iconSize : [30, 30]
});

icons.hansebase = L.icon({
	iconUrl  : '../files/images/icons/hansebase.png',
	iconSize : [29, 30]
});

icons.blacksmith = L.icon({
	iconUrl  : '../files/images/icons/blacksmith.png',
	iconSize : [27, 30]
});

icons.brothel = L.icon({
	iconUrl  : '../files/images/icons/brothel.png',
	iconSize : [28, 26]
});

icons.entrance = L.icon({
	iconUrl  : '../files/images/icons/entrance.png',
	iconSize : [28, 27]
});

icons.grindstone = L.icon({
	iconUrl  : '../files/images/icons/grindstone.png',
	iconSize : [30, 26]
});

icons.guarded = L.icon({
	iconUrl  : '../files/images/icons/guarded.png',
	iconSize : [23, 34]
});

icons.gwent = L.icon({
	iconUrl  : '../files/images/icons/gwent.png',
	iconSize : [24, 30]
});

icons.harbor = L.icon({
	iconUrl  : '../files/images/icons/harbor.png',
	iconSize : [27, 30]
});

icons.herbalist = L.icon({
	iconUrl  : '../files/images/icons/herbalist.png',
	iconSize : [25, 28]
});

icons.hidden = L.icon({
	iconUrl  : '../files/images/icons/hidden.png',
	iconSize : [23, 34]
});

icons.innkeep = L.icon({
	iconUrl  : '../files/images/icons/tavern.png',
	iconSize : [26, 30]
});

icons.kid = L.icon({
	iconUrl  : '../files/images/icons/kid.png',
	iconSize : [28, 30]
});

icons.monsterden = L.icon({
	iconUrl  : '../files/images/icons/monsterden.png',
	iconSize : [30, 27]
});

icons.monsternest = L.icon({
	iconUrl  : '../files/images/icons/monsternest.png',
	iconSize : [23, 30]
});

icons.notice = L.icon({
	iconUrl  : '../files/images/icons/notice.png',
	iconSize : [23, 28]
});

icons.pid = L.icon({
	iconUrl  : '../files/images/icons/pid.png',
	iconSize : [24, 34]
});

icons.pop = L.icon({
	iconUrl  : '../files/images/icons/pop.png',
	iconSize : [27, 30]
});

icons.poi = L.icon({
	iconUrl  : '../files/images/icons/poi.png',
	iconSize : [28, 28]
});

icons.shopkeeper = L.icon({
	iconUrl  : '../files/images/icons/merchant.png',
	iconSize : [21, 30]
});

icons.signalfire = L.icon({
	iconUrl  : '../files/images/icons/signalfire.png',
	iconSize : [17, 34]
});

icons.signpost = L.icon({
	iconUrl  : '../files/images/icons/fasttravel.png',
	iconSize : [27, 34]
});

icons.smugglers = L.icon({
	iconUrl  : '../files/images/icons/smugglers.png',
	iconSize : [28, 30]
});

icons.sidequests = L.icon({
	iconUrl  : '../files/images/icons/sidequests.png',
	iconSize : [10, 30]
});

icons.contracts = L.icon({
	iconUrl  : '../files/images/icons/tempcontract.png',
	iconSize : [18, 29]
});

icons.vintnercontract = L.icon({
 iconUrl  : '../files/images/icons/vintnercontract.png',
 iconSize : [23, 34]
});

icons.spoils = L.icon({
	iconUrl  : '../files/images/icons/spoils.png',
	iconSize : [25, 28]
});
