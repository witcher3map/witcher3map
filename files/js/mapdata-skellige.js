$(function() {
	window.map_path   = 'skellige';
	window.map_sWest  = L.latLng(-85.05, -180);
	window.map_nEast  = L.latLng(79.30, 135);
	window.map_center = [-35, -10];
	window.map_mZoom  = 6;

	window.markers = {};

	// Abandoned Site
		var abandonedIcon = L.icon({
			iconUrl  : '/files/img/icons/abandoned.png',
			iconSize : [30, 30]
		});

		window.markers['abandoned'] = L.layerGroup(genericMarkers([
			// Hindarsfjall
				[-35.996, 92.439],
				[-32.916, 85.562],
			// Ard Skellig
				[-45.522, -49.570],
				[-23.745, -19.841],
		], abandonedIcon, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more'));

	// Alchemy Supplies
		var alchemyIcon = L.icon({
			iconUrl  : '/files/img/icons/alchemy.png',
			iconSize : [20, 28]
		});

		window.markers['alchemy'] = L.layerGroup([
			L.marker([-20.468, 93.318], setMarker(alchemyIcon)).bindLabel('Alchemy Supplies').bindPopup('<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
			L.marker([-28.208, -26.147], setMarker(alchemyIcon)).bindLabel('Alchemy Supplies').bindPopup('<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
			L.marker([-19.705, 17.314], setMarker(alchemyIcon)).bindLabel('Gremist').bindPopup('<h1>Gremist</h1>\'Practicum in Advanced Alchemy\' (lvl 24) Quest'),
		]);

	// Armourer
		var armourerIcon = L.icon({
			iconUrl  : '/files/img/icons/armourer.png',
			iconSize : [24, 34]
		});

		window.markers['armourer'] = L.layerGroup([
			// Hindarsfjall
				L.marker([-29.037, 98.569], setMarker(armourerIcon)).bindLabel('Amateur Armorer').bindPopup('<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// An Skellig
				L.marker([49.253, 39.243], setMarker(armourerIcon)).bindLabel('Amateur Armorer').bindPopup('<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// Ard Skellig
				L.marker([-62.492, -37.705], setMarker(armourerIcon)).bindLabel('Journeyman Armorer').bindPopup('<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([2.965, -40.210], setMarker(armourerIcon)).bindLabel('Journeyman Armorer').bindPopup('<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		]);

	// Armourer's Table
		var armourerstableIcon = L.icon({
			iconUrl  : '/files/img/icons/armourerstable.png',
			iconSize : [30, 27]
		});

		window.markers['armourerstable'] = L.layerGroup(genericMarkers([
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
		], armourerstableIcon, 'Armorer\'s Table', '<h1>Armorer\'s Table</h1>Armorer\'s tables grant your gear increased armor for a limited duration'));

	// Bandit Camp
		var banditcampIcon = L.icon({
			iconUrl  : '/files/img/icons/banditcamp.png',
			iconSize : [29, 30]
		});

		window.markers['banditcamp'] = L.layerGroup(genericMarkers([
			// Spikeroog
				[21.861, -121.047],
			// Ard Skellig
				[-61.260, -50.669],
				[-29.459, -17.886],
				[-14.562, 27.861],
				[5.616, 15.557],
			// Sea
				[20.797, 38.848],
		], banditcampIcon, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here'));

	// Barber
		var barberIcon = L.icon({
			iconUrl  : '/files/img/icons/barber.png',
			iconSize : [30, 30]
		});

		window.markers['barber'] = L.layerGroup(genericMarkers([
			// Spikeroog
				[31.072, -111.973],
				[-3.601, -34.277],
		], barberIcon, 'Barber', '<h1>Barber</h1>Visit barbers for a shave or a new haircut'));

	// Blacksmith
		var blacksmithIcon = L.icon({
			iconUrl  : '/files/img/icons/blacksmith.png',
			iconSize : [27, 30]
		});

		window.markers['blacksmith'] = L.layerGroup([
			// Faroe
				L.marker([-77.390, 50.142], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// Hindarsfjall
				L.marker([-28.613, 102.458], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// An Skellig
				L.marker([50.641, 38.013], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// Spikeroog
				L.marker([33.101, -111.709], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// Ard Skellig
				L.marker([-62.007, -37.903], setMarker(blacksmithIcon)).bindLabel('Journeyman Blacksmith').bindPopup('<h1>Journeyman Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([-39.504, -63.647], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([-37.265, -32.014], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([-56.945, -15.513], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([3.141, -40.649], setMarker(blacksmithIcon)).bindLabel('Journeyman Blacksmith').bindPopup('<h1>Journeyman Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		]);

	// Brothel
		var brothelIcon = L.icon({
			iconUrl  : '/files/img/icons/brothel.png',
			iconSize : [28, 26]
		});

		window.markers['brothel'] = L.layerGroup([]);

	// Entrance
		var entranceIcon = L.icon({
			iconUrl  : '/files/img/icons/entrance.png',
			iconSize : [28, 27]
		});

		// todo, entrance to what?
		window.markers['entrance'] = L.layerGroup([
			// Faroe
				L.marker([-78.469, 43.484], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-77.250, 44.187], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// Hindarsfjall
				L.marker([-17.036, 91.230], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-18.750, 88.022], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-18.813, 108.677], setMarker(entranceIcon)).bindLabel('Underwater Cave').bindPopup('<h1>Underwater Cave</h1>Underwater entrance to cave'),
				L.marker([-25.205, 92.769], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-28.033, 89.912], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-29.955, 94.131], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// An Skellig
				L.marker([50.317, 33.289], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// Spikeroog
				L.marker([17.225, -123.640], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// Eastern Islands
				L.marker([-15.623, -139.043], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// Undvik
				L.marker([-51.727, -134.517], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-60.791, -127.375], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-61.470, -122.278], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-56.933, -124.343], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-59.108, -111.313], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// Ard Skellig
				L.marker([-71.124, -8.525], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-69.756, -8.503], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-69.938, -23.906], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-52.389, -42.473], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-45.722, -30.256], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-23.322, -67.983], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-18.396, -38.804], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-56.801, 23.379], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-54.581, 12.964], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-47.145, 17.468], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-44.072, 6.350], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-12.897, -13.667], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-13.240, -27.598], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-20.056, 17.446], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-1.801, -1.099], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([9.926, -22.168], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
		]);

	// Grindstone
		var grindstoneIcon = L.icon({
			iconUrl  : '/files/img/icons/grindstone.png',
			iconSize : [30, 26]
		});

		window.markers['grindstone'] = L.layerGroup(genericMarkers([
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
		], grindstoneIcon, 'Grindstone', '<h1>Grindstone</h1>A blade sharpened here will deal more damage'));

	// Guarded Treasure
		var guardedIcon = L.icon({
			iconUrl  : '/files/img/icons/guarded.png',
			iconSize : [23, 34]
		});

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
		], guardedIcon, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster guards a valuable cache here');

		window.markers['guarded'] = L.layerGroup($.merge(guardedGeneric, [
			// No custom markers needed
		]));

	// Gwent Player
		var gwentIcon = L.icon({
			iconUrl  : '/files/img/icons/gwent.png',
			iconSize : [24, 30]
		});

		window.markers['gwent'] = L.layerGroup([
			// Faroe
				L.marker([-77.455, 49.227], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-77.350, 50.242], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// Hindarsfjall
				L.marker([-29.206, 99.662], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-28.985, 100.993], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-28.513, 102.658], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-28.937, 98.769], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// An Skellig
				L.marker([50.701, 38.203], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([50.669, 40.630], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([49.313, 39.443], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// Spikeroog
				L.marker([33.201, -111.909], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([31.360, -110.856], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([31.361, -112.799], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// Ard Skellig
				L.marker([-62.442, -37.585], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-61.917, -37.753], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-64.003, -47.744], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-42.031, -61.873], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-39.404, -63.487], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-37.165, -31.814], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-37.584, -29.837], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-56.435, -13.731], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-56.845, -15.313], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([3.085, -40.010], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([3.241, -40.449], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-30.576, -2.481], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-5.997, -34.407], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Herbalist Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-3.194, -35.967], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		]);

	// Harbor
		var harborIcon = L.icon({
			iconUrl  : '/files/img/icons/harbor.png',
			iconSize : [27, 30]
		});

		window.markers['harbor'] = L.layerGroup(genericMarkers([
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
		], harborIcon, 'Harbor', '<h1>Harbor</h1>A place where you can find a boat, boats will respawn here'));

	// Herbalist
		var herbalistIcon = L.icon({
			iconUrl  : '/files/img/icons/herbalist.png',
			iconSize : [25, 28]
		});

		var herbalistGeneric = genericMarkers([
			// Ard Skellig
				[-32.473, 14.722],
				[-6.097, -34.607],
		], herbalistIcon, 'Herbalist', '<h1>Herbalist</h1>Here you can buy alchemy ingredients');

		window.markers['herbalist'] = L.layerGroup($.merge(herbalistGeneric, [
			// No custom markers needed
		]));


	// Hidden Treasure
		var hiddenIcon = L.icon({
			iconUrl  : '/files/img/icons/hidden.png',
			iconSize : [23, 34]
		});

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
		], hiddenIcon, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods');

		window.markers['hidden'] = L.layerGroup($.merge(hiddenGeneric, [
			// No custom markers needed
		]));

	// Innkeep
		var innkeepIcon = L.icon({
			iconUrl  : '/files/img/icons/tavern.png',
			iconSize : [26, 30]
		});

		window.markers['innkeep'] = L.layerGroup([
			// Faroe
				L.marker([-77.485, 49.007], setMarker(innkeepIcon)).bindLabel('Harviken Inn').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			// Hindarsfjall
				L.marker([-29.075, 100.723], setMarker(innkeepIcon)).bindLabel('House of Warriors').bindPopup('<h1>Innkeep</h1>Sells Food, and drink'),
			// An Skellig
				L.marker([50.569, 40.430], setMarker(innkeepIcon)).bindLabel('Urialla Harbour Inn').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			// Spikeroog
				L.marker([31.241, -113.049], setMarker(innkeepIcon)).bindLabel('Svorlag Inn').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			// Ard Skellig
				L.marker([-42.131, -62.073], setMarker(innkeepIcon)).bindLabel('Arinbjorn Inn').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
				L.marker([-3.294, -36.167], setMarker(innkeepIcon)).bindLabel('The New Port').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
		]);

	// Monster Den
		var monsterdenIcon = L.icon({
			iconUrl  : '/files/img/icons/monsterden.png',
			iconSize : [30, 27]
		});

		var monsterdenGeneric = genericMarkers([
			// Faroe
				[-78.587, 68.071],
				[-77.133, 56.646],
			// Ard Skellig
				[-50.078, -33.245],
				[-10.401, 1.758],
				[-5.922, 8.262],
				[-2.416, -21.841],
		], monsterdenIcon, 'Monster Den', '<h1>Monster Den</h1>Monster-infested location. A constant worry for those living nearby');

		window.markers['monsterden'] = L.layerGroup($.merge(monsterdenGeneric, [
			// No custom markers needed
		]));

	// Monster Nest
		var monsternestIcon = L.icon({
			iconUrl  : '/files/img/icons/monsternest.png',
			iconSize : [23, 30]
		});

		var monsternestGeneric = genericMarkers([
			// An Skellig
				[50.458, 26.521],
			// Ard Skellig
				[-59.074, -24.521],
				[-59.120, -4.131],
				[-24.827, -29.070],
				[-23.544, -37.551],
		], monsternestIcon, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs');

		window.markers['monsternest'] = L.layerGroup($.merge(monsternestGeneric, [
			// No custom markers needed
		]));

	// Notice Board
		var noticeIcon = L.icon({
			iconUrl  : '/files/img/icons/notice.png',
			iconSize : [23, 28]
		});

		window.markers['notice'] = L.layerGroup(genericMarkers([
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
		], noticeIcon, 'Notice Board', '<h1>Notice Board</h1>Here you can find monster contracts and announcements about matters of local concern'));

	// Person in Distress
		var pidIcon = L.icon({
			iconUrl  : '/files/img/icons/pid.png',
			iconSize : [24, 34]
		});

		var pidGeneric = genericMarkers([
			[-33.633, -40.298],
			[-38.994, -6.372],
		], pidIcon, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance');

		window.markers['pid'] = L.layerGroup($.merge(pidGeneric, [
			// No custom markers needed
		]));

	// Place of Power
		var popIcon = L.icon({
			iconUrl  : '/files/img/icons/pop.png',
			iconSize : [27, 30]
		});

		//todo get all place of power types
		window.markers['pop'] = L.layerGroup([
			// Faroe
				L.marker([-76.851, 40.891], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Yrden</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'),
			// An Skellig
				L.marker([54.496, 35.903], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Quen</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'),
			// Spikeroog
				L.marker([34.343, -120.564], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Igni</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'),
			// Ard Skellig
				L.marker([-57.350, -48.604], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Axii</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([-24.667, -36.497], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([-32.194, 15.710], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([4.784, -42.451], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([-21.576, 29.795], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([4.390, -25.708], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		]);

	// Point of Interest
		var poiIcon = L.icon({
			iconUrl  : '/files/img/icons/poi.png',
			iconSize : [28, 28]
		});


		window.markers['poi'] = L.layerGroup([
			// Faroe
				L.marker([-76.985, 57.788], setMarker(poiIcon)).bindLabel('Jutta An Dimun').bindPopup('<h1>Jutta An Dimun</h1>todo'), //double check this
			// Ard Skellig
				L.marker([-58.344, -2.549], setMarker(poiIcon)).bindLabel('Ursine Steel Sword').bindPopup('<h1>Ursine Steel Sword Diagram</h1>In a chest in the basement of this ruin'),
				L.marker([-40.112, -14.546], setMarker(poiIcon)).bindLabel('Griffin Steel Sword Mastercrafted').bindPopup('<h1>Griffin Steel Sword Mastercrafted</h1>'),
				L.marker([-1.274, -11.931], setMarker(poiIcon)).bindLabel('Enhanced Ursine Gauntlets').bindPopup('<h1>Enhanced Ursine Gauntlets Diagram</h1>'),
				L.marker([8.559, 13.733], setMarker(poiIcon)).bindLabel('Superior Griffin Armour Set').bindPopup('<h1>Superior Griffin Armour Set Diagrams</h1>Armor, boots, gauntlets, trousers'),
				
		]);

	// Shopkeeper
		var shopkeeperIcon = L.icon({
			iconUrl  : '/files/img/icons/merchant.png',
			iconSize : [21, 30]
		});

		window.markers['shopkeeper'] = L.layerGroup([
			// Hindarsfjall
				L.marker([-29.306, 99.492], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells crafting supplies and fish'),
			// Spikeroog
				L.marker([31.260, -111.006], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells crafting supplies and fish'),
			// Ard Skellig
				L.marker([-64.063, -47.944], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells maps, crafting supplies, fish and \'Mastercrafted Cavalry Saddle\' (+75)'),
				L.marker([-60.555, -51.416], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
				L.marker([-42.747, -58.535], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
				L.marker([-43.229, -49.175], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
				L.marker([-32.045, -17.996], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
				L.marker([-24.107, -22.632], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
				L.marker([-37.684, -30.037], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells maps and crafting supplies'),
				L.marker([-56.535, -13.931], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells crafting supplies and fish'),
				L.marker([-22.837, -20.522], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells armour and crafting supplies'),
				L.marker([-30.676, -2.681], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells maps, crafting supplies, food, and drink'),
				L.marker([-14.541, -32.080], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells maps and crafting supplies'),
				L.marker([-7.559, -40.408], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells maps and crafting supplies'),
				L.marker([-3.401, -34.077], setMarker(shopkeeperIcon)).bindLabel('Tailor').bindPopup('<h1>Tailor</h1>Sells clothes and crafting supplies. Is also a barber'),
				L.marker([-8.581, -34.321], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Wandering Merchant</h1>Sells maps and crafting supplies'),
		]);

	// Sign Post
		var signpostIcon = L.icon({
			iconUrl  : '/files/img/icons/fasttravel.png',
			iconSize : [27, 34]
		});

		window.markers['signpost'] = L.layerGroup([
			// Faroe
				L.marker([-77.490, 69.829], setMarker(signpostIcon)).bindLabel('Trottheim').bindPopup('<h1>Trottheim</h1>This village was once famed across all of Skellige for the fact that it was inhabited exclusively by women, all their men having died during one raid or another'),
				L.marker([-77.206, 49.526], setMarker(signpostIcon)).bindLabel('Harviken').bindPopup('<h1>Harviken</h1>Home seat to Clan Dimun, and the location where Holger Blackhand divvies out the loot after every successful raid'),
			// Hindarsfjall
				L.marker([-30.031, 99.272], setMarker(signpostIcon)).bindLabel('Larvik').bindPopup('<h1>Larvik</h1>The largest village on Hindarsfjall and home seat to Donar, head of Clan an Hindar. Its inhabitants are just and god-fearing folk, traditionalists strident in their devotion to Freya'),
				L.marker([-20.838, 86.177], setMarker(signpostIcon)).bindLabel('Freya\'s Garden').bindPopup('<h1>Freya\'s Garden</h1>Garden dedicated to the goddess Freya. Once beautiful and filled with thousands of fragrant blooms and herbs, today it lies abandoned and untended'),
				L.marker([-25.463, 81.563], setMarker(signpostIcon)).bindLabel('Lofoten').bindPopup('<h1>Lofoten</h1>Once a rich and vibrant village, today Lofoten is a ravaged and crumbling ruin'),
				L.marker([-29.764, 82.375], setMarker(signpostIcon)).bindLabel('Lofoten Cemetery').bindPopup('<h1>Lofoten Cemetery</h1>The inhabitants of Lofoten often visit this small cemetery to care for the graves of their loved ones and ask Freya for blessings in the afterlife'),
				L.marker([-33.505, 85.144], setMarker(signpostIcon)).bindLabel('Isolated Hut').bindPopup('<h1>Isolated Hut</h1>They say this was once home to a herbalist who came to the isles from the continent. Unable to find a place in any of the nearby villages, she settled in this seaside hut, where she recieved the occasional visitor in need of magic creams of bandages'),
				L.marker([-36.668, 91.604], setMarker(signpostIcon)).bindLabel('Lurthen').bindPopup('<h1>Lurthen</h1>Lurthen\'s most famous inhabitant was a certain Peter Pijus, known for the fact that he was able to drink an entire barrel of mead in one go and remain standing'),
			// An Skellig
				L.marker([52.882, 46.230], setMarker(signpostIcon)).bindLabel('Trail to Yngvar\'s Fang').bindPopup('<h1>Trail to Yngvar\'s Fang</h1>This is the start of the mountain trail leading to Yngvar\'s Fang, the pride and glory of An Skellig'),
				L.marker([54.623, 35.376], setMarker(signpostIcon)).bindLabel('Yngvar\'s Fang').bindPopup('<h1>Yngvar\'s Fang</h1>This mountain peak was named after the mythical bear which, according to legend, was defeated by Tyr, the heroic founder of Clan Tuirsearch'),
				L.marker([50.092, 38.364], setMarker(signpostIcon)).bindLabel('Urialla Harbor').bindPopup('<h1>Urialla Harbor</h1>On account of their mastery of their craft and painstaking attention to detail, the shipwrights working in this harbor are considered the best in the isles'),
				L.marker([48.444, 27.510], setMarker(signpostIcon)).bindLabel('Bay Of Winds').bindPopup('<h1>Bay Of Winds</h1>Three generations ago this bay was a popular meeting spot for the local youth. Then one night a terrible storm broke out and the sea pounded into the beach, swallowing up several merry-makers and dragging them out to a watery grave'),
			// Spikeroog
				L.marker([33.229, -99.470], setMarker(signpostIcon)).bindLabel('Hov').bindPopup('<h1>Hov</h1>Village known throughout all of Skellige for the infamous arena which once hosted fierce fights between the mightiest warriors in the isles'),
				L.marker([32.380, -113.005], setMarker(signpostIcon)).bindLabel('Svorlag').bindPopup('<h1>Svorlag</h1>The village was founded by the mythical Sove, who killed a terrifying and bloodthirsty chimera on this spot'),
				L.marker([22.289, -121.509], setMarker(signpostIcon)).bindLabel('Old Watchtower').bindPopup('<h1>Old Watchtower</h1>The ruins of an old watchtower in which, according to legend, a crazed Koviri princess once locked herself up, convinced only a man able to free her from this tower would be fit to be her husband. No one even tried, however, the princess died of old age and the tower fell into disrepair with the passage of time'),
			// Eastern Islands
				L.marker([-16.046, -139.482], setMarker(signpostIcon)).bindLabel('The Pali Gap Coast').bindPopup('<h1>The Pali Gap Coast</h1>Elders say an isolated cave on this coast was once used as a retreat by the world\'s most famous bard (before the rise of Dandelion, that is): the great Xirdneh of Zanguebar, renowned from Nazair to the Dragon Mountains for his ferocious lute-strumming'),
				L.marker([-8.538, -94.922], setMarker(signpostIcon)).bindLabel('Kaer Almhult').bindPopup('<h1>Kaer Almhult</h1>Built centuries ago to serve as the home keep for the kings of Skellige. In practice, however, each ruler preferred to keep to his clan\'s seat, and Kaer Almhult was left unused. Eventually the decision was made to turn it into a prison, and today the fortress is a crumbling ruin'),
			// Undvik
				L.marker([-52.456, -110.391], setMarker(signpostIcon)).bindLabel('Marlin Coast').bindPopup('<h1>Marlin Coast</h1>Until quite recently this beach was frequented by fishermen come to fish marlins out of the nearby waters'),
				L.marker([-58.984, -98.899], setMarker(signpostIcon)).bindLabel('Gull Point').bindPopup('<h1>Gull Point</h1>Sea fowl come from miles around to congregate on this scrap of barren land, mate and lay eggs'),
				L.marker([-56.377, -113.533], setMarker(signpostIcon)).bindLabel('Dorve Ruins').bindPopup('<h1>Dorve Ruins</h1>Ruins of a village destroyed by the Ice Giant'),
				L.marker([-61.365, -121.553], setMarker(signpostIcon)).bindLabel('Clan Tordarroch Forge').bindPopup('<h1>Clan Tordarroch Forge</h1>A famous forge where the best tools and weapons in all of Skellige were once made. When the Ice Giant took over the isle, he turned it into his larder'),
				L.marker([-58.367, -127.529], setMarker(signpostIcon)).bindLabel('Urskar').bindPopup('<h1>Urskar</h1>The villagers here were famous for their love of pickled herring. They ate it for breakfast, dinner, and supper, and even made jams and compotes out of it'),
				L.marker([-54.801, -135.176], setMarker(signpostIcon)).bindLabel('Abandoned Village').bindPopup('<h1>Abandoned Village</h1>This village\'s residents were forced to abandon it in a hurry when the Ice Giant unexpectedly awoke and decided to make known his wrath'),
				L.marker([-43.133, -139.219], setMarker(signpostIcon)).bindLabel('Tor Gvalch\'ca').bindPopup('<h1>Tor Gvalch\'ca</h1>An ancient tower which was erected in the days when elves were the unchallenged masters of these lands'),
			// Ard Skellig
				L.marker([-70.707, -6.064], setMarker(signpostIcon)).bindLabel('Elverum Lighthouse').bindPopup('<h1>Elverum Lighthouse</h1>The former keeper of this lighthouse was a confirmed eccentric. In addition to caring for the lighthouse, he also wrote poetry and wove carpets, was known to strip naked and run laps around the lighthouse at noon while shouting "sound mind in a sound body" and for breakfast would eat nothing but fish tails'),
				L.marker([-58.939, -3.252], setMarker(signpostIcon)).bindLabel('Ruined Inn').bindPopup('<h1>Ruined Inn</h1>Ruined and burned-down tavern which once treated locals and travelers to the best roast lamb around'),
				L.marker([-55.004, -15.029], setMarker(signpostIcon)).bindLabel('Fyresdal').bindPopup('<h1>Fyresdal</h1>Those living here are tough on the outside, but soft and tender within'),
				L.marker([-63.085, -38.496], setMarker(signpostIcon)).bindLabel('Kaer Muire').bindPopup('<h1>Kaer Muire</h1>This fortress has served as Clan Drummond\'s home base for centuries. the days when it was new and in full repair are a distant memory now'),
				L.marker([-64.539, -47.329], setMarker(signpostIcon)).bindLabel('Holmstein\'s Port').bindPopup('<h1>Holmstein\'s Port</h1>Piers and docks for the village of Holmstein - Clan Drummond\'s chief port'),
				L.marker([-54.098, -60.754], setMarker(signpostIcon)).bindLabel('Wild Shore').bindPopup('<h1>Wild Shore</h1>A wild and untamed™ part of the isle\'s coastline. A favourite spot for bandits and lovers'),
				L.marker([-50.958, -42.935], setMarker(signpostIcon)).bindLabel('Fornhala').bindPopup('<h1>Fornhala</h1>Mysterious abandoned village'),
				L.marker([-54.763, 12.964], setMarker(signpostIcon)).bindLabel('Distillery').bindPopup('<h1>Distillery</h1>A shroud of secrecy envelops this place. All that is known is that it produces the finest hooch in all of skellige'),
				L.marker([-56.837, 23.071], setMarker(signpostIcon)).bindLabel('Grotto').bindPopup('<h1>Grotto</h1>An isolated-off locale that can only be reached by boat'),
				L.marker([-47.145, -6.812], setMarker(signpostIcon)).bindLabel('Palisade').bindPopup('<h1>Palisade</h1>The remnants of the palisade that once marked the border between the territories of Clan Drummond and Clan an Craite'),
				L.marker([-43.165, -63.677], setMarker(signpostIcon)).bindLabel('Arinbjorn').bindPopup('<h1>Arinbjorn</h1>A village whose calm is only occasionally disturbed by someone slapping another senseless or one comrade breaking a bottle of mead over his mate\'s head'),
				L.marker([-40.212, -47.900], setMarker(signpostIcon)).bindLabel('Sund').bindPopup('<h1>Sund</h1>Small village whose inhabitant are for the most part shepherds'),
				L.marker([-36.351, -31.311], setMarker(signpostIcon)).bindLabel('Fayrlund').bindPopup('<h1>Fayrlund</h1>This small village has gained great renown as home to the best hunters in Skellige'),
				L.marker([-41.311, -17.886], setMarker(signpostIcon)).bindLabel('Boxholm').bindPopup('<h1>Boxholm</h1>Boxholm was once a thriving village serving the nearby fortress, Kaer Nyssen. Today nothing remains of this past glory but a pile of stones, some debris, and fading memories'),
				L.marker([-29.306, -25.928], setMarker(signpostIcon)).bindLabel('Rannvaig').bindPopup('<h1>Rannvaig</h1>Fifteen years ago, one of the fishermen of Rannvaig bagged an enormous halibut, and from that moment on all the other villagers have devoted their lives to beating his record'),
				L.marker([-30.827, -4.219], setMarker(signpostIcon)).bindLabel('Blandare').bindPopup('<h1>Blandare</h1>Unusually for a Skellige village, Blandare is located inland, far from any shore. Its inhabitants scratch out a living through mining and shepherding'),
				L.marker([-32.064, 14.458], setMarker(signpostIcon)).bindLabel('Druids\' Camp').bindPopup('<h1>Druids\' Camp</h1>Camp pitched by druids investigating the magic cataclysm which devastated the nearby woods'),
				L.marker([-30.940, 25.356], setMarker(signpostIcon)).bindLabel('Redgill').bindPopup('<h1>Redgill</h1>This village\'s inhabitants fled in a panic when a mysterious magic cataclysm struck the surrounding area'),
				L.marker([-25.642, 7.031], setMarker(signpostIcon)).bindLabel('Abandoned Sawmill').bindPopup('<h1>Abandoned Sawmill</h1>Though located depp in the forest, an ideal place for lumber harvesting, the sawmill now lies abandoned and unused'),
				L.marker([-22.614, 12.986], setMarker(signpostIcon)).bindLabel('Gedyneith').bindPopup('<h1>Gedyneith</h1>An oak which is sacred to all Skelligers, as it is worshiped both by druids and Freya\'s disciples. The Isle\'s most important ceremonies are held here, including weddings and royal coronations'),
				L.marker([-22.533, 17.996], setMarker(signpostIcon)).bindLabel('Gedyneith').bindPopup('<h1>Gedyneith</h1>An oak which is sacred to all Skelligers, as it is worshiped both by druids and Freya\'s disciples. The Isle\'s most important ceremonies are held here, including weddings and royal coronations'),
				L.marker([-13.475, 24.390], setMarker(signpostIcon)).bindLabel('Whale Graveyard').bindPopup('<h1>Whale Graveyard</h1>The isle\'s inhabitants come here and gather bones which they use to build their huts'),
				L.marker([-21.002, -30.059], setMarker(signpostIcon)).bindLabel('Crossroads').bindPopup('<h1>Crossroads</h1>Fork in the road leading to Kaer Trolde'),
				L.marker([-16.341, -9.404], setMarker(signpostIcon)).bindLabel('Miners\' Camp').bindPopup('<h1>Miners\' Camp</h1>Small camp which local miners use as a base during their gold prospecting expeditions into the mountains to the north'),
				L.marker([-14.520, -70.928], setMarker(signpostIcon)).bindLabel('Eldberg Lighthouse').bindPopup('<h1>Eldberg Lighthouse</h1>Lighthouse build on orders of Jarl Skjordal in order to light the sea and route to Arinbjorn'),
				L.marker([-12.512, 1.626], setMarker(signpostIcon)).bindLabel('Kaer Gelen').bindPopup('<h1>Kaer Gelen</h1>This old fort\'s ruins attract the sort whom one would not want to run into in a dark alley'),
				L.marker([-7.067, -37.617], setMarker(signpostIcon)).bindLabel('Kaer Trolde Harbor').bindPopup('<h1>Kaer Trolde Harbor</h1>One of the busiest ports in Skellige. Goods from every corner of the world are brought here to be sold and traded'),
				L.marker([2.636, -38.650], setMarker(signpostIcon)).bindLabel('Bridge to Kaer Trolde').bindPopup('<h1>Bridge to Kaer Trolde</h1>This stone bridge was, according to legend, carved single-handedly by Grymmdjarr, the heroic founder of Clan an Craite'),
				L.marker([-8.494, -18.171], setMarker(signpostIcon)).bindLabel('Rogne').bindPopup('<h1>Rogne</h1>This mountain settlement is home to tough folk of indomitable spirit'),
				L.marker([-1.384, -1.956], setMarker(signpostIcon)).bindLabel('Yustianna\'s Grotto').bindPopup('<h1>Yustianna\'s Grotto</h1>Yustianna was a pirate born of a Skelliger from Clan an Craite and a captive woman taken during a raid. In her time she was feared on the Continent from Ofir to Zanguebar. Known for her skill as a navigator and unmatched master of various weapons, she quickly became the terror of the Great Sea, and when she returned to Skellige, they say this cave is where she hid her loot'),
				L.marker([2.724, 15.029], setMarker(signpostIcon)).bindLabel('Giants\' Toes').bindPopup('<h1>Giants\' Toes</h1>In truth simply a normal rock formation shaped by centuries of wind and water, islanders believe Uroboros punished giants who opposed his will by turning them into these stones'),
				L.marker([9.947, -22.039], setMarker(signpostIcon)).bindLabel('Ancient Crypt').bindPopup('<h1>Ancient Crypt</h1>Though Skelligers are famed for bravery bordering on madness, there are certain places which even they keep their distance from. This is one of them'),
		]);

	// Smugglers' Cache
		var smugglersIcon = L.icon({
			iconUrl  : '/files/img/icons/smugglers.png',
			iconSize : [28, 30]
		});

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
		], smugglersIcon, 'Smuggler\'s Cache', '<h1>Smuggler\'s Cache</h1>Smuggled goods have been hidden here');

		window.markers['smugglers'] = L.layerGroup($.merge(smugglersGeneric, [
			// No custom markers needed
		]));

	// Spoils of War
		var spoilsIcon = L.icon({
			iconUrl  : '/files/img/icons/spoils.png',
			iconSize : [25, 28]
		});

		window.markers['spoils'] = L.layerGroup(genericMarkers([
			[29.650, -63.896],
			[21.412, -47.285],
			[-50.709, 43.550],
			[-69.396, 25.356],
			[-77.466, -63.193],
			[-16.426, -144.009],
			[-20.879, -158.467],
			[57.891, -28.564],
		], spoilsIcon, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish'));

	window.allLayers = [
		window.markers['abandoned'],
		window.markers['alchemy'],
		window.markers['armourer'],
		window.markers['armourerstable'],
		window.markers['banditcamp'],
		window.markers['barber'],
		window.markers['blacksmith'],
		window.markers['brothel'],
		window.markers['entrance'],
		window.markers['grindstone'],
		window.markers['guarded'],
		window.markers['gwent'],
		window.markers['harbor'],
		window.markers['herbalist'],
		window.markers['hidden'],
		window.markers['innkeep'],
		window.markers['monsterden'],
		window.markers['monsternest'],
		window.markers['notice'],
		window.markers['pid'],
		window.markers['pop'],
		window.markers['poi'],
		window.markers['shopkeeper'],
		window.markers['signpost'],
		window.markers['smugglers'],
		window.markers['spoils']
	];
});
