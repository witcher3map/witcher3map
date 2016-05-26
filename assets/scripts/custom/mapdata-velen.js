window.map_path   = 'velen';
//window.map_sWest  = L.latLng(-85.05, -180);
//window.map_nEast  = L.latLng(85.05, 135);
window.map_sWest  = L.latLng(-512, -512);
window.map_nEast  = L.latLng(512, 512);
window.map_center = [60, -5];
window.map_mZoom  = 6;
window.mapdata_velen = {
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
		label: $.t("v:armourer.journeymanLabel"),
		popup: $.t("v:armourer.desc")
	}, { // Oxenfurt
		coords: [[158.047, 166.344]],
		label: $.t("v:armourer.journeymanLabel"),
		popup: $.t("v:armourer.desc")
	}, { // NE Velen
		coords: [[129.688, 118.719]],
		label: $.t("v:armourer.amateurLabel"),
		popup: $.t("v:armourer.desc") + ' ' + $.t("v:misc.rescue") + ' <a href="#6/-18.761/-25.785">' + $.t("v:misc.locations.petesLanding") + '</a>'
	}, { // NW Velen
		coords: [[104.734,77.531]],
		label: $.t("v:armourer.journeymanLabel"),
		popup: $.t("v:armourer.desc")
	}, {
		coords: [[82.266, 40.422]],
		label: $.t("v:armourer.amateurLabel"),
		popup: $.t("v:armourer.desc")
	}, {
		coords: [[104.906, 77.063]],
		label: $.t("v:armourer.masterLabel"),
		popupTitle: $.t("v:armourer.yoana"),
		popup: $.t("v:armourer.quest") + $.t("v:armourer.desc")
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
		popup: $.t("v:banditcamp.desc") + $.t("v:banditcamp.bug")
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
		label: $.t("v:blacksmith.masterLabel"),
		popupTitle: $.t("v:blacksmith.hattori"),
		popup: $.t("v:blacksmith.quest") + $.t("v:blacksmith.desc")
	}, {
		coords: [[205.875, 100.891]],
		label: $.t("v:blacksmith.journeymanLabel"),
		popup: $.t("v:blacksmith.availability") + $.t("v:blacksmith.desc")
	}, {
		coords: [[211.188, 97.266]],
		label: $.t("v:blacksmith.amateurLabel"),
		popup: $.t("v:blacksmith.availability") + $.t("v:blacksmith.desc")
	}, { // Oxenfurt
		coords: [[152.125, 170.453]],
		label: $.t("v:blacksmith.journeymanLabel"),
		popup: $.t("v:blacksmith.availability") + $.t("v:blacksmith.desc")
	}, { // NW Velen
		coords: [[106.328, 52.313]],
		label: $.t("v:blacksmith.amateurLabel"),
		popup: $.t("v:blacksmith.desc")
	}, {
		coords: [[67.844, 74.031]],
		label: $.t("v:blacksmith.amateurLabel"),
		popup: $.t("v:blacksmith.desc")
	}, { // SE Velen
		coords: [[103.156, 108.813]],
		label: $.t("v:blacksmith.amateurLabel"),
		popup: $.t("v:blacksmith.desc")
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
		coords: [[32.064,-111.226]],
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
		coords: [[73.24, -44.21]],
		label: $.t("v:innkeep.inns.theGoldenSturgen"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[78.22, -33.49]],
		label: $.t("v:innkeep.inns.passiflora"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[76.20, -24.35]],
		label: $.t("v:innkeep.inns.theNowhere"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	}, {
		coords: [[70.02, -29.56]],
		label: $.t("v:innkeep.inns.rosemaryAndThyme"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.foodAndDrink")
	}, {
		coords: [[70.04, -1.85]],
		label: $.t("v:innkeep.inns.sevenCatsInn"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, {
		coords: [[74.50, -32.61]],
		label: $.t("v:innkeep.inns.theKingfisher"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:misc.disappearingTrader") + $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // S Novigrad
		coords: [[62.33, -14.02]],
		label: $.t("v:innkeep.inns.cunnyOfTheGoose"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // Oxenfurt
		coords: [[36.46, 52.27]],
		label: $.t("v:innkeep.inns.theAlchemy"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.foodDrinkAndGwent")
	}, { // NE Velen
		coords: [[0.09, -45.62]],
		label: $.t("v:innkeep.inns.innAtTheCrossroads"),
		popupTitle: $.t("v:innkeep.popup"),
		popup: $.t("v:innkeep.desc.gwentAndDrink")
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
		popup: $.t("monsterden.desc", {monster: '(lvl 19 <span>' + $.t("v:monsters.golem") + '</span>)'})
	}, { // S Novigrad
		coords: [[46.99, -40.08]],
		label: $.t("monsterden.label"),
		popup: $.t("monsterden.desc", {monster: '(lvl 16 <span>' + $.t("v:monsters.rabidRockTroll") + '</span> &amp; lvl 18 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
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
		popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, {
		coords: [[49.84, -45.97]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.endregas") + '</span>)'})
	}, {
		coords: [[50.79, -42.19]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.endregas") + '</span>)'})
	}, {
		coords: [[50.98, -20.99]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, { // NE Velen
		coords: [[7.36, 48.78]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[8.01, 47.37]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[-2.94, 27.38]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.ghouls") + '</span>)'})
	}, {
		coords: [[41.64, 13.97]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 6 <span>' + $.t("v:monsters.rotfiends") + '</span>)'})
	}, { // SW Velen
		coords: [[-75.68, -27.11]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 4&amp;9 <span>' + $.t("v:monsters.drowners") + '</span>)'})
	}, { // SE Velen
		coords: [[-50.23, 57.57]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[-46.01, 52.56]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[-49.04, 46.93]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[-49.12, 42.36]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 8/9 <span>' + $.t("v:monsters.nekkers") + '</span>)'})
	}, {
		coords: [[-40.18, 80.29]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("v:monsters.wyvern") + '</span>)'})
	}, {
		coords: [[-41.38, 80.38]],
		label: $.t("monsternest.label"),
		popup: $.t("monsternest.desc", {monster: '(lvl 21 <span>' + $.t("v:monsters.wyvern") + '</span>)'})
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
		label: $.t("notice.label"),
		popup: $.t("notice.desc")
	}],

// Person in Distress
	pid: [{
		coords: [
			// NE Velen
			[26.43, -11.87],
			// NW Velen
			[-33.94, -132.36]
		],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: ''})
	}, { // SE Novigrad
		coords: [[20.47, 100.55]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 9 <span>' + $.t("v:monsters.bandits") + '</span>)'})
	}, { // NE Velen
		coords: [[-17.64, -29.18]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 10-16 <span>' + $.t("v:monsters.bandits") + '</span>)'})
	}, { // NW Velen
		coords: [[-61.23, -33.93]],
		label: $.t("pid.label"),
		popup: $.t("pid.desc", {monster: '(lvl 5 <span>' + $.t("v:monsters.bandits") + '</span>)'})
	}],

// Place of Power
	pop: [{ // Novigrad
		coords: [[80.72, -40.83]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, { // E Novigrad
		coords: [[71.02, 48.78]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.axii")}),
		popup: $.t("pop.desc")
	}, { // NW Velen
		coords: [[32.69, -112.60]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("pop.desc")
	}, { // SW Velen
		coords: [[-82.85, -72.69]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.aard")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-71.82, -105.91]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("v:misc.wanderingInTheDark") + $.t("pop.desc")
	}, { // SE Velen
		coords: [[-78.19, 7.91]],
		label: $.t("pop.label") + '*',
		popupTitle: $.t("pop.popup", {sign: $.t("signs.quen")}),
		popup: $.t("v:misc.baldMountain") + $.t("pop.desc")
	}, {
		coords: [[-70.41, 38.41]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.igni")}),
		popup: $.t("pop.desc")
	}, {
		coords: [[-55.68, 18.94]],
		label: $.t("pop.label"),
		popupTitle: $.t("pop.popup", {sign: $.t("signs.yrden")}),
		popup: $.t("pop.desc")
	}],

// Point of Interest
	poi: [{ // Novigrad
		coords: [[74.84, -25.88]],
		label: $.t("v:poi.label.triss"),
		popup: $.t("v:poi.desc.triss")
	}, {
		coords: [[70.12, -28.76]],
		label: $.t("v:poi.label.dandelionAndZoltan"),
		popup: $.t("v:poi.desc.dandelionAndZoltan")
	}, {
		coords: [[77.245, -24.829]],
		label: $.t("v:poi.label.vilmeriusHospital"),
		popup: $.t("v:poi.desc.vilmeriusHospital")
	}, { // NW Velen
		coords: [[-47.34, -111.81]],
		label: $.t("v:poi.label.keira"),
		popup: $.t("v:poi.desc.keira")
	}, { // Velen
		coords: [[61.90, -91.82]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.crossbow.feline"),
		popup: $.t("poi.desc.witcherGear.crossbow.feline")
	}, {
		coords: [[57.651, -30.169]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.feline.superior"),
		popup: $.t("poi.desc.witcherGear.silversword.feline.superior")
	}, {
		coords: [[75.70, -19.50]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.silversword.feline.enhanced")
	}, {
		coords: [[60.60, 89.80]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.feline.standard"),
		popup: $.t("poi.desc.witcherGear.silversword.feline.standard")
	}, {
		coords: [[36.50, 114,50]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.armor.feline.enhanced")
	}, {
		coords: [[33, -114.5]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.griffin.standard"),
		popup: $.t("poi.desc.witcherGear.silversword.griffin.standard")
	}, {
		coords: [[29.373, -73]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.boots.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.boots.griffin.enhanced")
	}, {
		coords: [[41, -1]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.griffin.standard"),
		popup: $.t("poi.desc.witcherGear.steelsword.griffin.standard")
	}, {
		coords: [[36.5, 35]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.armor.griffin.enhanced")
	}, {
		coords: [[22, 9.5]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.gauntlets.feline.enhanced"),
		popup: $.t("poi.desc.witcherGear.gauntlets.feline.enhanced")
	}, {
		coords: [[-28, -61]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.trousers.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.trousers.griffin.enhanced")
	}, {
		coords: [[-57, -156]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.steelsword.griffin.enhanced")
	}, {
		coords: [[-61, -8.5]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.feline.superior"),
		popup: $.t("poi.desc.witcherGear.armor.feline.superior")
	}, {
		coords: [[-54.5, 12]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.griffin.standard"),
		popup: $.t("poi.desc.witcherGear.armor.griffin.standard")
	}, {
		coords: [[-64, 38]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.ursine.superior"),
		popup: $.t("v:misc.guardedBy", {monster: 'lvl 25 <span>' + $.t("v:monsters.elemental.earth") + '</span>'})
	}, {
		coords: [[-81.1, 30.8]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.ursine.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.armor.ursine.mastercrafted")
	}, {
		coords: [[-75.6, -28]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.ursine.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.silversword.ursine.mastercrafted")
	}, {
		coords: [[-16.278,-115.906]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.ursine.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.steelsword.ursine.mastercrafted")
	}, {
		coords: [[-81.2, -70]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.gauntlets.griffin.enhanced"),
		popup: $.t("poi.desc.witcherGear.gauntlets.griffin.enhanced")
	}, {
		coords: [[-72.047, 3.999]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.ursine.superior"),
		popup: $.t("poi.desc.witcherGear.silversword.ursine.superior")
	}, {
		coords: [[20.406, -14.304]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.gauntlets.ursine.superior"),
		popup: $.t("poi.desc.witcherGear.gauntlets.ursine.superior")
	}, {
		coords: [[-28.710, -77.410]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.wolven.enhanced"),
		popup: $.t("poi.desc.witcherGear.silversword.wolven.enhanced")
	}, {
		coords: [[-23.645, 72.070]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.boots.wolven.enhanced"),
		popup: $.t("poi.desc.witcherGear.boots.wolven.enhanced")
	}, {
		coords: [[-77.128, -78.926]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.wolven.enhanced"),
		popup: $.t("poi.desc.witcherGear.armor.wolven.enhanced")
	}, {
		coords: [[-72.836, 76.816]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.silversword.wolven.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.silversword.wolven.mastercrafted")
	}, {
		coords: [[-77.897, -104.963]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.armor.wolven.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.armor.wolven.mastercrafted")
	}, {
		coords: [[-74.496, -145.239]],
		label: $.t("poi.label.witcherGear"),
		popupTitle: $.t("poi.popup.witcherGear.steelsword.wolven.mastercrafted"),
		popup: $.t("poi.desc.witcherGear.steelsword.wolven.mastercrafted")
	}],

// Shopkeeper
	shopkeeper: [{ // Novigrad
		coords: [[74.22, -35.41]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	}, {
		coords: [[74.578, -35.332]],
		label: $.t("v:shopkeeper.label.bookMerchant"),
		popup: $.t("v:shopkeeper.desc.bookMerchant")
	}, {
		coords: [[72.82, -39.99]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	}, {
		coords: [[73.71, -37.96]],
		label: $.t("v:shopkeeper.label.banker"),
		popup: $.t("v:shopkeeper.desc.banker")
	}, {
		coords: [[69.90, -20.47]],
		label: $.t("v:shopkeeper.label.clothingMerchant"),
		popup: $.t("v:shopkeeper.desc.clothingMerchant")
	}, {
		coords: [[70.05, -37.13]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.kingfOfBeggarsMerchant")
	}, {
		coords: [[76.81, -33.26]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.aeramasTrinketMerchant")
	}, {
		coords: [[75.41, -44.82]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.alchemyFoodAndDrink")
	}, {
		coords: [[74.47, -46.93]],
		label: $.t("v:shopkeeper.label.fishmonger"),
		popup: $.t("v:shopkeeper.desc.fishmonger")
	}, {
		coords: [[76.57, -50.10]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.emptyBottlesMerchant")
	}, {
		coords: [[76.12, -49.04]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[74.98, -20.57]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[72.58, -26.41]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gemDustWeaponsFoodAndDrink")
	}, {
		coords: [[75.33, -19.28]],
		label: $.t("v:shopkeeper.label.loanShark"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[75.61, -23.82]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSupplies")
	}, {
		coords: [[71.00, -41.60]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.foodAndDrink")
	}, { // NE Novigrad
		coords: [[80.92, 50.49]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // SE Novigrad
		coords: [[3.43, 97.08]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.rescuedMerchant")
	}, /*{ // S Novigrad
		// appears on map but nobody there?
		coords: [[65.95, -21.09]],
		label: $.t("shopkeeper.shopkeeper"),
		popup: '???'
	},*/ {
		coords: [[58.677, -55.415]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popup: $.t("v:shopkeeper.desc.windmillMerchant")
	}, {
		coords: [[63.27, -63.46]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.craftingSuppliesFoodAndWeapons")
	}, {
		coords: [[48.72, -51.94]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[57.98, -12.00]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // Oxenfurt
		coords: [[40.01, 51.48]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.paintMerchant")
	}, { // NE Velen
		coords: [[26.00, 30.11]],
		label: $.t("v:shopkeeper.label.wanderingMerchant"),
		popupTitle: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, {
		coords: [[31.65, -17.93]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.rescuedMerchant") + $.t("v:shopkeeper.desc.alchemyAndFood")
	}, {
		coords: [[-6.84, 72.38]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}, {
		coords: [[13.07, 46.27]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // NW Velen
		coords: [[-27.84, -102.74]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[-34.96, -72.77]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks")
	}, {
		coords: [[-54.42, -121.65]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndJewellery")
	}, {
		coords: [[-47.04, -112.50]],
		label: $.t("v:shopkeeper.label.keira"),
		popup: $.t("v:shopkeeper.desc.alchemyRecipesAndClearance")
	}, {
		coords: [[-32.03, -71.77]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.gwentFoodAndDrink")
	}, {
		coords: [[-36.10, -72.51]],
		label: $.t("v:shopkeeper.label.anselm"),
		popup: $.t("v:misc.rescuedMerchant") + $.t("v:shopkeeper.desc.blindersMerchant")
	}, {
		coords: [[-62.57, -76.89]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.drinksAndSaddlebags")
	}, {
		coords: [[-52.70, -81.49]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndDrinks") + $.t("v:misc.rescue") + '<a href="#6/-61.954/-33.893">' + $.t("v:misc.locations.banditsCamp") + '</a>'
	}, {
		coords: [[-52.96, -56.65]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[-45.09, -138.96]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[-58.36, -142.91]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, { // SW Velen
		coords: [[-79.58, -114.12]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.liberated") + $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, { // SE Velen
		coords: [[-36.17, 3.69]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:misc.rescuedMerchant") + $.t("v:shopkeeper.desc.alchemyAndFood")
	}, {
		coords: [[-36.88, -24.35]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.gwentAndCrafting")
	}, {
		coords: [[-37.79, -26.19]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAlchemyAndFood")
	}, {
		coords: [[-78.79, 108.24]],
		label: $.t("v:shopkeeper.label.quartermaster"),
		popup: $.t("v:shopkeeper.desc.uselessMerchant")
	}, {
		coords: [[-57.35, 27.03]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.disappearingDrinksMerchant")
	}, {
		coords: [[-76.16, 107.67]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.runesAndAlchemy")
	}, {
		coords: [[-75.93, 110.28]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.armourAndCraftingSupplies")
	}, {
		coords: [[-75.50, 110.81]],
		label: $.t("v:shopkeeper.label.shopkeeper"),
		popup: $.t("v:shopkeeper.desc.weaponsAndCraftingSupplies")
	}],

// Sign Post
	signpost: [{ // Novigrad
		coords: [[73.76, -33.97]],
		label: $.t("v:signpost.label.hierarchSquare"),
		popup: $.t("v:signpost.desc.hierarchSquare")
	}, {
		coords: [[74.23, -15.86]],
		label: $.t("v:signpost.label.southernGate"),
		popup: $.t("v:signpost.desc.southernGate")
	}, {
		coords: [[76.44, -16.20]],
		label: $.t("v:signpost.label.oxenfurtGate"),
		popup: $.t("v:signpost.desc.oxenfurtGate")
	}, {
		coords: [[77.64, -36.47]],
		label: $.t("v:signpost.label.stGregorysBridge"),
		popup: $.t("v:signpost.desc.stGregorysBridge")
	}, {
		coords: [[79.73, -51.24]],
		label: $.t("v:signpost.label.electorsSquare"),
		popup: $.t("v:signpost.desc.electorsSquare")
	}, {
		coords: [[71.16, -22.94]],
		label: $.t("v:signpost.label.tretogorGate"),
		popup: $.t("v:signpost.desc.tretogorGate")
	}, {
		coords: [[68.94, -27.77]],
		label: $.t("v:signpost.label.gateOfTheHierarch"),
		popup: $.t("v:signpost.desc.gateOfTheHierarch")
	}, {
		coords: [[66.32, -35.31]],
		label: $.t("v:signpost.label.gloryGate"),
		popup: $.t("v:signpost.desc.gloryGate")
	}, {
		coords: [[65.99, -43.90]],
		label: $.t("v:signpost.label.portsideGate"),
		popup: $.t("v:signpost.desc.portsideGate")
	}, {
		coords: [[69.57, -55.28]],
		label: $.t("v:signpost.label.novigradDocks"),
		popup: $.t("v:signpost.desc.novigradDocks")
	}, {
		coords: [[75.39, -8.88]],
		label: $.t("v:signpost.label.arette"),
		popup: $.t("v:signpost.desc.arette")
	}, {
		coords: [[69.57, -2.81]],
		label: $.t("v:signpost.label.sevenCatsInn"),
		popup: $.t("v:signpost.desc.sevenCatsInn")
	}, { // NE Novigrad
		coords: [[83.53, -9.40]],
		label: $.t("v:signpost.label.sarrasinGrange"),
		popup: $.t("v:signpost.desc.sarrasinGrange")
	}, {
		coords: [[81.92, 3.60]],
		label: $.t("v:signpost.label.yantra"),
		popup: $.t("v:signpost.desc.yantra")
	}, {
		coords: [[82.09, 30.15]],
		label: $.t("v:signpost.label.isolatedHut"),
		popup: $.t("v:signpost.desc.isolatedHut")
	}, {
		coords: [[76.24, 18.26]],
		label: $.t("v:signpost.label.honeyfillMeadworks"),
		popup: $.t("v:signpost.desc.honeyfillMeadworks")
	}, {
		coords: [[79.04, 65.21]],
		label: $.t("v:signpost.label.martinFeuillesFarmstead"),
		popup: $.t("v:signpost.desc.martinFeuillesFarmstead")
	}, {
		coords: [[81.02, 49.09]],
		label: $.t("v:signpost.label.winespringGrange"),
		popup: $.t("v:signpost.desc.winespringGrange")
	}, {
		coords: [[79.59, 31.03]],
		label: $.t("v:signpost.label.moldavieResidence"),
		popup: $.t("v:signpost.desc.moldavieResidence")
	}, {
		coords: [[81.66, -31.55]],
		label: $.t("v:signpost.label.cavern"),
		popup: $.t("v:signpost.desc.cavern")
	}, { // E Novigrad
		coords: [[72.92, 41.31]],
		label: $.t("v:signpost.label.alness"),
		popup: $.t("v:signpost.desc.alness")
	}, {
		coords: [[67.58, 31.03]],
		label: $.t("v:signpost.label.wheatFields"),
		popup: $.t("v:signpost.desc.wheatFields")
	}, {
		coords: [[65.31, 46.67]],
		label: $.t("v:signpost.label.vegelbudResidence"),
		popup: $.t("v:signpost.desc.vegelbudResidence")
	}, { // SE Novigrad
		coords: [[62.02, 39.11]],
		label: $.t("v:signpost.label.carsten"),
		popup: $.t("v:signpost.desc.carsten")
	}, {
		coords: [[58.56, 66.27]],
		label: $.t("v:signpost.label.temerianPartisanHideout"),
		popup: $.t("v:signpost.desc.temerianPartisanHideout")
	}, {
		coords: [[59.82, 85.87]],
		label: $.t("v:signpost.label.estTayiar"),
		popup: $.t("v:signpost.desc.estTayiar")
	}, {
		coords: [[49.45, 70.67]],
		label: $.t("v:signpost.label.herbalistsHut"),
		popup: $.t("v:signpost.desc.herbalistsHut")
	}, {
		coords: [[35.51, 110.67]],
		label: $.t("v:signpost.label.aeramasAbandonedManor"),
		popup: $.t("v:signpost.desc.aeramasAbandonedManor")
	}, {
		coords: [[19.89, 83.06]],
		label: $.t("v:signpost.label.crossroads"),
		popup: $.t("v:signpost.desc.crossroads")
	}, {
		coords: [[49.85, 52.73]],
		label: $.t("v:signpost.label.gustfieldsFarm"),
		popup: $.t("v:signpost.desc.gustfieldsFarm")
	}, {
		coords: [[76.64, 37.00]],
		label: $.t("v:signpost.label.dancingWindmill"),
		popup: $.t("v:signpost.desc.dancingWindmill")
	}, { // S Novigrad
		coords: [[67.20, -65.48]],
		label: $.t("v:signpost.label.loggersHut"),
		popup: $.t("v:signpost.desc.loggersHut")
	}, {
		coords: [[66.92, -85.25]],
		label: $.t("v:signpost.label.lighthouse"),
		popup: $.t("v:signpost.desc.lighthouse")
	}, {
		coords: [[61.90, -14.08]],
		label: $.t("v:signpost.label.cunnyOfTheGoose"),
		popup: $.t("v:signpost.desc.cunnyOfTheGoose")
	}, {
		coords: [[58.03, -29.44]],
		label: $.t("v:signpost.label.drahimCastle"),
		popup: $.t("v:signpost.desc.drahimCastle")
	}, {
		coords: [[54.10, -71.98]],
		label: $.t("v:signpost.label.widowsGrotto"),
		popup: $.t("v:signpost.desc.widowsGrotto")
	}, {
		coords: [[45.98, -51.33]],
		label: $.t("v:signpost.label.ursten"),
		popup: $.t("v:signpost.desc.ursten")
	}, {
		coords: [[60.50, -55.55]],
		label: $.t("v:signpost.label.luciansWindmill"),
		popup: $.t("v:signpost.desc.luciansWindmill")
	}, {
		coords: [[62.35, 11.69]],
		label: $.t("v:signpost.label.eternalFireChapel"),
		popup: $.t("v:signpost.desc.eternalFireChapel")
	}, {
		coords: [[37.11, -27.23]],
		label: $.t("v:signpost.label.borderPost"),
		popup: $.t("v:signpost.desc.borderPost")
	}, { // Oxenfurt
		coords: [[38.17, 62.31]],
		label: $.t("v:signpost.label.novigradGate"),
		popup: $.t("v:signpost.desc.novigradGate")
	}, {
		coords: [[29.10, 52.58]],
		label: $.t("v:signpost.label.westernGate"),
		popup: $.t("v:signpost.desc.westernGate")
	}, {
		coords: [[37.40, 48.34]],
		label: $.t("v:signpost.label.oxenfurtHarbor"),
		popup: $.t("v:signpost.desc.oxenfurtHarbor")
	}, { // NE Velen
		coords: [[15.62, 25.66]],
		label: $.t("v:signpost.label.stonecuttersSettlement"),
		popup: $.t("v:signpost.desc.stonecuttersSettlement")
	}, {
		coords: [[35.96, 34.41]],
		label: $.t("v:signpost.label.whiteEagleFort"),
		popup: $.t("v:signpost.desc.whiteEagleFort")
	}, {
		coords: [[27.45, 12.00]],
		label: $.t("v:signpost.label.codgersQuarry"),
		popup: $.t("v:signpost.desc.codgersQuarry")
	}, {
		coords: [[39.61, -2.42]],
		label: $.t("v:signpost.label.hindhold"),
		popup: $.t("v:signpost.desc.hindhold")
	}, {
		coords: [[-4.01, 63.37]],
		label: $.t("v:signpost.label.ferryStation"),
		popup: $.t("v:signpost.desc.ferryStation")
	}, {
		coords: [[13.75, -9.05]],
		label: $.t("v:signpost.label.hangedMansTree"),
		popup: $.t("v:signpost.desc.hangedMansTree")
	}, {
		coords: [[5.22, 5.41]],
		label: $.t("v:signpost.label.devilsPit"),
		popup: $.t("v:signpost.desc.devilsPit")
	}, {
		coords: [[1.43, -15.16]],
		label: $.t("v:signpost.label.mulbrydale"),
		popup: $.t("v:signpost.desc.mulbrydale")
	}, {
		coords: [[0.82, -47.20]],
		label: $.t("v:signpost.label.innAtTheCrossroads"),
		popup: $.t("v:signpost.desc.innAtTheCrossroads")
	}, { // NW Velen
		coords: [[21.78, -106.54]],
		label: $.t("v:signpost.label.harpyFeedingGround"),
		popup: $.t("v:signpost.desc.harpyFeedingGround")
	}, {
		coords: [[30.56, -114.31]],
		label: $.t("v:signpost.label.lornruk"),
		popup: $.t("v:signpost.desc.lornruk")
	}, {
		coords: [[-1.85, -98.61]],
		label: $.t("v:signpost.label.heatherton"),
		popup: $.t("v:signpost.desc.heatherton")
	}, {
		coords: [[0.97, -110.39]],
		label: $.t("v:signpost.label.abandonedTower"),
		popup: $.t("v:signpost.desc.abandonedTower")
	}, {
		coords: [[2.37, -122.34]],
		label: $.t("v:signpost.label.isolatedShack"),
		popup: $.t("v:signpost.desc.isolatedShack")
	}, {
		coords: [[-28.27, -103.97]],
		label: $.t("v:signpost.label.blackbough"),
		popup: $.t("v:signpost.desc.blackbough")
	}, {
		coords: [[-32.44, -123.05]],
		label: $.t("v:signpost.label.hangmansAlley"),
		popup: $.t("v:signpost.desc.hangmansAlley")
	}, {
		coords: [[-39.71, -74.62]],
		label: $.t("v:signpost.label.crowsPerch"),
		popup: $.t("v:signpost.desc.crowsPerch")
	}, {
		coords: [[-52.81, -55.63]],
		label: $.t("v:signpost.label.boatmakersHut"),
		popup: $.t("v:signpost.desc.boatmakersHut")
	}, {
		coords: [[-50.35, -140.98]],
		label: $.t("v:signpost.label.refugeesCamp"),
		popup: $.t("v:signpost.desc.refugeesCamp")
	}, {
		coords: [[-45.01, -140.36]],
		label: $.t("v:signpost.label.coastOfWrecks"),
		popup: $.t("v:signpost.desc.coastOfWrecks")
	}, {
		coords: [[-53.67, -119.50]],
		label: $.t("v:signpost.label.midcopse"),
		popup: $.t("v:signpost.desc.midcopse")
	}, {
		coords: [[-57.30, -98.57]],
		label: $.t("v:signpost.label.wastrelManor"),
		popup: $.t("v:signpost.desc.wastrelManor")
	}, {
		coords: [[-62.01, -34.94]],
		label: $.t("v:signpost.label.banditsCamp"),
		popup: $.t("v:signpost.desc.banditsCamp")
	}, {
		coords: [[-63.55, -74.44]],
		label: $.t("v:signpost.label.oreton"),
		popup: $.t("v:signpost.desc.oreton")
	}, {
		coords: [[-45.68, -127.05]],
		label: $.t("v:signpost.label.forestHut"),
		popup: $.t("v:signpost.desc.forestHut")
	}, {
		coords: [[-13.67, -84.20]],
		label: $.t("v:signpost.label.wolvenGlade"),
		popup: $.t("v:signpost.desc.wolvenGlade")
	}, {
		coords: [[-28.84, -60.56]],
		label: $.t("v:signpost.label.burnedRuins"),
		popup: $.t("v:signpost.desc.burnedRuins")
	}, {
		coords: [[-47.10, -92.64]],
		label: $.t("v:signpost.label.trollBridge"),
		popup: $.t("v:signpost.desc.trollBridge")
	}, {
		coords: [[-53.96, -80.86]],
		label: $.t("v:signpost.label.claywich"),
		popup: $.t("v:signpost.desc.claywich")
	}, {
		coords: [[-69.33, -39.59]],
		label: $.t("v:signpost.label.drudge"),
		popup: $.t("v:signpost.desc.drudge")
	}, { // SW Velen
		coords: [[-64.09, -147.83]],
		label: $.t("v:signpost.label.condyle"),
		popup: $.t("v:signpost.desc.condyle")
	}, {
		coords: [[-65.73, -128.41]],
		label: $.t("v:signpost.label.duenHen"),
		popup: $.t("v:signpost.desc.duenHen")
	}, {
		coords: [[-73.30, -69.92]],
		label: $.t("v:signpost.label.fykeIsle"),
		popup: $.t("v:signpost.desc.fykeIsle")
	}, {
		coords: [[-77.12, -112.72]],
		label: $.t("v:signpost.label.byways"),
		popup: $.t("v:signpost.desc.byways")
	}, {
		coords: [[-80.79, -69.83]],
		label: $.t("v:signpost.label.frischlow"),
		popup: $.t("v:signpost.desc.frischlow")
	}, {
		coords: [[-78.73, -41.44]],
		label: $.t("v:signpost.label.olenasGrove"),
		popup: $.t("v:signpost.desc.olenasGrove")
	}, { // SE Velen
		coords: [[-79.15, -10.28]],
		label: $.t("v:signpost.label.roadToBaldMountain"),
		popup: $.t("v:signpost.desc.roadToBaldMountain")
	}, {
		coords: [[-80.90, 30.32]],
		label: $.t("v:signpost.label.destroyedBastion"),
		popup: $.t("v:signpost.desc.destroyedBastion")
	}, {
		coords: [[-76.49, 41.62]],
		label: $.t("v:signpost.label.crossroadsVillage"),
		popup: $.t("v:signpost.desc.crossroadsVillage")
	}, {
		coords: [[-77.56, 110.92]],
		label: $.t("v:signpost.label.nilfgaardianArmyGroupCenterCamp"),
		popup: $.t("v:signpost.desc.nilfgaardianArmyGroupCenterCamp")
	}, {
		coords: [[-74.73, 98.61]],
		label: $.t("v:signpost.label.houseOfRespite"),
		popup: $.t("v:signpost.desc.houseOfRespite")
	}, {
		coords: [[-69.16, 82.13]],
		label: $.t("v:signpost.label.kimboltWay"),
		popup: $.t("v:signpost.desc.kimboltWay")
	}, {
		coords: [[-67.09, 22.19]],
		label: $.t("v:signpost.label.theOrphansOfCrookbackBog"),
		popup: $.t("v:signpost.desc.theOrphansOfCrookbackBog")
	}, {
		coords: [[-65.05, 37.53]],
		label: $.t("v:signpost.label.ruinedTower"),
		popup: $.t("v:signpost.desc.ruinedTower")
	}, {
		coords: [[-70.73, 43.68]],
		label: $.t("v:signpost.label.ancientOak"),
		popup: $.t("v:signpost.desc.ancientOak")
	}, {
		coords: [[-58.79, 30.63]],
		label: $.t("v:signpost.label.downwarren"),
		popup: $.t("v:signpost.desc.downwarren")
	}, {
		coords: [[-54.39, 10.99]],
		label: $.t("v:signpost.label.dragonslayersGrotto"),
		popup: $.t("v:signpost.desc.dragonslayersGrotto")
	}, {
		coords: [[-48.75, 30.72]],
		label: $.t("v:signpost.label.reardonManor"),
		popup: $.t("v:signpost.desc.reardonManor")
	}, {
		coords: [[-50.63, 67.32]],
		label: $.t("v:signpost.label.benek"),
		popup: $.t("v:signpost.desc.benek")
	}, {
		coords: [[-36.10, 51.68]],
		label: $.t("v:signpost.label.toderas"),
		popup: $.t("v:signpost.desc.toderas")
	}, {
		coords: [[-34.42, 11.69]],
		label: $.t("v:signpost.label.lurtch"),
		popup: $.t("v:signpost.desc.lurtch")
	}, {
		coords: [[-36.81, -25.97]],
		label: $.t("v:signpost.label.lindenvale"),
		popup: $.t("v:signpost.desc.lindenvale")
	}, {
		coords: [[-17.22, 40.17]],
		label: $.t("v:signpost.label.maraudersBridge"),
		popup: $.t("v:signpost.desc.maraudersBridge")
	}, {
		coords: [[-22.92, 71.59]],
		label: $.t("v:signpost.label.grotto"),
		popup: $.t("v:signpost.desc.grotto")
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
		label: $.t("smugglers.label"),
		popup: $.t("smugglers.desc")
	}],

// Spoils of War
	spoils: [{ // NE Velen
		coords: [[33.91, -68.51]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: ''})
	}, { // NW Velen
		coords: [[-22.72, -32.04]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 4 <span>' + $.t("v:monsters.drowners") + '</span>)'})
	}, { // SW Velen
		coords: [[-74.75, -144.93]],
		label: $.t("spoils.label"),
		popup: $.t("spoils.desc", {monster: '(lvl 10 <span>' + $.t("v:monsters.drowners") + '</span>)'})
	}]
};
