window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(160, 160);
window.map_center = [64, 58];
window.map_mZoom  = 6;
window.mapdata_toussaint = {

// Abandoned Site
	abandoned: [{
		coords: [
			[67.031,51.719], //new
			[66.875,37.406], //new
			[78.656,45.859], //new
			[82.063,47.391], //new
			[90.109,47.094], //new
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

// Alchemy Supplies
	alchemy: [{
		coords: [[52.719,62.609]], //new
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}],

// Armourer
	armourer: [{
		coords: [[39.969,81.000]], //new
		label: $.t("armourerjourney.label"),
		popup: $.t("armourerjourney.desc")
	},{
		coords: [[50.734,65.547]],  //todo
		label: $.t("armouretodo.label"),
		popup: $.t("armourertodo.desc")
	}],

// Armourer's Table
	armourerstable: [],

// Bandit Camp
	banditcamp: [{
		coords: [
			[52.188,100.469], //new
		],
		label: $.t("sidebar.banditcamp"),
		//popup: $.t("banditcamp.desc")
	}],



// Barber
	barber: [{
		coords: [
			[64.531,63.641],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

// Blacksmith
	blacksmith: [{
		coords: [[0,0]], //check todo
		label: $.t("blacksmithjourney.label"),
		popup: $.t("blacksmithjourney.desc")
	},{
		coords: [[0,0]], //check todo
		label: $.t("blacksmithgardmaster.label"),
		popup: $.t("blacksmithgardmaster.desc")
	}],


// Brothel
	brothel: [],

// Entrance
	entrance: [{
		coords: [
			[86.047,72.938], //new
			[77.063,54.563],
			[93.047,42.656], //new
			[47.000,79.578], //new
			[47.234,78.734], //new
			[48.438,92.609], //new
		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[80.609,109.656], //new //todo check
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
	harbor: [],

// Herbalist
	herbalist: [{
		coords: [
			[85.328,53.734], //new
			[51.047,66.250], //new
		],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}],




// Hidden Treasure
	hidden: [{
		coords: [
			[69.203,42.016], //new
			[92.125,54.938], //new
			[88.922,53.391], //new
			[57.859,85.031], //new!
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

// Innkeep
	innkeep: [{
			coords: [[75.406,75.188]],
			label: $.t("t:innkeep.label.cockatraice"),
			popup: $.t("t:innkeep.desc.cockatraice")
		},{
				coords: [[64.656,62.734]],
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		},{
				coords: [[51.438,61.234]],
				label: $.t("t:innkeep.label.xxx"), //new
				popup: $.t("t:innkeep.desc.xxx")
		},{
				coords: [[41.328,81.109]], //new
				label: $.t("t:innkeep.label.xxx"),
				popup: $.t("t:innkeep.desc.xxx")
		}],


// Monster Den
	monsterden: [],

// Monster Nest
	monsternest: [{
		coords: [
			[70.156,74.109], //new
			[48.172,83.641], //new
			[58.969,42.047], //new
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],


// Notice Board
	notice: [{
		coords: [
			// [126.563,69.063], //todo ??
			[84.391,55.125], //new
			[75.141,74.844], //new
			[52.047,63.500], //new //todo check
			[63.875,89.469], //new //todo check
			[41.750,80.313],
			[71.094,102.594], //new //todo check
			[93.609,65.781], //new //todo check

		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

// Person in Distress
	pid: [{
		coords: [
			[88.813,41.219], //new
		],
		label: $.t("pid.label"),
		popup: $.t("pid.desc")
	}],

// Place of Power
	pop: [],

// Point of Interest
	poi: [],

// Shopkeeper
	shopkeeper: [{
		coords: [
			[85.391,72.594], //new //after you cleared the Vineyard
			[50.719,65.109], //new
		],
		label: $.t("sidebar.shopkeeper"),
		//popup: $.t("shopkeeper.desc")
	}],

// Sign Post
	signpost: [{
		coords: [[85.578,74.844]], //new
		label: $.t("t:signpost.label.dulcineawindmill"),
		popup: $.t("t:signpost.desc.dulcineawindmill")
	}, {
		coords: [[76.563,75.891]], //new
		label: $.t("t:signpost.label.cockatraice"),
		popup: $.t("t:signpost.desc.cockatraice")
	}, {
		coords: [[70.719,69.219]], //new
		label: $.t("t:signpost.label.corvobianco"),
		popup: $.t("t:signpost.desc.corvobianco")
	}, {
		coords: [[58.594,55.828]],
		label: $.t("t:signpost.label.palace"),
		popup: $.t("t:signpost.desc.palace")
	}, {
		coords: [[52.188,53.859]],
		label: $.t("t:signpost.label.palacegardens"),
		popup: $.t("t:signpost.desc.palacegardens")
	}, {
		coords: [[49.188,67.703]], //new
		label: $.t("t:signpost.label.gate"),
		popup: $.t("t:signpost.desc.gate")
	}, {
		coords: [[39.563,79.563]], //new
		label: $.t("t:signpost.label.francollarts"),
		popup: $.t("t:signpost.desc.francollarts")
	}, {
		coords: [[77.813,41.813]],
		label: $.t("t:signpost.label.fort"),
		popup: $.t("t:signpost.desc.fort")
	}, {
		coords: [[91.297,47.344]],
		label: $.t("t:signpost.label.fox"),
		popup: $.t("t:signpost.desc.fox")
	}, {
		coords: [[85.422,55.938]],
		label: $.t("t:signpost.label.castelravello"),
		popup: $.t("t:signpost.desc.castelravello")
	}, {
		coords: [[47.969,78.094]], //new
		label: $.t("t:signpost.label.cemetry"),
		popup: $.t("t:signpost.desc.cemetry")
	}, {
		coords: [[55.359,88.313]], //new!
		label: $.t("t:signpost.label.prison"),
		popup: $.t("t:signpost.desc.prison")
	}],


// Smugglers' Cache
	smugglers: [],

//// (Side) Quests
sidequests: [{
		coords: [[74.60,75.50]],
		label: $.t("t:sidequests.label.gwenttournment"),
		popup: $.t("t:sidequests.desc.gwenttournment")
	}, {
		coords: [[74.60,77.00]],
		label: $.t("t:sidequests.label.WildKingdom"),
		popup: $.t("t:sidequests.desc.WildKingdom")
	}, {
		coords: [[74.60,76.50]],
		label: $.t("t:sidequests.label.kingforhire"),
		popup: $.t("t:sidequests.desc.kingforhire")
	}, {
		coords: [[74.60,76.00]],
		label: $.t("t:sidequests.label.winewars"),
		popup: $.t("t:sidequests.desc.winewars")
	}, {
		coords: [[52.063,60.797]], //new
		label: $.t("t:sidequests.label.facethestrage"),
		popup: $.t("t:sidequests.desc.facethestrage")
	}, {
		coords: [[94.609,50.297]],
		label: $.t("t:sidequests.label.bigfeet"),
		popup: $.t("t:sidequests.desc.bigfeet")
	}, {
		coords: [[83.891,55.156]],
		label: $.t("t:sidequests.label.knightstale"),
		popup: $.t("t:sidequests.desc.knightstale")
	}],


// Gwent: To Everything - Turn, Turn, Tournamenet! - Level 38 - 93.578,92.125 (NB)
// Mutual of Beauclair's Wild Kingdom - Level 46 - 93.891,92.625 (NB)
// King for Hire - Level None? - 92.641,91.953 (NB)
// Wine Wars: Belgaard - Level 37 - 92.641,91.953 (NB?)

//// Contracts
contracts: [{
		coords: [[74.60,74.50]],
		label: $.t("t:contracts.label.biggamehunter"),
		popup: $.t("t:contracts.desc.biggamehunter")
	},{
			coords: [[74.60,75.00]],
			label: $.t("t:contracts.label.coldasice"),
			popup: $.t("t:contracts.desc.coldasice")
		}],
// Big Game Hunter - Level 37 - 93.578,91.750	 (NB)

//// Vintercontract
//	vintercontract: [{
//			coords: [[110.172,87.125]],
//			label: $.t("t:vintercontract.label.1"),
//			popup: $.t("t:vintercontract.desc.1")
//		},{
//				coords: [[49.047,92.781]],
//				label: $.t("t:vintercontract.label.2"),
//				popup: $.t("t:vintercontract.desc.2")
//	}],


// Spoils of War
	spoils: []
};
