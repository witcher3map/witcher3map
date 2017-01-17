window.map_path   = 'toussaint';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(144, 144);
window.map_center = [64, 58];
window.map_mZoom  = 6;
window.mapdata_toussaint = {

// Abandoned Site
	abandoned: [{
		coords: [
			[67.547,51.734],
			[66.875,37.406],
			[78.656,45.859],
			[82.344,47.219],
			[90.109,47.094],
			[32.391,68.297],
			[112.875,66.172],
			[88.188,101.797],
			[91.531,78.688],
			[31.141,71.953],
			[57.656,94.109],
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}],

// Alchemy Supplies
	alchemy: [{
		coords: [[52.719,62.609]],
		label: $.t("alchemy.label"),
		popup: $.t("alchemy.desc")
	}],

// Armourer
	armourer: [{
		coords: [
			[39.969,81.000],
			[64.956,65.109]
		],
		label: $.t("armourerjourney.label"),
		popup: $.t("armourerjourney.desc")
	},{
		coords: [[50.734,65.547]],  //todo
		label: $.t("armouretodo.label"),
		popup: $.t("armourertodo.desc")
	},{
		coords: [[50.281,64.297]],  //todo
		label: $.t("armourexxx.label"),
		popup: $.t("armourerxxx.desc")
	}],

// Armourer's Table
	armourerstable: [{
		coords: [
			[50.500,64.453],
			[116.538,71.366],
			[65.422,65.344],
			[105.047,79.422],
			[69.609,100.609],
			[40.047,81.156],
			[86.156,63.734],
			[98.203,43.688],
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

// Bandit Camp
	banditcamp: [{
		coords: [
			[52.188,100.469],
			[94.984,42.109],
			[114.250,75.781],
			[86.313,109.484],
			[102.938,75.563],
			[37.984,54.531],
			[84.906,40.797],
			[97.719,49.750],
			[108.438,65.031],
			[111.828,72.938],
			[77.266,103.531],
			[73.391,109.063],
			[73.969,113.563],
			[68.828,115.984],
		],
		label: $.t("banditcamp.label"),
		popup: $.t("banditcamp.desc")
	}],

// Barber
	barber: [{
		coords: [
			[64.531,63.641],
		],
		label: $.t("barber.label"),
		popup: $.t("barber.desc")
	}],

// Hanse Base
	hansebase: [{
		coords: [
			[116.047,71.625],
			[96.438,44.750],
			[80.813,108.313]
		],
		label: $.t("t:hansebase.label"),
		popup: $.t("t:hansebase.desc")
	}],

// Blacksmith
	blacksmith: [{
		coords: [
			[49.813,64.359],
			[65.113,64.688]
		],
		label: $.t("blacksmithxxx.label"),
		popup: $.t("blacksmithxxx.desc")
	}],

// Brothel
	brothel: [],

// Entrance
	entrance: [{
		coords: [
			[86.047,72.938],
			[79.422,53.250],
			[93.141,41.828],
			[47.000,79.578],
			[47.234,78.734],
			[48.594,92.766],
			[58.688,84.641],
			[49.781,100.625],
			[48.188,100.484],
			[28.047,81.891],
			[65.156,43.703],
			[95.313,41.875],
			[95.172,45.188],
			[102.203,64.344],
			[46.203,51.609],
			[43.078,56.094],
			[72.172,87.641],
			[43.438,95.797],
			[60.344,113.328],
			[108.891,82.438],
			[107.656,80.844],
			[94.844,94.359],
			[95.922,100.891],
			[96.688,106.219],
			[90.969,86.672],
			[84.031,84.203],
			[77.375,87.125],
			[73.063,86.375],
			[50.109,84.234],
			[39.047,67.703],
			[35.469,59.328],
			[56.484,44.031],
			[57.844,50.828],
			[59.344,51.313],
			[91.766,41.672],
			[93.125,53.063],
			[64.109,51.500],
			[68.516,114.156],

		],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			[79.625,109.094],
			[50.219,64.422],
			[116.500,71.188],
			[104.969,79.594],
			[69.625,100.609],
			[40.063,80.938],
			[65.391,65.125],
			[86.047,63.703],
			[98.125,43.656],
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: 	[{
		coords: [
			[44.781,103.531],
			[46.063,88.219],
			[37.375,63.016],
			[66.922,91.969],
			[111.828,72.859],
			[37.875,93.297],
			[89.641,93.328],
			[99.234,79.234],
			[59.875,111.578],
			[69.859,81.422],
			[73.344,109.203],
			[73.875,113.547],
			[76.563,113.656],
			[106.391,86.313],
			[114.172,75.891],
			[79.594,67.422],
			[84.938,40.813],
			[86.094,43.375],
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc")
	}],

// Gwent Player
	gwent: [{
		coords: [
			[51.297,60.781],
			[51.047,66.250],
			[53.672,61.313],
			[52.919,62.609],
			[50.750,65.109],
			[50.481,64.297],
			[40.169,81],
			[52.328,65.000],
			[55.328,61.891],
			[41.528,81.109],
			[58.359,72.672],
			[58.328,72.000],
			[64.856,62.734],
			[64.831,63.641],
			[65.313,64.688],
			[65.156,65.109],
			[85.628,53.734],
			[63.653,90.625],
			[75.606,75.188],
		],
		label: $.t("t:misc.label.gwent"),
		popup: $.t("t:misc.desc.gwent")
	}],

// Harbor
	harbor: [{
		coords: [
			[47.297,60.734],
			[56.109,74.750],
			[61.781,88.000],
			[96.219,60.594],
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

// Herbalist
	herbalist: [{
		coords: [
			[85.328,53.734],
			[51.047,66.250],
		],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}],

// Hidden Treasure
	hidden: [{
		coords: [
			[69.203,42.016],
			[92.125,54.938],
			[89.141,53.375],
			[57.859,85.031],
			[77.141,42.047],
			[102.297,64.109],
			[42.547,54.688],
			[24.234,72.422],
			[96.047,80.453],
			[44.219,64.484],
			[63.453,81.234],
			[61.188,102.641],
			[54.250,106.828],
			[94.969,42.063],
			[95.984,88.625],
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	}],

// Innkeep
	innkeep: [{
		coords: [[75.406,75.188]],
		label: $.t("t:signpost.label.cockatrice"),
		popup: $.t("t:innkeep.desc.cockatrice")
	},{
		coords: [[64.656,62.734]],
		label: $.t("t:innkeep.label.xxx"),
		popup: $.t("t:innkeep.desc.xxx")
	},{
		coords: [[51.438,61.234]],
		label: $.t("t:innkeep.label.pheasantry"),
		popup: $.t("t:innkeep.desc.pheasantry")
	},{
		coords: [[41.328,81.109]],
		label: $.t("t:innkeep.label.xxx"),
		popup: $.t("t:innkeep.desc.xxx")
	},{
		coords: [[90.703,47.578]],
		label: $.t("t:innkeep.label.auberge"),
		popup: $.t("t:misc.desc.aftercleared")
	},{
		coords: [[63.453,90.625]],
		label: $.t("t:innkeep.label.barrelandbung"),
		popup: $.t("t:misc.desc.barrelandbung")
	},{
		coords: [[113.891,66.391]],
		label: $.t("t:innkeep.label.salamander"),
		popup: $.t("t:misc.desc.aftercleared")
	},{
		coords: [[52.128,65]],
		label: $.t("t:innkeep.label.houseofpleasure"),
		popup: $.t("t:innkeep.desc.houseofpleasure")
	}],

// Knight Errant in Distress
	kid: [{
		coords: [
			[77.156,103.594],
			[97.813,49.516],
			[38.203,54.75],
		],
		label: $.t("t:kid.label"),
		popup: $.t("t:kid.desc")
	}],

// Monster Den
	monsterden: [{
		coords: [
			[65.266,43.938],
			[75.656,89.453],
			[96.047,100.828],
			[107.422,76.516],
			[89.453,108.266],
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc")
	}],

// Monster Nest
	monsternest: [{
		coords: [
			[70.156,74.109],
			[48.188,84.078],
			[58.813,41.594],
			[32.188,79.984],
			[33.250,84.797],
			[93.188,110.281],
			[76.328,86.969],
			[68.766,115.000],
			[75.484,40.313],
			[75.328,40.578],
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc")
	}],

// Notice Board
	notice: [{
		coords: [
			// [126.563,69.063], //todo ??
			[84.391,55.125],
			[75.141,74.844],
			[53.375,63.719],
			[64.328,89.297],
			[41.750,80.313],
			[71.719,102.219],
			[93.609,65.781],  //todo check
		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

// Person in Distress
	pid: [{
		coords: [
			[88.750,40.984],
			[112.859,81.688],
			[60.125,113.047],
			[108.438,82.219],
			[50.953,102.719],
		],
		label: $.t("pid.label"),
		popup: $.t("pid.desc")
	}],

// Place of Power
	pop: [{
		coords: [[48.422,100.266]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	},{
		coords: [[61.531,44.969]],
		label: $.t("pop.label") + $.t(" ")+ $.t("t:misc.desc.insideden"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	},{
		coords: [[36.359,59.375]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	},{
		coords: [[68.625,114.8447]],
		label: $.t("pop.label") + $.t(" ")+ $.t("t:misc.desc.insidecave"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	},{
		coords: [[119.188,74.125]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

// Point of Interest
	poi: [{
		coords: [[69.984,42.813]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") + $.t("t:poi.label.steel"),
		popup: $.t("t:poi.desc.steel")
	},{
		coords: [[97.984,60.766]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") +$.t("t:poi.label.trousersandboots"),
		popup: $.t("t:poi.desc.manticoretrousersandboots")
	},{
		coords: [[46.984,51.500]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") +$.t("t:poi.label.silver"),
		popup: $.t("t:poi.desc.manticoresilver")
	},{
		coords: [[69.078,116.578]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.griffin") +$.t(" ") +$.t("t:poi.label.steelgauntletsboots"),
		popup: $.t("t:poi.desc.steelgauntletsboots")
	},{
		coords: [[65.641,91.719]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.ursine") +$.t(" ") +$.t("t:poi.label.silverarmorgauntlers"),
		popup: $.t("t:poi.desc.silverarmorgauntlers")
	},{
		coords: [[80.469,107.956]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.griffin") +$.t(" ") +$.t("t:poi.label.silverarmortrousers"),
		popup: $.t("t:poi.desc.silverarmortrousers")
	},{
		coords: [[73.156,86.656]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.ursine") +$.t(" ") +$.t("t:poi.label.steelbootstrousers"),
		popup: $.t("t:poi.desc.steelbootstrousers")
	},{
		coords: [[113.609,81.078]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.feline") +$.t(" ") +$.t("t:poi.label.armor"),
		popup: $.t("t:poi.desc.armor")
	},{
		coords: [[116.781,71.500]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.feline") +$.t(" ") +$.t("t:poi.label.trousersboots"),
		popup: $.t("t:poi.desc.trousersboots")
	},{
		coords: [[107.422,77]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.feline") +$.t(" ") +$.t("t:poi.label.steelsilvergauntlets"),
		popup: $.t("t:poi.desc.steelbootstrousers")
	},{
		coords: [[49.781,101]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.wolven") +$.t(" ") +$.t("t:poi.label.all"),
		popup: $.t("t:poi.desc.all")
	},{
		coords: [[91.547,106.172]],
		label: $.t("t:misc.desc.witchergear") +$.t(" ") +$.t("t:misc.desc.manticore") +$.t(" ") +$.t("t:poi.label.gauntlets"),
		popup: $.t("t:poi.desc.gauntlets")
	}
],

// Shopkeeper
	shopkeeper: [{
		coords: [
			[85.391,72.594],  //after you cleared the Vineyard
			[50.719,65.109],
			[49.609,63.219],
			[63.734,89.188],
			[113.047,81.781],
		],
		label: $.t("sidebar.shopkeeper"),
		popup: $.t("shopkeeper.desc")
	}],

// Signal Fire
	signalfire: [{
		coords: [
			[81.219,109.656],
			[117.016,71.484],
		],
		label: $.t("t:signalfire.label"),
		popup: $.t("t:signalfire.desc")
	}],

// Sign Post
	signpost: [{
		coords: [[85.578,74.844]],
		label: $.t("t:signpost.label.dulcineawindmill"),
		popup: $.t("t:signpost.desc.dulcineawindmill")
	}, {
		coords: [[76.563,75.891]],
		label: $.t("t:signpost.label.cockatrice"),
		popup: $.t("t:signpost.desc.cockatrice")
	}, {
		coords: [[70.719,69.219]],
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
		coords: [[49.188,67.703]],
		label: $.t("t:signpost.label.gate"),
		popup: $.t("t:signpost.desc.gate")
	}, {
		coords: [[39.563,79.563]],
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
		coords: [[47.969,78.094]],
		label: $.t("t:signpost.label.cemetry"),
		popup: $.t("t:signpost.desc.cemetry")
	}, {
		coords: [[55.359,88.313]],
		label: $.t("t:signpost.label.prison"),
		popup: $.t("t:signpost.desc.prison")
	}, {
		coords: [[46.781,92.297]],
		label: $.t("t:signpost.label.farm"),
		popup: $.t("t:signpost.desc.farm")
	}, {
		coords: [[46.406,99.547]],
		label: $.t("t:signpost.label.ruins"),
		popup: $.t("t:signpost.desc.ruins")
	}, {
		coords: [[35.734,94.438]],
		label: $.t("t:signpost.label.cottage"),
		popup: $.t("t:signpost.desc.cottage")
	}, {
		coords: [[27.500,80.031]],
		label: $.t("t:signpost.label.mutnaruins"),
		popup: $.t("t:signpost.desc.mutnaruins")
	}, {
		coords: [[48.063,63.016]],
		label: $.t("t:signpost.label.embassy"),
		popup: $.t("t:signpost.desc.embassy")
	}, {
		coords: [[53.859,63.641]],
		label: $.t("t:signpost.label.granplace"),
		popup: $.t("t:signpost.desc.granplace")
	}, {
		coords: [[64.734,64.125]],
		label: $.t("t:signpost.label.tunier"),
		popup: $.t("t:signpost.desc.tunier")
	}, {
		coords: [[96.391,59.031]],
		label: $.t("t:signpost.label.statue"),
		popup: $.t("t:signpost.desc.statue")
	}, {
		coords: [[34.719,67.375]],
		label: $.t("t:signpost.label.hortense"),
		popup: $.t("t:signpost.desc.hortense")
	}, {
		coords: [[64.609,90.953]],
		label: $.t("t:signpost.label.flovive"),
		popup: $.t("t:signpost.desc.flovive")
	}, {
		coords: [[69.688,115.422]],
		label: $.t("t:signpost.label.fortussar"),
		popup: $.t("t:signpost.desc.fortussar")
	}, {
		coords: [[78.328,107.422]],
		label: $.t("t:signpost.label.montcranecastle"),
		popup: $.t("t:signpost.desc.montcranecastle")
	}, {
		coords: [[82.219,85.750]],
		label: $.t("t:signpost.label.duntynnecastle"),
		popup: $.t("t:signpost.desc.duntynnecastle")
	}, {
		coords: [[79.984,94.141]],
		label: $.t("t:signpost.label.duntynnehillside"),
		popup: $.t("t:signpost.desc.duntynnehillside")
	}, {
		coords: [[113.828,74.422]],
		label: $.t("t:signpost.label.arthachpalaceruins"),
		popup: $.t("t:signpost.desc.arthachpalaceruins")
	}, {
		coords: [[110.344,66.078]],
		label: $.t("t:signpost.label.thesilversalamanderinn"),
		popup: $.t("t:signpost.desc.thesilversalamanderinn")
	}, {
		coords: [[104.281,80.156]],
		label: $.t("t:signpost.label.tradingpost"),
		popup: $.t("t:signpost.desc.tradingpost")
	}, {
		coords: [[93.203,73.578]],
		label: $.t("t:signpost.label.coronatavineyard"),
		popup: $.t("t:signpost.desc.coronatavineyard")
	}, {
		coords: [[88.438,100.969]],
		label: $.t("t:signpost.label.basanefarm"),
		popup: $.t("t:signpost.desc.basanefarm")
	}, {
		coords: [[65.719,74.813]],
		label: $.t("t:signpost.label.croixmill"),
		popup: $.t("t:signpost.desc.croixmill")
	}, {
		coords: [[57.328,64.453]],
		label: $.t("t:signpost.label.coopersgate"),
		popup: $.t("t:signpost.desc.coopersgate")
	}, {
		coords: [[54.844,68.781]],
		label: $.t("t:signpost.label.haborgate"),
		popup: $.t("t:signpost.desc.haborgate")
	}, {
		coords: [[58.500,70.047]],
		label: $.t("t:signpost.label.sansebastian"),
		popup: $.t("t:signpost.desc.sansebastian")
	}, {
		coords: [[55.859,72.984]],
		label: $.t("t:signpost.label.beauclairport"),
		popup: $.t("t:signpost.desc.beauclairport")
	}, {
		coords: [[92.188,90.406]],
		label: $.t("t:signpost.label.duntynnecrossroads"),
		popup: $.t("t:signpost.desc.duntynnecrossroads")
	}, {
		coords: [[93.547,66.094]],
		label: $.t("t:signpost.label.plegmundsbridge"),
		popup: $.t("t:signpost.desc.plegmundsbridge")
	}, {
		coords: [[78.234,52.672]],
		label: $.t("t:signpost.label.chuchotecave"),
		popup: $.t("t:signpost.desc.chuchotecave")
	}, {
		coords: [[76.953,65.938]],
		label: $.t("t:signpost.label.sansretourvalley"),
		popup: $.t("t:signpost.desc.sansretourvalley")
	}, {
		coords: [[58.563,42.484]],
		label: $.t("t:signpost.label.riouxcannesoutpost"),
		popup: $.t("t:signpost.desc.riouxcannesoutpost")
	}, {
		coords: [[44.078,54.172]],
		label: $.t("t:signpost.label.seidhellyghadamphitheater"),
		popup: $.t("t:signpost.desc.seidhellyghadamphitheater")
	}, {
		coords: [[43.031,70.906]],
		label: $.t("t:signpost.label.belgaardvineyard"),
		popup: $.t("t:signpost.desc.belgaardvineyard")
	}, {
		coords: [[45.078,65.547]],
		label: $.t("t:signpost.label.lebiodasgate"),
		popup: $.t("t:signpost.desc.lebiodasgate")
	}, {
		coords: [[71.750,100.203]],
		label: $.t("t:signpost.label.ardaisoquarry"),
		popup: $.t("t:signpost.desc.ardaisoquarry")
	}, {
		coords: [[59.938,100.188]],
		label: $.t("t:signpost.label.casteldacciaabandonedestate"),
		popup: $.t("t:signpost.desc.casteldacciaabandonedestate")
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
		coords: [[52.063,60.797]],
		label: $.t("t:sidequests.label.facethestrage"),
		popup: $.t("t:sidequests.desc.facethestrage")
	}, {
		coords: [[83.891,55.156]],
		label: $.t("t:sidequests.label.knightstale"),
		popup: $.t("t:sidequests.desc.knightstale")
	}, {
		coords: [[83.891,55.156]],
		label: $.t("t:sidequests.label.knightstale"),
		popup: $.t("t:sidequests.desc.knightstale")
	}, {
		coords: [[37.594,97.641]], //todo makers
		label: $.t("t:sidequests.label.spoon"),
		popup: $.t("t:sidequests.desc.spoon")
	}, {
		coords: [[57.891,85.313]],
		label: $.t("t:sidequests.label.escapology"),
		popup: $.t("t:sidequests.desc.escapology")
	}, {
		coords: [[49.578,62.969]],
		label: $.t("t:sidequests.label.tilldeath"),
		popup: $.t("t:sidequests.desc.tilldeath")
	}, {
		coords: [[50.719,65.875]],
		label: $.t("t:sidequests.label.master"),
		popup: $.t("t:sidequests.desc.master")
	}, {
		coords: [[77.141,42.5]],
		label: $.t("t:sidequests.label.suffering"),
		popup: $.t("t:sidequests.desc.hidden")
	}, {
		coords: [[52.281,65.234]],
		label: $.t("t:sidequests.label.granite"),
		popup: $.t("t:sidequests.desc.granite")
	}, {
		coords: [[52.844,63.5]],
		label: $.t("t:sidequests.label.wildkingdom"),
		popup: $.t("t:sidequests.desc.wildkingdom")
	}, {
		coords: [[52.844,64]],
		label: $.t("t:sidequests.label.smittenkight"),
		popup: $.t("t:sidequests.desc.smittenkight")
	}, {
		coords: [[52.844,64.5]],
		label: $.t("t:sidequests.label.placelikehome"),
		popup: $.t("t:sidequests.desc.placelikehome")
	}, {
		coords: [[52.844,65]],
		label: $.t("t:sidequests.label.onlyone"),
		popup: $.t("t:sidequests.desc.onlyone") + $.t(' <a href="https://wiiare.in/witcher3/embodiment-of-the-five-virtues/" target="_blank">[Questhelp]</a>')
	}, {
		coords: [[42.500,55.313]],
		label: $.t("t:sidequests.label.enjoytheplay"),
		popup: $.t("t:sidequests.desc.enjoytheplay")
	}, {
		coords: [[50.453,63.734]],
		label: $.t("t:sidequests.label.paperchase"),
		popup: $.t("t:sidequests.desc.paperchase")
	}, {
		coords: [[91.094,86.703],[49.047,92.781],[85.563,72.172]],
		label: $.t("t:sidequests.label.vintnercontract"),
		popup: $.t("t:sidequests.desc.vintnercontract")
	}, {
		coords: [[51.438,63.797]],
		label: $.t("t:sidequests.label.portait"),
		popup: $.t("t:sidequests.desc.portait")
	}, {
		coords: [[94.516,93.641]],
		label: $.t("t:sidequests.label.phantoms"),
		popup: $.t("t:sidequests.desc.phantoms")
	}, {
		coords: [[42.625, 89.625]],
		label: $.t("t:sidequests.label.cosplay"),
		popup: $.t("t:sidequests.desc.cosplay")
	},

	// Quests Related to The Propeht Lebioda's Footsteps
	// They actually, at least in GoY Edition, have their own icon.
	{
		coords: [[94.609,50.297]],
		label: $.t("t:sidequests.label.bigfeet1"),
		popup: $.t("t:sidequests.desc.footsteps")
	}, {
		coords: [[92.063,63.344]],
		label: $.t("t:sidequests.label.bigfeet2"),
		label: $.t("t:sidequests.label.footsteps"),
	}, {
		coords: [[89.781,56.984]],
		label: $.t("t:sidequests.label.bigfeet3"),
		popup: $.t("t:sidequests.desc.footsteps")
	}, {
		coords: [[107.750,72.266]],
		label: $.t("t:sidequests.label.bigfeet4"),
		popup: $.t("t:sidequests.desc.footsteps")
	}, {
		coords: [[101.484,61.531]],
		label: $.t("t:sidequests.label.bigfeet5"),
		popup: $.t("t:sidequests.desc.footsteps")
	}],

//// Contracts
	contracts: [{
		coords: [[74.60,74.50]],
		label: $.t("t:contracts.label.biggamehunter"),
		popup: $.t("t:contracts.desc.biggamehunter")
	},{
		coords: [[74.60,75.00]],
		label: $.t("t:contracts.label.coldasice"),
		popup: $.t("t:contracts.desc.coldasice")
	},{
		coords: [[71.719,102.719]],
		label: $.t("t:contracts.label.bonvineblues"),
		popup: $.t("t:contracts.desc.bonvineblues")
	},{
		coords: [[64.328,89.797]],
		label: $.t("t:contracts.label.tufo"),
		popup: $.t("t:contracts.desc.tufo")
	}],

//// Vineyard Infestation
	vineyardinfestation: [{
		coords: [
			[75.469,62.594],
			[97.859,70.625],
			[46.453,75.563],
			[79.125,86.391],
			[77.875,95.344]
		],
		label: $.t("sidebar.vineyardinfestation"),
		popup: $.t("vineyardinfestation.desc")
	}],

// Spoils of War
	spoils: []
};
