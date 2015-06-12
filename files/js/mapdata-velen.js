(function () {
	window.map_path   = 'velen';
	window.map_sWest  = L.latLng(-85.05, -180);
	window.map_nEast  = L.latLng(85.05, 135);
	window.map_center = [60, -5];
	window.map_mZoom  = 6;

	processData({
	// Abandoned Site
		abandoned: [{
			coords: [
				// NW Velen
				[-53.59, -56.34],
				[-29.34, -136.23],
				[-50.25, -140.63],
				[-58.95, -142.21]
			],
			label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc")
		}, { // NE Velen
			coords: [[-17.06, 8.26]],
			label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 4<span> ' + $.t("monsters.drowners") + '</span>)'
		}, {
			coords: [[13.70, 46.05]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.drowners") + '</span>)'
		}, {
			coords: [[-8.23, 72.16]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.ghouls") + '</span> &amp; lvl 11<span> ' + $.t("monsters.alghoul") + '</span>)'
		}, { // SW Velen
			coords: [[-79.70, -112.15]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.bandits") + '</span>)'
		}, {
			coords: [[-78.68, -40.69]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("monsters.endregas") + '</span>)'
		}, { // SE Velen
			coords: [[-36.95, 3.08]],
            label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc") + '(lvl 5<span> ' + $.t("monsters.bandits") + '</span>)'
		}],

	// Alchemy Supplies
		alchemy: [{ //Novigrad
			coords: [[77.71, -15.91]],
			label: $.t("alchemy.label*"),
			popup: $.t("alchemy.desc*")
		}, {
			coords: [[79.75, -49.83]],
			label: $.t("alchemy.label"),
			popup: $.t("alchemy.desc")
		}, { // NW Velen
			coords: [[-18.52, -110.21]],
			label: $.t("alchemy.label"),
			popupTitle: $.t("alchemy.pellar"),
			popup: $.t("alchemy.desc")
		}],

	// Armourer
		armourer: [{ // Novigrad
			coords: [[74.23, -38.23]],
			label: $.t("armourer.journeymanLabel"),
			popup: $.t("armourer.desc")
		}, { // Oxenfurt
			coords: [[38.82, 54.01]],
			label: $.t("armourer.journeymanLabel"),
			popup: $.t("armourer.desc")
		}, { // NE Velen
			coords: [[2.18, -12.92]],
			label: $.t("armourer.amateurLabel"),
			popup: $.t("armourer.desc") + ' ' + $.t("misc.rescue") + ' <a href="#6/-18.761/-25.785">' + $.t("misc.locations.petesLanding") + '</a>'
		}, { // NW Velen
			coords: [[-31.25, -71.02]],
			label: $.t("armourer.journeymanLabel"),
			popup: $.t("armourer.desc")
		}, {
			coords: [[-54.06, -122.97]],
			label: $.t("armourer.amateurLabel"),
			popup: $.t("armourer.desc")
		}, {
			coords: [[-30.87, -71.63]],
			label: $.t("armourer.masterLabel"),
			popupTitle: $.t("armourer.yoana"),
			popup: $.t("armourer.quest") + $.t("armourer.desc")
		}],

	// Armourer's Table
		armourerstable: [{
			coords: [
				// Novigrad
				[75.27, -43.35],
				[75.00, -40.68],
				// Oxenfurt
				[41.74, 51.23],
				// NE Velen
				[2.48, -12.42],
				// NW Velen
				[-29.07, -106.97],
				[-30.41, -73.01],
				[-63.95, -75.66],
				[-54.01, -122.37],
				[-59.04, -143.61],
				// SE Velen
				[-35.53, 54.58],
				[-33.60, -26.28]
			],
			label: $.t("armourerstable.label"),
			popup: $.t("armourerstable.desc")
		}],

	// Bandit Camp
		banditcamp: [{
			coords: [
				// NE Velen
				[11.61, -54.42],
				// NW Velen
				[-23.92, -95.51],
				[-42.81, -128.14],
				[-48.69, -130.78],
				[-51.67, -133.59],
				[-40.18, -136.49],
				[-61.14, -145.81],
				[-57.70, -154.75],
				// SW Velen
				[-64.55, -146.69],
				[-65.04, -142.34],
				// SE Velen
				[-29.69, -17.23]
			],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc")
		}, { // S Novigrad
			coords: [[55.43, -63.00]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, { // E Novigrad
			coords: [[74.40, 49.06]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 7)'
		}, { // NE Velen
			coords: [[0.53, 33.05]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[8.67, 1.76]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, { // SE Velen
			coords: [[-77.24, 36.69]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 10)'
		}, {
			coords: [[-53.33, 54.49]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[-26.90, 24.43]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[-38.96, -4.75]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 7-9)'
		}, {
			coords: [[13.37, 84.36]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, {
			coords: [[-74.40, -6.81]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + '(lvl 9)'
		}, { // SW Velen
			coords: [[-69.81, -142.91]],
			label: $.t("banditcamp.label"),
			popup: $.t("banditcamp.desc") + $.t("banditcamp.bug")
		}],

	// Barber
		barber: [{
			coords: [
				// Novigrad
				[76.45, -33.18],
				[76.32, -20.39],
				// Oxenfurt
				[33.87, 52.12]
			],
			label: $.t("barber.label"),
			popup: $.t("barber.desc")
		}, { // NW Velen
			coords: [[-54.36, -81.81]],
			label: $.t("barber.label"),
			popup: $.t("barber.desc") + $.t("barber.free") + $.t("misc.rescue") + ' <a href="#6/-35.362/-127.430">' + $.t("barber.rescueLocation") + '</a>'
		}],

	// Blacksmith
		blacksmith: [{ // Novigrad
			coords: [[69.15, -41.00]],
			label: $.t("blacksmith.masterLabel"),
			popupTitle: $.t("blacksmith.hattori"),
			popup: $.t("blacksmith.quest") + $.t("blacksmith.desc")
		}, {
			coords: [[73.14, -37.96]],
			label: $.t("blacksmith.journeymanLabel"),
			popup: $.t("blacksmith.availability") + $.t("blacksmith.desc")
		}, {
			coords: [[75.17, -43.15]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.availability") + $.t("blacksmith.desc")
		}, { // Oxenfurt
			coords: [[32.00, 59.77]],
			label: $.t("blacksmith.journeymanLabel"),
			popup: $.t("blacksmith.availability") + $.t("blacksmith.desc")
		}, { // NW Velen
			coords: [[-29.27, -106.47]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.desc")
		}, {
			coords: [[-64.28, -75.87]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.desc")
		}, { // SE Velen
			coords: [[-32.96, -26.91]],
			label: $.t("blacksmith.amateurLabel"),
			popup: $.t("blacksmith.desc")
		}],

	// Brothel
		brothel: [{ // Novigrad
			coords: [[71.22, -41.84]],
			label: $.t("brothel.label.crippledKate"),
			popupTitle: $.t("brothel.popup.crippledKate"),
			popup: $.t("brothel.desc")
		}, {
			coords: [[78.34, -33.40]],
			label: $.t("brothel.label.passiflora"),
			popupTitle: $.t("brothel.popup.passiflora"),
			popup: $.t("brothel.desc")
		}],

	// Boat
		/* boat: [{
			coords: [
				// Novigrad
				[69.84, -13.01],
				[72.82, -10.28],
				[77.92, -44.38],
				[76.98, -47.29],
				[76.92, -50.10],
				[70.23, -46.47],
				[70.03, -52.69],
				[70.64, -58.93],
				[73.64, -54.99],
				[73.26, -52.57],
				// NE Novigrad
				[82.32, -53.51],
				[81.33, -34.10],
				// E Novigrad
				[65.04, 19.78],
				// S Novigrad
				[67.41, -72.33],
				[56.32, -3.89],
				[47.36, -58.43],
				[38.62, -61.56],
				[30.83, -59.94],
				[35.10, -28.19],
				// Oxenfurt
				[46.56, 49.37],
				[36.03, 67.94],
				[34.23, 61.00],
				[28.23, 62.49],
				[24.69, 54.23],
				[29.38, 48.06],
				[15.31, 68.73],
				// NE Velen
				[-7.19, 65.13],
				[-0.97, 68.82],
				[38.82, 39.55],
				[51.45, 10.50],
				[-19.10, 7.38],
				[-18.40, -32.93],
				// NW Velen
				[-26.12, -31.38],
				[-51.99, -34.10],
				[-54.32, -54.32],
				[-69.89, -33.44],
				[-65.33, -64.47],
				[-65.35, -81.43],
				[-65.78, -82.31],
				[-63.80, -125.46],
				[-41.54, -142.82],
				[-27.64, -121.82],
				// SW Velen
				[-73.48, -142.91],
				[-74.04, -104.24],
				[-77.06, -40.96],
				[-71.90, -73.92],
				[-80.18, -114.17],
				// SE Velen
				[-68.84, -4.48],
			],
			label: 'Boat',
			popup: 'You can use boats to travel across bodies of water'
		}], */

	// Entrance
		// todo, entrance to what?
		entrance: [{ // Novigrad
			coords: [[80.68, -55.02]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // NE Novigrad
			coords: [[82.18, 32.78]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // SE Novigrad
			coords: [[58.34, 66.68]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[61.02, 89.12]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[36.43, 114.21]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // S Novigrad
			coords: [[53.96, -71.48]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // NE Velen
			coords: [[27.06, -29.27]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // NW Velen
			coords: [[3.05, -122.17]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-26.70, -63.75]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-28.77, -77.74]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // SW Velen
			coords: [[-75.36, -124.19]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-76.32, -114.87]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, { // SE Velen
			coords: [[-71.64, -1.67]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-70.16, 39.55]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-48.52, -29.03]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-22.84, 72.02]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-56.51, 80.33]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-43.71, 39.20]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-35.32, 69.74]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-38.00, 70.36]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-79.628, 2.351]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-52.670, 31.069]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}, {
			coords: [[-75.834, 50.361]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}],

	// Grindstone
		grindstone: [{
			coords: [
				// Novigrad
				[75.27, -42.95],
				[74.96, -40.28],
				// S Novigrad
				[48.86, -51.39],
				// Oxenfurt
				[41.64, 51.53],
				// NE Velen
				[2.48, -13.42],
				// NW Velen
				[32.84, -114.26],
				[-29.07, -105.97],
				[-30.64, -72.55],
				[-53.67, -80.20],
				[-64.05, -75.06],
				[-54.01, -123.57],
				[-59.09, -144.05],
				// SE Velen
				[-35.89, 55.20],
				[-33.80, -26.81]
			],
			label: $.t("grindstone.label"),
			popup: $.t("grindstone.desc")
		}],

	// Guarded Treasure
		guarded: [{
			coords: [
				// NE Velen
					[22.51, -56.78],
				// NW Velen
					[-28.07, -119.66],
					[-38.62, -123.40],
					[-38.27, -149.24],
				// SE Velen
					[-73.42, 31.77],
					[-51.78, -6.42]
			],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: ""})
		}, { // NE Novigrad
			coords: [[76.43, -2.07]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("monsters.hag.water") + "</span>)"})
		}, {
			coords: [[80.52, -4.53]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 15 <span>" + $.t("monsters.hag.bilge") + "</span>)"})
		}, {
			coords: [[82.61, -33.49]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 23 <span>" + $.t("monsters.armoredArachas") + "</span>)"})
		}, { // SE Novigrad
			coords: [[45.62, 99.05]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 20 <span>" + $.t("monsters.leshen") + "</span>)"})
		}, { // S Novigrad
			coords: [[51.97, -12.00]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 18 <span>" + $.t("monsters.wyvern") + "</span>)"})
		}, {
			coords: [[62.00, -97.38]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 15 <span>" + $.t("monsters.wraiths.noon") + "</span>)"})
		}, { // NE Velen
			coords: [[-8.93, 12.30]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 13 <span>" + $.t("monsters.alghoul") + "</span>)"})
		}, {
			coords: [[-7.89, 55.37]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 9 <span>" + $.t("monsters.drowners") + "</span>)"})
		}, { // NW Velen
			coords: [[4.193, -82.463]],
			label: $.t("guarded.label"),
			popup: 'Available after the \'Master Armorers\' (lvl 26) quest. ' + $.t("guarded.desc", {monster: ""})
		}, {
			coords: [[-62.39, -118.17]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 7 <span>" + $.t("monsters.wraiths.wraiths") + "</span>)"})
		}, {
			coords: [[-43.55, -40.08]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("monsters.forktail") + "</span>)"})
		}, {
			coords: [[-45.61, -152.31]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 4 <span>" + $.t("monsters.drowners") + "</span>)"})
		}, {
			coords: [[25.96, -99.67]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("monsters.basilisk") + "</span>)"})
		}, { // SW Velen
			coords: [[-77.77, -102.04]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("monsters.hag.water") + "</span>)"})
		}, {
			coords: [[-81.30, -69.74]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 18 <span>" + $.t("monsters.wraiths.noon") + "/" + $.t("monsters.wraiths.night") + "</span>)"})
		}, {
			coords: [[-82.20, -69.57]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("monsters.gargoyle") + "</span>)"})
		}, {
			coords: [[-78.56, -48.91]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 13 <span>" + $.t("monsters.alghoul") + "</span>)"})
		}, { // SE Velen
			coords: [[-70.260, 102.440]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 24 <span>" + $.t("monsters.elemental.earth") + "</span>)"})
		}, {
			coords: [[-75.81, 30.63]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 20 <span>" + $.t("monsters.hag.bilge") + "</span>)"})
		}, {
			coords: [[-80.190, 28.870]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("monsters.wyvern") + "</span>)"})
		}, {
			coords: [[-81.11, 31.33]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("monsters.cyclops") + "</span>)"})
		}, {
			coords: [[-63.27, 48.87]],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("monsters.hag.water") + "</span>)"})
		}],

	// Gwent Player
		gwent: [{ // Novigrad
			coords: [[72.900, -39.790]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[74.618, -35.132]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.bookMerchant"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[71.00, -41.90]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.crippledKate"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[78.25, -33.79]],
			label: $.t("gwent.label.tournament"),
			popupTitle: $.t("gwent.popup.tournament"),
			popup: $.t("gwent.desc.tournament")
		}, {
			coords: [[72.58, -26.21]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.15, -36.93]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[71.43, -35.51]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.herbalist"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.14, -1.45]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.00, -20.27]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.merchant"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[70.12, -29.16]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[73.32, -43.81]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[76.25, -23.95]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[73.20, -37.66]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[73.81, -37.76]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.banker"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[74.52, -46.63]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.fishmonger"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.37, -43.15]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.49, -44.62]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[76.87, -33.02]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.04, -20.82]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[75.39, -19.02]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.loanShark"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[79.80, -49.53]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.alchemist"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[77.77, -15.58]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.alchemist"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[74.55, -32.41]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.warn") + $.t("gwent.desc.player")
		}, { // S Novigrad
			coords: [[62.43, -14.22]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, { // SE Novigrad
			coords: [[50.64, 72.27]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.herbalist"),
			popup: $.t("gwent.desc.player")
		}, { // Oxenfurt
			coords: [[36.56, 52.47]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.innkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[38.92, 54.21]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.armorer"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[40.11, 51.68]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[32.20, 59.87]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, { // NE Velen
			coords: [[2.58, -12.92]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.armorer"),
			popup: $.t("gwent.desc.player") + $.t("misc.rescue") + '<a href="#6/-18.761/-25.785">' + $.t("misc.locations.petesLanding") + '</a>'
		}, { // NW Velen
			coords: [[-27.64, -102.54]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-28.87, -106.47]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-34.76, -72.57]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-31.90, -71.52]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.quartermaster"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-31.15, -70.82]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-28.39, -75.45]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.bloodyBaron"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-52.60, -81.19]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player") + $.t("misc.rescue") + '<a href="#6/-61.954/-33.893">' + $.t("misc.locations.banditsCamp") + '</a>'
		}, {
			coords: [[-62.53, -76.44]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-54.27, -121.56]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-53.86, -122.97]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.armorer"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-30.67, -71.43]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.yoana"),
			popup: $.t("gwent.desc.player")
		}, { // SE Velen
			coords: [[-36.78, -24.15]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.shopkeeper"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-32.76, -26.61]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.blacksmith"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-78.74, 108.44]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.quartermaster"),
			popup: $.t("gwent.desc.player")
		}, {
			coords: [[-57.20, 27.23]],
			label: $.t("gwent.label.player"),
			popupTitle: $.t("gwent.popup.player"),
			popup: $.t("gwent.desc.quest") + $.t("gwent.desc.player")
		}],

	// Harbor
		harbor: [{
			coords: [
				// Novigrad
				[70.64, -58.93],
				// Oxenfurt
				[38.17, 46.85],
				// NE Velen
				[-6.53, 62.93],
				[-19.10, 9.49],
				[-18.40, -32.93],
				// NW Velen
				[-54.32, -54.32],
				[-41.54, -142.82],
				[-27.64, -121.82],
				// SW Velen
				[-71.90, -73.92],
				[-80.18, -114.17],
				// SE Velen
				[-78.78, -11.07]
			],
			label: $.t("harbor.label"),
			popup: $.t("harbor.desc")
		}],

	// Herbalist
		herbalist: [{
			coords: [
				// Novigrad
				[73.65, -34.89],
				[71.33, -35.51],
				// S Novigrad
				[61.89, -13.16],
				// SE Novigrad
				[50.54, 72.07]
			],
			label: $.t("herbalist.label"),
			popup: $.t("herbalist.desc")
		}, { // NW Velen
			coords: [[-50.26, -138.91]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}, {
			coords: [[-28.15, -135.26]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}, { // SW Velen
			coords: [[-78.53, -41.44]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}, { // SE Velen
			coords: [[-36.92, 2.37]],
			label: $.t("herbalist.label"),
			popup: $.t("misc.liberated") + $.t("herbalist.desc")
		}],

	// Hidden Treasure
		hidden: [{
			coords: [
				// NW Velen
				[33.06, -115.25],
				[-27.92, -128.06],
				[-31.65, -143.17],
				[-42.33, -140.33],
				// SW Velen
				[-71.34, -107.75],
				// SE Velen
				[-29.99, 28.39]
			],
			label: $.t("hidden.label"),
			popup: $.t("hidden.desc")
		},{ // S Novigrad
			coords: [[34.55, -43.68]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 6 <span>' + $.t("monsters.nekkers") + '</span>'})
		}, {
			coords: [[49.38, -68.91]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 15 <span>' + $.t("monsters.mucknixers") + '</span>'})
		}, { // NE Velen
			coords: [[-16.89, 10.06]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 10 <span>' + $.t("monsters.drowners") + '</span>'})
		}, {
			coords: [[3.03, 64.56]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}, {
			coords: [[45.49, 26.76]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}, {
			coords: [[-3.51, 21.40]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.foglet") + '</span>'})
		}, {
			coords: [[52.35, 16.17]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 18 <span>' + $.t("monsters.hag.bilge") + '</span>'})
		}, {
			coords: [[47.72, 38.50]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 26+ <span>' + $.t("monsters.basilisk") + '</span>'})
		}, { // NW Velen
			coords: [[-50.76, -155.04]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}, { // SE Velen
			coords: [[-72.84, 77.08]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 22 <span>' + $.t("monsters.fiend") + '</span>'})
		}, {
			coords: [[-37.16, 97.29]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.foglet") + '</span>'})
		}, {
			coords: [[-20.96, 48.78]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 9 <span>' + $.t("monsters.bandits") + '</span>'})
		}, { // SW Velen
			coords: [[-70.50, -150.64]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 25+ <span>' + $.t("monsters.hag.grave") + '</span>'})
		}, {
			coords: [[-72.78, -131.40]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 10 <span>' + $.t("monsters.bandits") + '</span>'})
		}, {
			coords: [[-71.09, -109.96]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 13 <span>' + $.t("monsters.wraiths.wraiths") + '</span>'})
		}, {
			coords: [[-76.90, -80.68]],
			label: $.t("hidden.label"),
			popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("monsters.drowners") + '</span>'})
		}],

	// Innkeep
		innkeep: [{ // Novigrad
			coords: [[73.24, -44.21]],
			label: $.t("innkeep.inns.theGoldenSturgen"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[78.22, -33.49]],
			label: $.t("innkeep.inns.passiflora"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[76.20, -24.35]],
			label: $.t("innkeep.inns.theNowhere"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodAndDrink")
		}, {
			coords: [[70.02, -29.56]],
			label: $.t("innkeep.inns.rosemaryAndThyme"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodAndDrink")
		}, {
			coords: [[70.04, -1.85]],
			label: $.t("innkeep.inns.sevenCatsInn"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[74.50, -32.61]],
			label: $.t("innkeep.inns.theKingfisher"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("misc.disappearingTrader") + $.t("innkeep.desc.foodDrinkAndGwent")
		}, { // S Novigrad
			coords: [[62.33, -14.02]],
			label: $.t("innkeep.inns.cunnyOfTheGoose"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, { // Oxenfurt
			coords: [[36.46, 52.27]],
			label: $.t("innkeep.inns.theAlchemy"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, { // NE Velen
			coords: [[0.09, -45.62]],
			label: $.t("innkeep.inns.innAtTheCrossroads"),
			popupTitle: $.t("innkeep.popup"),
			popup: $.t("innkeep.desc.gwentAndDrink")
		}],

	// Monster Den
		monsterden: [{
			coords: [
				// NE Velen
				[20.47, -13.76],
				// SE Velen
				[-54.47, 12.00]
			],
			label: $.t("monsterden.label"),
			popup: $.t("monsterden.desc", {monster: ''})
		}, { // NE Novigrad
			coords: [[82.19, -32.08]],
			label: $.t("monsterden.label"),
			popup: $.t("monsterden.desc", {monster: '(lvl 19 <span>' + $.t("monsters.golem") + '</span>)'})
		}, { // S Novigrad
			coords: [[46.99, -40.08]],
			label: $.t("monsterden.label"),
			popup: $.t("monsterden.desc", {monster: '(lvl 16 <span>' + $.t("monsters.rabidRockTroll") + '</span> &amp; lvl 18 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}],

	// Monster Nest
		monsternest: [{
			coords: [
				// NE Velen
				[33.87, 10.20],
				[41.44, -0.79],
				// NW Velen
				[-23.97, -55.95],
				[-36.56, -87.14],
				[-53.38, -57.74],
				// SW Velen
				[-75.14, -122.29],
				[-74.73, -121.49],
				// SE Velen
				[-68.69, -2.20]
			],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: ''})
		}, { // S Novigrad
			coords: [[34.31, -60.51]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("monsters.rotfiends") + '</span>)'})
		}, {
			coords: [[49.84, -45.97]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.endregas") + '</span>)'})
		}, {
			coords: [[50.79, -42.19]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.endregas") + '</span>)'})
		}, {
			coords: [[50.98, -20.99]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("monsters.rotfiends") + '</span>)'})
		}, { // NE Velen
			coords: [[7.36, 48.78]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.ghouls") + '</span>)'})
		}, {
			coords: [[8.01, 47.37]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.ghouls") + '</span>)'})
		}, {
			coords: [[-2.94, 27.38]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("monsters.ghouls") + '</span>)'})
		}, {
			coords: [[41.64, 13.97]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("monsters.rotfiends") + '</span>)'})
		}, { // SW Velen
			coords: [[-75.68, -27.11]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 4&amp;9 <span>' + $.t("monsters.drowners") + '</span>)'})
		}, { // SE Velen
			coords: [[-50.23, 57.57]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-46.01, 52.56]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-49.04, 46.93]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-49.12, 42.36]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("monsters.nekkers") + '</span>)'})
		}, {
			coords: [[-40.18, 80.29]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("monsters.wyvern") + '</span>)'})
		}, {
			coords: [[-41.38, 80.38]],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("monsters.wyvern") + '</span>)'})
		}],

	// Notice Board
		notice: [{
			coords: [
				// Novigrad
				[74.38, -34.06],
				[73.00, -43.37],
				[76.74, -32.21],
				[64.42, -38.42],
				// NE Novigrad
				[82.13, 3.43],
				// E Novigrad
				[69.60, -1.93],
				[73.07, 42.19],
				// S Novigrad
				[62.59, -16.70],
				// Oxenfurt
				[38.89, 52.29],
				// NE Velen
				[4.65, -12.04],
				[1.14, -46.41],
				[33.36, -21.18],
				// NW Velen
				[-54.19, -120.50],
				[-31.50, -69.08],
				[-63.51, -73.74],
				// SE Velen
				[-58.08, 27.95],
				[-36.17, -26.02],
				[-78.73, 110.17]
			],
			label: 'Notice Board',
			popup: 'Here you can find monster contracts and announcements about matters of local concern'
		}],

	// Person in Distress
		pid: [{
			coords: [
				// NE Velen
				[26.43, -11.87],
				// NW Velen
				[-33.94, -132.36]
			],
			label: 'Person(s) in Distress',
			popup: "There's a person or a group of people here in need of assitance"
		}, { // SE Novigrad
			coords: [[20.47, 100.55]],
			label: 'Person(s) in Distress',
			popup: "There's a person or a group of people here in need of assitance (lvl 9<span> Bandits</span>)"
		}, { // NE Velen
			coords: [[-17.64, -29.18]],
			label: 'Person(s) in Distress',
			popup: "There's a person or a group of people here in need of assitance (lvl 10-16<span> Bandits</span>)"
		}, { // NW Velen
			coords: [[-61.23, -33.93]],
			label: 'Person(s) in Distress',
			popup: "There's a person or a group of people here in need of assitance (lvl 5<span> Bandits</span>)"
		}],

	// Place of Power
		//todo get all place of power types
		pop: [{ // Novigrad
			coords: [[80.72, -40.83]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Igni',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, { // E Novigrad
			coords: [[71.02, 48.78]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Axii',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, { // NW Velen
			coords: [[32.69, -112.60]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Quen',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, { // SW Velen
			coords: [[-82.85, -72.69]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Aard',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[-71.82, -105.91]],
			label: 'Place of Power*',
			popupTitle: 'Place of Power - Yrden',
			popup: '"Wandering in the Dark" quest. Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, { // SE Velen
			coords: [[-78.19, 7.91]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[-70.41, 38.41]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - todo',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}, {
			coords: [[-55.68, 18.94]],
			label: 'Place of Power',
			popupTitle: 'Place of Power - Yrden',
			popup: 'Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'
		}],

	// Point of Interest
		poi: [{ // Novigrad
			coords: [[74.84, -25.88]],
			label: "Triss's Residence",
			popup: 'todo'
		}, {
			coords: [[70.12, -28.76]],
			label: "Dandelion &amp; Zoltan's Residence",
			popup: 'todo'
		}, {
			coords: [[77.245, -24.829]],
			label: 'Vilmerius Hospital',
			popup: 'todo'
		}, { // NW Velen
			coords: [[-47.34, -111.81]],
			label: "Keira Metz's Residence",
			popup: 'todo'
		}, { // Velen
			coords: [[61.90, -91.82]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Feline Crossbow',
			popup: ''
		}, {
			coords: [[57.651, -30.169]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Superior Feline Silver Sword',
			popup: ''
		}, {
			coords: [[75.70, -19.50]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhanced Feline Silver Sword',
			popup: 'You need to climp up a Leader'
		}, {
			coords: [[60.60, 89.80]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Feline Silver Sword',
			popup: 'Inside the Est Tayiar Ruine, behind a Wall that you can break'
		}, {
			coords: [[36.50, 114,50]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhanced Feline Armor',
			popup: 'on top of the Aeramas’ Abandoned Manor'
		}, {
			coords: [[33, -114.5]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Griffin Silver Sword Diagram',
			popup: ''
		}, {
			coords: [[29.373, -73]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhanced Griffin Boots',
			popup: ''
		}, {
			coords: [[41, -1]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Griffin Steel Sword',
			popup: 'Near the Monster Nest'
		}, {
			coords: [[36.5, 35]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhance Griffin Armor',
			popup: ' Near the Troll at White Eagle Fort'
		}, {
			coords: [[22, 9.5]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhance Feline Gauntlets',
			popup: 'Inside a Shaft from the Codgers Quarry'
		}, {
			coords: [[-28, -61]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhanced Griffin Trousers',
			popup: 'Inside the Burned Ruin'
		}, {
			coords: [[-57, -156]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhanced Griffin Steel Sword',
			popup: ''
		}, {
			coords: [[-61, -8.5]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Superior Feline Armor',
			popup: ''
		}, {
			coords: [[-54.5, 12]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Griffin Armor Set',
			popup: 'Inside the Dragonslayers Grotto'
		}, {
			coords: [[-64, 38]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Superior Ursine Steel Sword',
			popup: 'Guarded by lvl 25<span> Earth Elemental</span>'
		}, {
			coords: [[-81.1, 30.8]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Mastercrafted Ursine Armor',
			popup: ''
		}, {
			coords: [[-75.6, -28]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Mastercrafted Ursine Silver Sword',
			popup: ''
		}, {
			coords: [[-81.2, -70]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Enhanced Griffin Gauntlets',
			popup: ''
		}, {
			coords: [[-72.047, 3.999]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Superior Ursine silver sword',
			popup: ''
		}, {
			coords: [[20.406, -14.304]],
			label: 'Witcher Upgrade Gear',
			popupTitle: 'Superior Ursine Gauntlets',
			popup: ''
		}],

	// Shopkeeper
		shopkeeper: [{ // Novigrad
			coords: [[74.22, -35.41]],
			label: 'Book Merchant',
			popup: 'Buys and sells books'
		}, {
			coords: [[74.578, -35.332]],
			label: 'Book Merchant',
			popup: 'Buys and sells books'
		}, {
			coords: [[72.82, -39.99]],
			label: 'Shopkeeper',
			popup: 'Sells alchemy supplies, food, and drink'
		}, {
			coords: [[73.71, -37.96]],
			label: 'Banker',
			popup: 'You can exchange your unusable currency or borrow gold here'
		}, {
			coords: [[69.90, -20.47]],
			label: 'Clothing Merchant',
			popup: 'Sells clothes and masks'
		}, {
			coords: [[70.05, -37.13]],
			label: 'Shopkeeper',
			popup: 'Sells crafting supplies, weapons and "Zerrikanian Saddlebags" (+100)'
		}, {
			coords: [[76.81, -33.26]],
			label: 'Shopkeeper',
			popup: 'Sells alchemy supplies, quest items (for Aeramas\' Manor), and "Potion of Clearance" (1000 gold)'
		}, {
			coords: [[75.41, -44.82]],
			label: 'Shopkeeper',
			popup: 'Sells alchemy supplies, food, and drink'
		}, {
			coords: [[74.47, -46.93]],
			label: 'Fishmonger',
			popup: 'Sells fish'
		}, {
			coords: [[76.57, -50.10]],
			label: 'Shopkeeper',
			popup: 'Sells empty bottles'
		}, {
			coords: [[76.12, -49.04]],
			label: 'Shopkeeper',
			popup: 'Sells runestones and alchemy supplies'
		}, {
			coords: [[74.98, -20.57]],
			label: 'Shopkeeper',
			popup: 'Sells nothing note worthy'
		}, {
			coords: [[72.58, -26.41]],
			label: 'Shopkeeper',
			popup: 'Sells gem dust (crafting supplies), weapons, food, and drink'
		}, {
			coords: [[75.33, -19.28]],
			label: 'Loan Shark',
			popup: 'Sells nothing note worthy'
		}, {
			coords: [[75.61, -23.82]],
			label: 'Shopkeeper',
			popup: 'Sells crafting supplies'
		}, {
			coords: [[71.00, -41.60]],
			label: 'Shopkeeper',
			popup: $.t("innkeep.desc.foodAndDrink")
		}, { // NE Novigrad
			coords: [[80.92, 50.49]],
			label: 'Shopkeeper',
			popup: 'Sells runestones, alchemy supplies and food'
		}, { // SE Novigrad
			coords: [[3.43, 97.08]],
			label: 'Shopkeeper',
			popup: 'This merchant appears here after being rescued'
		}, /*{ // S Novigrad
			// appears on map but nobody there?
			coords: [[65.95, -21.09]],
			label: 'Shopkeeper',
			popup: '???'
		},*/ {
			coords: [[58.677, -55.415]],
			label: 'Wandering Merchant',
			popup: 'Traveling from Lucian\'s Windmill to the Portside Gate. Sells runestones, alchemy supplies and food'
		}, {
			coords: [[63.27, -63.46]],
			label: 'Shopkeeper',
			popup: 'Sells crafting supplies, food, and weapons'
		}, {
			coords: [[48.72, -51.94]],
			label: 'Shopkeeper',
			popup: 'Sells armour and crafting supplies'
		}, {
			coords: [[57.98, -12.00]],
			label: 'Wandering Merchant',
			popupTitle: 'Shopkeeper',
			popup: 'Sells runestones, alchemy supplies and food'
		}, { // Oxenfurt
			coords: [[40.01, 51.48]],
			label: 'Shopkeeper',
			popup: 'Sells paint (quest item), hides, and drink'
		}, { // NE Velen
			coords: [[26.00, 30.11]],
			label: 'Wandering Merchant',
			popupTitle: 'Shopkeeper',
			popup: 'Sells runestones, alchemy supplies and food'
		}, {
			coords: [[31.65, -17.93]],
			label: 'Shopkeeper',
			popup: 'This merchant appears here after being rescued. Sells alchemy supplies and food'
		}, {
			coords: [[-6.84, 72.38]],
			label: 'Shopkeeper',
			popup: 'This merchant appears after liberating the area. Sells weapons and crafting supplies'
		}, {
			coords: [[13.07, 46.27]],
			label: 'Shopkeeper',
			popup: 'This merchant appears after liberating the area. Sells runestones, alchemy supplies and food'
		}, { // NW Velen
			coords: [[-27.84, -102.74]],
			label: 'Shopkeeper',
			popup: 'Sells nothing note worthy'
		}, {
			coords: [[-34.96, -72.77]],
			label: 'Shopkeeper',
			popup: 'Sells Gwent cards and drink'
		}, {
			coords: [[-54.42, -121.65]],
			label: 'Shopkeeper',
			popup: 'Sells Gwent cards and jewellery (crafting supplies)'
		}, {
			coords: [[-47.04, -112.50]],
			label: 'Keira Metz',
			popup: 'Sells alchemy supplies, recipes and "Potion of Clearance" (1000 gold)'
		}, {
			coords: [[-32.03, -71.77]],
			label: 'Quartermaster',
			popup: $.t("innkeep.desc.foodDrinkAndGwent")
		}, {
			coords: [[-36.10, -72.51]],
			label: 'Shopkeeper Anselm',
			popup: 'This merchant appears here after being rescued. Sells "Racing Horse Blinders" (+40)'
		}, {
			coords: [[-62.57, -76.89]],
			label: 'Shopkeeper',
			popup: 'Sells drink and "Rugged Saddlebags" (+70)'
		}, {
			coords: [[-52.70, -81.49]],
			label: 'Shopkeeper',
			popup: 'Sells Gwent cards and drink. Needs to be saved from the <a href="#6/-61.954/-33.893">Bandits\' Camp</a>'
		}, {
			coords: [[-52.96, -56.65]],
			label: 'Shopkeeper',
			popup: 'Sells runestones and alchemy supplies'
		}, {
			coords: [[-45.09, -138.96]],
			label: 'Shopkeeper',
			popup: 'Sells armour and crafting supplies'
		}, {
			coords: [[-58.36, -142.91]],
			label: 'Shopkeeper',
			popup: 'Sells armour and crafting supplies'
		}, { // SW Velen
			coords: [[-79.58, -114.12]],
			label: 'Shopkeeper',
			popup: 'This merchant appears after liberating the area. Sells runestones, alchemy supplies and food'
		}, { // SE Velen
			coords: [[-36.17, 3.69]],
			label: 'Shopkeeper',
			popup: 'This merchant appears here after being rescued. Sells alchemy supplies and food'
		}, {
			coords: [[-36.88, -24.35]],
			label: 'Shopkeeper',
			popup: 'Sells Gwent cards, and crafting supplies'
		}, {
			coords: [[-37.79, -26.19]],
			label: 'Shopkeeper',
			popup: 'Sells runestones, alchemy supplies and food'
		}, {
			coords: [[-78.79, 108.24]],
			label: 'Quartermaster',
			popup: 'Sells nothing note worthy'
		}, {
			coords: [[-57.35, 27.03]],
			label: 'Shopkeeper',
			popup: 'This merchant disappears sometime after the "Family Matters" quest. Sells drink'
		}, {
			coords: [[-76.16, 107.67]],
			label: 'Shopkeeper',
			popup: 'Sells runestones and alchemy supplies'
		}, {
			coords: [[-75.93, 110.28]],
			label: 'Shopkeeper',
			popup: 'Sells armour and crafting supplies'
		}, {
			coords: [[-75.50, 110.81]],
			label: 'Shopkeeper',
			popup: 'Sells weapons and crafting supplies'
		}],

	// Sign Post
		signpost: [{ // Novigrad
			coords: [[73.76, -33.97]],
			label: 'Hierarch Square',
			popup: 'Until quite recently a great many mages lived near Novigrad\'s main square. They fled when the witch hunters began their reign of terror, leaving many of the city\'s most beautiful townhouses abandoned and uncared for'
		}, {
			coords: [[74.23, -15.86]],
			label: 'Southern Gate',
			popup: 'In truth demarcating the eastern and not southern edge of the city, the Southern Gate was given its inappropriate name by a one-time city planner who knew nothing about architecture and could not read a map, but had in his favor the fact that he was the mayor\'s cousin and thew lavish parties. Though confusingly incorrect, the name stuck and now the city\'s residents never think twice about its illogical appellation'
		}, {
			coords: [[76.44, -16.20]],
			label: 'Oxenfurt Gate',
			popup: 'In the times when Novigrad and Oxenfurt were embroiled in fierce neighborly disputes, this gate went through several completely different names, the Gate of Harlots and the Gate of Bloodsuckers being two of the longer lived examples. Its current name was chosen when this conflict was finally put to rest'
		}, {
			coords: [[77.64, -36.47]],
			label: 'St. Gregory\'s Bridge',
			popup: 'Bridge named after the hero of Novigrad who saved the city from a horrible famine three hundred years ago by sacrificing half his fortune to import food from Nazair. After this, he was declared a saint, something even the jurors of the Church of the Eternal Fire were unable to change'
		}, {
			coords: [[79.73, -51.24]],
			label: 'Electors\' Square',
			popup: 'Square named after a group of Novigrad reformers who enacted bold transformations that led to the city\'s rapid growth, enriching its residents considerably and ushering in the city\'s golden age'
		}, {
			coords: [[71.16, -22.94]],
			label: 'Tretogor Gate',
			popup: 'Gate erected with funds from the Redanian royal family, who, wanting to earn favor with Novigrad merchants and the hierach, dedicated a significant amount of coin to its construction, as well as some no-less-valuable (wo)manpower in the form of the master architect Countess Anna Yaye-Pinkovitz and her skilled crew'
		}, {
			coords: [[68.94, -27.77]],
			label: 'Gate of the Hierarch',
			popup: 'This gate is named in honor of Novigrad\'s own son, the Hierach of the eternal Fire. Supposedly this name was given to it upon popular request, though no one can be found who remembers requesting any such thing'
		}, {
			coords: [[66.32, -35.31]],
			label: 'Glory Gate',
			popup: 'Toughs and hooligans often end a night of drunken escapades under this gate after being thrown out of the nearby taverns'
		}, {
			coords: [[65.99, -43.90]],
			label: 'Portside Gate',
			popup: 'Though not the most stately of gates, this one\'s location near the bustling port has made it the calling card of the city'
		}, {
			coords: [[69.57, -55.28]],
			label: 'Novigrad Docks',
			popup: 'A den of dirt and depravity and the shadiest part of Novigrad. After dark all one finds here are women of loose morals, hoodlums and drunk sailors'
		}, {
			coords: [[75.39, -8.88]],
			label: 'Arette',
			popup: 'Novigrad has always attracted those in search of a better life. Some of them found no welcome within the city walls, and so built huts outside the city'
		}, {
			coords: [[69.57, -2.81]],
			label: 'Seven Cats Inn',
			popup: 'This dank establishment is host to a shady clientele'
		}, { // NE Novigrad
			coords: [[83.53, -9.40]],
			label: 'Sarrasin Grange',
			popup: 'Lord Antares Sarrasin moved his wife and smattering of comely daughters here from far-off Nazair on his medic\'s recommendations. The leech proclaimed with absolute certainy that "if you wish to sire a son, it must be in the Gustfields." While waiting to produce a male heir, the Sarrasins took to wine cultivation and soon their grange became renowned from Nazair to Skellige'
		}, {
			coords: [[81.92, 3.60]],
			label: 'Yantra',
			popup: 'The inhabitants of this village are known for their talkativeness and tendency to exagerrate, which makes them good companions for a round of drink, but impossible to tolerate for long stretches of time'
		}, {
			coords: [[82.09, 30.15]],
			label: 'Isolated Hut',
			popup: 'Rumors claim a famous painter lives in this house, though no one has ever seen him or knows his name'
		}, {
			coords: [[76.24, 18.26]],
			label: 'Honeyfill Meadworks',
			popup: 'The renowned Honeyfill Meadworks has for generations belonged to a respected family of halflings'
		}, {
			coords: [[79.04, 65.21]],
			label: 'Martin Feuille\'s Farmstead',
			popup: 'Founded by Lord Martin Feuille, this vast plantation was until not so long ago the largest producer of alfalfa in the region. Sadly, when war broke out the lord fled to his winter residence in Kovir, leaving his land to be administered by an ill-suited stward who squandered his liege\'s fertile fields'
		}, {
			coords: [[81.02, 49.09]],
			label: 'Winespring Grange',
			popup: 'Years ago, an eccentric count named Jacobus Ruth of the Rieslings settled here. The count could not stand the pomposity of court life but loved good wine. He thus planted a vineyard here which produces a fabulous beaujolais prized on both sides of the Pontar'
		}, {
			coords: [[79.59, 31.03]],
			label: 'Moldavie Residence',
			popup: 'Despite its ideal location and beautiful surroundings, this residence has been tossed from owner to owner like a hot potato, and for some unknown reason suffers from a bad reputation'
		}, {
			coords: [[81.66, -31.55]],
			label: 'Cavern',
			popup: 'One of those places wise men avoid at all costs, so as not to tempt fate'
		}, { // E Novigrad
			coords: [[72.92, 41.31]],
			label: 'Alness',
			popup: 'Until recently, this was a thoroughly unremarkable village. then the Vegelbuds began organizing their famous horse races here, granting Alness the enviable honor of hosting the region\'s most pretigious equestrian contests'
		}, {
			coords: [[67.58, 31.03]],
			label: 'Wheat Fields',
			popup: 'The fertile soils of the Pontar delta guarantee the inhabitants of Novigrad full granaries and full stomaches all year long'
		}, {
			coords: [[65.31, 46.67]],
			label: 'Vegelbud Residence',
			popup: 'Domicile of a prominent Novigrad family whose line can be traced back to the times when the first human settlers came to these lands'
		}, { // SE Novigrad
			coords: [[62.02, 39.11]],
			label: 'Carsten',
			popup: 'A village named after a baker whose exquisite goods gained him fame, as well as the privilege of supplying bread to the table of the hierarch of the Church of the Eternal Fire in Novigrad. Following his death, none proved capable of recreating his recipes for his delicious and depply aromatic breads, so these days Carsten is known chiefly for its trade in grain and flour'
		}, {
			coords: [[58.56, 66.27]],
			label: 'Temerian Partisan Hideout',
			popup: 'Though the Nilfgaardians thought Temeria died along with King Foltest, Temerian guerillas still hide in the woods, prepared to give their lives at a moment\'s notice in their fight for independence'
		}, {
			coords: [[59.82, 85.87]],
			label: 'Est Tayiar',
			popup: 'Long before men first peopled these lands, a beautiful, prospering elven city stood here, centered around the palace of King Maeglor. One day, however, the city\'s inhabitants began mysteriously dying off in large numbers. According to legend, King Maeglor sensed he, too, would soon perish and cast a powerful spell that caused the earth to swallow the city whole so that no outsider could ever desecrate it. Centuries later, scholars from the Oxenfurt Academy began painstaking excavations of King Maeglor\'s palace in a search for the causes of the catastrophe. Yet work came to a sudden halt when three subsequent expeditions ventured into the ruins\' depths - and were never heard from again...'
		}, {
			coords: [[49.45, 70.67]],
			label: 'Herbalist\'s Hut',
			popup: 'Home to a halfling herbalist who is a passionate devotee of innovative gardening methods and experimental herbal medicine'
		}, {
			coords: [[35.51, 110.67]],
			label: 'Aeramas\' Abandoned Manor',
			popup: 'Peasants living nearby often complain about the overwhelming cheese stench wafting out of this residence...'
		}, {
			coords: [[19.89, 83.06]],
			label: 'Crossroads',
			popup: 'A small crossroads in the woods'
		}, {
			coords: [[49.85, 52.73]],
			label: 'Gustfields Farm',
			popup: 'Farmstead founded years ago by an eccentric flaxen-haired painter named Cunigund de Cabbrae, who came here seeking peace, quiet and fresh country air'
		}, {
			coords: [[76.64, 37.00]],
			label: 'Dancing Windmill',
			popup: 'When the current owner\'s grandfather, the famous dancer Pablo "Sugar" Sasko, ended his career, he settled here and organised nights of dancing for the nearby peasantry. Supposedly these revelries became so fashionable that dung-booted peasants were dancing rounds with members of Novigrad\'s most elite familes and adventure-seeking urban dandies'
		}, { // S Novigrad
			coords: [[67.20, -65.48]],
			label: 'Loggers Hut',
			popup: 'A lone cabin deep in the Novigrad Forest - an ideal base for woodcutters'
		}, {
			coords: [[66.92, -85.25]],
			label: 'Lighthouse',
			popup: 'Many years ago a horrible accident took place here: a ship carrying the cousin of King Radovid IV the Bald wrecked against the rocks during a storm. The king ordered a lighthouse erected on that spot in order to warn other seafarers of its deadly danger'
		}, {
			coords: [[61.90, -14.08]],
			label: 'Cunny of the Goose',
			popup: 'This inn owes its name to its former owner, a swaggering, blustering fellow who wanted to attract those of a similar temperatment. Luckily he died of liver poisoning after a few years and ownership passed to a distant relative, who turned the Cunny of the Goose into the best spot for stuffed goose liver in all the region'
		}, {
			coords: [[58.03, -29.44]],
			label: 'Drahim Castle',
			popup: 'In its glory years, this castle was home to the Redanian Moskovitz of the Sea Cats dynasty, patrons of the arts and admirers of elven culture. After the death by suicide of the dynasty\'s last member, Prince Adrien, the castle fell into the hands of the Redanian crown - and then into ruin'
		}, {
			coords: [[54.10, -71.98]],
			label: 'Widows\' Grotto',
			popup: 'According to legend, many years ago a young woman would wait here and watch for her husband\'s return from an overseas raid. Years passed and the woman grew old, still waiting for her husband. Yet he never came, and finally, she died. Three days after her funeral, her husband returned, having at last escaped from the pirates who had held him captive all that time. When he learned about his beloved\'s loyal vigil, he wept bitter tears, then lept to his death'
		}, {
			coords: [[45.98, -51.33]],
			label: 'Ursten',
			popup: 'War has caused countless refugees to flee Temeria. With the Pontar blockaded, they have tended to flood villages which, like Ursten, are located close to river crossings'
		}, {
			coords: [[60.50, -55.55]],
			label: 'Lucian\'s Windmill',
			popup: 'Lucian le Foix, the famous Oxenfurt sculptor and architect, bought this windmill several years ago and made it into his country retreat. Sadly the enormous popularity of the great Lucian\'s designs means he spends little time in his fortress of solitude and has entrusted its care to a steward'
		}, {
			coords: [[62.35, 11.69]],
			label: 'Eternal Fire Chapel',
			popup: 'This shrine greets travelers on their way to Oxenfurt. Merchants sometimes stop here to sell goods to pilgrims and visiting scholars'
		}, {
			coords: [[37.11, -27.23]],
			label: 'Border Post',
			popup: 'A small isle stuck in the river\'s central current - an ideal place for bleaching cloth'
		}, { // Oxenfurt
			coords: [[38.17, 62.31]],
			label: 'Novigrad Gate',
			popup: 'During Oxenfurt Academy\'s exam sessions, this gate would be closed, to spare the students from Novigrad\'s temptations'
		}, {
			coords: [[29.10, 52.58]],
			label: 'Western Gate',
			popup: 'Before war broke out, several hundred people a day would pass through here. Now the Redanian blockade has slowed traffic to a mere trickle'
		}, {
			coords: [[37.40, 48.34]],
			label: 'Oxenfurt Harbor',
			popup: 'Oxenfurt\'s picturesque port has featured as the subject of numerous odes and ballads, the setting for at least three lurid crime novels, and a favorite spot for romantic outings for generations of students'
		}, { // NE Velen
			coords: [[15.62, 25.66]],
			label: 'Stonecutters\' Settlement',
			popup: 'Over Twenty years ago a certain Bartolomeo, known as "Badger" on account of certain characteristic aspects of his coiffure, discovered a rich deposit of high-quality stone on this spot. He bought the land for a song, then leased it back to local peasants before heading off to Kovir, where he lives the life of a rich and powerful townsman to this day'
		}, {
			coords: [[35.96, 34.41]],
			label: 'White Eagle Fort',
			popup: 'The grand name might seem in ill-fitting with this place, but the troll that lives here - a Redanian patriot and military aficionado - goes to great lengths to make his beloved King Radovid proud'
		}, {
			coords: [[27.45, 12.00]],
			label: 'Codgers\' Quarry',
			popup: 'The now-inactive quarry once only employed stonebreakers over thirty years of age who would work hard all day, then spend the evenings racing down the sides of the quarry pit on hand-crafted wagons'
		}, {
			coords: [[39.61, -2.42]],
			label: 'Hindhold',
			popup: 'This watchtower used to protect barges traveling between Oxenfurt and Novigrad. It once even boasted a bridge connecting the two sides of the river, but now it stands abandoned and neglected, its bridge a collapsed ruin'
		}, {
			coords: [[-4.01, 63.37]],
			label: 'Ferry Station',
			popup: 'The ferry\'s former owners were famed for treating travelers who were forced to wait for better conditions to raucous and unforgettable evenings'
		}, {
			coords: [[13.75, -9.05]],
			label: 'Hanged Man\'s Tree',
			popup: 'During the war, both sides committed acts of exorbitant cruelty meant to keep the conquered populaces in check'
		}, {
			coords: [[5.22, 5.41]],
			label: 'Devil\'s Pit',
			popup: 'The inhabitants of Velen believe the expanse of caverns underneath the Devil\'s Pit are home to demons'
		}, {
			coords: [[1.43, -15.16]],
			label: 'Mulbrydale',
			popup: 'One of the oldest villages in the region. Owes its name to a certain undereducated botanist who could not discern one kind of tree from another and so called them all mulberries'
		}, {
			coords: [[0.82, -47.20]],
			label: 'Inn at the Crossroads',
			popup: 'A sizeable establishment able to accommodate a crowd of travelers and revelers'
		}, { // NW Velen
			coords: [[21.78, -106.54]],
			label: 'Harpy Feeding Ground',
			popup: 'One of those places entered by only the very brave, or very foolish'
		}, {
			coords: [[30.56, -114.31]],
			label: 'Lornruk',
			popup: 'Years ago smugglers would come here to load and unload illicit cargo'
		}, {
			coords: [[-1.85, -98.61]],
			label: 'Heatherton',
			popup: 'The inhabitants of this village were relieved when they learned the path of the marching armies had shifted slightly and passed their village bye. Then, one night... they changed their mind'
		}, {
			coords: [[0.97, -110.39]],
			label: 'Abandoned Tower',
			popup: 'Legend has it a beleaguered traveler once stood at this tower\'s gates. He begged for shelter for the night, claiming he\'d been injured, but the baron living inside was afraid the traveler was a spy and sent him away. Little did he know the traveler was a powerful mage, who cast a curse on the tower, its inhospitable owner and all who dwelled with him. Soon thereafter the baron and all his retinue died in mysterious circumstances, and the tower fell into ruin'
		}, {
			coords: [[2.37, -122.34]],
			label: 'Isolated Shack',
			popup: 'Small hut constructed by a famous sculptor who, having garnered every laurel possible for his trade, abandoned his Koviri residence and moved here in order to find inspiration in solitude and reflect on what to make of the rest of his life'
		}, {
			coords: [[-28.27, -103.97]],
			label: 'Blackbough',
			popup: 'This village takes its name from the unwanted limbs loggers used to bring here to burn, leaving stacks of charred logs behind. The locals, however, prefer the old legend which holds that their village was founded by a prominent member of an ancient race of tree people'
		}, {
			coords: [[-32.44, -123.05]],
			label: 'Hangman\'s Alley',
			popup: 'The road is lined with the hanged bodies of peasants who opposed their new rulers or had the bad luck of happening across bandits who had nothing against adding another dangling installation to the boulevard\'s scenery'
		}, {
			coords: [[-39.71, -74.62]],
			label: 'Crow\'s Perch',
			popup: 'After Vserad, its previous owner, panicked at the news that armies were approaching and fled to Fyke Isle, this castle became home to Phillip Strenger, alias the Bloody Baron, along with his family and entourage'
		}, {
			coords: [[-52.81, -55.63]],
			label: 'Boatmakers\' Hut',
			popup: 'Though nothing about this small domicile is particularly eye-catching, a family of the best shipwrights in Velen has lived here for generations, crafting the finest skiffs and dinghies north of the Yaruga'
		}, {
			coords: [[-50.35, -140.98]],
			label: 'Regugees\' Camp',
			popup: 'The members of this small community have erected a large, winged statue - evidence of people turning to old gods and ancient cults in this time of war and famine'
		}, {
			coords: [[-45.01, -140.36]],
			label: 'Coast of Wrecks',
			popup: 'Once the local youth would come here to revel amidst the wrecks. Now inhabitants of nearby villages have started combing the place day and night in search of anything that can be exchanged for food'
		}, {
			coords: [[-53.67, -119.50]],
			label: 'Midcopse',
			popup: 'Typical farming settlement which the worst of the fighting has left untouched - but which famine now grips all the same. One of the larger villages in this region'
		}, {
			coords: [[-57.30, -98.57]],
			label: 'Wastrel Manor',
			popup: 'The once-beautiful manor house located near here was known for its extravagant balls, which were attended by the cream of the local youth. Its owners abandoned it over a century ago, but soon afterwards it became a place of worship for the local community, which believes a deity dwells in the ruins'
		}, {
			coords: [[-62.01, -34.94]],
			label: "Bandits' Camp",
			popup: 'A place some particularly nasty characters have decided to call home'
		}, {
			coords: [[-63.55, -74.44]],
			label: 'Oreton',
			popup: 'Village founded by Count Primislavus don Stessa, distant cousin to King Foltest of Temeria. The count was known for his passion for racing chariots down winding forest paths and narrow country roads. This spectacle delighted onlookers, won the hearts of the highborn ladies and aroused hatred in his rivals'
		}, {
			coords: [[-45.68, -127.05]],
			label: 'Forest Hut',
			popup: 'Though his friends advised against building a house in the middle of the woods, Hans refused to listen and did things his way. When the war broke out and laid waste to this region, Hans and his family lived in peace, untouched by the troubles of the wider world - until one fateful night...'
		}, {
			coords: [[-13.67, -84.20]],
			label: 'Wolven Glade',
			popup: 'A long, long time ago, when this land was ruled by forest spirits and ancient gods, the living would come here to pay their respects to the dead in the way their holy tome comanded: "Walk thee in darkness, on a path of blood, standing under bare sky, naked before the gods and their messengers."'
		}, {
			coords: [[-28.84, -60.56]],
			label: 'Burned Ruins',
			popup: 'One of many structures in the area which did not survive the onslaught of war'
		}, {
			coords: [[-47.10, -92.64]],
			label: 'Troll Bridge',
			popup: 'Local legend has it this bridge was erected by trolls who were later killed by an anonymous witcher'
		}, {
			coords: [[-53.96, -80.86]],
			label: 'Claywich',
			popup: 'Every year at Belleteyn, a great feast is held in Claywich accompanied by games, song and dance. On that night villagers from far and wide come to celebrate, with passing travelers welcome as well. Shortly before midnight the youth in attendance race deep into the forest in search of a fern flower, and though no one has as yet found one, many have found their other halves, or at least a night of moonlight passion'
		}, {
			coords: [[-69.33, -39.59]],
			label: 'Drudge',
			popup: 'This once-peaceful fishermen\'s settlement now stands almost completely empty. Road-weary travelers sometimes find shelter in its abandoned huts - besides that, not a soul is to be seen'
		}, { // SW Velen
			coords: [[-64.09, -147.83]],
			label: 'Condyle',
			popup: 'This village has been completely and utterly destroyed. Rumors claim its inhabitants perished in a gruesome massacre'
		}, {
			coords: [[-65.73, -128.41]],
			label: 'Duen Hen',
			popup: 'Religious site where the old gods are worshipped'
		}, {
			coords: [[-73.30, -69.92]],
			label: 'Fyke Isle',
			popup: 'Ruined tower which is said to be afflicted by a terrible curse'
		}, {
			coords: [[-77.12, -112.72]],
			label: 'Byways',
			popup: 'Most of this area\'s residents have fled north or died of plague. In better times they busied themselves making prize-winning bricks'
		}, {
			coords: [[-80.79, -69.83]],
			label: 'Frischlow',
			popup: 'Like many other settlements in the area, this one has suffered greatly on account of the war. Its inhabitants have abandoned their property and evacuated lands in which they once dwelled in relative peace'
		}, {
			coords: [[-78.73, -41.44]],
			label: 'Olena\'s Grove',
			popup: 'Legends claim that a beautiful nymph named Olena once lived in this grove. She fell in love with a young hunter and the man swore to be true to the nymph, but later betrayed her. She decided to punish him by casting a spell on his spirit, which wanders the grove to this day'
		}, { // SE Velen
			coords: [[-79.15, -10.28]],
			label: 'Road to Bald Mountain',
			popup: 'The peasants of Velen believe the summit of Bald Mountain is home to witches, werebbubbs and wights'
		}, {
			coords: [[-80.90, 30.32]],
			label: 'Destroyed Bastion',
			popup: 'Bastion built during the reign of King Gardic and destroyed during the First Nilfgaardian War'
		}, {
			coords: [[-76.49, 41.62]],
			label: 'Crossroads',
			popup: 'A small crossroads, well trodden by the inhabitants of the surrounding villages'
		}, {
			coords: [[-77.56, 110.92]],
			label: 'Nilfgaardian Army Group \'Center\' Camp',
			popup: 'Pitched in a mere two weeks, the Army Group \'Center\' camp constitutes the quintessence of Nilfgaardian martial architecture'
		}, {
			coords: [[-74.73, 98.61]],
			label: 'House of Respite',
			popup: 'The House of Respite\'s motto: "A soldier does not live on war alone." This is slightly misleading, however, for the club is not open to all soldiers, only Nilfgaardian officers (or those capable of passing themselves off as such)'
		}, {
			coords: [[-69.16, 82.13]],
			label: 'Kimbolt Way',
			popup: 'Road built on orders of Baron Kimbolt, meant to act as a safe escape route in case his plans to take power after King Foltest\'s death went awry'
		}, {
			coords: [[-67.09, 22.19]],
			label: 'The Orphans of Crookback Bog',
			popup: 'Orphaned and unwanted children from nearby villages find a roof over their head and a bowl of warm food here'
		}, {
			coords: [[-65.05, 37.53]],
			label: 'Ruined Tower',
			popup: 'Five centuries ago King Geddes sent his most loyal knight, Martin of Oakdale, to watch over the inhabitants of this troubled land. He also sent his least-loyal knight, to scrub Martin\'s latrines'
		}, {
			coords: [[-70.73, 43.68]],
			label: 'Ancient Oak',
			popup: 'Centuries ago bloody rituals in honor of the old gods were conducted here. Locals believe dark forces still haunt this place'
		}, {
			coords: [[-58.79, 30.63]],
			label: 'Downwarren',
			popup: 'Before the war, the inhabitants of this village were known for their intricate lacemaking and artisanal smithery'
		}, {
			coords: [[-54.39, 10.99]],
			label: 'Dragonslayer\'s Grotto',
			popup: 'Underneath this fortress lies a musty, rank cave in which a lost traveler will find nothing but a few fattened leeches - if he\'s lucky. Nevertheless, village elders insist on repeating the legend that gave the grotto its name: that of a legendary dragonslayer said to be buried somewhere deep inside'
		}, {
			coords: [[-48.75, 30.72]],
			label: 'Reardon Manor',
			popup: 'Abandoned estate of the once prominent Reardon family, relatives to the royal La Louve dynasty'
		}, {
			coords: [[-50.63, 67.32]],
			label: 'Benek',
			popup: 'This small village owes its name to its founding elder, who erected the largest windmill the land had ever seen on this spot - thereby providing work for all the village\'s inhabitants'
		}, {
			coords: [[-36.10, 51.68]],
			label: 'Toderas',
			popup: 'Village founded by King Griffin of Temeria, the husband of Clarissa of Toussaint. The king had planned to turn Toderas into a large, bustling university city, a sort of Temerian alternative to Oxenfurt, but, as any visitor can quickly attest, his efforts failed utterly'
		}, {
			coords: [[-34.42, 11.69]],
			label: 'Lurtch',
			popup: 'Once the Evves family estate was located here and the area bore the name of Lord Evves\' wife, Mortilanca. When the couple died, their will stipulated their land be turned over to their serfs. The grateful peasants then founded a village of freeholders and named it after their first ealdorman, Lurtch, who had previously served as the Evves family\'s butler'
		}, {
			coords: [[-36.81, -25.97]],
			label: 'Lindenvale',
			popup: 'One of Velen\'s many impoverished villages, its poverty deepened by war levies and the epidemic that spread after the Nilfgaardians\' arrival'
		}, {
			coords: [[-17.22, 40.17]],
			label: 'Marauders\' Bridge',
			popup: 'After the Battle of Velen, marauders swarmed over this bridge in their rush to scavenge the battlefield'
		}, {
			coords: [[-22.92, 71.59]],
			label: 'Grotto',
			popup: 'A dark and hostile place which creaks from time to time with unsettling, throaty noises...'
		}],

	// Smugglers' Cache
		smugglers: [{
			coords: [
				// Novigrad
				[67.37, -33.44],
				[71.07, -9.14],
				// S Novigrad
				[61.17, -84.11],
				// NW Velen
				[-58.90, -158.82]
			],
			label: "Smugglers' Cache",
			popup: 'Smuggled goods have been hidden here'
		}],


	// Spoils of War
		spoils: [{ // NE Velen
			coords: [[33.91, -68.51]],
			label: 'Spoils of War',
			popup: 'Search here for loot left behind after a battle or skirmish'
		}, { // NW Velen
			coords: [[-22.72, -32.04]],
			label: 'Spoils of War',
			popup: 'Search here for loot left behind after a battle or skirmish (lvl 4<span> Drowners</span>'
		}, { // SW Velen
			coords: [[-74.75, -144.93]],
			label: 'Spoils of War',
			popup: 'Search here for loot left behind after a battle or skirmish (lvl 10<span> Drowners</span>)'
		}]
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
