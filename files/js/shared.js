(function () {
	window.createMarker = function (coord, icon, label, popup) {
		return L.marker(coord, setMarker(icon)).bindLabel(label).bindPopup(popup);
	};

	window.genericMarkers = function (coords, icon, label, popup) {
		return coords.map(function (coord) {
			return window.createMarker(coord, icon, label, popup);
		});
	};

	window.setMarker = function (icon, tooltip) {
		return {icon : icon, riseOnHover : true};
	};

	window.icons = {};
	window.markers = {};

	var icons = window.icons;
	var markers = window.markers;

	window.processData = function (data) {
		Object.keys(data).forEach(function (key) {
			var items = data[key];
			var groupItems = [];
			items.forEach(function (item) {
				if (item.popupTitle == null) {
					item.popupTitle = item.label;
				}
				item.coords.forEach(function (coord) {
					groupItems.push(createMarker(coord, icons[key], item.label, '<h1>' + item.popupTitle + '</h1>' + item.popup));
				});
			});
			markers[key] = L.layerGroup(groupItems);
		});
	};

	icons.abandoned = L.icon({
		iconUrl  : '/files/img/icons/abandoned.png',
		iconSize : [30, 30]
	});

	icons.alchemy = L.icon({
		iconUrl  : '/files/img/icons/alchemy.png',
		iconSize : [20, 28]
	});

	icons.armourer = L.icon({
		iconUrl  : '/files/img/icons/armourer.png',
		iconSize : [24, 34]
	});

	icons.armourerstable = L.icon({
		iconUrl  : '/files/img/icons/armourerstable.png',
		iconSize : [30, 27]
	});

	icons.banditcamp = L.icon({
		iconUrl  : '/files/img/icons/banditcamp.png',
		iconSize : [29, 30]
	});

	icons.barber = L.icon({
		iconUrl  : '/files/img/icons/barber.png',
		iconSize : [30, 30]
	});

	icons.blacksmith = L.icon({
		iconUrl  : '/files/img/icons/blacksmith.png',
		iconSize : [27, 30]
	});

	icons.brothel = L.icon({
		iconUrl  : '/files/img/icons/brothel.png',
		iconSize : [28, 26]
	});

	icons.entrance = L.icon({
		iconUrl  : '/files/img/icons/entrance.png',
		iconSize : [28, 27]
	});

	icons.grindstone = L.icon({
		iconUrl  : '/files/img/icons/grindstone.png',
		iconSize : [30, 26]
	});

	icons.guarded = L.icon({
		iconUrl  : '/files/img/icons/guarded.png',
		iconSize : [23, 34]
	});

	icons.gwent = L.icon({
		iconUrl  : '/files/img/icons/gwent.png',
		iconSize : [24, 30]
	});

	icons.harbor = L.icon({
		iconUrl  : '/files/img/icons/harbor.png',
		iconSize : [27, 30]
	});

	icons.herbalist = L.icon({
		iconUrl  : '/files/img/icons/herbalist.png',
		iconSize : [25, 28]
	});

	icons.hidden = L.icon({
		iconUrl  : '/files/img/icons/hidden.png',
		iconSize : [23, 34]
	});

	icons.innkeep = L.icon({
		iconUrl  : '/files/img/icons/tavern.png',
		iconSize : [26, 30]
	});

	icons.monsterden = L.icon({
		iconUrl  : '/files/img/icons/monsterden.png',
		iconSize : [30, 27]
	});

	icons.monsternest = L.icon({
		iconUrl  : '/files/img/icons/monsternest.png',
		iconSize : [23, 30]
	});

	icons.notice = L.icon({
		iconUrl  : '/files/img/icons/notice.png',
		iconSize : [23, 28]
	});

	icons.pid = L.icon({
		iconUrl  : '/files/img/icons/pid.png',
		iconSize : [24, 34]
	});

	icons.pop = L.icon({
		iconUrl  : '/files/img/icons/pop.png',
		iconSize : [27, 30]
	});

	icons.poi = L.icon({
		iconUrl  : '/files/img/icons/poi.png',
		iconSize : [28, 28]
	});

	icons.shopkeeper = L.icon({
		iconUrl  : '/files/img/icons/merchant.png',
		iconSize : [21, 30]
	});

	icons.signpost = L.icon({
		iconUrl  : '/files/img/icons/fasttravel.png',
		iconSize : [27, 34]
	});

	icons.smugglers = L.icon({
		iconUrl  : '/files/img/icons/smugglers.png',
		iconSize : [28, 30]
	});

	icons.spoils = L.icon({
		iconUrl  : '/files/img/icons/spoils.png',
		iconSize : [25, 28]
	});
}());