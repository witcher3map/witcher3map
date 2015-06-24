$(document).on("loadMapdata", function () {
	window.map_path   = 'white_orchard';
	window.map_sWest  = L.latLng(-85, -180);
	window.map_nEast  = L.latLng(0, 45);
	window.map_center = [-65, -65];
	window.map_mZoom  = 5;

	processData({
	// Abandoned Site
		abandoned: [{
			coords: [
				[-77.786, -48.604],
				[-65.293, -152.842]
			],
			label: $.t("abandoned.label"),
			popup: $.t("abandoned.desc")
		}],

	// Alchemy Supplies
		alchemy: [],

	// Armourer
		armourer: [{
			coords: [[-69.069, -88.945]],
			label: $.t("w:armourer.amateurLabel"),
			popup: $.t("w:armourer.desc")
		}],

	// Armourer's Table
		armourerstable: [{
			coords: [
				[-25.362, -152.539],
			],
			label: "Armorer's Table",
			popup: "Armorer's tables grant your gear increased armor for a limited duration"
		}],

	// Bandit Camp
		banditcamp: [{
			coords: [
				[-81.596, -122.168],
				[-73.800, -43.418],
				[-53.678, -157.720],
				[-34.307, -25.537],
				[-72.462, -16.699],
				[-66.000, -19.688]
			],
			label: $.t("w:banditcamp.label"),
			popup: $.t("w:banditcamp.desc")
		}],

	// Barber
		barber: [],

	// Blacksmith
		blacksmith: [{
			coords: [[-26.981, -151.348]],
			label: $.t("w:blacksmith.amateurLabel"),
			popup: $.t("w:blacksmith.desc")
		}],

	// Brothel
		brothel: [],

	// Entrance
		entrance: [{
			coords: [[-79.592, -84.199]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc"),
		}, {
			coords: [[-77.897, -75.586]],
			label: $.t("entrance.label"),
			popup: $.t("entrance.desc")
		}],

	// Grindstone
		grindstone: [{
			coords: [
				[-68.948, -88.006],
				[-68.648, -88.206],
				[-64.624, -155.215],
				[-26.902, -149.941]
			],
			label: $.t("grindstone.label"),
			popup: $.t("grindstone.desc")
		}],

	// Guarded Treasure
		guarded: [{
			coords: [
				[-74.914, -59.766],
				[-48.517, -167.695],
				[-29.645, -96.943],
				[-27.333, -134.077],
				[-74.776, 0.352]
			],
			label: $.t("guarded.label"),
			popup: $.t("guarded.desc")
		}],

	// Gwent Player
		gwent: [{
			coords: [[-65.946, -81.387]],
			label: $.t("w:gwent.label.player"),
			popup: 'Gamble your hard earned coin playing Gwent here. Disappears after progressing through story quests'
		}],

		harbor: [],

	// Herbalist
		herbalist: [{
			coords: [[-66.267, -132.627]],
			label: $.t("herbalist.label"),
			popup: $.t("alchemy.desc")
		}, {
			coords: [[-77.542, -49.043]],
			label: $.t("herbalist.label"),
			popup: 'This merchant appears after liberating the area. Here you can buy alchemy ingredients'
		}],

	// Hidden Treasure
		hidden: [{
			coords: [
				[-47.220, -111.006],
				[-39.028, -56.865],
				[-28.613, -42.188]
			],
			label: $.t("hidden.label"),
			popup: $.t("hidden.desc")
		}],

	// Innkeep
		innkeep: [{
			coords: [[-65.731, -80.068]],
			label: 'White Orchard Inn',
			popupTitle: $.t("w:innkeep.popup"),
			popup: 'Sells Gwent cards, and drink. Disappears after progressing through story quests'
		}],

	// Monster Den
		monsterden: [],

	// Monster Nest
		monsternest: [{
			coords: [
				[-14.264, -95.625],
				[-45.027, -0.308],
				[-64.206, 9.712]
			],
			label: $.t("monsternest.label"),
			popup: $.t("monsternest.desc")
		}],

	// Notice Board
		notice: [{
			coords: [[-67.643, -89.385]],
			label: $.t("notice.label"),
			popup: $.t("notice.desc")
		}],

	// Person in Distress
		pid: [],

	// Place of Power
		pop: [{
			coords: [[-81.492, -106.699]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-79.703, -52.822]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-51.536, -130.386]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-34.235, -94.043]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-13.325, -97.559]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
			popup: $.t("pop.desc")
		}, {
			coords: [[-43.771, 0.308]],
			label: $.t("pop.label"),
			popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
			popup: $.t("pop.desc")
		}],

	// Point of Interest
		poi: [{
			coords: [[-49.611, 7.998]],
			label: 'Lootable Battlefield',
			popup: 'This battlefield can be looted for easy early game coin'
		}, {
			coords: [[-72.5, -17]],
			label: 'Serpentine steel sword',
			popup: 'Viper School Diagram (1/2)'
		}, {
			coords: [[-32.953, -95.142]],
			label: 'Serpentine silver sword',
			popup: 'Viper School Diagram (2/2), below the chapel'
		}, {
			coords: [[-60, 2]],
			label: 'Crystal Skull',
			popup: 'From the Intro Video, unlocks a dialog with Yennifer at her \'The Last Wish\' Quest. Can only be picked up if you haven\'t left White Orchard yet'
		}],

	// Shopkeeper
		shopkeeper: [{
			coords: [[-66.320, -75.674]],
			label: $.t("w:shopkeeper.label.shopkeeper"),
			popup: 'Sells Gwent cards, crafting supplies, and Temerian: blinders, saddle, saddlebags, armour',
		}, {
			coords: [[-66.338, -155.654]],
			label: $.t("w:shopkeeper.label.shopkeeper"),
			popup: 'Sells runestones, alchemy supplies and food',
		}],

	// Sign Post
		signpost: [{
			coords: [[-78.955, -85.869]],
			label: 'Abandoned Village',
			popup: 'A few years ago, a group of armed men marched into this settlement. They butchered its inhabitants and burned down their homes. Not a soul has dwelt here since that black and bloody day'
		}, {
			coords: [[-77.916, -109.819]],
			label: 'Broken Bridge',
			popup: 'This bridge was destroyed by retreating Temerian troops during the Nilfgaardian attack. It was shoddily built to begin with. Good riddance'
		}, {
			coords: [[-67.136, -72.202]],
			label: 'Woesong Bridge',
			popup: "So named because of a girl who once would stand on the bridge and sing, waiting for her beloved's return"
		}, {
			coords: [[-65.440, -141.855]],
			label: 'Sawmill',
			popup: 'White Orchard is famous not only for its premium fruit, but also for the top-quality, furniture-grade lumber harvested from the Vulpine Woods'
		}, {
			coords: [[-47.339, -89.912]],
			label: 'Mill',
			popup: "Carts haul grain from all the surrounding villages to White Orchard's mill"
		}, {
			coords: [[-20.468, -153.281]],
			label: 'Nilfgaardian Garrison',
			popup: "This strategic point guards White Orchard's main river crossing. Nilfgaardian troops have taken it over"
		}, {
			coords: [[-46.073, -13.271]],
			label: 'Cackler Bridge',
			popup: 'Bridge named in honor of a woman who went mad from unfulfilled love. After her heart snapped, she spent all her days running up and down this bridge while laughing hysterically'
		}, {
			coords: [[-63.015, -4.482]],
			label: 'Crossroads',
			popup: 'The road splits here. One fork leads to Vizima, the other to Novigrad'
		}, {
			coords: [[-68.106, -37.266]],
			label: 'Ford',
			popup: 'Before the war, merchants and travelers would cross the river here. Now only Nilfgaardian soldiers traverse this path'
		}, {
			coords: [[-71.413, 1.230]],
			label: 'Ransacked Village',
			popup: 'A band of soldiers attacked this village early one morning. They slaughtered most of the villagers in their beds, and the lucky few who fled to the woods in time had nothing left to return to'
		}],

	// Smugglers' Cache
		smugglers: [{
			coords: [[-76.720, -31.201]],
			label: "Smugglers' Cache",
			popup: $.t("smugglers.desc")
		}],

	// Spoils of War
		spoils: [{
			coords: [[-12.726, -128.452]],
			label: $.t("spoils.label"),
			popup: $.t("spoils.desc")
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
});
