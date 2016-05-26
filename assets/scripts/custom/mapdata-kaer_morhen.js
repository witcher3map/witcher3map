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
		coords: [[132.531, 70.109]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc"),
	}, {
		coords: [[127.781, 66.672]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[34.844, 71.719]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[46.063, 51.453]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[64.297, 61.328],
			[66.703, 68.813]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: [{
		coords: [
			[119.406, 75.438],
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
			[102.531, 56.703],
			[83.891, 65.078],
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
	}],

// Smugglers' Cache
	smugglers: [],

// Spoils of War
	spoils: []
};
