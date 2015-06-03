(function () {
	window.map_path   = 'white_orchard';
	window.map_sWest  = L.latLng(-85, -180);
	window.map_nEast  = L.latLng(0, 45);
	window.map_center = [-65, -65];
	window.map_mZoom  = 5;

	window.markers = {};

	var markers = window.markers;
	var icons = window.icons;

	// Abandoned Site
	markers.abandoned = L.layerGroup(genericMarkers([
		[-77.786, -48.604],
		[-65.293, -152.842],
	], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more'));

	// Alchemy Supplies
	markers.alchemy = L.layerGroup([
		//createMarker([0, 0], icons.alchemy, 'Alchemy Supplies', '<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
	]);

	// Armourer
	markers.armourer = L.layerGroup([
			createMarker([-69.069, -88.945], icons.armourer, 'Amateur Armorer', '<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
	]);

	// Armourer's Table
	markers.armourerstable = L.layerGroup(genericMarkers([
		[-25.362, -152.539],
	], icons.armourerstable, 'Armorer\'s Table', '<h1>Armorer\'s Table</h1>Armorer\'s tables grant your gear increased armor for a limited duration'));

	// Bandit Camp
	markers.banditcamp = L.layerGroup(genericMarkers([
		[-81.596, -122.168],
		[-73.800, -43.418],
		[-53.678, -157.720],
		[-34.307, -25.537],
		[-72.462, -16.699],
		[-66.000, -19.688],
	], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here'));

	// Barber
	markers.barber = L.layerGroup([]);

	// Blacksmith
	markers.blacksmith = L.layerGroup([
		createMarker([-26.981, -151.348], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
	]);

	// Brothel
	markers.brothel = L.layerGroup([]);

	// Entrance
	// todo, entrance to what?
	markers.entrance = L.layerGroup([
		createMarker([-79.592, -84.199], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		createMarker([-77.897, -75.586], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
	]);

	// Grindstone
	markers.grindstone = L.layerGroup(genericMarkers([
		[-68.948, -88.006],
		[-68.648, -88.206],
		[-64.624, -155.215],
		[-26.902, -149.941],
	], icons.grindstone, 'Grindstone', '<h1>Grindstone</h1>A blade sharpened here will deal more damage'));

	// Guarded Treasure
	var guardedGeneric = genericMarkers([
		[-74.914, -59.766],
		[-48.517, -167.695],
		[-29.645, -96.943],
		[-27.333, -134.077],
		[-74.776, 0.352],
	], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster guards a valuable cache here');

	markers.guarded = L.layerGroup($.merge(guardedGeneric, [
		// No custom markers needed
	]));

	// Gwent Player
	markers.gwent = L.layerGroup([
		createMarker([-65.946, -81.387], icons.gwent, 'Gwent Player', '<h1>Gwent Player</h1>Gamble your hard earned coin playing Gwent here. Disappears after progressing through story quests'),
	]);

	// Harbor
	markers.harbor = L.layerGroup([]);

	// Herbalist
	markers.herbalist = L.layerGroup([
		createMarker([-66.267, -132.627], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>Here you can buy alchemy ingredients'),
		createMarker([-77.542, -49.043], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
	]);


	// Hidden Treasure
	var hiddenGeneric = genericMarkers([
		[-47.220, -111.006],
		[-39.028, -56.865],
		[-28.613, -42.188],
		
	], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods');

	markers.hidden = L.layerGroup($.merge(hiddenGeneric, [
		// No custom markers needed
	]));

	// Innkeep
	markers.innkeep = L.layerGroup([
		createMarker([-65.731, -80.068], icons.innkeep, 'White Orchard Inn', '<h1>Innkeep</h1>Sells Gwent cards, and drink. Disappears after progressing through story quests'),
	]);

	// Monster Den
	markers.monsterden = L.layerGroup([]);

	// Monster Nest
	var monsternestGeneric = genericMarkers([
		[-14.264, -95.625],
		[-45.027, -0.308],
		[-64.206, 9.712],
	], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs');

	markers.monsternest = L.layerGroup($.merge(monsternestGeneric, [
		// No custom markers needed
	]));

	// Notice Board
	markers.notice = L.layerGroup(genericMarkers([
			[-67.643, -89.385],
	], icons.notice, 'Notice Board', '<h1>Notice Board</h1>Here you can find monster contracts and announcements about matters of local concern'));

	// Person in Distress
	markers.pid = L.layerGroup([]);

	// Place of Power
	//todo get all place of power types
	markers.pop = L.layerGroup([
		createMarker([-81.492, -106.699], icons.pop, 'Place of Power', '<h1>Place of Power - Quen</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		createMarker([-79.703, -52.822], icons.pop, 'Place of Power', '<h1>Place of Power - Yrden</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		createMarker([-51.536, -130.386], icons.pop, 'Place of Power', '<h1>Place of Power - Axii</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		createMarker([-34.235, -94.043], icons.pop, 'Place of Power', '<h1>Place of Power - Igni</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		createMarker([-13.325, -97.559], icons.pop, 'Place of Power', '<h1>Place of Power - Aard</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		createMarker([-43.771, 0.308], icons.pop, 'Place of Power', '<h1>Place of Power - Quen</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
	]);

	// Point of Interest
	markers.poi = L.layerGroup([
		createMarker([-49.611, 7.998], icons.poi, 'Lootable Battlefield', '<h1>Lootable Battlefield</h1>This battlefield can be looted for easy early game coin'),
	]);

	// Shopkeeper
	markers.shopkeeper = L.layerGroup([
		createMarker([-66.320, -75.674], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells Gwent cards, crafting supplies, and Temerian: blinders, saddle, saddlebags, armour'),
		createMarker([-66.338, -155.654], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
	]);

	// Sign Post
	markers.signpost = L.layerGroup([
		createMarker([-78.955, -85.869], icons.signpost, 'Abandoned Village', '<h1>Abandoned Village</h1>A few years ago, a group of armed men marched into this settlement. They butchered its inhabitants and burned down their homes. Not a soul has dwelt here since that black and bloody day'),
		createMarker([-77.916, -109.819], icons.signpost, 'Broken Bridge', '<h1>Broken Bridge</h1>This bridge was destroyed by retreating Temerian troops during the Nilfgaardian attack. It was shoddily built to begin with. Good riddance'),
		createMarker([-67.136, -72.202], icons.signpost, 'Woesong Bridge', '<h1>Woesong Bridge</h1>So named because of a girl who once would stand on the bridge and sing, waiting for her beloved\'s return'),
		createMarker([-65.440, -141.855], icons.signpost, 'Sawmill', '<h1>Sawmill</h1>White Orchard is famous not only for its premium fruit, but also for the top-quality, furniture-grade lumber harvested from the Vulpine Woods'),
		createMarker([-47.339, -89.912], icons.signpost, 'Mill', '<h1>Mill</h1>Carts haul grain from all the surrounding villages to White Orchard\'s mill'),
		createMarker([-20.468, -153.281], icons.signpost, 'Nilfgaardian Garrison', '<h1>Nilfgaardian Garrison</h1>This strategic point guards White Orchard\'s main river crossing. Nilfgaardian troops have taken it over'),
		createMarker([-46.073, -13.271], icons.signpost, 'Cackler Bridge', '<h1>Cackler Bridge</h1>Bridge named in honor of a woman who went mad from unfulfilled love. After her heart snapped, she spent all her days running up and down this bridge while laughing hysterically'),
		createMarker([-63.015, -4.482], icons.signpost, 'Crossroads', '<h1>Crossroads</h1>The road splits here. One fork leads to Vizima, the other to Novigrad'),
		createMarker([-68.106, -37.266], icons.signpost, 'Ford', '<h1>Ford</h1>Before the war, merchants and travelers would cross the river here. Now only Nilfgaardian soldiers traverse this path'),
		createMarker([-71.413, 1.230], icons.signpost, 'Ransacked Village', '<h1>Ransacked Village</h1>A band of soldiers attacked this village early one morning. They slaughtered most of the villagers in their beds, and the lucky few who fled to the woods in time had nothing left to return to'),
	]);

	// Smugglers' Cache
	var smugglersGeneric = genericMarkers([
		[-76.720, -31.201],
	], icons.smugglers, 'Smuggler\'s Cache', '<h1>Smuggler\'s Cache</h1>Smuggled goods have been hidden here');

	markers.smugglers = L.layerGroup($.merge(smugglersGeneric, [
		// No custom markers needed
	]));

	// Spoils of War
	markers.spoils = L.layerGroup(genericMarkers([
		[-12.726, -128.452],
	], icons.spoils, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish'));

	window.allLayers = [
		markers.abandoned,
		markers.alchemy,
		markers.armourer,
		markers.armourerstable,
		markers.banditcamp,
		markers.barber,
		markers.blacksmith,
		markers.brothel,
		markers.entrance,
		markers.grindstone,
		markers.guarded,
		markers.gwent,
		markers.harbor,
		markers.herbalist,
		markers.hidden,
		markers.innkeep,
		markers.monsterden,
		markers.monsternest,
		markers.notice,
		markers.pid,
		markers.pop,
		markers.poi,
		markers.shopkeeper,
		markers.signpost,
		markers.smugglers,
		markers.spoils
	];

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
}());
