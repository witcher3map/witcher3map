window.map_path   = 'skellige';
window.map_sWest  = L.latLng(-85.05, -180);
window.map_nEast  = L.latLng(79.30, 135);
window.map_center = [-35, -10];
window.map_mZoom  = 6;
window.mapdata_skellige = {
// Abandoned Site
	abandoned: [{ // Hindarsfjall
		coords: [[-32.916, 85.562]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 15<span> ' + $.t("s:monsters.wolves") + '</span>)'
	}, {
		coords: [[-35.996, 92.439]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 13<span> ' + $.t("s:monsters.harpies") + '</span>)'
	}, { // Ard Skellig
		coords: [[-23.745, -19.841]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'
	}, {
		coords: [[-45.522, -49.570]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}],

	// Alchemy Supplies
	alchemy: [{
		coords: [[-20.468, 93.318]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}, {
		coords: [[-28.208, -26.147]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}, {
		coords: [[-19.705, 17.314]],
		label: $.t("s:alchemy.gremist.label"),
		popup: $.t("s:alchemy.gremist.desc")
	}],

	// Armourer
	armourer: [{ // Hindarsfjall
		coords: [[-29.037, 98.569]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}, { // An Skellig
		coords: [[49.253, 39.243]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}, { // Ard Skellig
		coords: [[-62.492, -37.705]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[2.965, -40.210]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
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
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

	// Bandit Camp
	banditcamp: [{
		coords: [
			// Sea
			[20.797, 38.848],
		],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}, { // Spikeroog
		coords: [[21.861, -121.047]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, { // Ard Skellig
		coords: [[-29.459, -17.886]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 15<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[-61.260, -50.669]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[-14.562, 27.861]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}, {
		coords: [[5.616, 15.557]],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc") + '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'
	}],

	// Barber
	barber: [{
		coords: [
			// Spikeroog
			[31.072, -111.973],
			[-3.601, -34.277],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

	// Blacksmith
	blacksmith: [{ // Faroe
		coords: [[-77.390, 50.142]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Hindarsfjall
		coords: [[-28.613, 102.458]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // An Skellig
		coords: [[50.641, 38.013]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Spikeroog
		coords: [[33.101, -111.709]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Ard Skellig
		coords: [[-62.007, -37.903]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[-39.504, -63.647]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[-37.265, -32.014]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[-56.945, -15.513]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[3.141, -40.649]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}],

	// Brothel
	brothel: [],

	// Entrance
	// todo, entrance to what?
	entrance: [{ // Faroe
		coords: [[-78.469, 43.484]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-77.250, 44.187]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Hindarsfjall
		coords: [[-17.036, 91.230]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-18.750, 88.022]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-18.813, 108.677]],
		label: $.t("entranceunderwatercave.label"),
		popup: $.t("entranceunderwatercave.desc")
	}, {
		coords: [[-25.205, 92.769]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-28.033, 89.912]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-29.955, 94.131]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // An Skellig
		coords: [[50.317, 33.289]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Spikeroog
		coords: [[17.225, -123.640]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Eastern Islands
		coords: [[-15.623, -139.043]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Undvik
		coords: [[-51.727, -134.517]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-60.791, -127.375]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-61.470, -122.278]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-56.933, -124.343]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-59.108, -111.313]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // Ard Skellig
		coords: [[-71.124, -8.525]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-69.756, -8.503]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-69.938, -23.906]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-52.389, -42.473]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-45.722, -30.256]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-23.322, -67.983]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-18.396, -38.804]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-56.801, 23.379]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-54.581, 12.964]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-47.145, 17.468]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-44.072, 6.350]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-12.897, -13.667]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-13.240, -27.598]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-20.056, 17.446]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-1.801, -1.099]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[9.926, -22.168]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
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
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

	// Guarded Treasure
	guarded: [{
		coords: [
			// Sea
			[-73.788, 20.347],
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}, { // Undvik
		coords: [[-46.134, -120.586]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-69.877, -160.225]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, { // Faroe
		coords: [[-75.958, 43.835]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, { // Hindarsfjall
		coords: [[-22.472, 85.386]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.wraiths.wraith") + '</span>)'})
	}, { // Ard Skellig
		coords: [[-46.815, -37.639]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 19<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[5.791, -17.754]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.gargoyles") + '</span> and lvl 30<span> ' + $.t("s:monsters.elemental.ice") + '</span>)'})
	}, {
		coords: [[-21.678, -32.717]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 14<span> ' + $.t("s:monsters.wyvern") + '</span>)'})
	}, {
		coords: [[-23.765, 23.291]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 27<span> ' + $.t("s:monsters.elemental.earth") + '</span>)'})
	}, {
		coords: [[-53.278, -63.413]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, {
		coords: [[-13.625, -43.506]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 7<span> ' + $.t("s:monsters.wraiths.wraiths") + '</span>)'})
	}, {
		coords: [[-70.873, -5.625]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 19<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-66.531, -15.908]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-26.392, -5.142]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 23<span> ' + $.t("s:monsters.wraiths.wraiths") + '</span>)'})
	}, { // Sea
		coords: [[53.801, -64.336]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[55.826, -30.674]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[59.623, -26.279]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[61.058, -17.754]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[57.845, -1.670]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 32<span> ' + $.t("s:monsters.basilisk") + '</span>)'})
	}, {
		coords: [[28.111, 91.406]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.bear") + '</span>)'})
	}, {
		coords: [[55.279, -40.869]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[-70.215, 35.552]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}],

	// Gwent Player
	gwent: [{ // Faroe
		coords: [[-77.455, 49.227]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-77.350, 50.242]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, { // Hindarsfjall
		coords: [[-29.206, 99.662]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-28.985, 100.993]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-28.513, 102.658]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-28.937, 98.769]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, { // An Skellig
		coords: [[50.701, 38.203]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[50.669, 40.630]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[49.313, 39.443]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, { // Spikeroog
		coords: [[33.201, -111.909]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[31.360, -110.856]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[31.361, -112.799]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, { // Ard Skellig
		coords: [[-62.442, -37.585]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-61.917, -37.753]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-64.003, -47.744]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-42.031, -61.873]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-39.404, -63.487]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-37.165, -31.814]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-37.584, -29.837]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-56.435, -13.731]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-56.845, -15.313]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[3.085, -40.010]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.armorer"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[3.241, -40.449]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.blacksmith"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-30.576, -2.481]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.shopkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-5.997, -34.407]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.herbalist"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-3.194, -35.967]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.innkeeper"),
		popup: $.t("s:gwent.desc.player")
	}, {
		coords: [[-19.555, 17.514]],
		label: $.t("s:gwent.label.player"),
		popupTitle: $.t("s:gwent.popup.gremist"),
		popup: $.t("s:gwent.desc.player")
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
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

	// Herbalist
	herbalist: [{
		coords: [
			// Ard Skellig
			[-32.473, 14.722],
			[-6.097, -34.607],
		],
		label: $.t("herbalist.label"),
		popup: $.t("alchemy.desc")
	}],

	// Hidden Treasure
	hidden: [{
		coords: [
			// An Skellig
			[46.905, 46.582],
			// Undvik
			[-46.073, -133.835],
			[-56.317, -150.073],
			[-45.568, -102.327],
			// Ard Skellig
			[-40.028, -18.083],
			[-38.857, -26.543],
			[2.021, -21.709],
			// Sea
			[38.788, -21.533],
			[-65.658, 41.396],
			[-78.044, -41.968],
			[63.666, -88.154],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}, { // Spikeroog
		coords: [[26.274, -104.238]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[27.020, -95.977]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, { // Undvik
		coords: [[-55.937, -121.223]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 14<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, { // Eastern Islands
		coords: [[-12.039, -98.701]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 12-14<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, { // Faroe
		coords: [[-78.469, 42.957]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 9<span> ' + $.t("s:monsters.endrega") + '</span>)'})
	}, { // Ard Skellig
		coords: [[-36.315, 0.264]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[-58.825, -3.735]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-32.287, -50.757]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 19<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-72.262, 5.317]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-21.739, 30.498]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 30<span> ' + $.t("s:monsters.cyclops") + '</span>)'})
	}, {
		coords: [[-24.127, -69.829]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, { // Sea
		coords: [[4.083, -78.223]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[31.541, -65.566]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[50.373, -7.515]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}],

	// Innkeep
	innkeep: [{ // Faroe
		coords: [[-77.485, 49.007]],
		label: $.t("s:innkeep.inns.harvikenInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, { // Hindarsfjall
		coords: [[-29.075, 100.723]],
		label: $.t("s:innkeep.inns.houseOfWarriors"),
		popupTitle: $.t("s:innkeep.popup"),
		popup: $.t("s:innkeep.desc.foodAndDrink")
	}, { // An Skellig
		coords: [[50.569, 40.430]],
		label: $.t("s:innkeep.inns.uriallaHarbourInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, { // Spikeroog
		coords: [[31.241, -113.049]],
		label: $.t("s:innkeep.inns.svorlagInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, { // Ard Skellig
		coords: [[-42.131, -62.073]],
		label: $.t("s:innkeep.inns.arinbjornInn"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[-3.294, -36.167]],
		label: $.t("s:innkeep.inns.theNewPort"),
		popupTitle: $.t("s:innkeep.popup"),
		popup:  $.t("s:innkeep.desc.foodDrinkAndGwent")
	}],

	// Monster Den
	monsterden: [{
		coords: [
			// Faroe
			[-78.587, 68.071],
			[-77.133, 56.646],
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	}, { // Ard Skellig
		coords: [[-2.416, -21.841]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 31<span> ' + $.t("s:monsters.ghost") + '</span>)'})
	}, {
		coords: [[-50.078, -33.245]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 8<span> ' + $.t("s:monsters.nekkers") + '</span> and lvl 12<span> ' + $.t("s:monsters.nekkerWarrior") + '</span>)'})
	}, { // An Skellig
		coords: [[-10.401, 1.758]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 29<span> ' + $.t("s:monsters.wraiths.wraiths") + '</span>)'})
	}, {
		coords: [[-5.922, 8.262]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 21<span> ' + $.t("s:monsters.alghouls") + '</span>)'})
	}],

	// Monster Nest
	monsternest: [{ // An Skellig
		coords: [[50.458, 26.521]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.harpies") + '</span>)'})
	}, {
		coords: [[-23.544, -37.551]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 19<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[-59.074, -24.521]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.harpies") + '</span>)'})
	}, {
		coords: [[-24.827, -29.070]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 15<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, { // Ard Skellig
		coords: [[-59.120, -4.131]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span> and lvl 19<span> ' + $.t("s:monsters.echidna") + '</span>)'})
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
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

	// Person in Distress
	pid: [{ // Ard Skellig
		coords: [[-33.633, -40.298]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}, {
		coords: [[-38.994, -6.372]],
		label:  $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 12<span> ' + $.t("s:monsters.bandits") + '</span>)'})
	}],

	// Place of Power
	pop: [{ // Faroe
		coords: [[-76.851, 40.891]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}, { // An Skellig
		coords: [[54.496, 35.903]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}, { // Spikeroog
		coords: [[34.343, -120.564]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, { // Ard Skellig
		coords: [[-57.350, -48.604]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-24.667, -36.497]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-32.194, 15.710]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[4.784, -42.451]],
		label: $.t("pop.label*"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("s:pop.desc.kingsGambit")
	}, {
		coords: [[-21.576, 29.795]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[4.390, -25.708]],
		label: $.t("pop.label*"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("s:pop.desc.sunstone")
	}],

	// Point of Interest
	poi: [{ // Faroe
		coords: [[-76.985, 57.788]],
		label: $.t("s:poi.label.juttaAnDimun"),
		popup: $.t("s:poi.desc.juttaAnDimun")
	}, { // Ard Skellig
		coords: [[-58.344, -2.549]],
		label: $.t("s:poi.label.ursineSteelSword"),
		popupTitle: $.t("s:poi.popupTitle.ursineSteelSword"),
		popup: $.t("s:poi.desc.ursineSteelSword")
	}, {
		coords: [[-57.404, -49.349]],
		label: $.t("s:poi.label.enhancedUrsineBoots"),
		popupTitle: $.t("s:poi.popupTitle.enhancedUrsineBoots"),
		popup: $.t("s:poi.desc.enhancedUrsineBoots")
	}, {
		coords: [[-40.112, -14.546]],
		label: $.t("s:poi.label.mastercraftedGriffinSteelSword"),
		popupTitle: $.t("s:poi.popupTitle.mastercraftedGriffinSteelSword"),
		popup: $.t("s:poi.desc.mastercraftedGriffinSteelSword")
	}, {
		coords: [[-1.274, -11.931]],
		label: $.t("s:poi.label.enhancedUrsineGauntlets"),
		popupTitle:  $.t("s:poi.popupTitle.enhancedUrsineGauntlets"),
		popup: $.t("s:poi.desc.enhancedUrsineGauntlets")
	}, {
		coords: [[8.559, 13.733]],
		label: $.t("s:poi.label.superiorGriffinArmourSet"),
		popupTitle:  $.t("s:poi.popupTitle.superiorGriffinArmourSet"),
		popup: $.t("s:poi.desc.superiorGriffinArmourSet")
	}, {
		coords: [[-22, 31]],
		label: $.t("s:poi.label.mastercraftedGriffinArmor"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedGriffinArmor"),
		popup: $.t("s:poi.desc.mastercraftedGriffinArmor")
	}, {
		coords: [[54.5, 32]],
		label: $.t("s:poi.label.superiorGriffinSteelSword"),
		popupTitle:  $.t("s:poi.popupTitle.superiorGriffinSteelSword"),
		popup: $.t("s:poi.desc.superiorGriffinSteelSword")
	}, {
		coords: [[5.5, -17]],
		label: $.t("s:poi.label.ursineSilverSword"),
		popupTitle:  $.t("s:poi.popupTitle.ursineSilverSword"),
		popup: $.t("s:poi.desc.ursineSilverSword")
	}, {
		coords: [[53.8, 38.5]],
		label: $.t("s:poi.label.ursineArmorSet"),
		popupTitle:  $.t("s:poi.popupTitle.ursineArmorSet"),
		popup: $.t("s:poi.desc.ursineArmorSet")
	}, {
		coords: [[17.8, -123.5]],
		label: $.t("s:poi.label.ursineCrossbow"),
		popupTitle:  $.t("s:poi.popupTitle.ursineCrossbow"),
		popup: $.t("s:poi.desc.ursineCrossbow")
	}, {
		coords: [[-70.5, -8.6]],
		label: $.t("s:poi.label.superiorGriffinSilverSword"),
		popupTitle:  $.t("s:poi.popupTitle.superiorGriffinSilverSword"),
		popup: $.t("s:poi.desc.superiorGriffinSilverSword")
	}, {
		coords: [[-50, -34.5]],
		label: $.t("s:poi.label.mastercraftedGriffinSilverSword"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedGriffinSilverSword"),
		popup: $.t("s:poi.desc.mastercraftedGriffinSilverSword")
	}, {
		coords: [[-62.8, -39]],
		label: $.t("s:poi.label.jarlMadmanLugos"),
		popupTitle:  $.t("s:poi.popupTitle.jarlMadmanLugos"),
		popup: $.t("s:poi.desc.jarlMadmanLugos")
	}, {
		coords: [[-12.297, 0.769]],
		label: $.t("s:poi.label.mastercraftedFelineSteelSword"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedFelineSteelSword"),
		popup: $.t("s:poi.desc.mastercraftedFelineSteelSword")
	}, {
		coords: [[-78.039, 68.049]],
		label: $.t("s:poi.label.mastercraftedFelineArmor"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedFelineArmor"),
		popup: $.t("s:poi.desc.mastercraftedFelineArmor")
	}, {
		coords: [[-77.147, 58.162]],
		label: $.t("s:poi.label.mastercraftedFelineSilverSword"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedFelineSilverSword"),
		popup: $.t("s:poi.desc.mastercraftedFelineSilverSword")
	}, {
		coords: [[-37.440, -21.907]],
		label: $.t("s:poi.label.mastercraftedWolvenGauntlets"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedWolvenGauntlets"),
		popup: $.t("s:poi.desc.mastercraftedWolvenGauntlets")
	}, {
		coords: [[22.634,-120.850]],
		label: $.t("s:poi.label.mastercraftedWolvenTrousers"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedWolvenTrousers"),
		popup: $.t("s:poi.desc.mastercraftedWolvenTrousers")
	}, {
		coords: [[-58.043, -107.886]],
		label: $.t("s:poi.label.mastercraftedWolvenBoots"),
		popupTitle:  $.t("s:poi.popupTitle.mastercraftedWolvenBoots"),
		popup: $.t("s:poi.desc.mastercraftedWolvenBoots")
	}, {
		coords: [[-27.722, 73.894]],
		label: $.t("s:poi.label.superiorWolvenSteelSword"),
		popupTitle:  $.t("s:poi.popupTitle.superiorWolvenSteelSword"),
		popup: $.t("s:poi.desc.superiorWolvenSteelSword")
	}, {
		coords: [[-46.119, -57.437]],
		label: $.t("s:poi.label.superiorWolvenSilverSword"),
		popupTitle:  $.t("s:poi.popupTitle.superiorWolvenSilverSword"),
		popup: $.t("s:poi.desc.superiorWolvenSilverSword")
	}, {
		coords: [[-59.221, -23.730]],
		label: $.t("s:poi.label.superiorWolvenArmor"),
		popupTitle:  $.t("s:poi.popupTitle.superiorWolvenArmor"),
		popup: $.t("s:poi.desc.superiorWolvenArmor")
	}],

	// Shopkeeper
	shopkeeper: [{ // Hindarsfjall
		coords: [[-29.306, 99.492]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	}, { // Spikeroog
		coords: [[31.260, -111.006]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	}, { // Ard Skellig
		coords: [[-64.063, -47.944]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFishAndSaddles")
	}, {
		coords: [[-60.555, -51.416]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-42.747, -58.535]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-43.229, -49.175]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-32.045, -17.996]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-24.107, -22.632]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-37.684, -30.037]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-56.535, -13.931]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.craftingSuppliesAndFish")
	}, {
		coords: [[-22.837, -20.522]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:misc.liberated") + $.t("s:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[-30.676, -2.681]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSuppliesFoodAndDrink")
	}, {
		coords: [[-14.541, -32.080]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-7.559, -40.408]],
		label: $.t("s:shopkeeper.label.shopkeeper"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}, {
		coords: [[-3.401, -34.077]],
		label: $.t("s:shopkeeper.label.tailor"),
		popup: $.t("s:shopkeeper.desc.clothesAndCraftingSupplies") + $.t("s:shopkeeper.desc.barber")
	}, {
		coords: [[-8.581, -34.321]],
		label: $.t("s:shopkeeper.label.wanderingMerchant"),
		popup: $.t("s:shopkeeper.desc.mapsCraftingSupplies")
	}],

	// Sign Post
	signpost: [{ // Faroe
		coords: [[-77.490, 69.829]],
		label: $.t("s:signpost.label.trottheim"),
		popup: $.t("s:signpost.desc.trottheim")
	}, {
		coords: [[-77.206, 49.526]],
		label: $.t("s:signpost.label.harviken"),
		popup: $.t("s:signpost.desc.harviken")
	}, { // Hindarsfjall
		coords: [[-30.031, 99.272]],
		label: $.t("s:signpost.label.larvik"),
		popup: $.t("s:signpost.desc.larvik")
	}, {
		coords: [[-20.838, 86.177]],
		label: $.t("s:signpost.label.freyasGarden"),
		popup: $.t("s:signpost.desc.freyasGarden")
	}, {
		coords: [[-25.463, 81.563]],
		label: $.t("s:signpost.label.lofoten"),
		popup: $.t("s:signpost.desc.lofoten")
	}, {
		coords: [[-29.764, 82.375]],
		label: $.t("s:signpost.label.lofotenCemetery"),
		popup: $.t("s:signpost.desc.lofotenCemetery")
	}, {
		coords: [[-33.505, 85.144]],
		label: $.t("s:signpost.label.isolatedHut"),
		popup: $.t("s:signpost.desc.isolatedHut")
	}, {
		coords: [[-36.668, 91.604]],
		label: $.t("s:signpost.label.lurthen"),
		popup: $.t("s:signpost.desc.lurthen")
	}, { // An Skellig
		coords: [[52.882, 46.230]],
		label: $.t("s:signpost.label.trailToYngvarsFang"),
		popup: $.t("s:signpost.desc.trailToYngvarsFang")
	}, {
		coords: [[54.623, 35.376]],
		label: $.t("s:signpost.label.yngvarsFang"),
		popup: $.t("s:signpost.desc.yngvarsFang")
	}, {
		coords: [[50.092, 38.364]],
		label: $.t("s:signpost.label.uriallaHarbor"),
		popup: $.t("s:signpost.desc.uriallaHarbor")
	}, {
		coords: [[48.444, 27.510]],
		label: $.t("s:signpost.label.bayOfWinds"),
		popup: $.t("s:signpost.desc.bayOfWinds")
	}, { // Spikeroog
		coords: [[33.229, -99.470]],
		label: $.t("s:signpost.label.hov"),
		popup: $.t("s:signpost.desc.hov")
	}, {
		coords: [[32.380, -113.005]],
		label: $.t("s:signpost.label.svorlag"),
		popup: $.t("s:signpost.desc.svorlag")
	}, {
		coords: [[22.289, -121.509]],
		label: $.t("s:signpost.label.oldWatchtower"),
		popup: $.t("s:signpost.desc.oldWatchtower")
	}, { // Eastern Islands
		coords: [[-16.046, -139.482]],
		label: $.t("s:signpost.label.thePaliGapCoast"),
		popup: $.t("s:signpost.desc.thePaliGapCoast")
	}, {
		coords: [[-8.538, -94.922]],
		label: $.t("s:signpost.label.kaerAlmhult"),
		popup: $.t("s:signpost.desc.kaerAlmhult")
	}, { // Undvik
		coords: [[-52.456, -110.391]],
		label: $.t("s:signpost.label.marlinCoast"),
		popup: $.t("s:signpost.desc.marlinCoast")
	}, {
		coords: [[-58.984, -98.899]],
		label: $.t("s:signpost.label.gullPoint"),
		popup: $.t("s:signpost.desc.gullPoint")
	}, {
		coords: [[-56.377, -113.533]],
		label: $.t("s:signpost.label.dorveRuins"),
		popup: $.t("s:signpost.desc.dorveRuins")
	}, {
		coords: [[-61.365, -121.553]],
		label: $.t("s:signpost.label.clanTordarrochForge"),
		popup: $.t("s:signpost.desc.clanTordarrochForge")
	}, {
		coords: [[-58.367, -127.529]],
		label: $.t("s:signpost.label.urskar"),
		popup: $.t("s:signpost.desc.urskar")
	}, {
		coords: [[-54.801, -135.176]],
		label: $.t("s:signpost.label.abandonedVillage"),
		popup: $.t("s:signpost.desc.abandonedVillage")
	}, {
		coords: [[-43.133, -139.219]],
		label: $.t("s:signpost.label.torGvalchca"),
		popup: $.t("s:signpost.desc.torGvalchca")
	}, { // Ard Skellig
		coords: [[-70.707, -6.064]],
		label: $.t("s:signpost.label.elverumLighthouse"),
		popup: $.t("s:signpost.desc.elverumLighthouse")
	}, {
		coords: [[-58.939, -3.252]],
		label: $.t("s:signpost.label.ruinedInn"),
		popup: $.t("s:signpost.desc.ruinedInn")
	}, {
		coords: [[-55.004, -15.029]],
		label: $.t("s:signpost.label.fyresdal"),
		popup: $.t("s:signpost.desc.fyresdal")
	}, {
		coords: [[-63.085, -38.496]],
		label: $.t("s:signpost.label.kaerMuire"),
		popup: $.t("s:signpost.desc.kaerMuire")
	}, {
		coords: [[-64.539, -47.329]],
		label: $.t("s:signpost.label.holmsteinsPort"),
		popup: $.t("s:signpost.desc.holmsteinsPort")
	}, {
		coords: [[-54.098, -60.754]],
		label: $.t("s:signpost.label.wildShore"),
		popup: $.t("s:signpost.desc.wildShore")
	}, {
		coords: [[-50.958, -42.935]],
		label: $.t("s:signpost.label.fornhala"),
		popup: $.t("s:signpost.desc.fornhala")
	}, {
		coords: [[-54.763, 12.964]],
		label: $.t("s:signpost.label.distillery"),
		popup: $.t("s:signpost.desc.distillery")
	}, {
		coords: [[-56.837, 23.071]],
		label: $.t("s:signpost.label.grotto"),
		popup: $.t("s:signpost.desc.grotto")
	}, {
		coords: [[-47.145, -6.812]],
		label: $.t("s:signpost.label.palisade"),
		popup: $.t("s:signpost.desc.palisade")
	}, {
		coords: [[-43.165, -63.677]],
		label: $.t("s:signpost.label.arinbjorn"),
		popup: $.t("s:signpost.desc.arinbjorn")
	}, {
		coords: [[-40.212, -47.900]],
		label: $.t("s:signpost.label.sund"),
		popup: $.t("s:signpost.desc.sund")
	}, {
		coords: [[-36.351, -31.311]],
		label: $.t("s:signpost.label.fayrlund"),
		popup: $.t("s:signpost.desc.fayrlund")
	}, {
		coords: [[-41.311, -17.886]],
		label: $.t("s:signpost.label.boxholm"),
		popup: $.t("s:signpost.desc.boxholm")
	}, {
		coords: [[-29.306, -25.928]],
		label: $.t("s:signpost.label.rannvaig"),
		popup: $.t("s:signpost.desc.rannvaig")
	}, {
		coords: [[-30.827, -4.219]],
		label: $.t("s:signpost.label.blandare"),
		popup: $.t("s:signpost.desc.blandare")
	}, {
		coords: [[-32.064, 14.458]],
		label: $.t("s:signpost.label.druidsCamp"),
		popup: $.t("s:signpost.desc.druidsCamp")
	}, {
		coords: [[-30.940, 25.356]],
		label: $.t("s:signpost.label.redgill"),
		popup: $.t("s:signpost.desc.redgill")
	}, {
		coords: [[-25.642, 7.031]],
		label: $.t("s:signpost.label.abandonedSawmill"),
		popup: $.t("s:signpost.desc.abandonedSawmill")
	}, {
		coords: [[-21.882, 18.215]],
		label: $.t("s:signpost.label.gedyneith"),
		popup: $.t("s:signpost.desc.gedyneith")
	}, {
		coords: [[-13.475, 24.390]],
		label: $.t("s:signpost.label.whaleGraveyard"),
		popup: $.t("s:signpost.desc.whaleGraveyard")
	}, {
		coords: [[-21.002, -30.059]],
		label: $.t("s:signpost.label.crossroads"),
		popup: $.t("s:signpost.desc.crossroads")
	}, {
		coords: [[-16.341, -9.404]],
		label: $.t("s:signpost.label.minersCamp"),
		popup: $.t("s:signpost.desc.minersCamp")
	}, {
		coords: [[-14.520, -70.928]],
		label: $.t("s:signpost.label.eldbergLighthouse"),
		popup: $.t("s:signpost.desc.eldbergLighthouse")
	}, {
		coords: [[-12.512, 1.626]],
		label: $.t("s:signpost.label.kaerGelen"),
		popup: $.t("s:signpost.desc.kaerGelen")
	}, {
		coords: [[-7.067, -37.617]],
		label: $.t("s:signpost.label.KaerTroldeHarbor"),
		popup: $.t("s:signpost.desc.KaerTroldeHarbor")
	}, {
		coords: [[2.636, -38.650]],
		label: $.t("s:signpost.label.bridgeToKaerTrolde"),
		popup: $.t("s:signpost.desc.bridgeToKaerTrolde")
	}, {
		coords: [[-8.494, -18.171]],
		label: $.t("s:signpost.label.rogne"),
		popup: $.t("s:signpost.desc.rogne")
	}, {
		coords: [[-1.384, -1.956]],
		label: $.t("s:signpost.label.yustiannasGrotto"),
		popup: $.t("s:signpost.desc.yustiannasGrotto")
	}, {
		coords: [[2.724, 15.029]],
		label: $.t("s:signpost.label.giantsToes"),
		popup: $.t("s:signpost.desc.giantsToes")
	}, {
		coords: [[9.947, -22.039]],
		label: $.t("s:signpost.label.ancientCrypt"),
		popup: $.t("s:signpost.desc.ancientCrypt")
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
		],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}, {
		coords: [[53.697, -55.371]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 19<span> " + $.t("s:monsters.echidna") + "</span> and lvl 13<span> " + $.t("s:monsters.sirens") + "</span>)"
	}, {
		coords: [[36.809, -62.007]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 13<span> " + $.t("s:monsters.sirens") + "</span>)"
	}, {
		coords: [[25.919, 84.463]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 13<span> " + $.t("s:monsters.sirens") + "</span>)"
	}, {
		coords: [[61.186, -90.264]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 16<span> " + $.t("s:monsters.echidna") + "</span>)"
	}, {
		coords: [[52.107, -22.500]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 18<span> " + $.t("s:monsters.drowners") + "</span>)"
	}, {
		coords: [[56.023, -8.877]],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc") + "(lvl 16<span> " + $.t("s:monsters.echidna") + "</span>)"
	}],


	// Spoils of War
	spoils: [{
		coords: [

			[-77.466, -63.193],
			[-16.426, -144.009],
			[-20.879, -158.467],
		],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc")
	}, {
		coords: [[29.650, -63.896]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}, {
		coords: [[21.412, -47.285]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[57.891, -28.564]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 18<span> ' + $.t("s:monsters.drowners") + '</span>)'})
	}, {
		coords: [[-69.396, 25.356]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 13<span> ' + $.t("s:monsters.sirens") + '</span>)'})
	}, {
		coords: [[-50.709, 43.550]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 16<span> ' + $.t("s:monsters.echidna") + '</span>)'})
	}],
};
