window.map_path   = 'kaer_morhen';
window.map_sWest  = L.latLng(-85, -180);
window.map_nEast  = L.latLng(41, 0);
window.map_center = [-66, -90];
window.map_mZoom  = 6;
window.mapdata_kaer_morhen = {
// Abandoned Site
	abandoned: [],

// Alchemy Supplies
	alchemy: [],

// Armourer
	armourer: [],

// Armourer's Table
	armourerstable: [{
		coords: [
			[-65.385,-83.870],
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

// Bandit Camp
	banditcamp: [],

// Barber
	barber: [],

// Blacksmith
	blacksmith: [],

// Brothel
	brothel: [],

// Entrance
	entrance: [{
		coords: [[6.403,-81.475]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc"),
	}, {
		coords: [[-0.308,-86.309]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-78.349,-79.102]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[-74.730,-107.600]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[-66.355,-93.735],
			[-64.951,-83.232]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: [{
		coords: [
			[-11.953,-73.960],
			[-33.615,-105.732],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

// Gwent Player
	gwent: [],

// Harbor
	harbor: [{
		coords: [
			[-33.615,-100.327],
			[-52.616,-88.418],
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

// Herbalist
	herbalist: [],

// Hidden Treasure
	hidden: [],

// Innkeep
	innkeep: [],

// Monster Den
	monsterden: [],

// Monster Nest
	monsternest: [],

// Notice Board
	notice: [],

// Person in Distress
	pid: [],

// Place of Power
	pop: [{
		coords: [[-2.987,-84.463]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}],

// Point of Interest
	poi: [],

// Shopkeeper
	shopkeeper: [],

// Sign Post
	signpost: [{
		coords: [[-54.162,-87.627]],
		label: $.t("k:signpost.label.lakesideHut"),
		popup: $.t("k:signpost.desc.lakesideHut")
	}, {
		coords: [[-74.032,-101.887]],
		label: $.t("k:signpost.label.ironMine"),
		popup: $.t("k:signpost.desc.ironMine")
	}, {
		coords: [[-68.065,-97.427]],
		label: $.t("k:signpost.label.kaerMorhen"),
		popup: $.t("k:signpost.desc.kaerMorhen")
	}],

// Smugglers' Cache
	smugglers: [],

// Spoils of War
	spoils: []
};
