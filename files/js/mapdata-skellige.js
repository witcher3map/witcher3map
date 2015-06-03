(function () {
	window.map_path   = 'skellige';
	window.map_sWest  = L.latLng(-85.05, -180);
	window.map_nEast  = L.latLng(79.30, 135);
	window.map_center = [-35, -10];
	window.map_mZoom  = 6;

	var icons = window.icons;
	var markers = window.markers;

	// Abandoned Site
	markers.abandoned = L.layerGroup(genericMarkers([
		// Hindarsfjall
			[-35.996, 92.439],
			[-32.916, 85.562],
		// Ard Skellig
			[-45.522, -49.570],
			[-23.745, -19.841],
	], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more'));

	// Alchemy Supplies
	markers.alchemy = L.layerGroup([
		createMarker([-20.468, 93.318], icons.alchemy, 'Alchemy Supplies', '<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
		createMarker([-28.208, -26.147], icons.alchemy, 'Alchemy Supplies', '<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
		createMarker([-19.705, 17.314], icons.alchemy, 'Gremist', '<h1>Gremist</h1>\'Practicum in Advanced Alchemy\' (lvl 24) Quest'),
	]);

	// Armourer
	markers.armourer = L.layerGroup([
		// Hindarsfjall
			createMarker([-29.037, 98.569], icons.armourer, 'Amateur Armorer', '<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// An Skellig
			createMarker([49.253, 39.243], icons.armourer, 'Amateur Armorer', '<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// Ard Skellig
			createMarker([-62.492, -37.705], icons.armourer, 'Journeyman Armorer', '<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([2.965, -40.210], icons.armourer, 'Journeyman Armorer', '<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
	]);

	// Armourer's Table
	markers.armourerstable = L.layerGroup(genericMarkers([
		// Hindarsfjall
			[-28.159, 101.851],
			[-28.825, 98.062],
			[-32.806, 84.771],
		// An Skellig
			[50.247, 39.529],
		// Spikeroog
			[33.560, -111.445],
		// Ard Skellig
			[-62.127, -37.375],
			[-39.455, -63.127],
			[2.826, -40.997],
	], icons.armourerstable, 'Armorer\'s Table', '<h1>Armorer\'s Table</h1>Armorer\'s tables grant your gear increased armor for a limited duration'));

	// Bandit Camp
	markers.banditcamp = L.layerGroup(genericMarkers([
		// Spikeroog
			[21.861, -121.047],
		// Ard Skellig
			[-61.260, -50.669],
			[-29.459, -17.886],
			[-14.562, 27.861],
			[5.616, 15.557],
		// Sea
			[20.797, 38.848],
	], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here'));

	// Barber
	markers.barber = L.layerGroup(genericMarkers([
		// Spikeroog
			[31.072, -111.973],
			[-3.601, -34.277],
	], icons.barber, 'Barber', '<h1>Barber</h1>Visit barbers for a shave or a new haircut'));

	// Blacksmith
	markers.blacksmith = L.layerGroup([
		// Faroe
			createMarker([-77.390, 50.142], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// Hindarsfjall
			createMarker([-28.613, 102.458], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// An Skellig
			createMarker([50.641, 38.013], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// Spikeroog
			createMarker([33.101, -111.709], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// Ard Skellig
			createMarker([-62.007, -37.903], icons.blacksmith, 'Journeyman Blacksmith', '<h1>Journeyman Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([-39.504, -63.647], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([-37.265, -32.014], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([-56.945, -15.513], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([3.141, -40.649], icons.blacksmith, 'Journeyman Blacksmith', '<h1>Journeyman Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
	]);

	// Brothel
	markers.brothel = L.layerGroup([]);

	// Entrance
		// todo, entrance to what?
	markers.entrance = L.layerGroup([
		// Faroe
			createMarker([-78.469, 43.484], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-77.250, 44.187], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// Hindarsfjall
			createMarker([-17.036, 91.230], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-18.750, 88.022], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-18.813, 108.677], icons.entrance, 'Underwater Cave', '<h1>Underwater Cave</h1>Underwater entrance to cave'),
			createMarker([-25.205, 92.769], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-28.033, 89.912], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-29.955, 94.131], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// An Skellig
			createMarker([50.317, 33.289], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// Spikeroog
			createMarker([17.225, -123.640], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// Eastern Islands
			createMarker([-15.623, -139.043], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// Undvik
			createMarker([-51.727, -134.517], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-60.791, -127.375], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-61.470, -122.278], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-56.933, -124.343], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-59.108, -111.313], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// Ard Skellig
			createMarker([-71.124, -8.525], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-69.756, -8.503], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-69.938, -23.906], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-52.389, -42.473], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-45.722, -30.256], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-23.322, -67.983], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-18.396, -38.804], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-56.801, 23.379], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-54.581, 12.964], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-47.145, 17.468], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-44.072, 6.350], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-12.897, -13.667], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-13.240, -27.598], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-20.056, 17.446], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-1.801, -1.099], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([9.926, -22.168], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
	]);

	// Grindstone
	markers.grindstone = L.layerGroup(genericMarkers([
		// Faroe
			[-77.355, 50.647],
		// Hindarsfjall
			[-28.420, 102.119],
			[-28.929, 97.754],
			[-32.990, 84.902],
		// An Skellig
			[50.499, 39.836],
		// Spikeroog
			[33.340, -111.357],
		// Ard Skellig
			[-62.390, -37.156],
			[-39.317, -62.996],
			[-23.564, -20.522],
			[2.526, -40.957],
	], icons.grindstone, 'Grindstone', '<h1>Grindstone</h1>A blade sharpened here will deal more damage'));

	// Guarded Treasure
	var guardedGeneric = genericMarkers([
		// Faroe
			[-75.958, 43.835],
		// Hindarsfjall
			[-22.472, 85.386],
		// Undvik
			[-46.134, -120.586],
			[-69.877, -160.225],
		// Ard Skellig
			[-70.873, -5.625],
			[-66.531, -15.908],
			[-53.278, -63.413],
			[-46.815, -37.639],
			[-21.678, -32.717],
			[-26.392, -5.142],
			[-13.625, -43.506],
			[-23.765, 23.291],
			[5.791, -17.754],
		// Sea
			[28.111, 91.406],
			[-73.788, 20.347],
			[-70.215, 35.552],
			[53.801, -64.336],
			[55.279, -40.869],
			[55.826, -30.674],
			[59.623, -26.279],
			[61.058, -17.754],
			[57.845, -1.670],
	], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster guards a valuable cache here');

	markers.guarded = L.layerGroup($.merge(guardedGeneric, [
		// No custom markers needed
	]));

	// Gwent Player
	markers.gwent = L.layerGroup([
		// Faroe
			createMarker([-77.455, 49.227], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-77.350, 50.242], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// Hindarsfjall
			createMarker([-29.206, 99.662], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-28.985, 100.993], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-28.513, 102.658], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-28.937, 98.769], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// An Skellig
			createMarker([50.701, 38.203], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([50.669, 40.630], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([49.313, 39.443], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// Spikeroog
			createMarker([33.201, -111.909], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([31.360, -110.856], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([31.361, -112.799], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// Ard Skellig
			createMarker([-62.442, -37.585], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-61.917, -37.753], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-64.003, -47.744], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-42.031, -61.873], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-39.404, -63.487], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-37.165, -31.814], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-37.584, -29.837], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-56.435, -13.731], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-56.845, -15.313], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([3.085, -40.010], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([3.241, -40.449], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-30.576, -2.481], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-5.997, -34.407], icons.gwent, 'Gwent Player', '<h1>Herbalist Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-3.194, -35.967], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
	]);

	// Harbor
	markers.harbor = L.layerGroup(genericMarkers([
		[-6.075, -40.496],
		[11.265, -23.005],
		[-28.498, -28.696],
		[-38.514, -65.544],
		[-23.403, -75.388],
		[-50.972, -106.721],
		[-43.628, -116.301],
		[-64.053, -52.207],
		[-76.496, 53.394],
		[-58.101, -12.349],
		[-59.955, -2.944],
		[-57.065, 25.796],
		[-25.681, 100.767],
		[-31.915, 26.938],
		[47.725, 38.628],
		[32.769, -107.974],
		[-14.477, -141.064],
	], icons.harbor, 'Harbor', '<h1>Harbor</h1>A place where you can find a boat, boats will respawn here'));

	// Herbalist
	var herbalistGeneric = genericMarkers([
		// Ard Skellig
			[-32.473, 14.722],
			[-6.097, -34.607],
	], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>Here you can buy alchemy ingredients');

	markers.herbalist = L.layerGroup($.merge(herbalistGeneric, [
		// No custom markers needed
	]));


	// Hidden Treasure
	var hiddenGeneric = genericMarkers([
		// Faroe
			[-78.469, 42.957],
		// An Skellig
			[46.905, 46.582],
		// Spikeroog
			[26.274, -104.238],
			[27.020, -95.977],
		// Undvik
			[-46.073, -133.835],
			[-55.937, -121.223],
			[-56.317, -150.073],
			[-45.568, -102.327],
		// Eastern Islands
			[-12.039, -98.701],
		// Ard Skellig
			[-72.262, 5.317],
			[-58.825, -3.735],
			[-32.287, -50.757],
			[-40.028, -18.083],
			[-38.857, -26.543],
			[-24.127, -69.829],
			[-36.315, 0.264],
			[-21.739, 30.498],
			[2.021, -21.709],
		// Sea
			[4.083, -78.223],
			[31.541, -65.566],
			[38.788, -21.533],
			[-65.658, 41.396],
			[-78.044, -41.968],
			[63.666, -88.154],
			[50.373, -7.515],
	], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods');

	markers.hidden = L.layerGroup($.merge(hiddenGeneric, [
		// No custom markers needed
	]));

	// Innkeep
	markers.innkeep = L.layerGroup([
		// Faroe
			createMarker([-77.485, 49.007], icons.innkeep, 'Harviken Inn', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
		// Hindarsfjall
			createMarker([-29.075, 100.723], icons.innkeep, 'House of Warriors', '<h1>Innkeep</h1>Sells Food, and drink'),
		// An Skellig
			createMarker([50.569, 40.430], icons.innkeep, 'Urialla Harbour Inn', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
		// Spikeroog
			createMarker([31.241, -113.049], icons.innkeep, 'Svorlag Inn', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
		// Ard Skellig
			createMarker([-42.131, -62.073], icons.innkeep, 'Arinbjorn Inn', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			createMarker([-3.294, -36.167], icons.innkeep, 'The New Port', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
	]);

	// Monster Den
	var monsterdenGeneric = genericMarkers([
		// Faroe
			[-78.587, 68.071],
			[-77.133, 56.646],
		// Ard Skellig
			[-50.078, -33.245],
			[-10.401, 1.758],
			[-5.922, 8.262],
			[-2.416, -21.841],
	], icons.monsterden, 'Monster Den', '<h1>Monster Den</h1>Monster-infested location. A constant worry for those living nearby');

	markers.monsterden = L.layerGroup($.merge(monsterdenGeneric, [
		// No custom markers needed
	]));

	// Monster Nest
	var monsternestGeneric = genericMarkers([
		// An Skellig
			[50.458, 26.521],
		// Ard Skellig
			[-59.074, -24.521],
			[-59.120, -4.131],
			[-24.827, -29.070],
			[-23.544, -37.551],
	], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs');

	markers.monsternest = L.layerGroup($.merge(monsternestGeneric, [
		// No custom markers needed
	]));

	// Notice Board
	markers.notice = L.layerGroup(genericMarkers([
		// Hindarsfjall
			[-28.343, 100.239],
		// Spikeroog
			[31.996, -111.313],
		// Ard Skellig
			[-63.095, -43.594],
			[-42.844, -62.996],
			[-27.547, -25.005],
			[-55.454, -15.337],
			[-30.468, -1.890],
			[-6.905, -35.178],
	], icons.notice, 'Notice Board', '<h1>Notice Board</h1>Here you can find monster contracts and announcements about matters of local concern'));

	// Person in Distress
	var pidGeneric = genericMarkers([
		[-33.633, -40.298],
		[-38.994, -6.372],
	], icons.pid, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance');

	markers.pid = L.layerGroup($.merge(pidGeneric, [
		// No custom markers needed
	]));

	// Place of Power
		//todo get all place of power types
	markers.pop = L.layerGroup([
		// Faroe
			createMarker([-76.851, 40.891], icons.pop, 'Place of Power', '<h1>Place of Power - Yrden</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'),
		// An Skellig
			createMarker([54.496, 35.903], icons.pop, 'Place of Power', '<h1>Place of Power - Quen</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'),
		// Spikeroog
			createMarker([34.343, -120.564], icons.pop, 'Place of Power', '<h1>Place of Power - Igni</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'),
		// Ard Skellig
			createMarker([-57.350, -48.604], icons.pop, 'Place of Power', '<h1>Place of Power - Axii</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([-24.667, -36.497], icons.pop, 'Place of Power', '<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([-32.194, 15.710], icons.pop, 'Place of Power', '<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([4.784, -42.451], icons.pop, 'Place of Power', '<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([-21.576, 29.795], icons.pop, 'Place of Power', '<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([4.390, -25.708], icons.pop, 'Place of Power', '<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
	]);

	// Point of Interest

		markers.poi = L.layerGroup([
			// Faroe
				createMarker([-76.985, 57.788], icons.poi, 'Jutta An Dimun', '<h1>Jutta An Dimun</h1>todo'), //double check this
			// Ard Skellig
				createMarker([-58.344, -2.549], icons.poi, 'Ursine Steel Sword', '<h1>Ursine Steel Sword Diagram</h1>In a chest in the basement of this ruin'),
				createMarker([-40.112, -14.546], icons.poi, 'Griffin Steel Sword Mastercrafted', '<h1>Griffin Steel Sword Mastercrafted</h1>'),
				createMarker([-1.274, -11.931], icons.poi, 'Enhanced Ursine Gauntlets', '<h1>Enhanced Ursine Gauntlets Diagram</h1>'),
				createMarker([8.559, 13.733], icons.poi, 'Superior Griffin Armour Set', '<h1>Superior Griffin Armour Set Diagrams</h1>Armor, boots, gauntlets, trousers'),
				
		]);

	// Shopkeeper
	markers.shopkeeper = L.layerGroup([
		// Hindarsfjall
			createMarker([-29.306, 99.492], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells crafting supplies and fish'),
		// Spikeroog
			createMarker([31.260, -111.006], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells crafting supplies and fish'),
		// Ard Skellig
			createMarker([-64.063, -47.944], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells maps, crafting supplies, fish and \'Mastercrafted Cavalry Saddle\' (+75)'),
			createMarker([-60.555, -51.416], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
			createMarker([-42.747, -58.535], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
			createMarker([-43.229, -49.175], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
			createMarker([-32.045, -17.996], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
			createMarker([-24.107, -22.632], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
			createMarker([-37.684, -30.037], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells maps and crafting supplies'),
			createMarker([-56.535, -13.931], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells crafting supplies and fish'),
			createMarker([-22.837, -20.522], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells armour and crafting supplies'),
			createMarker([-30.676, -2.681], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells maps, crafting supplies, food, and drink'),
			createMarker([-14.541, -32.080], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells maps and crafting supplies'),
			createMarker([-7.559, -40.408], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells maps and crafting supplies'),
			createMarker([-3.401, -34.077], icons.shopkeeper, 'Tailor', '<h1>Tailor</h1>Sells clothes and crafting supplies. Is also a barber'),
			createMarker([-8.581, -34.321], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
	]);

	// Sign Post
	markers.signpost = L.layerGroup([
		// Faroe
			createMarker([-77.490, 69.829], icons.signpost, 'Trottheim', '<h1>Trottheim</h1>This village was once famed across all of Skellige for the fact that it was inhabited exclusively by women, all their men having died during one raid or another'),
			createMarker([-77.206, 49.526], icons.signpost, 'Harviken', '<h1>Harviken</h1>Home seat to Clan Dimun, and the location where Holger Blackhand divvies out the loot after every successful raid'),
		// Hindarsfjall
			createMarker([-30.031, 99.272], icons.signpost, 'Larvik', '<h1>Larvik</h1>The largest village on Hindarsfjall and home seat to Donar, head of Clan an Hindar. Its inhabitants are just and god-fearing folk, traditionalists strident in their devotion to Freya'),
			createMarker([-20.838, 86.177], icons.signpost, 'Freya\'s Garden', '<h1>Freya\'s Garden</h1>Garden dedicated to the goddess Freya. Once beautiful and filled with thousands of fragrant blooms and herbs, today it lies abandoned and untended'),
			createMarker([-25.463, 81.563], icons.signpost, 'Lofoten', '<h1>Lofoten</h1>Once a rich and vibrant village, today Lofoten is a ravaged and crumbling ruin'),
			createMarker([-29.764, 82.375], icons.signpost, 'Lofoten Cemetery', '<h1>Lofoten Cemetery</h1>The inhabitants of Lofoten often visit this small cemetery to care for the graves of their loved ones and ask Freya for blessings in the afterlife'),
			createMarker([-33.505, 85.144], icons.signpost, 'Isolated Hut', '<h1>Isolated Hut</h1>They say this was once home to a herbalist who came to the isles from the continent. Unable to find a place in any of the nearby villages, she settled in this seaside hut, where she recieved the occasional visitor in need of magic creams of bandages'),
			createMarker([-36.668, 91.604], icons.signpost, 'Lurthen', '<h1>Lurthen</h1>Lurthen\'s most famous inhabitant was a certain Peter Pijus, known for the fact that he was able to drink an entire barrel of mead in one go and remain standing'),
		// An Skellig
			createMarker([52.882, 46.230], icons.signpost, 'Trail to Yngvar\'s Fang', '<h1>Trail to Yngvar\'s Fang</h1>This is the start of the mountain trail leading to Yngvar\'s Fang, the pride and glory of An Skellig'),
			createMarker([54.623, 35.376], icons.signpost, 'Yngvar\'s Fang', '<h1>Yngvar\'s Fang</h1>This mountain peak was named after the mythical bear which, according to legend, was defeated by Tyr, the heroic founder of Clan Tuirsearch'),
			createMarker([50.092, 38.364], icons.signpost, 'Urialla Harbor', '<h1>Urialla Harbor</h1>On account of their mastery of their craft and painstaking attention to detail, the shipwrights working in this harbor are considered the best in the isles'),
			createMarker([48.444, 27.510], icons.signpost, 'Bay Of Winds', '<h1>Bay Of Winds</h1>Three generations ago this bay was a popular meeting spot for the local youth. Then one night a terrible storm broke out and the sea pounded into the beach, swallowing up several merry-makers and dragging them out to a watery grave'),
		// Spikeroog
			createMarker([33.229, -99.470], icons.signpost, 'Hov', '<h1>Hov</h1>Village known throughout all of Skellige for the infamous arena which once hosted fierce fights between the mightiest warriors in the isles'),
			createMarker([32.380, -113.005], icons.signpost, 'Svorlag', '<h1>Svorlag</h1>The village was founded by the mythical Sove, who killed a terrifying and bloodthirsty chimera on this spot'),
			createMarker([22.289, -121.509], icons.signpost, 'Old Watchtower', '<h1>Old Watchtower</h1>The ruins of an old watchtower in which, according to legend, a crazed Koviri princess once locked herself up, convinced only a man able to free her from this tower would be fit to be her husband. No one even tried, however, the princess died of old age and the tower fell into disrepair with the passage of time'),
		// Eastern Islands
			createMarker([-16.046, -139.482], icons.signpost, 'The Pali Gap Coast', '<h1>The Pali Gap Coast</h1>Elders say an isolated cave on this coast was once used as a retreat by the world\'s most famous bard (before the rise of Dandelion, that is): the great Xirdneh of Zanguebar, renowned from Nazair to the Dragon Mountains for his ferocious lute-strumming'),
			createMarker([-8.538, -94.922], icons.signpost, 'Kaer Almhult', '<h1>Kaer Almhult</h1>Built centuries ago to serve as the home keep for the kings of Skellige. In practice, however, each ruler preferred to keep to his clan\'s seat, and Kaer Almhult was left unused. Eventually the decision was made to turn it into a prison, and today the fortress is a crumbling ruin'),
		// Undvik
			createMarker([-52.456, -110.391], icons.signpost, 'Marlin Coast', '<h1>Marlin Coast</h1>Until quite recently this beach was frequented by fishermen come to fish marlins out of the nearby waters'),
			createMarker([-58.984, -98.899], icons.signpost, 'Gull Point', '<h1>Gull Point</h1>Sea fowl come from miles around to congregate on this scrap of barren land, mate and lay eggs'),
			createMarker([-56.377, -113.533], icons.signpost, 'Dorve Ruins', '<h1>Dorve Ruins</h1>Ruins of a village destroyed by the Ice Giant'),
			createMarker([-61.365, -121.553], icons.signpost, 'Clan Tordarroch Forge', '<h1>Clan Tordarroch Forge</h1>A famous forge where the best tools and weapons in all of Skellige were once made. When the Ice Giant took over the isle, he turned it into his larder'),
			createMarker([-58.367, -127.529], icons.signpost, 'Urskar', '<h1>Urskar</h1>The villagers here were famous for their love of pickled herring. They ate it for breakfast, dinner, and supper, and even made jams and compotes out of it'),
			createMarker([-54.801, -135.176], icons.signpost, 'Abandoned Village', '<h1>Abandoned Village</h1>This village\'s residents were forced to abandon it in a hurry when the Ice Giant unexpectedly awoke and decided to make known his wrath'),
			createMarker([-43.133, -139.219], icons.signpost, 'Tor Gvalch\'ca', '<h1>Tor Gvalch\'ca</h1>An ancient tower which was erected in the days when elves were the unchallenged masters of these lands'),
		// Ard Skellig
			createMarker([-70.707, -6.064], icons.signpost, 'Elverum Lighthouse', '<h1>Elverum Lighthouse</h1>The former keeper of this lighthouse was a confirmed eccentric. In addition to caring for the lighthouse, he also wrote poetry and wove carpets, was known to strip naked and run laps around the lighthouse at noon while shouting "sound mind in a sound body" and for breakfast would eat nothing but fish tails'),
			createMarker([-58.939, -3.252], icons.signpost, 'Ruined Inn', '<h1>Ruined Inn</h1>Ruined and burned-down tavern which once treated locals and travelers to the best roast lamb around'),
			createMarker([-55.004, -15.029], icons.signpost, 'Fyresdal', '<h1>Fyresdal</h1>Those living here are tough on the outside, but soft and tender within'),
			createMarker([-63.085, -38.496], icons.signpost, 'Kaer Muire', '<h1>Kaer Muire</h1>This fortress has served as Clan Drummond\'s home base for centuries. the days when it was new and in full repair are a distant memory now'),
			createMarker([-64.539, -47.329], icons.signpost, 'Holmstein\'s Port', '<h1>Holmstein\'s Port</h1>Piers and docks for the village of Holmstein - Clan Drummond\'s chief port'),
			createMarker([-54.098, -60.754], icons.signpost, 'Wild Shore', '<h1>Wild Shore</h1>A wild and untamed™ part of the isle\'s coastline. A favourite spot for bandits and lovers'),
			createMarker([-50.958, -42.935], icons.signpost, 'Fornhala', '<h1>Fornhala</h1>Mysterious abandoned village'),
			createMarker([-54.763, 12.964], icons.signpost, 'Distillery', '<h1>Distillery</h1>A shroud of secrecy envelops this place. All that is known is that it produces the finest hooch in all of skellige'),
			createMarker([-56.837, 23.071], icons.signpost, 'Grotto', '<h1>Grotto</h1>An isolated-off locale that can only be reached by boat'),
			createMarker([-47.145, -6.812], icons.signpost, 'Palisade', '<h1>Palisade</h1>The remnants of the palisade that once marked the border between the territories of Clan Drummond and Clan an Craite'),
			createMarker([-43.165, -63.677], icons.signpost, 'Arinbjorn', '<h1>Arinbjorn</h1>A village whose calm is only occasionally disturbed by someone slapping another senseless or one comrade breaking a bottle of mead over his mate\'s head'),
			createMarker([-40.212, -47.900], icons.signpost, 'Sund', '<h1>Sund</h1>Small village whose inhabitant are for the most part shepherds'),
			createMarker([-36.351, -31.311], icons.signpost, 'Fayrlund', '<h1>Fayrlund</h1>This small village has gained great renown as home to the best hunters in Skellige'),
			createMarker([-41.311, -17.886], icons.signpost, 'Boxholm', '<h1>Boxholm</h1>Boxholm was once a thriving village serving the nearby fortress, Kaer Nyssen. Today nothing remains of this past glory but a pile of stones, some debris, and fading memories'),
			createMarker([-29.306, -25.928], icons.signpost, 'Rannvaig', '<h1>Rannvaig</h1>Fifteen years ago, one of the fishermen of Rannvaig bagged an enormous halibut, and from that moment on all the other villagers have devoted their lives to beating his record'),
			createMarker([-30.827, -4.219], icons.signpost, 'Blandare', '<h1>Blandare</h1>Unusually for a Skellige village, Blandare is located inland, far from any shore. Its inhabitants scratch out a living through mining and shepherding'),
			createMarker([-32.064, 14.458], icons.signpost, 'Druids\' Camp', '<h1>Druids\' Camp</h1>Camp pitched by druids investigating the magic cataclysm which devastated the nearby woods'),
			createMarker([-30.940, 25.356], icons.signpost, 'Redgill', '<h1>Redgill</h1>This village\'s inhabitants fled in a panic when a mysterious magic cataclysm struck the surrounding area'),
			createMarker([-25.642, 7.031], icons.signpost, 'Abandoned Sawmill', '<h1>Abandoned Sawmill</h1>Though located depp in the forest, an ideal place for lumber harvesting, the sawmill now lies abandoned and unused'),
			createMarker([-22.614, 12.986], icons.signpost, 'Gedyneith', '<h1>Gedyneith</h1>An oak which is sacred to all Skelligers, as it is worshiped both by druids and Freya\'s disciples. The Isle\'s most important ceremonies are held here, including weddings and royal coronations'),
			createMarker([-22.533, 17.996], icons.signpost, 'Gedyneith', '<h1>Gedyneith</h1>An oak which is sacred to all Skelligers, as it is worshiped both by druids and Freya\'s disciples. The Isle\'s most important ceremonies are held here, including weddings and royal coronations'),
			createMarker([-13.475, 24.390], icons.signpost, 'Whale Graveyard', '<h1>Whale Graveyard</h1>The isle\'s inhabitants come here and gather bones which they use to build their huts'),
			createMarker([-21.002, -30.059], icons.signpost, 'Crossroads', '<h1>Crossroads</h1>Fork in the road leading to Kaer Trolde'),
			createMarker([-16.341, -9.404], icons.signpost, 'Miners\' Camp', '<h1>Miners\' Camp</h1>Small camp which local miners use as a base during their gold prospecting expeditions into the mountains to the north'),
			createMarker([-14.520, -70.928], icons.signpost, 'Eldberg Lighthouse', '<h1>Eldberg Lighthouse</h1>Lighthouse build on orders of Jarl Skjordal in order to light the sea and route to Arinbjorn'),
			createMarker([-12.512, 1.626], icons.signpost, 'Kaer Gelen', '<h1>Kaer Gelen</h1>This old fort\'s ruins attract the sort whom one would not want to run into in a dark alley'),
			createMarker([-7.067, -37.617], icons.signpost, 'Kaer Trolde Harbor', '<h1>Kaer Trolde Harbor</h1>One of the busiest ports in Skellige. Goods from every corner of the world are brought here to be sold and traded'),
			createMarker([2.636, -38.650], icons.signpost, 'Bridge to Kaer Trolde', '<h1>Bridge to Kaer Trolde</h1>This stone bridge was, according to legend, carved single-handedly by Grymmdjarr, the heroic founder of Clan an Craite'),
			createMarker([-8.494, -18.171], icons.signpost, 'Rogne', '<h1>Rogne</h1>This mountain settlement is home to tough folk of indomitable spirit'),
			createMarker([-1.384, -1.956], icons.signpost, 'Yustianna\'s Grotto', '<h1>Yustianna\'s Grotto</h1>Yustianna was a pirate born of a Skelliger from Clan an Craite and a captive woman taken during a raid. In her time she was feared on the Continent from Ofir to Zanguebar. Known for her skill as a navigator and unmatched master of various weapons, she quickly became the terror of the Great Sea, and when she returned to Skellige, they say this cave is where she hid her loot'),
			createMarker([2.724, 15.029], icons.signpost, 'Giants\' Toes', '<h1>Giants\' Toes</h1>In truth simply a normal rock formation shaped by centuries of wind and water, islanders believe Uroboros punished giants who opposed his will by turning them into these stones'),
			createMarker([9.947, -22.039], icons.signpost, 'Ancient Crypt', '<h1>Ancient Crypt</h1>Though Skelligers are famed for bravery bordering on madness, there are certain places which even they keep their distance from. This is one of them'),
	]);

	// Smugglers' Cache
	var smugglersGeneric = genericMarkers([
		[-27.722, -50.098],
		[-23.080, -57.832],
		[-18.146, -48.955],
		[-10.185, -52.163],
		[-3.996, -61.304],
		[4.215, -57.173],
		[12.340, -56.865],
		[7.885, -68.423],
		[0.527, -91.846],
		[-18.355, -82.266],
		[-24.327, -80.771],
		[-21.576, -105.469],
		[-16.594, -121.992],
		[1.099, -119.971],
		[12.426, -101.250],
		[21.943, -72.949],
		[36.809, -62.007],
		[36.809, -30.366],
		[29.075, -33.706],
		[16.720, -35.288],
		[17.811, -24.829],
		[24.767, -10.942],
		[15.538, -3.560],
		[32.027, 8.833],
		[37.788, 47.813],
		[36.527, 43.154],
		[37.719, 33.926],
		[21.617, 48.691],
		[25.919, 84.463],
		[-7.362, 28.389],
		[2.328, 27.686],
		[-6.446, 38.848],
		[2.153, 37.793],
		[-10.617, 47.417],
		[-11.092, 59.985],
		[-11.092, 70.884],
		[-26.195, 60.029],
		[-56.705, 79.805],
		[-60.759, 40.430],
		[-62.042, 25.269],
		[-66.496, 3.120],
		[-68.544, 8.657],
		[-77.332, 13.623],
		[-76.321, -22.148],
		[-77.351, -47.065],
		[-78.853, -121.729],
		[-74.068, -79.365],
		[-70.613, -55.986],
		[-66.896, -83.145],
		[-57.374, -78.311],
		[-41.079, -76.421],
		[-41.673, -92.505],
		[-37.125, -97.383],
		[-36.510, -82.046],
		[61.186, -90.264],
		[53.697, -55.371],
		[52.107, -22.500],
		[56.023, -8.877],
	], icons.smugglers, 'Smuggler\'s Cache', '<h1>Smuggler\'s Cache</h1>Smuggled goods have been hidden here');

	markers.smugglers = L.layerGroup($.merge(smugglersGeneric, [
		// No custom markers needed
	]));

	// Spoils of War
	markers.spoils = L.layerGroup(genericMarkers([
		[29.650, -63.896],
		[21.412, -47.285],
		[-50.709, 43.550],
		[-69.396, 25.356],
		[-77.466, -63.193],
		[-16.426, -144.009],
		[-20.879, -158.467],
		[57.891, -28.564],
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
}());

