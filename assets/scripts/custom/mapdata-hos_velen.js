window.map_path   = 'hos_velen';
window.map_sWest  = L.latLng(0, 0);
window.map_nEast  = L.latLng(256, 224);
window.map_center = [120, 120];
window.map_mZoom  = 6;
window.mapdata_hos_velen = {
// Abandoned Site
	abandoned: [{
		coords: [
			// NW Velen
			[82.797, 87.984],
			[106.219, 31.016],
			[86.703, 27.938],
			[75.875, 26.844]
		],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc")
	}, { // NE Velen
		coords: [[115.828, 133.875]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 4<span> ' + $.t("v:monsters.drowners") + '</span>)'
	}, {
		coords: [[138.031, 160.625]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.drowners") + '</span>)'
	}, {
		coords: [[122.281, 179.266]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.ghouls") + '</span> &amp; lvl 11<span> ' + $.t("v:monsters.alghoul") + '</span>)'
	}, { // SW Velen
		coords: [[29.984, 48.000]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.bandits") + '</span>)'
	}, {
		coords: [[33.969, 99.250]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 9<span> ' + $.t("v:monsters.endregas") + '</span>)'
	}, { // SE Velen
		coords: [[99.938, 130.172]],
		label: $.t("abandoned.label"),
		popup: $.t("abandoned.desc") + '(lvl 5<span> ' + $.t("v:monsters.bandits") + '</span>)'
	}],

// Alchemy Supplies
	alchemy: [{ //Novigrad
		coords: [[218.984,116.516]],
		label: $.t("v:alchemy.label") + '*',
		popup: $.t("v:alchemy.desc*")
	}, {
		coords: [[226.328, 92.500]],
		label: $.t("v:alchemy.label"),
		popup: $.t("v:alchemy.desc")
	}, { // NW Velen
		coords: [[114.813,49.547]],
		label: $.t("v:alchemy.label"),
		popupTitle: $.t("v:alchemy.pellar"),
		popup: $.t("v:alchemy.desc")
	}],

// Armourer
	armourer: [{ // Novigrad
		coords: [[208.672, 100.828]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, { // Oxenfurt
		coords: [[158.047, 166.344]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, { // NE Velen
		coords: [[129.688, 118.719]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc") + ' ' + $.t("v:misc.rescue") + ' <a href="#6/-18.761/-25.785">' + $.t("v:misc.locations.petesLanding") + '</a>'
	}, { // NW Velen
		coords: [[104.734,77.531]],
		label: $.t("armourer.labelJourneyman"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[82.266, 40.422]],
		label: $.t("armourer.labelAmateur"),
		popup: $.t("armourer.desc")
	}, {
		coords: [[104.906, 77.063]],
		label: $.t("armourer.labelMaster"),
		popupTitle: $.t("v:armourer.yoana"),
		popup: $.t("v:armourer.quest") + $.t("armourer.desc")
	}],

// Armourer's Table
	armourerstable: [{
		coords: [
			// Novigrad
			[211.531, 97.141],
			[210.750, 99.016],
			// Oxenfurt
			[160.922, 164.297],
			// NE Velen
			[129.844, 119.094],
			// NW Velen
			[106.609, 51.953],
			[105.375, 76.094],
			[68.625, 74.219],
			[82.313, 40.984],
			[75.859, 25.828],
			// SE Velen
			[101.047, 166.734],
			[102.688, 109.234]
		],
		label: $.t("armourerstable.label"),
		popup: $.t("armourerstable.desc")
	}],

// Bandit Camp
	banditcamp: [{
		coords: [
			// NE Velen
			[136.625, 89.219],
			// NW Velen
			[110.625, 60.016],
			[94.344, 37.016],
			[88.375, 34.984],
			[85.125, 33.172],
			[96.938, 31.047],
			[72.953, 24.188],
			[77.656, 17.750],
			// SW Velen
			[67.531, 23.656],
			[66.703, 26.719],
			// SE Velen
			[106.188, 115.703]
		],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc")
	}, { // S Novigrad
		coords: [[175.547, 83.125]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, { // E Novigrad
		coords: [[209.156, 162.734]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 7)'
	}, { // NE Velen
		coords: [[128.469, 151.563]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[134.406, 129.094]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, { // SE Velen
		coords: [[38.828, 153.984]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 10)'
	}, {
		coords: [[83.094, 166.906]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[108.234, 145.344]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[97.828, 124.594]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 7-9)'
	}, {
		coords: [[137.688, 187.797]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, {
		coords: [[47.000, 123.172]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc") + '(lvl 9)'
	}, { // SW Velen
		coords: [[57.922, 26.797]],
		label: $.t("v:banditcamp.label"),
		popup: $.t("v:banditcamp.desc")
	}],

// Barber
	barber: [{
		coords: [
			// Novigrad
			[215.016, 104.297],
			[214.484, 113.281],
			// Oxenfurt
			[153.734,164.906]
		],
		label: $.t("v:barber.label"),
		popup: $.t("v:barber.desc")
	}, { // NW Velen
		coords: [[81.891, 69.703]],
		label: $.t("v:barber.label"),
		popup: $.t("v:barber.desc") + $.t("v:barber.free") + $.t("v:misc.rescue") + ' <a href="#6/-35.362/-127.430">' + $.t("v:barber.rescueLocation") + '</a>'
	}],

// Blacksmith
	blacksmith: [{ // Novigrad
		coords: [[197.094, 98.766]],
		label: $.t("blacksmith.labelMaster"),
		popupTitle: $.t("v:blacksmith.hattori"),
		popup: $.t("v:blacksmith.quest") + $.t("blacksmith.desc")
	}, {
		coords: [[205.875, 100.891]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[211.188, 97.266]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // Oxenfurt
		coords: [[152.125, 170.453]],
		label: $.t("blacksmith.labelJourneyman"),
		popup: $.t("blacksmith.desc")
	}, { // NW Velen
		coords: [[106.328, 52.313]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, {
		coords: [[67.844, 74.031]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}, { // SE Velen
		coords: [[103.156, 108.813]],
		label: $.t("blacksmith.labelAmateur"),
		popup: $.t("blacksmith.desc")
	}],

// Brothel
	brothel: [{ // Novigrad
		coords: [[201.547, 98.188]],
		label: $.t("v:brothel.label.crippledKate"),
		popupTitle: $.t("v:brothel.popup.crippledKate"),
		popup: $.t("v:brothel.desc")
	}, {
		coords: [[221.109, 104.109]],
		label: $.t("v:brothel.label.passiflora"),
		popupTitle: $.t("v:brothel.popup.passiflora"),
		popup: $.t("v:brothel.desc")
	}],

// Entrance
	// todo, entrance to what?
	entrance: [{ // Novigrad
		coords: [[229.984, 88.844]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // NE Novigrad
		coords: [[237.406, 151.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // SE Novigrad
		coords: [[179.438, 175.406]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[183.219, 191.281]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[156.031, 209.125]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // S Novigrad
		coords: [[173.750, 77.156]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // NE Velen
		coords: [[148.141, 107.047]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // NW Velen
		coords: [[130.313, 41.109]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[108.234, 82.484]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[106.703, 72.578]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[152.172, 48.781]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // SW Velen
		coords: [[44.531, 39.563]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[41.688, 46.266]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, { // SE Velen
		coords: [[53.891, 126.719]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[56.984, 155.984]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[88.688, 107.078]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[111.266, 179.234]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[79.094, 185.234]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[93.344, 155.813]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[101.266, 177.547]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[98.906, 177.766]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[30.172, 129.672]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[83.766, 149.953]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}, {
		coords: [[43.094, 163.641]],
		label: $.t("entrance.label"),
		popup: $.t("entrance.desc")
	}],

// Grindstone
	grindstone: [{
		coords: [
			// Novigrad
			[211.547, 97.453],
			[210.641, 99.266],
			// S Novigrad
			[168.094, 91.391],
			// Oxenfurt
			[160.734, 164.500],
			// NE Velen
			[129.922, 118.313],
			// NW Velen
			[153.016, 46.609],
			[106.594, 52.625],
			[105.156, 76.313],
			[82.734, 70.828],
			[68.234, 74.516],
			[82.328, 40.094],
			[75.875, 25.531],
			// SE Velen
			[100.703, 167.141],
			[102.531, 108.906]
		],
		label: $.t("grindstone.label"),
		popup: $.t("grindstone.desc")
	}],

// Guarded Treasure
	guarded: [{
		coords: [
			// NE Velen
				[144.641, 87.578],
			// NW Velen
				[107.281, 42.953],
				[98.313, 40.141],
				[98.578, 21.844],
			// SE Velen
				[49.641, 150.531],
				[84.875, 123.281]
		],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: ""})
	}, { // NE Novigrad
		coords: [[215.016, 126.328]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("v:monsters.hag.water") + "</span>)"})
	}, {
		coords: [[229.563, 124.656]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 15 <span>" + $.t("v:monsters.hag.bilge") + "</span>)"})
	}, {
		coords: [[239.594, 104.219]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 23 <span>" + $.t("v:monsters.armoredArachas") + "</span>)"})
	}, { // SE Novigrad
		coords: [[164.563, 198.594]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 20 <span>" + $.t("v:monsters.leshen") + "</span>)"})
	}, { // S Novigrad
		coords: [[171.500, 119.516]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 18 <span>" + $.t("v:monsters.wyvern") + "</span>)"})
	}, {
		coords: [[184.609, 58.609]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 15 <span>" + $.t("v:monsters.wraiths.noon") + "</span>)"})
	}, { // NE Velen
		coords: [[121.781, 136.625]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 13 <span>" + $.t("v:monsters.alghoul") + "</span>)"})
	}, {
		coords: [[122.484, 167.156]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 9 <span>" + $.t("v:monsters.drowners") + "</span>)"})
	}, { // NW Velen
		coords: [[131.297, 69.172]],
		label: $.t("guarded.label"),
		popup: 'Available after the \'Master Armorers\' (lvl 26) quest. ' + $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("v:monsters.cyclops") + "</span>)"})
	}, {
		coords: [[70.859, 44.063]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 7 <span>" + $.t("v:monsters.wraiths.wraiths") + "</span>)"})
	}, {
		coords: [[93.516, 99.344]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("v:monsters.forktail") + "</span>)"})
	}, {
		coords: [[91.563, 19.516]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 4 <span>" + $.t("v:monsters.drowners") + "</span>)"})
	}, {
		coords: [[147.047, 57.047]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("v:monsters.basilisk") + "</span>)"})
	}, { // SW Velen
		coords: [[37.094, 55.438]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("v:monsters.hag.water") + "</span>)"})
	}, {
		coords: [[23.172, 78.391]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 18 <span>" + $.t("v:monsters.wraiths.noon") + "/" + $.t("v:monsters.wraiths.night") + "</span>)"})
	}, {
		coords: [[18.750, 78.531]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("v:monsters.gargoyle") + "</span>)"})
	}, {
		coords: [[34.438, 93.125]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 13 <span>" + $.t("v:monsters.alghoul") + "</span>)"})
	}, { // SE Velen
		coords: [[56.953, 200.891]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 24 <span>" + $.t("v:monsters.elemental.earth") + "</span>)"})
	}, {
		coords: [[43.328, 149.781]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 20 <span>" + $.t("v:monsters.hag.bilge") + "</span>)"})
	}, {
		coords: [[28.078, 148.406]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 14 <span>" + $.t("v:monsters.wyvern") + "</span>)"})
	}, {
		coords: [[24.063, 150.188]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 19 <span>" + $.t("v:monsters.cyclops") + "</span>)"})
	}, {
		coords: [[69.406, 162.688]],
		label: $.t("guarded.label"),
		popup: $.t("guarded.desc", {monster: "(lvl 8 <span>" + $.t("v:monsters.hag.water") + "</span>)"})
	}],

// Gwent Player
	gwent: [{ // Novigrad
		coords: [[205.438, 99.578]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[209.703, 102.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.bookMerchant"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[200.859, 98.078]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.crippledKate"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[220.813, 103.844]],
		label: $.t("v:gwent.label.tournament"),
		popupTitle: $.t("v:gwent.popup.tournament"),
		popup: $.t("v:gwent.desc.tournament")
	}, {
		coords: [[204.547, 109.125]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[199.141, 101.578]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[201.953, 102.656]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.herbalist"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[199.188, 126.813]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[198.813, 113.438]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.merchant"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[199.109, 107.094]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[206.406, 96.734]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[214.328, 110.844]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[206.063, 101.203]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[207.625, 101.047]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.banker"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[209.453, 94.750]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.fishmonger"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[211.859, 97.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[212.156, 96.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[216.281, 104.438]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[210.859, 113.031]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[211.969, 114.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.loanShark"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[226.516, 92.531]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.alchemist"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[219.125, 116.844]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.alchemist"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[209.516, 104.938]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.warn") + $.t("v:gwent.desc.player")
	}, { // S Novigrad
		coords: [[185.375, 117.734]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, { // SE Novigrad
		coords: [[170.047, 179.250]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.herbalist"),
		popup: $.t("v:gwent.desc.player")
	}, { // Oxenfurt
		coords: [[156.094, 165.297]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.innkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[158.281, 166.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[159.344, 164.703]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[152.344, 170.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, { // NE Velen
		coords: [[129.922, 118.688]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player") + $.t("v:misc.rescue") + '<a href="#6/-18.761/-25.785">' + $.t("v:misc.locations.petesLanding") + '</a>'
	}, { // NW Velen
		coords: [[107.641, 54.969]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[106.688, 52.172]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[101.750, 76.297]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[104.297, 76.969]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.quartermaster"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[104.813, 77.609]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[107.078, 74.234]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.bloodyBaron"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[84.000, 70.125]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player") + $.t("v:misc.rescue") + '<a href="#6/-61.954/-33.893">' + $.t("v:misc.locations.banditsCamp") + '</a>'
	}, {
		coords: [[70.688, 73.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[81.969, 41.453]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[82.453, 40.422]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.armorer"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[105.125, 77.000]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.yoana"),
		popup: $.t("v:gwent.desc.player")
	}, { // SE Velen
		coords: [[99.984, 110.703]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.shopkeeper"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[103.469, 108.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.blacksmith"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[33.672, 204.953]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.quartermaster"),
		popup: $.t("v:gwent.desc.player")
	}, {
		coords: [[78.219, 147.219]],
		label: $.t("v:gwent.label.player"),
		popupTitle: $.t("v:gwent.popup.player"),
		popup: $.t("v:gwent.desc.quest") + $.t("v:gwent.desc.player")
	}],

// Harbor
	harbor: [{
		coords: [
			// Novigrad
			[199.828, 86.109],
			// Oxenfurt
			[157.563, 161.406],
			// NE Velen
			[123.422, 172.734],
			[114.156, 134.563],
			[114.813, 104.563],
			// NW Velen
			[82.125, 89.125],
			[95.344, 26.344],
			[107.375, 41.438],
			// SW Velen
			[53.266, 75.359],
			[28.094, 46.609],
			// SE Velen
			[33.641, 119.953]
		],
		label: $.t("harbor.label"),
		popup: $.t("harbor.desc")
	}],

// Herbalist
	herbalist: [{
		coords: [
			// Novigrad
			[207.172, 103.047],
			[201.656, 102.625],
			// S Novigrad
			[184.547, 118.500],
			// SE Novigrad
			[169.859, 179.094]
		],
		label: $.t("herbalist.label"),
		popup: $.t("herbalist.desc")
	}, { // NW Velen
		coords: [[86.609, 29.156]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, {
		coords: [[107.125, 31.641]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, { // SW Velen
		coords: [[34.578, 98.656]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}, { // SE Velen
		coords: [[99.828, 129.547]],
		label: $.t("herbalist.label"),
		popup: $.t("v:misc.liberated") + $.t("herbalist.desc")
	}],

// Hidden Treasure
	hidden: [{
		coords: [
			// NW Velen
			[153.063, 45.953],
			[107.531, 36.859],
			[104.422, 26.078],
			[94.859, 28.031],
			// SW Velen
			[54.469, 51.313],
			// SE Velen
			[105.625, 148.141]
		],
		label: $.t("hidden.label"),
		popup: $.t("hidden.desc")
	},{ // S Novigrad
		coords: [[154.313, 96.734]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 6 <span>' + $.t("v:monsters.nekkers") + '</span>'})
	}, {
		coords: [[168.563, 78.875]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 15 <span>' + $.t("v:monsters.mucknixers") + '</span>'})
	}, { // NE Velen
		coords: [[115.891, 134.969]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 10 <span>' + $.t("v:monsters.drowners") + '</span>'})
	}, {
		coords: [[130.344, 173.906]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("v:monsters.drowners") + '</span>'})
	}, {
		coords: [[164.563, 146.844]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("v:monsters.drowners") + '</span>'})
	}, {
		coords: [[125.625, 143.594]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("v:monsters.foglet") + '</span>'})
	}, {
		coords: [[171.813,139.453]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 18 <span>' + $.t("v:monsters.hag.bilge") + '</span>'})
	}, {
		coords: [[166.922, 155.281]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 32 <span>' + $.t("v:monsters.basilisk") + '</span>'})
	}, { // NW Velen
		coords: [[86.016, 17.078]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("v:monsters.drowners") + '</span>'})
	}, { // SE Velen
		coords: [[50.922, 182.641]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 22 <span>' + $.t("v:monsters.fiend") + '</span>'})
	}, {
		coords: [[99.469, 197.203]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("v:monsters.foglet") + '</span>'})
	}, {
		coords: [[112.969, 162.563]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 9 <span>' + $.t("v:monsters.bandits") + '</span>'})
	}, { // SW Velen
		coords: [[56.438, 20.781]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 28 <span>' + $.t("v:monsters.hag.grave") + '</span>'})
	}, {
		coords: [[51.297, 34.500]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 10 <span>' + $.t("v:monsters.bandits") + '</span>'})
	}, {
		coords: [[55.031, 49.828]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 13 <span>' + $.t("v:monsters.wraiths.wraiths") + '</span>'})
	}, {
		coords: [[39.859, 70.531]],
		label: $.t("hidden.label"),
		popup: $.t("hidden.guarded", {monster: 'lvl 4 <span>' + $.t("v:monsters.drowners") + '</span>'})
	}],

// Innkeep
	innkeep: [{ // Novigrad
		coords: [[206.000, 96.547]],
		label: $.t("v:innkeep.inns.theGoldenSturgen"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[220.609, 104.172]],
		label: $.t("v:innkeep.inns.passiflora"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[214.000, 110.672]],
		label: $.t("v:innkeep.inns.theNowhere"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	}, {
		coords: [[198.859, 106.875]],
		label: $.t("v:innkeep.inns.rosemaryAndThyme"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	}, {
		coords: [[198.875, 126.656]],
		label: $.t("v:innkeep.inns.sevenCatsInn"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[209.328, 104.719]],
		label: $.t("v:innkeep.inns.theKingfisher"),
		popup: $.t("v:misc.disappearingTrader") + $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // S Novigrad
		coords: [[185.125, 118.047]],
		label: $.t("v:innkeep.inns.cunnyOfTheGoose"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // Oxenfurt
		coords: [[156.063, 165.172]],
		label: $.t("v:innkeep.inns.theAlchemy"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // NE Velen
		coords: [[128.141, 95.516]],
		label: $.t("v:innkeep.inns.innAtTheCrossroads"),
		popup: $.t("v:innkeep.desc.gwentAndDrink")
	}],

// Monster Den
	monsterden: [{
		coords: [
			// NE Velen
			[142.984, 118.125],
			// SE Velen
			[81.656, 136.359]
		],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: ''})
	}, { // NE Novigrad
		coords: [[237.641, 105.016]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 19 <span>' + $.t("v:monsters.golem") + '</span>)'})
	}, { // S Novigrad
		coords: [[165.891, 99.375]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 16 <span>' + $.t("v:monsters.rabidRockTroll") + '</span> &amp; lvl 18 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}],

// Monster Nest
	monsternest: [{
		coords: [
			// NE Velen
			[153.734, 135.203],
			[160.500, 127.328],
			// NW Velen
			[110.656, 88.094],
			[100.078, 66.047],
			[82.969, 86.828],
			// SW Velen
			[44.984, 40.906],
			[45.984, 41.656],
			// SE Velen
			[60.047, 126.375]
		],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: ''})
	}, { // S Novigrad
		coords: [[154.141, 85.000]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, {
		coords: [[169.094, 95.281]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.endregas") + '</span>)'})
	}, {
		coords: [[170.313, 98.000]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.endregas") + '</span>)'})
	}, {
		coords: [[170.266, 112.969]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, { // NE Velen
		coords: [[133.422, 162.531]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[133.750, 161.688]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[125.938, 147.391]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[160.750, 137.891]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, { // SW Velen
		coords: [[43.578, 108.563]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 4&amp;9 <span>' + $.t("v:monsters.drowners") + '</span>)'})
	}, { // SE Velen
		coords: [[86.891, 168.969]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[91.297, 165.547]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[88.094, 161.422]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[87.891, 158.172]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[96.875, 185.094]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("v:monsters.wyvern") + '</span>)'})
	}, {
		coords: [[95.656, 185.125]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("v:monsters.wyvern") + '</span>)'})
	}],

// Notice Board
	notice: [{
		coords: [
			// Novigrad
			[209.078, 103.609],
			[205.641, 97.031],
			[215.844, 105.000],
			[188.594, 100.641],
			// NE Novigrad
			[237.172, 130.297],
			// E Novigrad
			[198.047, 126.578],
			[205.750, 157.922],
			// S Novigrad
			[185.500, 116.000],
			// Oxenfurt
			[158.156, 165.109],
			// NE Velen
			[131.547, 119.453],
			[128.953, 95.047],
			[153.344, 112.781],
			// NW Velen
			[82.078, 42.078],
			[104.547, 78.828],
			[69.234, 75.438],
			// SE Velen
			[77.266, 147.797],
			[100.641, 109.469],
			[33.688, 206.219]
		],
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

// Person in Distress
	pid: [{
		coords: [
			// NE Velen
			[147.578, 119.578],
			// NW Velen
			[102.500, 33.828]
		],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: ''})
	}, { // SE Novigrad
		coords: [[142.984, 199.375]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.bandits") + '</span>)'})
	}, { // NE Velen
		coords: [[115.391, 107.094]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 10-16 <span>' + $.t("v:monsters.bandits") + '</span>)'})
	}, { // NW Velen
		coords: [[72.656, 103.797]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 5 <span>' + $.t("v:monsters.bandits") + '</span>)'})
	}],

// Place of Power
	pop: [{ // Novigrad
		coords: [[230.391, 98.688]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, { // E Novigrad
		coords: [[200.813, 162.688]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, { // NW Velen
		coords: [[152.688, 47.781]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}, { // SW Velen
		coords: [[15.063, 76.14]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[53.313, 52.578]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("v:misc.wanderingInTheDark") + $.t("pop.desc")
	}, { // SE Velen
		coords: [[35.688, 133.594]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("v:misc.baldMountain") + $.t("pop.desc")
	}, {
		coords: [[55.922, 154.672]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[80.219, 141.359]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

// Point of Interest
	poi: [{ // Novigrad
		coords: [[210.156, 109.453]],
		label: $.t("v:poi.label.triss"),
		popup: $.t("v:poi.desc.triss")
	}, {
		coords: [[199.000, 107.484]],
		label: $.t("v:poi.label.dandelionAndZoltan"),
		popup: $.t("v:poi.desc.dandelionAndZoltan")
	}, {
		coords: [[217.453, 110.297]],
		label: $.t("v:poi.label.vilmeriusHospital"),
		popup: $.t("v:poi.desc.vilmeriusHospital")
	}, { // NW Velen
		coords: [[89.828, 48.344]],
		label: $.t("v:poi.label.keira"),
		popup: $.t("v:poi.desc.keira")
	}, { // Velen
		coords: [[184.469, 62.484]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.crossbow.feline"),
		popup: $.t("poi.desc.witcherGear.crossbow.feline")
	}, {
		coords: [[166.359, 99.516]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.feline.superior"),
		popup: $.t("poi.desc.witcherGear.silversword.feline.superior")
	}, {
		coords: [[178.547, 106.328]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.feline.standard"),
		popup: $.t("poi.desc.witcherGear.steelsword.feline.standard")
	}, {
		coords: [[212.688, 113.969]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.silversword.feline.enhanced")
	}, {
		coords: [[182.563, 191.609]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.feline.standard"),
		popup: $.t("poi.desc.witcherGear.silversword.feline.standard")
	}, {
		coords: [[156.031, 208.844]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.armor.feline.enhanced")
	}, {
		coords: [[92.859, 155.953]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.steelsword.feline.enhanced")
	}, {	
		coords: [[237.984, 105.422]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.feline.superior"),
		popup: $.t("poi.desc.witcherGear.steelsword.feline.superior")
	}, {
		coords: [[153.094, 46.281]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.griffin.standard"),
		popup: $.t("poi.desc.witcherGear.silversword.griffin.standard")
	}, {
		coords: [[149.938, 75.813]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.boots.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.boots.griffin.enhanced")
	}, {
		coords: [[160.063, 127.094]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.griffin.standard"),
		popup: $.t("poi.desc.witcherGear.steelsword.griffin.standard")
	}, {
		coords: [[156.047, 152.828]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.armor.griffin.enhanced")
	}, {
		coords: [[144.234, 134.609]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.gauntlets.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.gauntlets.feline.enhanced")
	}, {
		coords: [[107.375, 84.438]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.trousers.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.trousers.griffin.enhanced")
	}, {
		coords: [[78.516, 16.875]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.steelsword.griffin.enhanced")
	}, {
		coords: [[73.047, 121.813]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.feline.superior"),
		popup: $.t("poi.desc.witcherGear.armor.feline.superior")
	}, {
		coords: [[81.594, 136.344]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.griffin.standard"),
		popup: $.t("poi.desc.witcherGear.armor.griffin.standard")
	}, {
		coords: [[68.297, 154.859]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.ursine.superior"),
		popup: $.t("v:misc.guardedBy", {monster: 'lvl 25 <span>' + $.t("v:monsters.elemental.earth") + '</span>'})
	}, {
		coords: [[23.953, 149.766]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.ursine.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.armor.ursine.mastercrafted")
	}, {
		coords: [[43.828, 107.953]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.ursine.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.silversword.ursine.mastercrafted")
	}, {
		coords: [[116.344, 45.563]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.ursine.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.steelsword.ursine.mastercrafted")
	}, {
		coords: [[23.656, 78.094]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.gauntlets.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.gauntlets.griffin.enhanced")
	}, {
		coords: [[53.000, 130.547]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.ursine.superior"),
		popup: $.t("poi.desc.witcherGear.silversword.ursine.superior")
	}, {
		coords: [[142.922, 117.656]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.gauntlets.ursine.superior"),
		popup: $.t("poi.desc.witcherGear.gauntlets.ursine.superior")
	}, {
		coords: [[106.703, 72.750]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.wolven.enhanced"),
		popup: $.t("poi.desc.witcherGear.silversword.wolven.enhanced")
	}, {
		coords: [[110.813, 179.125]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.boots.wolven.enhanced"),
		popup: $.t("poi.desc.witcherGear.boots.wolven.enhanced")
	}, {
		coords: [[39.219, 71.719]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.wolven.enhanced"),
		popup: $.t("poi.desc.witcherGear.armor.wolven.enhanced")
	}, {
		coords: [[50.953, 182.453]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.wolven.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.silversword.wolven.mastercrafted")
	}, {
		coords: [[36.688, 53.203]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.wolven.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.armor.wolven.mastercrafted")
	}, {
		coords: [[46.797, 24.547]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.wolven.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.steelsword.wolven.mastercrafted")
	}],

// Shopkeeper
	shopkeeper: [{ // Novigrad
		coords: [[208.734, 102.859]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	}, {
		coords: [[209.594, 102.828]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	}, {
		coords: [[205.109, 99.563]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	}, {
		coords: [[207.375, 100.969]],
		label: $.t("v:shopkeeper.label.banker"),
		popup: $.t("v:shopkeeper.desc.banker")
	}, {
		coords: [[198.516, 113.328]],
		label: $.t("v:shopkeeper.label.clothingMerchant"),
		popup: $.t("v:shopkeeper.desc.clothingMerchant")
	}, {
		coords: [[198.891, 101.484]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.kingfOfBeggarsMerchant")
	}, {
		coords: [[216.016, 104.219]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.aeramasTrinketMerchant")
	}, {
		coords: [[211.797, 96.109]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	}, {
		coords: [[209.234, 94.563]],
		label: $.t("v:shopkeeper.label.fishmonger"),
		popup: $.t("v:shopkeeper.desc.fishmonger")
	}, {
		coords: [[215.203, 92.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.emptyBottlesMerchant")
	}, {
		coords: [[213.813, 93.063]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[210.578, 113.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[204.500, 109.047]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gemDustWeaponsFoodAndDrink")
	}, {
		coords: [[211.516, 114.313]],
		label: $.t("v:shopkeeper.label.loanShark"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[212.547, 110.969]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSupplies")
	}, {
		coords: [[200.828, 98.297]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.foodAndDrink")
	}, { // NE Novigrad
		coords: [[231.297, 163.828]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // SE Novigrad
		coords: [[130.578, 196.953]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.rescuedMerchant")
	}, /*{ // S Novigrad
		// appears on map but nobody there?
		coords: [[65.95, -21.09]],
		label: $.t("shopkeeper.shopkeeper"),
		popup: '???'
	},*/ {
		coords: [[179.969, 88.781]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popup: $.t("v:shopkeeper.desc.windmillMerchant")
	}, {
		coords: [[186.656, 82.938]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSuppliesFoodAndWeapons")
	}, {
		coords: [[167.844, 90.969]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[179.188, 119.516]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // Oxenfurt
		coords: [[159.141, 164.516]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.paintMerchant")
	}, { // NE Velen
		coords: [[147.313, 149.422]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, {
		coords: [[151.781, 115.188]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.rescuedMerchant") + $.t("v:shopkeeper.desc.alchemyAndFood")
	}, {
		coords: [[123.156, 179.266]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}, {
		coords: [[137.406, 160.781]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // NW Velen
		coords: [[107.469, 54.906]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[101.547, 76.094]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks")
	}, {
		coords: [[81.797, 41.406]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndJewellery")
	}, {
		coords: [[90.109, 47.906]],
		label: $.t("v:shopkeeper.label.keira"),
		popup: $.t("v:shopkeeper.desc.alchemyRecipesAndClearance")
	}, {
		coords: [[104.031, 76.875]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.gwentFoodAndDrink")
	}, {
		coords: [[100.531, 76.344]],
		label: $.t("v:shopkeeper.label.anselm"),
		popup: $.t("v:misc.rescuedMerchant") + $.t("v:shopkeeper.desc.blindersMerchant")
	}, {
		coords: [[70.563, 73.188]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.drinksAndSaddlebags")
	}, {
		coords: [[83.766, 69.922]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks") + $.t("v:misc.rescue") + '<a href="#6/-61.954/-33.893">' + $.t("v:misc.locations.banditsCamp") + '</a>'
	}, {
		coords: [[83.531, 87.641]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[92.156, 29.109]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[76.797, 26.313]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, { // SW Velen
		coords: [[30.359, 46.734]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // SE Velen
		coords: [[100.578, 130.578]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.rescuedMerchant") + $.t("v:shopkeeper.desc.alchemyAndFood")
	}, {
		coords: [[99.844, 110.594]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndCrafting")
	}, {
		coords: [[99.000, 109.281]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, {
		coords: [[33.453, 204.859]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[78.078, 147.141]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.disappearingDrinksMerchant")
	}, {
		coords: [[42.156, 204.500]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[42.844, 206.344]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[44.063, 206.734]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}],

// Sign Post
	signpost: [{ // Novigrad
		coords: [[207.375, 103.750]],
		label: $.t("v:signpost.label.hierarchSquare"),
		popup: $.t("v:signpost.desc.hierarchSquare")
	}, {
		coords: [[208.766, 116.672]],
		label: $.t("v:signpost.label.southernGate"),
		popup: $.t("v:signpost.desc.southernGate")
	}, {
		coords: [[214.813, 116.297]],
		label: $.t("v:signpost.label.oxenfurtGate"),
		popup: $.t("v:signpost.desc.oxenfurtGate")
	}, {
		coords: [[218.563, 102.031]],
		label: $.t("v:signpost.label.stGregorysBridge"),
		popup: $.t("v:signpost.desc.stGregorysBridge")
	}, {
		coords: [[226.313, 91.547]],
		label: $.t("v:signpost.label.electorsSquare"),
		popup: $.t("v:signpost.desc.electorsSquare")
	}, {
		coords: [[201.391, 111.484]],
		label: $.t("v:signpost.label.tretogorGate"),
		popup: $.t("v:signpost.desc.tretogorGate")
	}, {
		coords: [[196.563, 108.094]],
		label: $.t("v:signpost.label.gateOfTheHierarch"),
		popup: $.t("v:signpost.desc.gateOfTheHierarch")
	}, {
		coords: [[191.688, 102.781]],
		label: $.t("v:signpost.label.gloryGate"),
		popup: $.t("v:signpost.desc.gloryGate")
	}, {
		coords: [[191.250, 96.672]],
		label: $.t("v:signpost.label.portsideGate"),
		popup: $.t("v:signpost.desc.portsideGate")
	}, {
		coords: [[197.969, 88.609]],
		label: $.t("v:signpost.label.novigradDocks"),
		popup: $.t("v:signpost.desc.novigradDocks")
	}, {
		coords: [[211.828, 121.703]],
		label: $.t("v:signpost.label.arette"),
		popup: $.t("v:signpost.desc.arette")
	}, {
		coords: [[198.016, 125.922]],
		label: $.t("v:signpost.label.sevenCatsInn"),
		popup: $.t("v:signpost.desc.sevenCatsInn")
	}, { // NE Novigrad
		coords: [[245.109, 121.094]],
		label: $.t("v:signpost.label.sarrasinGrange"),
		popup: $.t("v:signpost.desc.sarrasinGrange")
	}, {
		coords: [[236.125, 130.438]],
		label: $.t("v:signpost.label.yantra"),
		popup: $.t("v:signpost.desc.yantra")
	}, {
		coords: [[237.031, 149.219]],
		label: $.t("v:signpost.label.isolatedHut"),
		popup: $.t("v:signpost.desc.isolatedHut")
	}, {
		coords: [[214.219, 140.781]],
		label: $.t("v:signpost.label.honeyfillMeadworks"),
		popup: $.t("v:signpost.desc.honeyfillMeadworks")
	}, {
		coords: [[223.516, 174.375]],
		label: $.t("v:signpost.label.martinFeuillesFarmstead"),
		popup: $.t("v:signpost.desc.martinFeuillesFarmstead")
	}, {
		coords: [[231.734, 162.984]],
		label: $.t("v:signpost.label.winespringGrange"),
		popup: $.t("v:signpost.desc.winespringGrange")
	}, {
		coords: [[225.672, 149.938]],
		label: $.t("v:signpost.label.moldavieResidence"),
		popup: $.t("v:signpost.desc.moldavieResidence")
	}, {
		coords: [[234.469, 105.234]],
		label: $.t("v:signpost.label.cavern"),
		popup: $.t("v:signpost.desc.cavern")
	}, { // E Novigrad
		coords: [[205.438, 157.313]],
		label: $.t("v:signpost.label.alness"),
		popup: $.t("v:signpost.desc.alness")
	}, {
		coords: [[194.000, 149.969]],
		label: $.t("v:signpost.label.wheatFields"),
		popup: $.t("v:signpost.desc.wheatFields")
	}, {
		coords: [[189.813, 161.063]],
		label: $.t("v:signpost.label.vegelbudResidence"),
		popup: $.t("v:signpost.desc.vegelbudResidence")
	}, { // SE Novigrad
		coords: [[184.719, 155.609]],
		label: $.t("v:signpost.label.carsten"),
		popup: $.t("v:signpost.desc.carsten")
	}, {
		coords: [[179.703, 174.922]],
		label: $.t("v:signpost.label.temerianPartisanHideout"),
		popup: $.t("v:signpost.desc.temerianPartisanHideout")
	}, {
		coords: [[181.391, 189.266]],
		label: $.t("v:signpost.label.estTayiar"),
		popup: $.t("v:signpost.desc.estTayiar")
	}, {
		coords: [[168.672, 178.078]],
		label: $.t("v:signpost.label.herbalistsHut"),
		popup: $.t("v:signpost.desc.herbalistsHut")
	}, {
		coords: [[155.203, 206.688]],
		label: $.t("v:signpost.label.aeramasAbandonedManor"),
		popup: $.t("v:signpost.desc.aeramasAbandonedManor")
	}, {
		coords: [[142.641, 186.875]],
		label: $.t("v:signpost.label.crossroads"),
		popup: $.t("v:signpost.desc.crossroads")
	}, {
		coords: [[168.969, 165.375]],
		label: $.t("v:signpost.label.gustfieldsFarm"),
		popup: $.t("v:signpost.desc.gustfieldsFarm")
	}, {
		coords: [[215.406, 154.203]],
		label: $.t("v:signpost.label.dancingWindmill"),
		popup: $.t("v:signpost.desc.dancingWindmill")
	}, { // S Novigrad
		coords: [[193.328, 81.500]],
		label: $.t("v:signpost.label.loggersHut"),
		popup: $.t("v:signpost.desc.loggersHut")
	}, {
		coords: [[192.875, 67.359]],
		label: $.t("v:signpost.label.lighthouse"),
		popup: $.t("v:signpost.desc.lighthouse")
	}, {
		coords: [[184.484, 117.922]],
		label: $.t("v:signpost.label.cunnyOfTheGoose"),
		popup: $.t("v:signpost.desc.cunnyOfTheGoose")
	}, {
		coords: [[179.016, 106.938]],
		label: $.t("v:signpost.label.drahimCastle"),
		popup: $.t("v:signpost.desc.drahimCastle")
	}, {
		coords: [[173.828, 76.719]],
		label: $.t("v:signpost.label.widowsGrotto"),
		popup: $.t("v:signpost.desc.widowsGrotto")
	}, {
		coords: [[165.188, 91.438]],
		label: $.t("v:signpost.label.ursten"),
		popup: $.t("v:signpost.desc.ursten")
	}, {
		coords: [[182.469, 88.563]],
		label: $.t("v:signpost.label.luciansWindmill"),
		popup: $.t("v:signpost.desc.luciansWindmill")
	}, {
		coords: [[185.109, 136.172]],
		label: $.t("v:signpost.label.eternalFireChapel"),
		popup: $.t("v:signpost.desc.eternalFireChapel")
	}, {
		coords: [[156.516, 108.625]],
		label: $.t("v:signpost.label.borderPost"),
		popup: $.t("v:signpost.desc.borderPost")
	}, { // Oxenfurt
		coords: [[157.484, 172.031]],
		label: $.t("v:signpost.label.novigradGate"),
		popup: $.t("v:signpost.desc.novigradGate")
	}, {
		coords: [[149.547, 165.094]],
		label: $.t("v:signpost.label.westernGate"),
		popup: $.t("v:signpost.desc.westernGate")
	}, {
		coords: [[156.859, 162.375]],
		label: $.t("v:signpost.label.oxenfurtHarbor"),
		popup: $.t("v:signpost.desc.oxenfurtHarbor")
	}, { // NE Velen
		coords: [[139.359, 146.203]],
		label: $.t("v:signpost.label.stonecuttersSettlement"),
		popup: $.t("v:signpost.desc.stonecuttersSettlement")
	}, {
		coords: [[155.391, 152.375]],
		label: $.t("v:signpost.label.whiteEagleFort"),
		popup: $.t("v:signpost.desc.whiteEagleFort")
	}, {
		coords: [[148.453, 136.422]],
		label: $.t("v:signpost.label.codgersQuarry"),
		popup: $.t("v:signpost.desc.codgersQuarry")
	}, {
		coords: [[158.813, 126.328]],
		label: $.t("v:signpost.label.hindhold"),
		popup: $.t("v:signpost.desc.hindhold")
	}, {
		coords: [[125.281, 173.141]],
		label: $.t("v:signpost.label.ferryStation"),
		popup: $.t("v:signpost.desc.ferryStation")
	}, {
		coords: [[137.906, 121.516]],
		label: $.t("v:signpost.label.hangedMansTree"),
		popup: $.t("v:signpost.desc.hangedMansTree")
	}, {
		coords: [[131.859, 131.781]],
		label: $.t("v:signpost.label.devilsPit"),
		popup: $.t("v:signpost.desc.devilsPit")
	}, {
		coords: [[129.016, 116.984]],
		label: $.t("v:signpost.label.mulbrydale"),
		popup: $.t("v:signpost.desc.mulbrydale")
	}, {
		coords: [[128.797, 94.375]],
		label: $.t("v:signpost.label.innAtTheCrossroads"),
		popup: $.t("v:signpost.desc.innAtTheCrossroads")
	}, { // NW Velen
		coords: [[143.859, 52.156]],
		label: $.t("v:signpost.label.harpyFeedingGround"),
		popup: $.t("v:signpost.desc.harpyFeedingGround")
	}, {
		coords: [[150.906, 46.625]],
		label: $.t("v:signpost.label.lornruk"),
		popup: $.t("v:signpost.desc.lornruk")
	}, {
		coords: [[126.828, 57.891]],
		label: $.t("v:signpost.label.heatherton"),
		popup: $.t("v:signpost.desc.heatherton")
	}, {
		coords: [[128.688, 49.313]],
		label: $.t("v:signpost.label.abandonedTower"),
		popup: $.t("v:signpost.desc.abandonedTower")
	}, {
		coords: [[129.781, 40.859]],
		label: $.t("v:signpost.label.isolatedShack"),
		popup: $.t("v:signpost.desc.isolatedShack")
	}, {
		coords: [[107.016, 54.078]],
		label: $.t("v:signpost.label.blackbough"),
		popup: $.t("v:signpost.desc.blackbough")
	}, {
		coords: [[103.656, 40.563]],
		label: $.t("v:signpost.label.hangmansAlley"),
		popup: $.t("v:signpost.desc.hangmansAlley")
	}, {
		coords: [[97.219, 74.875]],
		label: $.t("v:signpost.label.crowsPerch"),
		popup: $.t("v:signpost.desc.crowsPerch")
	}, {
		coords: [[83.781, 88.406]],
		label: $.t("v:signpost.label.boatmakersHut"),
		popup: $.t("v:signpost.desc.boatmakersHut")
	}, {
		coords: [[86.516, 27.609]],
		label: $.t("v:signpost.label.refugeesCamp"),
		popup: $.t("v:signpost.desc.refugeesCamp")
	}, {
		coords: [[92.203, 28.359]],
		label: $.t("v:signpost.label.coastOfWrecks"),
		popup: $.t("v:signpost.desc.coastOfWrecks")
	}, {
		coords: [[82.688, 42.859]],
		label: $.t("v:signpost.label.midcopse"),
		popup: $.t("v:signpost.desc.midcopse")
	}, {
		coords: [[78.109, 57.844]],
		label: $.t("v:signpost.label.wastrelManor"),
		popup: $.t("v:signpost.desc.wastrelManor")
	}, {
		coords: [[71.516, 103.234]],
		label: $.t("v:signpost.label.banditsCamp"),
		popup: $.t("v:signpost.desc.banditsCamp")
	}, {
		coords: [[69.109, 75.000]],
		label: $.t("v:signpost.label.oreton"),
		popup: $.t("v:signpost.desc.oreton")
	}, {
		coords: [[91.438, 37.625]],
		label: $.t("v:signpost.label.forestHut"),
		popup: $.t("v:signpost.desc.forestHut")
	}, {
		coords: [[118.281, 68.047]],
		label: $.t("v:signpost.label.wolvenGlade"),
		popup: $.t("v:signpost.desc.wolvenGlade")
	}, {
		coords: [[106.688, 84.781]],
		label: $.t("v:signpost.label.burnedRuins"),
		popup: $.t("v:signpost.desc.burnedRuins")
	}, {
		coords: [[89.984, 61.938]],
		label: $.t("v:signpost.label.trollBridge"),
		popup: $.t("v:signpost.desc.trollBridge")
	}, {
		coords: [[82.281, 70.359]],
		label: $.t("v:signpost.label.claywich"),
		popup: $.t("v:signpost.desc.claywich")
	}, {
		coords: [[58.672, 99.766]],
		label: $.t("v:signpost.label.drudge"),
		popup: $.t("v:signpost.desc.drudge")
	}, { // SW Velen
		coords: [[68.141, 22.922]],
		label: $.t("v:signpost.label.condyle"),
		popup: $.t("v:signpost.desc.condyle")
	}, {
		coords: [[65.422, 36.578]],
		label: $.t("v:signpost.label.duenHen"),
		popup: $.t("v:signpost.desc.duenHen")
	}, {
		coords: [[49.875, 78.141]],
		label: $.t("v:signpost.label.fykeIsle"),
		popup: $.t("v:signpost.desc.fykeIsle")
	}, {
		coords: [[39.219, 47.703]],
		label: $.t("v:signpost.label.byways"),
		popup: $.t("v:signpost.desc.byways")
	}, {
		coords: [[25.406, 78.266]],
		label: $.t("v:signpost.label.frischlow"),
		popup: $.t("v:signpost.desc.frischlow")
	}, {
		coords: [[33.813, 98.703]],
		label: $.t("v:signpost.label.olenasGrove"),
		popup: $.t("v:signpost.desc.olenasGrove")
	}, { // SE Velen
		coords: [[32.125, 120.547]],
		label: $.t("v:signpost.label.roadToBaldMountain"),
		popup: $.t("v:signpost.desc.roadToBaldMountain")
	}, {
		coords: [[25.000, 149.563]],
		label: $.t("v:signpost.label.destroyedBastion"),
		popup: $.t("v:signpost.desc.destroyedBastion")
	}, {
		coords: [[41.250, 157.594]],
		label: $.t("v:signpost.label.crossroadsVillage"),
		popup: $.t("v:signpost.desc.crossroadsVillage")
	}, {
		coords: [[37.828, 206.734]],
		label: $.t("v:signpost.label.nilfgaardianArmyGroupCenterCamp"),
		popup: $.t("v:signpost.desc.nilfgaardianArmyGroupCenterCamp")
	}, {
		coords: [[46.219, 198.172]],
		label: $.t("v:signpost.label.houseOfRespite"),
		popup: $.t("v:signpost.desc.houseOfRespite")
	}, {
		coords: [[59.203, 186.266]],
		label: $.t("v:signpost.label.kimboltWay"),
		popup: $.t("v:signpost.desc.kimboltWay")
	}, {
		coords: [[62.953, 143.797]],
		label: $.t("v:signpost.label.theOrphansOfCrookbackBog"),
		popup: $.t("v:signpost.desc.theOrphansOfCrookbackBog")
	}, {
		coords: [[66.625, 154.531]],
		label: $.t("v:signpost.label.ruinedTower"),
		popup: $.t("v:signpost.desc.ruinedTower")
	}, {
		coords: [[55.734, 159.281]],
		label: $.t("v:signpost.label.ancientOak"),
		popup: $.t("v:signpost.desc.ancientOak")
	}, {
		coords: [[76.219, 149.703]],
		label: $.t("v:signpost.label.downwarren"),
		popup: $.t("v:signpost.desc.downwarren")
	}, {
		coords: [[82.016, 135.516]],
		label: $.t("v:signpost.label.dragonslayersGrotto"),
		popup: $.t("v:signpost.desc.dragonslayersGrotto")
	}, {
		coords: [[88.328, 149.813]],
		label: $.t("v:signpost.label.reardonManor"),
		popup: $.t("v:signpost.desc.reardonManor")
	}, {
		coords: [[86.313, 175.969]],
		label: $.t("v:signpost.label.benek"),
		popup: $.t("v:signpost.desc.benek")
	}, {
		coords: [[100.563, 164.641]],
		label: $.t("v:signpost.label.toderas"),
		popup: $.t("v:signpost.desc.toderas")
	}, {
		coords: [[101.938, 136.266]],
		label: $.t("v:signpost.label.lurtch"),
		popup: $.t("v:signpost.desc.lurtch")
	}, {
		coords: [[99.906, 109.500]],
		label: $.t("v:signpost.label.lindenvale"),
		popup: $.t("v:signpost.desc.lindenvale")
	}, {
		coords: [[115.656, 156.328]],
		label: $.t("v:signpost.label.maraudersBridge"),
		popup: $.t("v:signpost.desc.maraudersBridge")
	}, {
		coords: [[111.234, 178.766]],
		label: $.t("v:signpost.label.grotto"),
		popup: $.t("v:signpost.desc.grotto")
	}],

// Smugglers' Cache
	smugglers: [{
		coords: [
			// Novigrad
			[193.547, 103.891],
			[201.000, 121.516],
			// S Novigrad
			[183.547, 68.297],
			// NW Velen
			[75.844, 15.000]
		],
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}],

// Spoils of War
	spoils: [{ // NE Velen
		coords: [[153.609, 79.109]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: ''})
	}, { // NW Velen
		coords: [[111.500, 105.250]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 4 <span>' + $.t("v:monsters.drowners") + '</span>)'})
	}, { // SW Velen
		coords: [[46.078, 24.953]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 10 <span>' + $.t("v:monsters.drowners") + '</span>)'})
	}]
};
