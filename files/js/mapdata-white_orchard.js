$(function()
{
	map_path   = 'white_orchard';
	map_sWest  = L.latLng(-85, -180);
	map_nEast  = L.latLng(0, 45);
	map_center = [-65, -65];
	map_mZoom  = 5;

	// Abandoned Site
		var abandonedIcon = L.icon({
			iconUrl  : '/files/img/icons/abandoned.png',
			iconSize : [30, 30]
		});

		abandonedMarkers = L.layerGroup(genericMarkers([
			[-77.786, -48.604],
			[-65.293, -152.842],
		], abandonedIcon, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more'));

	// Alchemy Supplies
		var alchemyIcon = L.icon({
			iconUrl  : '/files/img/icons/alchemy.png',
			iconSize : [20, 28]
		});

		alchemyMarkers = L.layerGroup([
//				L.marker([0, 0], setMarker(alchemyIcon)).bindLabel('Alchemy Supplies').bindPopup('<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
		]);

	// Armourer
		var armourerIcon = L.icon({
			iconUrl  : '/files/img/icons/armourer.png',
			iconSize : [24, 34]
		});

		armourerMarkers = L.layerGroup([
				L.marker([-69.069, -88.945], setMarker(armourerIcon)).bindLabel('Amateur Armorer').bindPopup('<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		]);

	// Armourer's Table
		var armourerstableIcon = L.icon({
			iconUrl  : '/files/img/icons/armourerstable.png',
			iconSize : [30, 27]
		});

		armourerstableMarkers = L.layerGroup(genericMarkers([
			[-25.362, -152.539],
		], armourerstableIcon, 'Armorer\'s Table', '<h1>Armorer\'s Table</h1>Armorer\'s tables grant your gear increased armor for a limited duration'));

	// Bandit Camp
		var banditcampIcon = L.icon({
			iconUrl  : '/files/img/icons/banditcamp.png',
			iconSize : [29, 30]
		});

		banditcampMarkers = L.layerGroup(genericMarkers([
			[-81.596, -122.168],
			[-73.800, -43.418],
			[-53.678, -157.720],
			[-34.307, -25.537],
		], banditcampIcon, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here'));

	// Barber
		var barberIcon = L.icon({
			iconUrl  : '/files/img/icons/barber.png',
			iconSize : [30, 30]
		});

		barberMarkers = L.layerGroup([]);

	// Blacksmith
		var blacksmithIcon = L.icon({
			iconUrl  : '/files/img/icons/blacksmith.png',
			iconSize : [27, 30]
		});

		blacksmithMarkers = L.layerGroup([
				L.marker([-26.981, -151.348], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		]);

	// Brothel
		var brothelIcon = L.icon({
			iconUrl  : '/files/img/icons/brothel.png',
			iconSize : [28, 26]
		});

		brothelMarkers = L.layerGroup([]);

	// Entrance
		var entranceIcon = L.icon({
			iconUrl  : '/files/img/icons/entrance.png',
			iconSize : [28, 27]
		});

		// todo, entrance to what?
		entranceMarkers = L.layerGroup([
				L.marker([-79.592, -84.199], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-77.897, -75.586], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
		]);

	// Grindstone
		var grindstoneIcon = L.icon({
			iconUrl  : '/files/img/icons/grindstone.png',
			iconSize : [30, 26]
		});

		grindstoneMarkers = L.layerGroup(genericMarkers([
			[-68.948, -88.006],
			[-68.648, -88.206],
			[-64.624, -155.215],
			[-26.902, -149.941],
		], grindstoneIcon, 'Grindstone', '<h1>Grindstone</h1>A blade sharpened here will deal more damage'));

	// Guarded Treasure
		var guardedIcon = L.icon({
			iconUrl  : '/files/img/icons/guarded.png',
			iconSize : [23, 34]
		});

		var guardedGeneric = genericMarkers([
			[-74.914, -59.766],
			[-48.517, -167.695],
			[-29.645, -96.943],
			[-27.333, -134.077],
		], guardedIcon, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster guards a valuable cache here');

		guardedMarkers = L.layerGroup($.merge(guardedGeneric, [
			// No custom markers needed
		]));

	// Gwent Player
		var gwentIcon = L.icon({
			iconUrl  : '/files/img/icons/gwent.png',
			iconSize : [24, 30]
		});

		gwentMarkers = L.layerGroup([
//				L.marker([0, 0], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		]);

	// Harbor
		var harborIcon = L.icon({
			iconUrl  : '/files/img/icons/harbor.png',
			iconSize : [27, 30]
		});

		harborMarkers = L.layerGroup([]);

	// Herbalist
		var herbalistIcon = L.icon({
			iconUrl  : '/files/img/icons/herbalist.png',
			iconSize : [25, 28]
		});

		herbalistMarkers = L.layerGroup([
			L.marker([-66.267, -132.627], setMarker(herbalistIcon)).bindLabel('Herbalist').bindPopup('<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
		]);


	// Hidden Treasure
		var hiddenIcon = L.icon({
			iconUrl  : '/files/img/icons/hidden.png',
			iconSize : [23, 34]
		});

		var hiddenGeneric = genericMarkers([
			[-47.220, -111.006],
			[-39.028, -56.865],
			[-28.613, -42.188],
			
		], hiddenIcon, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods');

		hiddenMarkers = L.layerGroup($.merge(hiddenGeneric, [
			// No custom markers needed
		]));

	// Innkeep
		var innkeepIcon = L.icon({
			iconUrl  : '/files/img/icons/tavern.png',
			iconSize : [26, 30]
		});

		innkeepMarkers = L.layerGroup([
			L.marker([-65.731, -80.068], setMarker(innkeepIcon)).bindLabel('Inn at the Crossroads').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, and drink'),
		]);

	// Monster Den
		var monsterdenIcon = L.icon({
			iconUrl  : '/files/img/icons/monsterden.png',
			iconSize : [30, 27]
		});

		monsterdenMarkers = L.layerGroup([]);

	// Monster Nest
		var monsternestIcon = L.icon({
			iconUrl  : '/files/img/icons/monsternest.png',
			iconSize : [23, 30]
		});

		var monsternestGeneric = genericMarkers([
			[-14.264, -95.625],
			[-45.027, -0.308],
		], monsternestIcon, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs');

		monsternestMarkers = L.layerGroup($.merge(monsternestGeneric, [
			// No custom markers needed
		]));

	// Notice Board
		var noticeIcon = L.icon({
			iconUrl  : '/files/img/icons/notice.png',
			iconSize : [23, 28]
		});

		noticeMarkers = L.layerGroup(genericMarkers([
				[-67.643, -89.385],
		], noticeIcon, 'Notice Board', '<h1>Notice Board</h1>Here you can find monster contracts and announcements about matters of local concern'));

	// Person in Distress
		var pidIcon = L.icon({
			iconUrl  : '/files/img/icons/pid.png',
			iconSize : [24, 34]
		});

		pidMarkers = L.layerGroup([]);

	// Place of Power
		var popIcon = L.icon({
			iconUrl  : '/files/img/icons/pop.png',
			iconSize : [27, 30]
		});

		//todo get all place of power types
		popMarkers = L.layerGroup([
			L.marker([-81.492, -106.699], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			L.marker([-79.703, -52.822], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			L.marker([-51.536, -130.386], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			L.marker([-34.235, -94.043], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			L.marker([-13.325, -97.559], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			L.marker([-43.771, 0.308], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				
		]);

	// Point of Interest
		var poiIcon = L.icon({
			iconUrl  : '/files/img/icons/poi.png',
			iconSize : [10, 30]
		});


		poiMarkers = L.layerGroup([
		]);

	// Shopkeeper
		var shopkeeperIcon = L.icon({
			iconUrl  : '/files/img/icons/merchant.png',
			iconSize : [21, 30]
		});

		shopkeeperMarkers = L.layerGroup([
				L.marker([-66.320, -75.674], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>todo'),
				L.marker([-66.338, -155.654], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>todo'),
		]);

	// Sign Post
		var signpostIcon = L.icon({
			iconUrl  : '/files/img/icons/fasttravel.png',
			iconSize : [27, 34]
		});

		signpostMarkers = L.layerGroup([
			L.marker([-78.955, -85.869], setMarker(signpostIcon)).bindLabel('Abandoned Village').bindPopup('<h1>Abandoned Village</h1>A few years ago, a group of armed men marched into this settlement. They butchered its inhabitants and burned down their homes. Not a soul has dwelt here since that black and bloody day'),
			L.marker([-77.916, -109.819], setMarker(signpostIcon)).bindLabel('Broken Bridge').bindPopup('<h1>Broken Bridge</h1>This bridge was destroyed by retreating Temerian troops during the Nilfgaardian attack. It was shoddily built to begin with. Good riddance'),
			L.marker([-67.136, -72.202], setMarker(signpostIcon)).bindLabel('Woesong Bridge').bindPopup('<h1>Woesong Bridge</h1>So named because of a girl who once would stand on the bridge and sing, waiting for her beloved\'s return'),
			L.marker([-65.440, -141.855], setMarker(signpostIcon)).bindLabel('Sawmill').bindPopup('<h1>Sawmill</h1>White Orchard is famous not only for its premium fruit, but also for the top-quality, furniture-grade lumber harvested from the Vulpine Woods'),
			L.marker([-47.339, -89.912], setMarker(signpostIcon)).bindLabel('Mill').bindPopup('<h1>Mill</h1>Carts haul grain from all the surrounding villages to White Orchard\'s mill'),
			L.marker([-20.468, -153.281], setMarker(signpostIcon)).bindLabel('Nilfgaardian Garrison').bindPopup('<h1>Nilfgaardian Garrison</h1>This strategic point guards White Orchard\'s main river crossing. Nilfgaardian troops have taken it over'),
			L.marker([-46.073, -13.271], setMarker(signpostIcon)).bindLabel('Cackler Bridge').bindPopup('<h1>Cackler Bridge</h1>Bridge named in honor of a woman who went mad from unfulfilled love. After her heart snapped, she spent all her days running up and down this bridge while laughing hysterically'),
			L.marker([-63.015, -4.482], setMarker(signpostIcon)).bindLabel('Crossroads').bindPopup('<h1>Crossroads</h1>The road splits here. One fork leads to Vizima, the other to Novigrad'),
			L.marker([-68.106, -37.266], setMarker(signpostIcon)).bindLabel('Ford').bindPopup('<h1>Ford</h1>Before the war, merchants and travelers would cross the river here. Now only Nilfgaardian soldiers traverse this path'),
			L.marker([-71.413, 1.230], setMarker(signpostIcon)).bindLabel('Ransacked Village').bindPopup('<h1>Ransacked Village</h1>A band of soldiers attacked this village early one morning. They slaughtered most of the villagers in their beds, and the lucky few who fled to the woods in time had nothing left to return to'),
		]);

	// Smugglers' Cache
		var smugglersIcon = L.icon({
			iconUrl  : '/files/img/icons/smugglers.png',
			iconSize : [28, 30]
		});

		var smugglersGeneric = genericMarkers([
			[-76.720, -31.201],
		], smugglersIcon, 'Smuggler\'s Cache', '<h1>Smuggler\'s Cache</h1>Smuggled goods have been hidden here');

		smugglersMarkers = L.layerGroup($.merge(smugglersGeneric, [
			// No custom markers needed
		]));

	// Spoils of War
		var spoilsIcon = L.icon({
			iconUrl  : '/files/img/icons/spoils.png',
			iconSize : [25, 28]
		});

		spoilsMarkers = L.layerGroup(genericMarkers([
			[-12.726, -128.452],
		], spoilsIcon, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish'));

	allLayers = [abandonedMarkers, alchemyMarkers, armourerMarkers, armourerstableMarkers, banditcampMarkers, barberMarkers, blacksmithMarkers, brothelMarkers, entranceMarkers, grindstoneMarkers, guardedMarkers, gwentMarkers, harborMarkers, herbalistMarkers, hiddenMarkers, innkeepMarkers, monsterdenMarkers, monsternestMarkers, noticeMarkers, pidMarkers, popMarkers, poiMarkers, shopkeeperMarkers, signpostMarkers, smugglersMarkers, spoilsMarkers];
});

function genericMarkers(cords, icon, label, popup) {
	var out = [];
	$.each(cords, function(key, val)
	{
		out.push(L.marker(val, setMarker(icon)).bindLabel(label).bindPopup(popup));
	});
	return out;
}

function setMarker(icon, tooltip) {
	return {icon : icon, riseOnHover : true};
}