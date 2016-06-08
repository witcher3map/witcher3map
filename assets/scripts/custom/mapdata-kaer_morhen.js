window.map_path   = 'kaer_morhen';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(160, 128);
window.map_center = [64, 58];
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
			[65.813, 68.547],
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
		coords: [
			[135.875,73.875],
			[132.531, 70.109],
			[127.781, 66.672],
			[34.844, 71.719],
			[46.063, 51.453],
			[88.188,73.125],
			[75.422,43.063],
			[70.906,67.406],
			[61.391,88.547],
			[50.219,60.594],
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[64.297, 61.328],
			[66.703, 68.813],
			[62.156,61.688],
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: [{
		coords: [
			[119.313,74.906],
			[102.625, 52.906],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

// Gwent Player
	gwent: [],

// Harbor
	harbor: [{
		coords: [
			[85.938,60.000],
			[83.891, 65.078],
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

// Herbalist
	herbalist: [],

// Hidden Treasure
	hidden: [{
		coords: [
			[33.531,73.688],
			[46.531,49.531],
			[58.000,91.625],
			[73.500,37.906],
			[90.219,69.406],
			[117.359,59.234],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

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
		coords: [[125.781, 67.891]],
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
		coords: [[82.109, 65.656]],
		label: $.t("k:signpost.label.lakesideHut"),
		popup: $.t("k:signpost.desc.lakesideHut")
	}, {
		coords: [[47.922, 55.547]],
		label: $.t("k:signpost.label.ironMine"),
		popup: $.t("k:signpost.desc.ironMine")
	}, {
		coords: [[61.172, 58.734]],
		label: $.t("k:signpost.label.kaerMorhen"),
		popup: $.t("k:signpost.desc.kaerMorhen")
	}, {
		coords: [[62.531,43.719]],
		label: $.t("k:signpost.label.bastion"),
		popup: $.t("k:signpost.desc.bastion")
	}, {
		coords: [[116.625,58.813]],
		label: $.t("k:signpost.label.ruinedwatchtower"),
		popup: $.t("k:signpost.desc.ruinedwatchtower")
	}],

// Smugglers' Cache
	smugglers: [],

// Spoils of War
	spoils: []
};
