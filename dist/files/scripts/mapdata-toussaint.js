window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(160, 160);
window.map_center = [64, 58];
window.map_mZoom  = 6;
window.mapdata_toussaint = {
// Abandoned Site
	abandoned: [],

// Alchemy Supplies
	alchemy: [],

// Armourer
	armourer: [],

// Armourer's Table
	armourerstable: [{
		coords: [
			[55.281,75.328],
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
	entrance: [],

// Grindstone
	grindstone: [{
		coords: [
			[56.641,75.313],
			[100.563,142.563]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: [{
		coords: [],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

// Gwent Player
	gwent: [],

// Harbor
	harbor: [{
		coords: [
			[0,0],
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

// Herbalist
	herbalist: [],

// Hidden Treasure
	hidden: [],

// Innkeep
	innkeep: [{
			coords: [[94.359,91.813]],
			label: $.t("t:innkeep.label.cockatraice"),
			popup: $.t("t:innkeep.desc.cockatraice")
		}],

// Monster Den
	monsterden: [],

// Monster Nest
	monsternest: [],

// Notice Board
	notice: [{
		coords: [
			[126.563,69.063],
			[108.375,60.313],
			[93.875,91.250],
			[59.750,75.000],
			[77.250,113.250],
			[43.500,99.000],
			[89.000,132.750],
			[120.875,77.938],

		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

// Person in Distress
	pid: [],

// Place of Power
	pop: [{
		coords: [[0,0]],
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
		coords: [[110.125,90.813]],
		label: $.t("t:signpost.label.dulcineawindmill"),
		popup: $.t("t:signpost.desc.dulcineawindmill")
	}, {
		coords: [[96.156,92.422]],
		label: $.t("t:signpost.label.cockatraice"),
		popup: $.t("t:signpost.desc.cockatraice")
	}, {
		coords: [[121.531,77.781]],
		label: $.t("t:signpost.label.plegmund"),
		popup: $.t("t:signpost.desc.plegmund")
	}, {
		coords: [[0,0]],
		label: $.t("t:signpost.label.kaerMorhen"),
		popup: $.t("t:signpost.desc.kaerMorhen")
	}, {
		coords: [[0,0]],
		label: $.t("t:signpost.label.kaerMorhen"),
		popup: $.t("t:signpost.desc.kaerMorhen")
	}, {
		coords: [[0,0]],
		label: $.t("t:signpost.label.kaerMorhen"),
		popup: $.t("t:signpost.desc.kaerMorhen")
	}],

// Smugglers' Cache
	smugglers: [],

//// (Side) Quests
sidequests: [{
		coords: [[93.578,92.125]],
		label: $.t("t:sidequests.label.gwenttournment"),
		popup: $.t("t:sidequests.desc.gwenttournment")
	}, {
		coords: [[93.891,92.625]],
		label: $.t("t:sidequests.label.WildKingdom"),
		popup: $.t("t:sidequests.desc.WildKingdom")
	}, {
		coords: [[92.641,91.953]],
		label: $.t("t:sidequests.label.kingforhire"),
		popup: $.t("t:sidequests.desc.kingforhire")
	}, {
		coords: [[92.641,91.953]],
		label: $.t("t:sidequests.label.winewars"),
		popup: $.t("t:sidequests.desc.winewars")
	}],
// Gwent: To Everything - Turn, Turn, Tournamenet! - Level 38 - 93.578,92.125 (NB)
// Mutual of Beauclair's Wild Kingdom - Level 46 - 93.891,92.625 (NB)
// King for Hire - Level None? - 92.641,91.953 (NB)
// Wine Wars: Belgaard - Level 37 - 92.641,91.953 (NB?)

//// Contracts
contracts: [{
		coords: [[93.578,91.7503]],
		label: $.t("t:contracts.label.biggamehunter"),
		popup: $.t("t:contracts.desc.biggamehunter")
	}],

// Big Game Hunter - Level 37 - 93.578,91.750	 (NB)

// Spoils of War
	spoils: []
};
