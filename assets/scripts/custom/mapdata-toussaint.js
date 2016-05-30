window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(160, 160);
window.map_center = [64, 58];
window.map_mZoom  = 6;
window.mapdata_toussaint = {

// Abandoned Site
	abandoned: [{
		coords: [
			[82.344,55.453],
			[81.563,33.281],
			[99.406,46.422],
			[105.250,48.156],
			[116.969,48.500],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

// Alchemy Supplies
	alchemy: [{
		coords: [[59.297,72.688]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}],

// Armourer
	armourer: [{
		coords: [[79.344,75.016],[40.125,100.906]],
		label: $.t("armourerjourney.label"),
		popup: $.t("armourerjourney.desc")
	},{
		coords: [[56.000,75.453]],
		label: $.t("armouretodo.label"),
		popup: $.t("armourertodo.desc")
	}],

// Armourer's Table
	armourerstable: [{
		coords: [[79.172,75.703],[56.641,75.313]],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

// Bandit Camp
	banditcamp: [],

// Barber
	barber: [{
		coords: [
			[78.063,73.594],
			[0,0]
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

// Blacksmith
	blacksmith: [{
		coords: [[79.344,75.016]],
		label: $.t("blacksmithjourney.label"),
		popup: $.t("blacksmithjourney.desc")
	},{
		coords: [[56.328,77.078]],
		label: $.t("blacksmithgardmaster.label"),
		popup: $.t("blacksmithgardmaster.desc")
	}],
//todo 56.641,75.313 some blacksmtih

// Brothel
	brothel: [],

// Entrance
	entrance: [{
		coords: [
			[110.813,87.875],
			[77.063,54.563],
			[120.672,40.703],
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[0,0],
			[100.563,142.563],
			[79.469,75.984]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: 	[],
	//100.844,79.375


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
	herbalist: [{
			coords: [[56.594,78.141]],
			label: $.t("t:herbalist.label.xxx"),
			popup: $.t("t:herbalist.desc.xxx")
	},{
			coords: [[109.750,58.344]],
			label: $.t("t:herbalist.label.xxx"),
			popup: $.t("t:herbalist.desc.xxx")
	}],


// Hidden Treasure
	hidden: [{
		coords: [
			[85.313,40.594],
			[119.797,60.359],
			[115.609,57.750],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

// Innkeep
	innkeep: [{
			coords: [[94.359,91.813]],
			label: $.t("t:innkeep.label.cockatraice"),
			popup: $.t("t:innkeep.desc.cockatraice")
		},{
				coords: [[78.281,72.17]],
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		},{
				coords: [[57.453,70.938]],
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		},{
				coords: [[42.031,100.844]],
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		}],


// Monster Den
	monsterden: [],

// Monster Nest
	monsternest: [{
		coords: [
			[86.094,89.672],
			[52.625,104.969],
			[69.469,40.828],
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],


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
	pid: [{
		coords: [
			[115.203,39.375],
		],
		label: $.t("pid.label"),
		popup: $.t("pid.desc")
	}],

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
	shopkeeper: [{
		coords: [
			[109.672,87.4383],
			[56.500,76.641],
		],
		label: $.t("shopkeeper.label"),
		popup: $.t("shopkeeper.desc")
	}],

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
		coords: [[187.156,81.969]],
		label: $.t("t:signpost.label.corvobianco"),
		popup: $.t("t:signpost.desc.corvobianco")
	}, {
		coords: [[68.734,61.984]],
		label: $.t("t:signpost.label.palace"),
		popup: $.t("t:signpost.desc.palace")
	}, {
		coords: [[58.594,59.219]],
		label: $.t("t:signpost.label.palacegardens"),
		popup: $.t("t:signpost.desc.palacegardens")
	}, {
		coords: [[53.797,80.406]],
		label: $.t("t:signpost.label.gate"),
		popup: $.t("t:signpost.desc.gate")
	}, {
		coords: [[39.438,98.344]],
		label: $.t("t:signpost.label.francollarts"),
		popup: $.t("t:signpost.desc.francollarts")
	}, {
		coords: [[98.438,40.453]],
		label: $.t("t:signpost.label.fort"),
		popup: $.t("t:signpost.desc.fort")
	}, {
		coords: [[119.063,48.813]],
		label: $.t("t:signpost.label.fox"),
		popup: $.t("t:signpost.desc.fox")
	}, {
		coords: [[109.656,61.719]],
		label: $.t("t:signpost.label.castelravello"),
		popup: $.t("t:signpost.desc.castelravello")
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
	}, {
		coords: [[58.672,69.984]],
		label: $.t("t:sidequests.label.facethestrage"),
		popup: $.t("t:sidequests.desc.facethestrage")
	}, {
		coords: [[123.125,53.641]],
		label: $.t("t:sidequests.label.bigfeet"),
		popup: $.t("t:sidequests.desc.bigfeet")
	}, {
		coords: [[108.328,59.875]],
		label: $.t("t:sidequests.label.knightstale"),
		popup: $.t("t:sidequests.desc.knightstale")
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
	},{
			coords: [[93.578,91.7503]],
			label: $.t("t:contracts.label.coldasice"),
			popup: $.t("t:contracts.desc.coldasice")
		}],
// Big Game Hunter - Level 37 - 93.578,91.750	 (NB)

//// Vintercontract
//	vintercontract: [{
//			coords: [[110.172,87.125]],
//			label: $.t("t:vintercontract.label.1"),
//			popup: $.t("t:vintercontract.desc.1")
//		}],

// Spoils of War
	spoils: []
};
