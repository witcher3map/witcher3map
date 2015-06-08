(function () {
	window.map_path   = 'skellige';
	window.map_sWest  = L.latLng(-85.05, -180);
	window.map_nEast  = L.latLng(79.30, 135);
	window.map_center = [-35, -10];
	window.map_mZoom  = 6;

	processData({
	// Abandoned Site
		abandoned: [{
			coords: [
				// Hindarsfjall
					[-35.996, 92.439],
					[-32.916, 85.562],
				// Ard Skellig
					[-45.522, -49.570],
					[-23.745, -19.841],
			],
			label: 'Abandoned Site',
			popup: 'A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more'
		}],

	// Alchemy Supplies
		alchemy: [{
			coords: [[-20.468, 93.318]],
			label: 'Alchemy Supplies',
			popup: 'Here you can buy alchemy ingredients'
		}, {
			coords: [[-28.208, -26.147]],
			label: 'Alchemy Supplies',
			popup: 'Here you can buy alchemy ingredients'
		}, {
			coords: [[-19.705, 17.314]],
			label: 'Gremist',
			popup: '\'Practicum in Advanced Alchemy\' (lvl 24) Quest'
		}],

	// Armourer
		armourer: [{ // Hindarsfjall
			coords: [[-29.037, 98.569]],
			label: 'Amateur Armorer',
			popup: 'Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, { // An Skellig
			coords: [[49.253, 39.243]],
			label: 'Amateur Armorer',
			popup: 'Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, { // Ard Skellig
			coords: [[-62.492, -37.705]],
			label: 'Journeyman Armorer',
			popup: 'Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, {
			coords: [[2.965, -40.210]],
			label: 'Journeyman Armorer',
			popup: 'Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}],

	// Armourer's Table
		armourerstable: [{
			coords: [
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
			],
			label: 'Armorer\'s Table',
			popup: 'Armorer\'s tables grant your gear increased armor for a limited duration'
		}],

	// Bandit Camp
		banditcamp: [{
			coords: [
				// Spikeroog
				[21.861, -121.047],
				// Ard Skellig
				[-61.260, -50.669],
				[-29.459, -17.886],
				[-14.562, 27.861],
				[5.616, 15.557],
				// Sea
				[20.797, 38.848],
			],
			label: 'Bandit Camp',
			popup: 'A group of dangerous bandits have made camp here'
		}],

	// Barber
		barber: [{
			coords: [
				// Spikeroog
				[31.072, -111.973],
				[-3.601, -34.277],
			],
			label: 'Barber',
			popup: 'Visit barbers for a shave or a new haircut'
		}],

	// Blacksmith
		blacksmith: [{ // Faroe
			coords: [[-77.390, 50.142]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, { // Hindarsfjall
			coords: [[-28.613, 102.458]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, { // An Skellig
			coords: [[50.641, 38.013]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, { // Spikeroog
			coords: [[33.101, -111.709]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, { // Ard Skellig
			coords: [[-62.007, -37.903]],
			label: 'Journeyman Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, {
			coords: [[-39.504, -63.647]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, {
			coords: [[-37.265, -32.014]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, {
			coords: [[-56.945, -15.513]],
			label: 'Amateur Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}, {
			coords: [[3.141, -40.649]],
			label: 'Journeyman Blacksmith',
			popup: 'Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'
		}],

	// Brothel
		brothel: [],

	// Entrance
		// todo, entrance to what?
		entrance: [{ // Faroe
			coords: [[-78.469, 43.484]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-77.250, 44.187]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, { // Hindarsfjall
			coords: [[-17.036, 91.230]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-18.750, 88.022]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-18.813, 108.677]],
			label: 'Underwater Cave',
			popup: 'Underwater entrance to cave'
		}, {
			coords: [[-25.205, 92.769]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-28.033, 89.912]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-29.955, 94.131]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, { // An Skellig
			coords: [[50.317, 33.289]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, { // Spikeroog
			coords: [[17.225, -123.640]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, { // Eastern Islands
			coords: [[-15.623, -139.043]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, { // Undvik
			coords: [[-51.727, -134.517]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-60.791, -127.375]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-61.470, -122.278]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-56.933, -124.343]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-59.108, -111.313]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, { // Ard Skellig
			coords: [[-71.124, -8.525]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-69.756, -8.503]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-69.938, -23.906]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-52.389, -42.473]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-45.722, -30.256]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-23.322, -67.983]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-18.396, -38.804]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-56.801, 23.379]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-54.581, 12.964]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-47.145, 17.468]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-44.072, 6.350]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-12.897, -13.667]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-13.240, -27.598]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-20.056, 17.446]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[-1.801, -1.099]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}, {
			coords: [[9.926, -22.168]],
			label: 'Entrance',
			popup: 'Entrance to cave or ruins'
		}],

	// Grindstone
		grindstone: [{
			coords: [
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
			],
			label: 'Grindstone',
			popup: 'A blade sharpened here will deal more damage'
		}],

	// Guarded Treasure
		guarded: [{
			coords: [
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
			],
			label: 'Guarded Treasure',
			popup: 'A particularly powerful monster guards a valuable cache here'
		}],

	// Gwent Player
		gwent: [{ // Faroe
			coords: [[-77.455, 49.227]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-77.350, 50.242]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, { // Hindarsfjall
			coords: [[-29.206, 99.662]],
			label: 'Gwent Player',
			popupTitle: 'Shopkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-28.985, 100.993]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-28.513, 102.658]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-28.937, 98.769]],
			label: 'Gwent Player',
			popupTitle: 'Armorer Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, { // An Skellig
			coords: [[50.701, 38.203]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[50.669, 40.630]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[49.313, 39.443]],
			label: 'Gwent Player',
			popupTitle: 'Armorer Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, { // Spikeroog
			coords: [[33.201, -111.909]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[31.360, -110.856]],
			label: 'Gwent Player',
			popupTitle: 'Shopkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[31.361, -112.799]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, { // Ard Skellig
			coords: [[-62.442, -37.585]],
			label: 'Gwent Player',
			popupTitle: 'Armorer Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-61.917, -37.753]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-64.003, -47.744]],
			label: 'Gwent Player',
			popupTitle: 'Shopkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-42.031, -61.873]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-39.404, -63.487]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-37.165, -31.814]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-37.584, -29.837]],
			label: 'Gwent Player',
			popupTitle: 'Shopkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-56.435, -13.731]],
			label: 'Gwent Player',
			popupTitle: 'Shopkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-56.845, -15.313]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[3.085, -40.010]],
			label: 'Gwent Player',
			popupTitle: 'Armorer Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[3.241, -40.449]],
			label: 'Gwent Player',
			popupTitle: 'Blacksmith Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-30.576, -2.481]],
			label: 'Gwent Player',
			popupTitle: 'Shopkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-5.997, -34.407]],
			label: 'Gwent Player',
			popupTitle: 'Herbalist Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}, {
			coords: [[-3.194, -35.967]],
			label: 'Gwent Player',
			popupTitle: 'Innkeeper Gwent Player',
			popup: 'Gamble your hard earned coin playing Gwent here'
		}],

	// Harbor
		harbor: [{
			coords: [
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
			],
			label: 'Harbor',
			popup: 'A place where you can find a boat, boats will respawn here'
		}],

	// Herbalist
		herbalist: [{
			coords: [
				// Ard Skellig
					[-32.473, 14.722],
					[-6.097, -34.607],
			],
			label: 'Herbalist',
			popup: 'Here you can buy alchemy ingredients'
		}],

	// Hidden Treasure
		hidden: [{
			coords: [
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
			],
			label: 'Hidden Treasure',
			popup: 'A hidden cache of valuable goods'
		}],

	// Innkeep
		innkeep: [{ // Faroe
			coords: [[-77.485, 49.007]],
			label: 'Harviken Inn',
			popupTitle: 'Innkeep',
			popup: 'Sells Gwent cards, food, and drink'
		}, { // Hindarsfjall
			coords: [[-29.075, 100.723]],
			label: 'House of Warriors',
			popupTitle: 'Innkeep',
			popup: 'Sells Food, and drink'
		}, { // An Skellig
			coords: [[50.569, 40.430]],
			label: 'Urialla Harbour Inn',
			popupTitle: 'Innkeep',
			popup: 'Sells Gwent cards, food, and drink'
		}, { // Spikeroog
			coords: [[31.241, -113.049]],
			label: 'Svorlag Inn',
			popupTitle: 'Innkeep',
			popup: 'Sells Gwent cards, food, and drink'
		}, { // Ard Skellig
			coords: [[-42.131, -62.073]],
			label: 'Arinbjorn Inn',
			popupTitle: 'Innkeep',
			popup: 'Sells Gwent cards, food, and drink'
		}, {
			coords: [[-3.294, -36.167]],
			label: 'The New Port',
			popupTitle: 'Innkeep',
			popup: 'Sells Gwent cards, food, and drink'
		}],

	// Monster Den
		monsterden: [{
			coords: [
				// Faroe
				[-78.587, 68.071],
				[-77.133, 56.646],
				// Ard Skellig
				[-50.078, -33.245],
				[-10.401, 1.758],
				[-5.922, 8.262],
				[-2.416, -21.841],
			],
			label: 'Monster Den',
			popup: 'Monster-infested location. A constant worry for those living nearby'
		}],

	// Monster Nest
		monsternest: [{
			coords: [
				// An Skellig
				[50.458, 26.521],
				// Ard Skellig
				[-59.074, -24.521],
				[-59.120, -4.131],
				[-24.827, -29.070],
				[-23.544, -37.551],
			],
			label: 'Monster Nest',
			popup: 'Destroy monster nests with Grapeshot or Dancing Star bombs'
		}],

	// Notice Board
		notice: [{
			coords: [
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
			],
			label: 'Notice Board',
			popup: 'Here you can find monster contracts and announcements about matters of local concern'
		}],

	// Person in Distress
		pid: [{
			coords: [
				[-33.633, -40.298],
				[-38.994, -6.372],
			],
			label: 'Person(s) in Distress',
			popup: 'There\'s a person or a group of people here in need of assitance'
		}],

	// Place of Power
		//todo get all place of power types
		pop: [{ // Faroe
			coords: [[-76.851, 40.891]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Yrden',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'
		}, { // An Skellig
			coords: [[54.496, 35.903]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Quen',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'
		}, { // Spikeroog
			coords: [[34.343, -120.564]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Igni',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any 	Place of Power, you also receive 1 Ability Point'
		}, { // Ard Skellig
			coords: [[-57.350, -48.604]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Axii',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[-24.667, -36.497]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[-32.194, 15.710]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[4.784, -42.451]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[-21.576, 29.795]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[4.390, -25.708]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}],

	// Point of Interest
		poi: [{ // Faroe
			coords: [[-76.985, 57.788]],
			label: 'Jutta An Dimun',
			popup: 'todo'
		}, { // Ard Skellig
			coords: [[-58.344, -2.549]],
			label: 'Ursine Steel Sword',
			popupTitle: 'Ursine Steel Sword Diagram',
			popup: 'In a chest in the basement of this ruin'
		}, {
			coords: [[-40.112, -14.546]],
			label: 'Mastercrafted Griffin Steel Sword',
			popupTitle: 'Mastercrafted Griffin Steel Sword Diagram',
			popup: ''
		}, {
			coords: [[-1.274, -11.931]],
			label: 'Enhanced Ursine Gauntlets',
			popupTitle: 'Enhanced Ursine Gauntlets Diagram',
			popup: ''
		}, {
			coords: [[8.559, 13.733]],
			label: 'Superior Griffin Armour Set',
			popupTitle: 'Superior Griffin Armour Set Diagrams',
			popup: 'Armor, boots, gauntlets, trousers'
		}, {
			coords: [[-22, 31]],
			label: 'Mastercrafted Griffin Armor',
			popup: ''
		}, {
			coords: [[54.5, 32]],
			label: 'Superior Griffin Steel Sword',
			popupTitle: 'Superior Griffin Steel Sword Diagram',
			popup: ''
		}, {
			coords: [[5.5, -17]],
			label: 'Ursine Silver Sword',
			popupTitle: 'Ursine Silver Sword Diagram',
			popup: ''
		}, {
			coords: [[53.8, 38.5]],
			label: 'Ursine Armor Set',
			popupTitle: 'Ursine Armor Set Diagrams',
			popup: 'Armor, gauntlets, trousers and boots'
		}, {
			coords: [[17.8, -123.5]],
			label: 'Ursine Crossbow',
			popupTitle: 'Ursine Crossbow Diagram',
			popup: ''
		}, {
			coords: [[-70.5, -8.6]],
			label: 'Superior Griffin silver sword',
			popupTitle: 'Superior Griffin silver sword Diagram',
			popup: 'Located in the cave system below'
		}, {
			coords: [[-50, -34.5]],
			label: 'Mastercrafted Griffin Silver Sword',
			popupTitle: 'Mastercrafted Griffin Silver Diagram',
			popup: ''
		}, {
			coords: [[-62.8, -39]],
			label: 'Jarl Madman Lugos',
			popup: 'You get the Card \'Vampire: Katakan\' from him (Gwent Quest: Skellige) (all cards <a href="https://wiiare.in/portfolio-type/the-witcher-3-wild-hunt-card-collector-achievement-trophy-guide/" target="_blank">here</a>'
		}],
				

	// Shopkeeper
		shopkeeper: [{ // Hindarsfjall
			coords: [[-29.306, 99.492]],
			label: 'Shopkeeper',
			popup: 'Sells crafting supplies and fish'
		}, { // Spikeroog
			coords: [[31.260, -111.006]],
			label: 'Shopkeeper',
			popup: 'Sells crafting supplies and fish'
		}, { // Ard Skellig
			coords: [[-64.063, -47.944]],
			label: 'Shopkeeper',
			popup: 'Sells maps, crafting supplies, fish and \'Mastercrafted Cavalry Saddle\' (+75)'
		}, {
			coords: [[-60.555, -51.416]],
			label: 'Wandering Merchant',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-42.747, -58.535]],
			label: 'Wandering Merchant',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-43.229, -49.175]],
			label: 'Wandering Merchant',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-32.045, -17.996]],
			label: 'Wandering Merchant',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-24.107, -22.632]],
			label: 'Wandering Merchant',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-37.684, -30.037]],
			label: 'Shopkeeper',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-56.535, -13.931]],
			label: 'Shopkeeper',
			popup: 'Sells crafting supplies and fish'
		}, {
			coords: [[-22.837, -20.522]],
			label: 'Shopkeeper',
			popup: 'This merchant appears after liberating the area. Sells armour and crafting supplies'
		}, {
			coords: [[-30.676, -2.681]],
			label: 'Shopkeeper',
			popup: 'Sells maps, crafting supplies, food, and drink'
		}, {
			coords: [[-14.541, -32.080]],
			label: 'Shopkeeper',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-7.559, -40.408]],
			label: 'Shopkeeper',
			popup: 'Sells maps and crafting supplies'
		}, {
			coords: [[-3.401, -34.077]],
			label: 'Tailor',
			popup: 'Sells clothes and crafting supplies. Is also a barber'
		}, {
			coords: [[-8.581, -34.321]],
			label: 'Wandering Merchant',
			popup: 'Sells maps and crafting supplies'
		}],

	// Sign Post
		signpost: [{ // Faroe
			coords: [[-77.490, 69.829]],
			label: 'Trottheim',
			popup: 'This village was once famed across all of Skellige for the fact that it was inhabited exclusively by women, all their men having died during one raid or another'
		}, {
			coords: [[-77.206, 49.526]],
			label: 'Harviken',
			popup: 'Home seat to Clan Dimun, and the location where Holger Blackhand divvies out the loot after every successful raid'
		}, { // Hindarsfjall
			coords: [[-30.031, 99.272]],
			label: 'Larvik',
			popup: 'The largest village on Hindarsfjall and home seat to Donar, head of Clan an Hindar. Its inhabitants are just and god-fearing folk, traditionalists strident in their devotion to Freya'
		}, {
			coords: [[-20.838, 86.177]],
			label: 'Freya\'s Garden',
			popup: 'Garden dedicated to the goddess Freya. Once beautiful and filled with thousands of fragrant blooms and herbs, today it lies abandoned and untended'
		}, {
			coords: [[-25.463, 81.563]],
			label: 'Lofoten',
			popup: 'Once a rich and vibrant village, today Lofoten is a ravaged and crumbling ruin'
		}, {
			coords: [[-29.764, 82.375]],
			label: 'Lofoten Cemetery',
			popup: 'The inhabitants of Lofoten often visit this small cemetery to care for the graves of their loved ones and ask Freya for blessings in the afterlife'
		}, {
			coords: [[-33.505, 85.144]],
			label: 'Isolated Hut',
			popup: 'They say this was once home to a herbalist who came to the isles from the continent. Unable to find a place in any of the nearby villages, she settled in this seaside hut, where she recieved the occasional visitor in need of magic creams of bandages'
		}, {
			coords: [[-36.668, 91.604]],
			label: 'Lurthen',
			popup: 'Lurthen\'s most famous inhabitant was a certain Peter Pijus, known for the fact that he was able to drink an entire barrel of mead in one go and remain standing'
		}, { // An Skellig
			coords: [[52.882, 46.230]],
			label: 'Trail to Yngvar\'s Fang',
			popup: 'This is the start of the mountain trail leading to Yngvar\'s Fang, the pride and glory of An Skellig'
		}, {
			coords: [[54.623, 35.376]],
			label: 'Yngvar\'s Fang',
			popup: 'This mountain peak was named after the mythical bear which, according to legend, was defeated by Tyr, the heroic founder of Clan Tuirsearch'
		}, {
			coords: [[50.092, 38.364]],
			label: 'Urialla Harbor',
			popup: 'On account of their mastery of their craft and painstaking attention to detail, the shipwrights working in this harbor are considered the best in the isles'
		}, {
			coords: [[48.444, 27.510]],
			label: 'Bay Of Winds',
			popup: 'Three generations ago this bay was a popular meeting spot for the local youth. Then one night a terrible storm broke out and the sea pounded into the beach, swallowing up several merry-makers and dragging them out to a watery grave'
		}, { // Spikeroog
			coords: [[33.229, -99.470]],
			label: 'Hov',
			popup: 'Village known throughout all of Skellige for the infamous arena which once hosted fierce fights between the mightiest warriors in the isles'
		}, {
			coords: [[32.380, -113.005]],
			label: 'Svorlag',
			popup: 'The village was founded by the mythical Sove, who killed a terrifying and bloodthirsty chimera on this spot'
		}, {
			coords: [[22.289, -121.509]],
			label: 'Old Watchtower',
			popup: 'The ruins of an old watchtower in which, according to legend, a crazed Koviri princess once locked herself up, convinced only a man able to free her from this tower would be fit to be her husband. No one even tried, however, the princess died of old age and the tower fell into disrepair with the passage of time'
		}, { // Eastern Islands
			coords: [[-16.046, -139.482]],
			label: 'The Pali Gap Coast',
			popup: 'Elders say an isolated cave on this coast was once used as a retreat by the world\'s most famous bard (before the rise of Dandelion, that is): the great Xirdneh of Zanguebar, renowned from Nazair to the Dragon Mountains for his ferocious lute-strumming'
		}, {
			coords: [[-8.538, -94.922]],
			label: 'Kaer Almhult',
			popup: 'Built centuries ago to serve as the home keep for the kings of Skellige. In practice, however, each ruler preferred to keep to his clan\'s seat, and Kaer Almhult was left unused. Eventually the decision was made to turn it into a prison, and today the fortress is a crumbling ruin'
		}, { // Undvik
			coords: [[-52.456, -110.391]],
			label: 'Marlin Coast',
			popup: 'Until quite recently this beach was frequented by fishermen come to fish marlins out of the nearby waters'
		}, {
			coords: [[-58.984, -98.899]],
			label: 'Gull Point',
			popup: 'Sea fowl come from miles around to congregate on this scrap of barren land, mate and lay eggs'
		}, {
			coords: [[-56.377, -113.533]],
			label: 'Dorve Ruins',
			popup: 'Ruins of a village destroyed by the Ice Giant'
		}, {
			coords: [[-61.365, -121.553]],
			label: 'Clan Tordarroch Forge',
			popup: 'A famous forge where the best tools and weapons in all of Skellige were once made. When the Ice Giant took over the isle, he turned it into his larder'
		}, {
			coords: [[-58.367, -127.529]],
			label: 'Urskar',
			popup: 'The villagers here were famous for their love of pickled herring. They ate it for breakfast, dinner, and supper, and even made jams and compotes out of it'
		}, {
			coords: [[-54.801, -135.176]],
			label: 'Abandoned Village',
			popup: 'This village\'s residents were forced to abandon it in a hurry when the Ice Giant unexpectedly awoke and decided to make known his wrath'
		}, {
			coords: [[-43.133, -139.219]],
			label: 'Tor Gvalch\'ca',
			popup: 'An ancient tower which was erected in the days when elves were the unchallenged masters of these lands'
		}, { // Ard Skellig
			coords: [[-70.707, -6.064]],
			label: 'Elverum Lighthouse',
			popup: 'The former keeper of this lighthouse was a confirmed eccentric. In addition to caring for the lighthouse, he also wrote poetry and wove carpets, was known to strip naked and run laps around the lighthouse at noon while shouting "sound mind in a sound body" and for breakfast would eat nothing but fish tails'
		}, {
			coords: [[-58.939, -3.252]],
			label: 'Ruined Inn',
			popup: 'Ruined and burned-down tavern which once treated locals and travelers to the best roast lamb around'
		}, {
			coords: [[-55.004, -15.029]],
			label: 'Fyresdal',
			popup: 'Those living here are tough on the outside, but soft and tender within'
		}, {
			coords: [[-63.085, -38.496]],
			label: 'Kaer Muire',
			popup: 'This fortress has served as Clan Drummond\'s home base for centuries. the days when it was new and in full repair are a distant memory now'
		}, {
			coords: [[-64.539, -47.329]],
			label: 'Holmstein\'s Port',
			popup: 'Piers and docks for the village of Holmstein - Clan Drummond\'s chief port'
		}, {
			coords: [[-54.098, -60.754]],
			label: 'Wild Shore',
			popup: 'A wild and untamed™ part of the isle\'s coastline. A favourite spot for bandits and lovers'
		}, {
			coords: [[-50.958, -42.935]],
			label: 'Fornhala',
			popup: 'Mysterious abandoned village'
		}, {
			coords: [[-54.763, 12.964]],
			label: 'Distillery',
			popup: 'A shroud of secrecy envelops this place. All that is known is that it produces the finest hooch in all of skellige'
		}, {
			coords: [[-56.837, 23.071]],
			label: 'Grotto',
			popup: 'An isolated-off locale that can only be reached by boat'
		}, {
			coords: [[-47.145, -6.812]],
			label: 'Palisade',
			popup: 'The remnants of the palisade that once marked the border between the territories of Clan Drummond and Clan an Craite'
		}, {
			coords: [[-43.165, -63.677]],
			label: 'Arinbjorn',
			popup: 'A village whose calm is only occasionally disturbed by someone slapping another senseless or one comrade breaking a bottle of mead over his mate\'s head'
		}, {
			coords: [[-40.212, -47.900]],
			label: 'Sund',
			popup: 'Small village whose inhabitant are for the most part shepherds'
		}, {
			coords: [[-36.351, -31.311]],
			label: 'Fayrlund',
			popup: 'This small village has gained great renown as home to the best hunters in Skellige'
		}, {
			coords: [[-41.311, -17.886]],
			label: 'Boxholm',
			popup: 'Boxholm was once a thriving village serving the nearby fortress, Kaer Nyssen. Today nothing remains of this past glory but a pile of stones, some debris, and fading memories'
		}, {
			coords: [[-29.306, -25.928]],
			label: 'Rannvaig',
			popup: 'Fifteen years ago, one of the fishermen of Rannvaig bagged an enormous halibut, and from that moment on all the other villagers have devoted their lives to beating his record'
		}, {
			coords: [[-30.827, -4.219]],
			label: 'Blandare',
			popup: 'Unusually for a Skellige village, Blandare is located inland, far from any shore. Its inhabitants scratch out a living through mining and shepherding'
		}, {
			coords: [[-32.064, 14.458]],
			label: 'Druids\' Camp',
			popup: 'Camp pitched by druids investigating the magic cataclysm which devastated the nearby woods'
		}, {
			coords: [[-30.940, 25.356]],
			label: 'Redgill',
			popup: 'This village\'s inhabitants fled in a panic when a mysterious magic cataclysm struck the surrounding area'
		}, {
			coords: [[-25.642, 7.031]],
			label: 'Abandoned Sawmill',
			popup: 'Though located depp in the forest, an ideal place for lumber harvesting, the sawmill now lies abandoned and unused'
		}, {
			coords: [[-22.614, 12.986]],
			label: 'Gedyneith',
			popup: 'An oak which is sacred to all Skelligers, as it is worshiped both by druids and Freya\'s disciples. The Isle\'s most important ceremonies are held here, including weddings and royal coronations'
		}, {
			coords: [[-22.533, 17.996]],
			label: 'Gedyneith',
			popup: 'An oak which is sacred to all Skelligers, as it is worshiped both by druids and Freya\'s disciples. The Isle\'s most important ceremonies are held here, including weddings and royal coronations'
		}, {
			coords: [[-13.475, 24.390]],
			label: 'Whale Graveyard',
			popup: 'The isle\'s inhabitants come here and gather bones which they use to build their huts'
		}, {
			coords: [[-21.002, -30.059]],
			label: 'Crossroads',
			popup: 'Fork in the road leading to Kaer Trolde'
		}, {
			coords: [[-16.341, -9.404]],
			label: 'Miners\' Camp',
			popup: 'Small camp which local miners use as a base during their gold prospecting expeditions into the mountains to the north'
		}, {
			coords: [[-14.520, -70.928]],
			label: 'Eldberg Lighthouse',
			popup: 'Lighthouse build on orders of Jarl Skjordal in order to light the sea and route to Arinbjorn'
		}, {
			coords: [[-12.512, 1.626]],
			label: 'Kaer Gelen',
			popup: 'This old fort\'s ruins attract the sort whom one would not want to run into in a dark alley'
		}, {
			coords: [[-7.067, -37.617]],
			label: 'Kaer Trolde Harbor',
			popup: 'One of the busiest ports in Skellige. Goods from every corner of the world are brought here to be sold and traded'
		}, {
			coords: [[2.636, -38.650]],
			label: 'Bridge to Kaer Trolde',
			popup: 'This stone bridge was, according to legend, carved single-handedly by Grymmdjarr, the heroic founder of Clan an Craite'
		}, {
			coords: [[-8.494, -18.171]],
			label: 'Rogne',
			popup: 'This mountain settlement is home to tough folk of indomitable spirit'
		}, {
			coords: [[-1.384, -1.956]],
			label: 'Yustianna\'s Grotto',
			popup: 'Yustianna was a pirate born of a Skelliger from Clan an Craite and a captive woman taken during a raid. In her time she was feared on the Continent from Ofir to Zanguebar. Known for her skill as a navigator and unmatched master of various weapons, she quickly became the terror of the Great Sea, and when she returned to Skellige, they say this cave is where she hid her loot'
		}, {
			coords: [[2.724, 15.029]],
			label: 'Giants\' Toes',
			popup: 'In truth simply a normal rock formation shaped by centuries of wind and water, islanders believe Uroboros punished giants who opposed his will by turning them into these stones'
		}, {
			coords: [[9.947, -22.039]],
			label: 'Ancient Crypt',
			popup: 'Though Skelligers are famed for bravery bordering on madness, there are certain places which even they keep their distance from. This is one of them'
		}],

	// Smugglers' Cache
		smugglers: [{
			coords: [
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
			],
			label: 'Smuggler\'s Cache',
			popup: 'Smuggled goods have been hidden here'
		}],


	// Spoils of War
		spoils: [{
			coords: [
				[29.650, -63.896],
				[21.412, -47.285],
				[-50.709, 43.550],
				[-69.396, 25.356],
				[-77.466, -63.193],
				[-16.426, -144.009],
				[-20.879, -158.467],
				[57.891, -28.564],
			],
			label: 'Spoils of War',
			popup: 'Search here for loot left behind after a battle or skirmish'
		}],
	});

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
