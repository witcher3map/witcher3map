(function () {
	window.map_path   = 'velen';
	window.map_sWest  = L.latLng(-85.05, -180);
	window.map_nEast  = L.latLng(85.05, 135);
	window.map_center = [60, -5];
	window.map_mZoom  = 6;

	var icons = window.icons;
	var markers = window.markers;

	// Abandoned Site
	var abandonedGeneric = genericMarkers([
		// NW Velen
			[-53.59, -56.34],
			[-29.34, -136.23],
			[-50.25, -140.63],
			[-58.95, -142.21],
	], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more');

	markers.abandoned = L.layerGroup($.merge(abandonedGeneric, [
		// NE Velen
			createMarker([-17.06, 8.26], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more (lvl 4<span> Drowners</span>)'),
			createMarker([13.70, 46.05], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more (lvl 9<span> Drowners</span>)'),
			createMarker([-8.23, 72.16], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more (lvl 9<span> Ghouls</span> &amp; lvl 11<span> Alghoul</span>)'),
		// SW Velen
			createMarker([-79.70, -112.15], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more (lvl 9<span> Bandits</span>)'),
			createMarker([-78.68, -40.69], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more (lvl 9<span> Endregas</span>)'),
		// SE Velen
			createMarker([-36.95, 3.08], icons.abandoned, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more (lvl 5<span> Bandits</span>)'),
	]));

	// Alchemy Supplies
	markers.alchemy = L.layerGroup([
		// Novigrad
			createMarker([77.71, -15.91], icons.alchemy, 'Alchemy Supplies*', '<h1>Alchemy Supplies*</h1>Here you can buy alchemy ingredients, also pays well trophies'),
			createMarker([79.75, -49.83], icons.alchemy, 'Alchemy Supplies', '<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
		// NW Velen
			createMarker([-18.52, -110.21], icons.alchemy, 'Alchemy Supplies', '<h1>Pellar</h1>Here you can buy alchemy ingredients'),
	]);

	// Armourer


	markers.armourer = L.layerGroup([
		// Novigrad
			createMarker([74.23, -38.23], icons.armourer, 'Journeyman Armorer', '<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// Oxenfurt
			createMarker([38.82, 54.01], icons.armourer, 'Journeyman Armorer', '<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// NE Velen
			createMarker([2.18, -12.92], icons.armourer, 'Amateur Armorer', '<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// NW Velen
			createMarker([-31.25, -71.02], icons.armourer, 'Journeyman Armorer', '<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([-54.06, -122.97], icons.armourer, 'Amateur Armorer', '<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([-30.87, -71.63], icons.armourer, 'Master Armorer*', '<h1>Master Armorer* (Yoana)</h1>Is available after the \'Master Armorers\' (lvl 26) quest. Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
	]);

	// Armourer's Table
	markers.armourerstable = L.layerGroup(genericMarkers([
		// Novigrad
			[75.27, -43.35],
			[75.00, -40.68],
		// Oxenfurt
			[41.74, 51.23],
		// NE Velen
			[2.48, -12.42],
		// NW Velen
			[-29.07, -106.97],
			[-30.41, -73.01],
			[-63.95, -75.66],
			[-54.01, -122.37],
			[-59.04, -143.61],
		// SE Velen
			[-35.53, 54.58],
			[-33.60, -26.28],
	], icons.armourerstable, 'Armorer\'s Table', '<h1>Armorer\'s Table</h1>Armorer\'s tables grant your gear increased armor for a limited duration'));

	// Bandit Camp
	var banditcampGeneric = genericMarkers([
		// NE Velen
			[11.61, -54.42],
		// NW Velen
			[-23.92, -95.51],
			[-42.81, -128.14],
			[-48.69, -130.78],
			[-51.67, -133.59],
			[-40.18, -136.49],
			[-61.14, -145.81],
			[-57.70, -154.75],
		// SW Velen
			[-64.55, -146.69],
			[-65.04, -142.34],
		// SE Velen
			[-29.69, -17.23],
	], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here');

	markers.banditcamp = L.layerGroup($.merge(banditcampGeneric, [
		// S Novigrad
			createMarker([55.43, -63.00], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
		// E Novigrad
			createMarker([74.40, 49.06], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 7)'),
		// NE Velen
			createMarker([0.53, 33.05], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
			createMarker([8.67, 1.76], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
		// SE Velen
			createMarker([-77.24, 36.69], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 10)'),
			createMarker([-53.33, 54.49], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
			createMarker([-26.90, 24.43], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
			createMarker([-38.96, -4.75], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 7-9)'),
			createMarker([13.37, 84.36], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
			createMarker([-74.40, -6.81], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here (lvl 9)'),
		// SW Velen
			createMarker([-69.81, -142.91], icons.banditcamp, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here. Bugged area, never shows as cleared'),
	]));

	// Barber
	markers.barber = L.layerGroup(genericMarkers([
		// Novigrad
			[76.45, -33.18],
			[76.32, -20.39],
		// Oxenfurt
			[33.87, 52.12],
		// NW Velen
			[-54.36, -81.81],
	], icons.barber, 'Barber', '<h1>Barber</h1>Visit barbers for a shave or a new haircut'));

	// Blacksmith
	markers.blacksmith = L.layerGroup([
		// Novigrad
			createMarker([69.15, -41.00], icons.blacksmith, 'Master Blacksmith*', '<h1>Master Blacksmith</h1>You must complete "Of Swords and Dumplings" (level 24) quest in order to unlock this blacksmith. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([73.14, -37.96], icons.blacksmith, 'Journeyman Blacksmith', '<h1>Journeyman Blacksmith</h1>This blacksmith is available immediately. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([75.17, -43.15], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>This blacksmith is available immediately. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// Oxenfurt
			createMarker([32.00, 59.77], icons.blacksmith, 'Journeyman Blacksmith', '<h1>Journeyman Blacksmith</h1>This blacksmith is available immediately. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// NW Velen
			createMarker([-29.27, -106.47], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			createMarker([-64.28, -75.87], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		// SE Velen
			createMarker([-32.96, -26.91], icons.blacksmith, 'Amateur Blacksmith', '<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
	]);

	// Brothel
	markers.brothel = L.layerGroup([
		// Novigrad
			createMarker([71.22, -41.84], icons.brothel, 'Crippled Kate', '<h1>Crippled Kate Brothel</h1>You can call on the services of a prostitute here'),
			createMarker([78.34, -33.40], icons.brothel, 'Passiflora', '<h1>Passiflora Brothel</h1>You can call on the services of a prostitute here')
	]);

	// Boat
/*


	markers.boat = L.layerGroup(genericMarkers([
		// Novigrad
			[69.84, -13.01],
			[72.82, -10.28],
			[77.92, -44.38],
			[76.98, -47.29],
			[76.92, -50.10],
			[70.23, -46.47],
			[70.03, -52.69],
			[70.64, -58.93],
			[73.64, -54.99],
			[73.26, -52.57],
		// NE Novigrad
			[82.32, -53.51],
			[81.33, -34.10],
		// E Novigrad
			[65.04, 19.78],
		// S Novigrad
			[67.41, -72.33],
			[56.32, -3.89],
			[47.36, -58.43],
			[38.62, -61.56],
			[30.83, -59.94],
			[35.10, -28.19],
		// Oxenfurt
			[46.56, 49.37],
			[36.03, 67.94],
			[34.23, 61.00],
			[28.23, 62.49],
			[24.69, 54.23],
			[29.38, 48.06],
			[15.31, 68.73],
		// NE Velen
			[-7.19, 65.13],
			[-0.97, 68.82],
			[38.82, 39.55],
			[51.45, 10.50],
			[-19.10, 7.38],
			[-18.40, -32.93],
		// NW Velen
			[-26.12, -31.38],
			[-51.99, -34.10],
			[-54.32, -54.32],
			[-69.89, -33.44],
			[-65.33, -64.47],
			[-65.35, -81.43],
			[-65.78, -82.31],
			[-63.80, -125.46],
			[-41.54, -142.82],
			[-27.64, -121.82],
		// SW Velen
			[-73.48, -142.91],
			[-74.04, -104.24],
			[-77.06, -40.96],
			[-71.90, -73.92],
			[-80.18, -114.17],
		// SE Velen
			[-68.84, -4.48],
	], icons.boat, 'Boat', '<h1>Boat</h1>You can use boats to travel across bodies of water'));
*/
	// Entrance
	// todo, entrance to what?
	markers.entrance = L.layerGroup([
		// Novigrad
			createMarker([80.68, -55.02], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// NE Novigrad
			createMarker([82.18, 32.78], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// SE Novigrad
			createMarker([58.34, 66.68], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([61.02, 89.12], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([36.43, 114.21], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// S Novigrad
			createMarker([53.96, -71.48], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// NE Velen
			createMarker([27.06, -29.27], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// NW Velen
			createMarker([3.05, -122.17], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-26.70, -63.75], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-28.77, -77.74], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// SW Velen
			createMarker([-75.36, -124.19], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-76.32, -114.87], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
		// SE Velen
			createMarker([-71.64, -1.67], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-70.16, 39.55], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-48.52, -29.03], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-22.84, 72.02], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-56.51, 80.33], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-43.71, 39.20], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-35.32, 69.74], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-38.00, 70.36], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-79.628, 2.351], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-52.670, 31.069], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
			createMarker([-75.834, 50.361], icons.entrance, 'Entrance', '<h1>Entrance</h1>Entrance to cave or ruins'),
	]);

	// Grindstone
	markers.grindstone = L.layerGroup(genericMarkers([
		// Novigrad
			[75.27, -42.95],
			[74.96, -40.28],
		// S Novigrad
			[48.86, -51.39],
		// Oxenfurt
			[41.64, 51.53],
		// NE Velen
			[2.48, -13.42],
		// NW Velen
			[32.84, -114.26],
			[-29.07, -105.97],
			[-30.64, -72.55],
			[-53.67, -80.20],
			[-64.05, -75.06],
			[-54.01, -123.57],
			[-59.09, -144.05],
		// SE Velen
			[-35.89, 55.20],
			[-33.80, -26.81],
	], icons.grindstone, 'Grindstone', '<h1>Grindstone</h1>A blade sharpened here will deal more damage'));

	// Guarded Treasure
	var guardedGeneric = genericMarkers([
		// NE Velen
			[22.51, -56.78],
		// NW Velen
			[-28.07, -119.66],
			[-38.62, -123.40],
			[-38.27, -149.24],
		// SE Velen
			[-73.42, 31.77],
			[-51.78, -6.42],
	], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster guards a valuable cache here');

	markers.guarded = L.layerGroup($.merge(guardedGeneric, [
		// NE Novigrad
			createMarker([76.43, -2.07], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 8<span> Water Hag</span>) guards a valuable cache here'),
			createMarker([80.52, -4.53], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 15<span> Bilge Hag</span>) guards a valuable cache here'),
			createMarker([82.61, -33.49], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 23<span> Armored Arachas</span>) guards a valuable cache here'),
		// SE Novigrad
			createMarker([45.62, 99.05], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 20<span> Leshen</span>) guards a valuable cache here'),
		// S Novigrad
			createMarker([51.97, -12.00], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 18<span> Wyvern</span>) guards a valuable cache here'),
			createMarker([62.00, -97.38], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 15<span> Noonwraith</span>) guards a valuable cache here'),
		// NE Velen
			createMarker([-8.93, 12.30], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 13<span> Alghoul</span>) guards a valuable cache here'),
			createMarker([-7.89, 55.37], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 9<span> Drowners</span>) guards a valuable cache here'),
		// NW Velen
			createMarker([4.193, -82.463], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>Available after the \'Master Armorers\' (lvl 26) quest. A particularly powerful monster guards a valuable cache here'),
			createMarker([-62.39, -118.17], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 7<span> Wraiths</span>) guards a valuable cache here'),
			createMarker([-43.55, -40.08], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 14<span> Forktail</span>) guards a valuable cache here'),
			createMarker([-45.61, -152.31], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 4<span> Drowners</span>) guards a valuable cache here'),
			createMarker([25.96, -99.67], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 14<span> Basilisk</span>) guards a valuable cache here'),
		// SW Velen
			createMarker([-77.77, -102.04], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 8<span> Water Hag</span>) guards a valuable cache here'),
			createMarker([-81.30, -69.74], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 18<span> Noonwraith/Nightwraith</span>) guards a valuable cache here'),
			createMarker([-82.20, -69.57], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 19<span> Gargoyle</span>) guards a valuable cache here'),
			createMarker([-78.56, -48.91], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 13<span> Alghoul</span>) guards a valuable cache here'),
		// SE Velen
			createMarker([-70.260, 102.440], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 24<span> Earth Elemental</span>) guards a valuable cache here'),
			createMarker([-75.81, 30.63], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 20<span> Bilge Hag</span>) guards a valuable cache here'),
			createMarker([-80.190, 28.870], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 14<span> Wyvern</span>) guards a valuable cache here'),
			createMarker([-81.11, 31.33], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 19<span> Cyclops</span>) guards a valuable cache here'),
			createMarker([-63.27, 48.87], icons.guarded, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster (lvl 8<span> Water Hag</span>) guards a valuable cache here'),
	]));

	// Gwent Player
	markers.gwent = L.layerGroup([
		// Novigrad
			createMarker([74.618, -35.132], icons.gwent, 'Gwent Player', '<h1>Book Merchant Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([71.00, -41.90], icons.gwent, 'Gwent Player', '<h1>Crippled Kate Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([78.25, -33.79], icons.gwent, 'Gwent Tournament', '<h1>Gwent Tournament (Quest)</h1>Find the scribe and sign up for the high-stakes Gwent tournament'),
			createMarker([72.58, -26.21], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([70.15, -36.93], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([71.43, -35.51], icons.gwent, 'Gwent Player', '<h1>Herbalist Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([70.14, -1.45], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([70.00, -20.27], icons.gwent, 'Gwent Player', '<h1>Merchant Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([70.12, -29.16], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([73.32, -43.81], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([76.25, -23.95], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([73.20, -37.66], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([73.81, -37.76], icons.gwent, 'Gwent Player', '<h1>Banker Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([74.52, -46.63], icons.gwent, 'Gwent Player', '<h1>Fishmonger Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([75.37, -43.15], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([75.49, -44.62], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([76.87, -33.02], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([75.04, -20.82], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([75.39, -19.02], icons.gwent, 'Gwent Player', '<h1>Loan Shark Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([79.80, -49.53], icons.gwent, 'Gwent Player', '<h1>Alchemist Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([77.77, -15.58], icons.gwent, 'Gwent Player', '<h1>Alchemist Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([74.55, -32.41], icons.gwent, 'Gwent Player', '<h1>Innkeeper Player</h1>Warning, this player may disappear later in the game. Gamble your hard earned coin playing Gwent here'),
		// S Novigrad
			createMarker([62.43, -14.22], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// SE Novigrad
			createMarker([50.64, 72.27], icons.gwent, 'Gwent Player', '<h1>Herbalist Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// Oxenfurt
			createMarker([36.56, 52.47], icons.gwent, 'Gwent Player', '<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([38.92, 54.21], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([40.11, 51.68], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([32.20, 59.87], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// NE Velen
			createMarker([2.58, -12.92], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// NW Velen
			createMarker([-27.64, -102.54], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-28.87, -106.47], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-34.76, -72.57], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-31.90, -71.52], icons.gwent, 'Gwent Player', '<h1>Quartermaster Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-31.15, -70.82], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-28.39, -75.45], icons.gwent, 'Gwent Player', '<h1>Bloody Baron Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-52.60, -81.19], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-62.53, -76.44], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-54.27, -121.56], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-53.86, -122.97], icons.gwent, 'Gwent Player', '<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-30.67, -71.43], icons.gwent, 'Gwent Player', '<h1>Yoana (Armorer\'s assistant) Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		// SE Velen
			createMarker([-36.78, -24.15], icons.gwent, 'Gwent Player', '<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-32.76, -26.61], icons.gwent, 'Gwent Player', '<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-78.74, 108.44], icons.gwent, 'Gwent Player', '<h1>Quartermaster Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			createMarker([-57.20, 27.23], icons.gwent, 'Gwent Player', '<h1>Gwent Player</h1>This Gwent player disappears sometime after the \'Family matters\' quest. Gamble your hard earned coin playing Gwent here'),
	]);

	// Harbor
	markers.harbor = L.layerGroup(genericMarkers([
		// Novigrad
			[70.64, -58.93],
		// Oxenfurt
			[38.17, 46.85],
		// NE Velen
			[-6.53, 62.93],
			[-19.10, 9.49],
			[-18.40, -32.93],
		// NW Velen
			[-54.32, -54.32],
			[-41.54, -142.82],
			[-27.64, -121.82],
		// SW Velen
			[-71.90, -73.92],
			[-80.18, -114.17],
		// SE Velen
			[-78.78, -11.07],
	], icons.harbor, 'Harbor', '<h1>Harbor</h1>A place where you can find a boat, boats will respawn here'));

	// Herbalist
	var herbalistGeneric = genericMarkers([
		// Novigrad
			[73.65, -34.89],
			[71.33, -35.51],
		// S Novigrad
			[61.89, -13.16],
		// SE Novigrad
			[50.54, 72.07],
	], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>Here you can buy alchemy ingredients');

	markers.herbalist = L.layerGroup($.merge(herbalistGeneric, [
		// NW Velen
			createMarker([-50.26, -138.91], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
			createMarker([-28.15, -135.26], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
		// SW Velen
			createMarker([-78.53, -41.44], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
		// SE Velen
			createMarker([-36.92, 2.37], icons.herbalist, 'Herbalist', '<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
	]));


	// Hidden Treasure
	var hiddenGeneric = genericMarkers([
		// NW Velen
			[33.06, -115.25],
			[-27.92, -128.06],
			[-31.65, -143.17],
			[-42.33, -140.33],
		// SW Velen
			[-71.34, -107.75],
		// SE Velen
			[-29.99, 28.39],
	], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods');

	markers.hidden = L.layerGroup($.merge(hiddenGeneric, [
		// S Novigrad
			createMarker([34.55, -43.68], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 6<span> Nekkers</span>)'),
			createMarker([49.38, -68.91], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 15<span> Mucknixers</span>)'),
		// NE Velen
			createMarker([-16.89, 10.06], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 10<span> Drowners</span>)'),
			createMarker([3.03, 64.56], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 4<span> Drowners</span>)'),
			createMarker([45.49, 26.76], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 4<span> Drowners</span>)'),
			createMarker([-3.51, 21.40], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 4<span> Foglet</span>)'),
			createMarker([52.35, 16.17], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 18<span> Bilge Hag</span>)'),
			createMarker([47.72, 38.50], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 26+<span> Basilisk</span>)'),
		// NW Velen
			createMarker([-50.76, -155.04], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 4<span> Drowners</span>)'),
		// SE Velen
			createMarker([-72.84, 77.08], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 22<span> Fiend</span>)'),
			createMarker([-37.16, 97.29], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 4<span> Foglets</span>)'),
			createMarker([-20.96, 48.78], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 9<span> Bandits</span>)'),
		// SW Velen
			createMarker([-70.50, -150.64], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 25+<span> Grave Hag</span>)'),
			createMarker([-72.78, -131.40], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 10<span> Bandits</span>)'),
			createMarker([-71.09, -109.96], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 13<span> Wraiths</span>)'),
			createMarker([-76.90, -80.68], icons.hidden, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods (Guarded by lvl 4<span> Drowners</span>)'),
	]));

	// Innkeep
	markers.innkeep = L.layerGroup([
		// Novigrad
			createMarker([73.24, -44.21], icons.innkeep, 'The Golden Sturgen', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			createMarker([78.22, -33.49], icons.innkeep, 'Passiflora', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			createMarker([76.20, -24.35], icons.innkeep, 'The Nowhere', '<h1>Innkeep</h1>Sells Food and drink'),
			createMarker([70.02, -29.56], icons.innkeep, 'Rosemary &amp; Thyme', '<h1>Innkeep</h1>Sells Food and drink'),
			createMarker([70.04, -1.85], icons.innkeep, 'Seven Cats Inn', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			createMarker([74.50, -32.61], icons.innkeep, 'The Kingfisher', '<h1>The Kingfisher</h1>Warning, this trader may disappear later in the game. Sells Gwent cards, food, and drink'),
		// S Novigrad
			createMarker([62.33, -14.02], icons.innkeep, 'Cunny of the Goose', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
		// Oxenfurt
			createMarker([36.46, 52.27], icons.innkeep, 'The Alchemy', '<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
		// NE Velen
			createMarker([0.09, -45.62], icons.innkeep, 'Inn at the Crossroads', '<h1>Innkeep</h1>Sells Gwent cards, and drink'),
	]);

	// Monster Den
	var monsterdenGeneric = genericMarkers([
		// NE Velen
			[20.47, -13.76],
		// SE Velen
			[-54.47, 12.00],
	], icons.monsterden, 'Monster Den', '<h1>Monster Den</h1>Monster-infested location. A constant worry for those living nearby');

	markers.monsterden = L.layerGroup($.merge(monsterdenGeneric, [
		// NE Novigrad
			createMarker([82.19, -32.08], icons.monsterden, 'Monster Den', '<h1>Monster Den</h1>Monster-infested location. A constant worry for those living nearby (lvl 19<span> Golem</span>)'),
		// S Novigrad
			createMarker([46.99, -40.08], icons.monsterden, 'Monster Den', '<h1>Monster Den</h1>Monster-infested location. A constant worry for those living nearby (lvl 16<span> Rabid Rock Troll</span> &amp; lvl 18<span> Nekkers</span>)'),
	]));

	// Monster Nest
	var monsternestGeneric = genericMarkers([
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
			[-68.69, -2.20],
	], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs');

	markers.monsternest = L.layerGroup($.merge(monsternestGeneric, [
		// S Novigrad
			createMarker([34.31, -60.51], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 6<span> Rotfiends</span>)'),
			createMarker([49.84, -45.97], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 9<span> Endregas</span>)'),
			createMarker([50.79, -42.19], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 9<span> Endregas</span>)'),
			createMarker([50.98, -20.99], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 6<span> Rotfiends</span>)'),
		// NE Velen
			createMarker([7.36, 48.78], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 9<span> Ghouls</span>)'),
			createMarker([8.01, 47.37], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 9<span> Ghouls</span>)'),
			createMarker([-2.94, 27.38], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 9<span> Ghouls</span>)'),
			createMarker([41.64, 13.97], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 6<span> Rotfiends</span>)'),
		// SW Velen
			createMarker([-75.68, -27.11], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 4&amp;9<span> Drowners</span>)'),
		// SE Velen
			createMarker([-50.23, 57.57], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 8<span> Nekkers</span>)'),
			createMarker([-46.01, 52.56], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 8/9<span> Nekkers</span>)'),
			createMarker([-49.04, 46.93], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 8/9<span> Nekkers</span>)'),
			createMarker([-49.12, 42.36], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 8/9<span> Nekkers</span>)'),
			createMarker([-40.18, 80.29], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 21<span> Wyvern</span>)'),
			createMarker([-41.38, 80.38], icons.monsternest, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs (lvl 21<span> Wyvern</span>)'),
	]));

	// Notice Board
	markers.notice = L.layerGroup(genericMarkers([
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
			[-78.73, 110.17],
	], icons.notice, 'Notice Board', '<h1>Notice Board</h1>Here you can find monster contracts and announcements about matters of local concern'));

	// Person in Distress
	var pidGeneric = genericMarkers([
		// NE Velen
			[26.43, -11.87],
		// NW Velen
			[-33.94, -132.36],
	], icons.pid, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance');

	markers.pid = L.layerGroup($.merge(pidGeneric, [
		// SE Novigrad
			createMarker([20.47, 100.55], icons.pid, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance (lvl 9<span> Bandits</span>)'),
		// NE Velen
			createMarker([-17.64, -29.18], icons.pid, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance (lvl 10-16<span> Bandits</span>)'),
		// NW Velen
			createMarker([-61.23, -33.93], icons.pid, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance (lvl 5<span> Bandits</span>)'),
	]));

	// Place of Power
	//todo get all place of power types
	markers.pop = L.layerGroup([
		// Novigrad
			createMarker([80.72, -40.83], icons.pop, 'Place of Power', '<h1>Place of Power - Igni</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		// E Novigrad
			createMarker([71.02, 48.78], icons.pop, 'Place of Power', '<h1>Place of Power - Axii</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		// NW Velen
			createMarker([32.69, -112.60], icons.pop, 'Place of Power', '<h1>Place of Power - Quen</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		// SW Velen
			createMarker([-82.85, -72.69], icons.pop, 'Place of Power', '<h1>Place of Power - Aard</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([-71.82, -105.91], icons.pop, 'Place of Power*', '<h1>Place of Power - Yrden</h1>\'Wandering in the Dark\' quest. Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
		// SE Velen
			createMarker([-78.19, 7.91], icons.pop, 'Place of Power', '<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([-70.41, 38.41], icons.pop, 'Place of Power', '<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			createMarker([-55.68, 18.94], icons.pop, 'Place of Power', '<h1>Place of Power - Yrden</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			
	]);

	// Point of Interest
	markers.poi = L.layerGroup([
		// Novigrad
			createMarker([74.84, -25.88], icons.poi, 'Triss\' Residence', '<h1>Triss\' Residence</h1>todo'),
			createMarker([70.12, -28.76], icons.poi, 'Dandelion &amp; Zoltan\'s Residence', '<h1>Dandelion &amp; Zoltan\'s Residence</h1>todo'),
			createMarker([77.245, -24.829], icons.poi, 'Vilmerius Hospital', '<h1>Vilmerius Hospital</h1>todo'),
		// NW Velen
			createMarker([-47.34, -111.81], icons.poi, 'Keira Metz\'s Residence', '<h1>Keira Metz\'s Residence</h1>todo'),
		// Velen
			createMarker([61.90, -91.82], icons.poi, 'Witcher Upgrade Gear', '<h1>Feline Crossbow</h1>'),
			createMarker([57.651, -30.169], icons.poi, 'Witcher Upgrade Gear', '<h1>Superior Feline Silver Sword</h1>'),
			createMarker([75.70, -19.50], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhanced Feline Silver Sword</h1>You need to climp up a Leader'),
			createMarker([60.60, 89.80], icons.poi, 'Witcher Upgrade Gear', '<h1>Feline Silver Sword</h1>Inside the Est Tayiar Ruine, behind a Wall that you can break'),
			createMarker([36.50, 114,50], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhanced Feline Armor</h1>on top of the Aeramas’ Abandoned Manor'),
			createMarker([33, -114.5], icons.poi, 'Witcher Upgrade Gear', '<h1>Griffin Silver Sword Diagram</h1>'),
			createMarker([29.373, -73], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhanced Griffin Boots</h1>'),
			createMarker([41, -1], icons.poi, 'Witcher Upgrade Gear', '<h1>Griffin Steel Sword</h1>Near the Monster Nest'),
			createMarker([36.5, 35], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhance Griffin Armor </h1> Near the Troll at White Eagle Fort'),
			createMarker([22, 9.5], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhance Feline Gauntlets </h1>Inside a Shaft from the Codgers Quarry'),
			createMarker([-28, -61], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhanced Griffin Trousers </h1>Inside the Burned Ruin'),
			createMarker([-57, -156], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhanced Griffin Steel Sword </h1>'),
			createMarker([-61, -8.5], icons.poi, 'Witcher Upgrade Gear', '<h1>Superior Feline Armor</h1>'),
			createMarker([-54.5, 12], icons.poi, 'Witcher Upgrade Gear', '<h1>Griffin Armor Set</h1>Inside the Dragonslayers Grotto'),
			createMarker([-64, 38], icons.poi, 'Witcher Upgrade Gear', '<h1>Superior Ursine Steel Sword</h1>Guarded by lvl 25<span> Earth Elemental</span>'),
			createMarker([-81.1, 30.8], icons.poi, 'Witcher Upgrade Gear', '<h1>Mastercrafted Ursine Armor</h1>'),
			createMarker([-75.6, -28], icons.poi, 'Witcher Upgrade Gear', '<h1>Mastercrafted Ursine Silver Sword </h1>'),
			createMarker([-81.2, -70], icons.poi, 'Witcher Upgrade Gear', '<h1>Enhanced Griffin Gauntlets</h1>'),
	]);

	// Shopkeeper
	markers.shopkeeper = L.layerGroup([
		// Novigrad
			createMarker([74.22, -35.41], icons.shopkeeper, 'Book Merchant', '<h1>Book Merchant</h1>Buys and sells books'),
			createMarker([74.578, -35.332], icons.shopkeeper, 'Book Merchant', '<h1>Book Merchant</h1>Buys and sells books'),
			createMarker([72.82, -39.99], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells alchemy supplies, food, and drink'),
			createMarker([73.71, -37.96], icons.shopkeeper, 'Banker', '<h1>Banker</h1>You can exchange your unusable currency or borrow gold here'),
			createMarker([69.90, -20.47], icons.shopkeeper, 'Clothing Merchant', '<h1>Clothing Merchant</h1>Sells clothes and masks'),
			createMarker([70.05, -37.13], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells crafting supplies, weapons and \'Zerrikanian Saddlebags\' (+100)'),
			createMarker([76.81, -33.26], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells alchemy supplies, quest items (for Aeramas\' Manor), and \'Potion of Clearance\' (1000 gold)'),
			createMarker([75.41, -44.82], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells alchemy supplies, food, and drink'),
			createMarker([74.47, -46.93], icons.shopkeeper, 'Fishmonger', '<h1>Fishmonger</h1>Sells fish'),
			createMarker([76.57, -50.10], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells empty bottles'),
			createMarker([76.12, -49.04], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells runestones and alchemy supplies'),
			createMarker([74.98, -20.57], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells nothing note worthy'),
			createMarker([72.58, -26.41], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells gem dust (crafting supplies), weapons, food, and drink'),
			createMarker([75.33, -19.28], icons.shopkeeper, 'Loan Shark', '<h1>Loan Shark</h1>Sells nothing note worthy'),
			createMarker([75.61, -23.82], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells crafting supplies'),
			createMarker([71.00, -41.60], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells food and drink'),
		// NE Novigrad
			createMarker([80.92, 50.49], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
		// SE Novigrad
			createMarker([3.43, 97.08], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears here after being rescued'),
		// S Novigrad
	// appears on my map but nobody there?
	//				L.marker([65.95, -21.09], setMarker(icons.shopkeeper)).bindLabel('Shopkeeper'),
			createMarker([58.677, -55.415], icons.shopkeeper, 'Wandering Merchant', '<h1>Wandering Merchant</h1>Traveling from Lucian\'s Windmill to the Portside Gate. Sells runestones, alchemy supplies and food'),
			createMarker([63.27, -63.46], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells crafting supplies, food, and weapons'),
			createMarker([48.72, -51.94], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
			createMarker([57.98, -12.00], icons.shopkeeper, 'Wandering Merchant', '<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
		// Oxenfurt
			createMarker([40.01, 51.48], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells paint (quest item), hides, and drink'),
		// NE Velen
			createMarker([26.00, 30.11], icons.shopkeeper, 'Wandering Merchant', '<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
			createMarker([31.65, -17.93], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears here after being rescued. Sells alchemy supplies and food'),
			createMarker([-6.84, 72.38], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells weapons and crafting supplies'),
			createMarker([13.07, 46.27], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells runestones, alchemy supplies and food'),
		// NW Velen
			createMarker([-27.84, -102.74], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells nothing note worthy'),
			createMarker([-34.96, -72.77], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells Gwent cards and drink'),
			createMarker([-54.42, -121.65], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells Gwent cards and jewellery (crafting supplies)'),
			createMarker([-47.04, -112.50], icons.shopkeeper, 'Keira Metz', '<h1>Keira Metz</h1>Sells alchemy supplies, recipes and \'Potion of Clearance\' (1000 gold)'),
			createMarker([-32.03, -71.77], icons.shopkeeper, 'Quartermaster', '<h1>Quartermaster</h1>Sells Gwent cards, food, and drink'),
			createMarker([-36.10, -72.51], icons.shopkeeper, 'Shopkeeper Anselm', '<h1>Shopkeeper Anselm</h1>This merchant appears here after being rescued. Sells \'Racing Horse Blinders\' (+40)'),
			createMarker([-62.57, -76.89], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells drink and \'Rugged Saddlebags\' (+70)'),
			createMarker([-52.70, -81.49], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells Gwent cards and drink'),
			createMarker([-52.96, -56.65], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells runestones and alchemy supplies'),
			createMarker([-45.09, -138.96], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
			createMarker([-58.36, -142.91], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
		// SW Velen
			createMarker([-79.58, -114.12], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells runestones, alchemy supplies and food'),
		// SE Velen
			createMarker([-36.17, 3.69], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant appears here after being rescued. Sells alchemy supplies and food'),
			createMarker([-36.88, -24.35], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells Gwent cards, and crafting supplies'),
			createMarker([-37.79, -26.19], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
			createMarker([-78.79, 108.24], icons.shopkeeper, 'Quartermaster', '<h1>Quartermaster</h1>Sells nothing note worthy'),
			createMarker([-57.35, 27.03], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>This merchant disappears sometime after the \'Family matters\' quest. Sells drink'),
			createMarker([-76.16, 107.67], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells runestones and alchemy supplies'),
			createMarker([-75.93, 110.28], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
			createMarker([-75.50, 110.81], icons.shopkeeper, 'Shopkeeper', '<h1>Shopkeeper</h1>Sells weapons and crafting supplies'),
		
	]);

	// Sign Post
	markers.signpost = L.layerGroup([
		// Novigrad
			createMarker([73.76, -33.97], icons.signpost, 'Hierarch Square', '<h1>Hierarch Square</h1>Until quite recently a great many mages lived near Novigrad\'s main square. They fled when the witch hunters began their reign of terror, leaving many of the city\'s most beautiful townhouses abandoned and uncared for'),
			createMarker([74.23, -15.86], icons.signpost, 'Southern Gate', '<h1>Southern Gate</h1>In truth demarcating the eastern and not southern edge of the city, the Southern Gate was given its inappropriate name by a one-time city planner who knew nothing about architecture and could not read a map, but had in his favor the fact that he was the mayor\'s cousin and thew lavish parties. Though confusingly incorrect, the name stuck and now the city\'s residents never think twice about its illogical appellation'),
			createMarker([76.44, -16.20], icons.signpost, 'Oxenfurt Gate', '<h1>Oxenfurt Gate</h1>In the times when Novigrad and Oxenfurt were embroiled in fierce neighborly disputes, this gate went through several completely different names, the Gate of Harlots and the Gate of Bloodsuckers being two of the longer lived examples. Its current name was chosen when this conflict was finally put to rest'),
			createMarker([77.64, -36.47], icons.signpost, 'St. Gregory\'s Bridge', '<h1>St. Gregory\'s Bridge</h1>Bridge named after the hero of Novigrad who saved the city from a horrible famine three hundred years ago by sacrificing half his fortune to import food from Nazair. After this, he was declared a saint, something even the jurors of the Church of the Eternal Fire were unable to change'),
			createMarker([79.73, -51.24], icons.signpost, 'Electors\' Square', '<h1>Electors\' Square</h1>Square named after a group of Novigrad reformers who enacted bold transformations that led to the city\'s rapid growth, enriching its residents considerably and ushering in the city\'s golden age'),
			createMarker([71.16, -22.94], icons.signpost, 'Tretogor Gate', '<h1>Tretogor Gate</h1>Gate erected with funds from the Redanian royal family, who, wanting to earn favor with Novigrad merchants and the hierach, dedicated a significant amount of coin to its construction, as well as some no-less-valuable (wo)manpower in the form of the master architect Countess Anna Yaye-Pinkovitz and her skilled crew'),
			createMarker([68.94, -27.77], icons.signpost, 'Gate of the Hierarch', '<h1>Gate of the Hierarch</h1>This gate is named in honor of Novigrad\'s own son, the Hierach of the eternal Fire. Supposedly this name was given to it upon popular request, though no one can be found who remembers requesting any such thing'),
			createMarker([66.32, -35.31], icons.signpost, 'Glory Gate', '<h1>Glory Gate</h1>Toughs and hooligans often end a night of drunken escapades under this gate after being thrown out of the nearby taverns'),
			createMarker([65.99, -43.90], icons.signpost, 'Portside Gate', '<h1>Portside Gate</h1>Though not the most stately of gates, this one\'s location near the bustling port has made it the calling card of the city'),
			createMarker([69.57, -55.28], icons.signpost, 'Novigrad Docks', '<h1>Novigrad Docks</h1>A den of dirt and depravity and the shadiest part of Novigrad. After dark all one finds here are women of loose morals, hoodlums and drunk sailors'),
			createMarker([75.39, -8.88], icons.signpost, 'Arette', '<h1>Arette</h1>Novigrad has always attracted those in search of a better life. Some of them found no welcome within the city walls, and so built huts outside the city'),
			createMarker([69.57, -2.81], icons.signpost, 'Seven Cats Inn', '<h1>Seven Cats Inn</h1>This dank establishment is host to a shady clientele'),
		// NE Novigrad
			createMarker([83.53, -9.40], icons.signpost, 'Sarrasin Grange', '<h1>Sarrasin Grange</h1>Lord Antares Sarrasin moved his wife and smattering of comely daughters here from far-off Nazair on his medic\'s recommendations. The leech proclaimed with absolute certainy that "if you wish to sire a son, it must be in the Gustfields." While waiting to produce a male heir, the Sarrasins took to wine cultivation and soon their grange became renowned from Nazair to Skellige'),
			createMarker([81.92, 3.60], icons.signpost, 'Yantra', '<h1>Yantra</h1>The inhabitants of this village are known for their talkativeness and tendency to exagerrate, which makes them good companions for a round of drink, but impossible to tolerate for long stretches of time'),
			createMarker([82.09, 30.15], icons.signpost, 'Isolated Hut', '<h1>Isolated Hut</h1>Rumors claim a famous painter lives in this house, though no one has ever seen him or knows his name'),
			createMarker([76.24, 18.26], icons.signpost, 'Honeyfill Meadworks', '<h1>Honeyfill Meadworks</h1>The renowned Honeyfill Meadworks has for generations belonged to a respected family of halflings'),
			createMarker([79.04, 65.21], icons.signpost, 'Martin Feuille\'s Farmstead', '<h1>Martin Feuille\'s Farmstead</h1>Founded by Lord Martin Feuille, this vast plantation was until not so long ago the largest producer of alfalfa in the region. Sadly, when war broke out the lord fled to his winter residence in Kovir, leaving his land to be administered by an ill-suited stward who squandered his liege\'s fertile fields'),
			createMarker([81.02, 49.09], icons.signpost, 'Winespring Grange', '<h1>Winespring Grange</h1>Years ago, an eccentric count named Jacobus Ruth of the Rieslings settled here. The count could not stand the pomposity of court life but loved good wine. He thus planted a vineyard here which produces a fabulous beaujolais prized on both sides of the Pontar'),
			createMarker([79.59, 31.03], icons.signpost, 'Moldavie Residence', '<h1>Moldavie Residence</h1>Despite its ideal location and beautiful surroundings, this residence has been tossed from owner to owner like a hot potato, and for some unknown reason suffers from a bad reputation'),
			createMarker([81.66, -31.55], icons.signpost, 'Cavern', '<h1>Cavern</h1>One of those places wise men avoid at all costs, so as not to tempt fate'),
		// E Novigrad
			createMarker([72.92, 41.31], icons.signpost, 'Alness', '<h1>Alness</h1>Until recently, this was a thoroughly unremarkable village. then the Vegelbuds began organizing their famous horse races here, granting Alness the enviable honor of hosting the region\'s most pretigious equestrian contests'),
			createMarker([67.58, 31.03], icons.signpost, 'Wheat Fields', '<h1>Wheat Fields</h1>The fertile soils of the Pontar delta guarantee the inhabitants of Novigrad full granaries and full stomaches all year long'),
			createMarker([65.31, 46.67], icons.signpost, 'Vegelbud Residence', '<h1>Vegelbud Residence</h1>Domicile of a prominent Novigrad family whose line can be traced back to the times when the first human settlers came to these lands'),
		// SE Novigrad
			createMarker([62.02, 39.11], icons.signpost, 'Carsten', '<h1>Carsten</h1>A village named after a baker whose exquisite goods gained him fame, as well as the privilege of supplying bread to the table of the hierarch of the Church of the Eternal Fire in Novigrad. Following his death, none proved capable of recreating his recipes for his delicious and depply aromatic breads, so these days Carsten is known chiefly for its trade in grain and flour'),
			createMarker([58.56, 66.27], icons.signpost, 'Temerian Partisan Hideout', '<h1>Temerian Partisan Hideout</h1>Though the Nilfgaardians thought Temeria died along with King Foltest, Temerian guerillas still hide in the woods, prepared to give their lives at a moment\'s notice in their fight for independence'),
			createMarker([59.82, 85.87], icons.signpost, 'Est Tayiar', '<h1>Est Tayiar</h1>Long before men first peopled these lands, a beautiful, prospering elven city stood here, centered around the palace of King Maeglor. One day, however, the city\'s inhabitants began mysteriously dying off in large numbers. According to legend, King Maeglor sensed he, too, would soon perish and cast a powerful spell that caused the earth to swallow the city whole so that no outsider could ever desecrate it. Centuries later, scholars from the Oxenfurt Academy began painstaking excavations of King Maeglor\'s palace in a search for the causes of the catastrophe. Yet work came to a sudden halt when three subsequent expeditions ventured into the ruins\' depths - and were never heard from again...'),
			createMarker([49.45, 70.67], icons.signpost, 'Herbalist\'s Hut', '<h1>Herbalist\'s Hut</h1>Home to a halfling herbalist who is a passionate devotee of innovative gardening methods and experimental herbal medicine'),
			createMarker([35.51, 110.67], icons.signpost, 'Aeramas\' Abandoned Manor', '<h1>Aeramas\' Abandoned Manor</h1>Peasants living nearby often complain about the overwhelming cheese stench wafting out of this residence...'),
			createMarker([19.89, 83.06], icons.signpost, 'Crossroads', '<h1>Crossroads</h1>A small crossroads in the woods'),
			createMarker([49.85, 52.73], icons.signpost, 'Gustfields Farm', '<h1>Gustfields Farm</h1>Farmstead founded years ago by an eccentric flaxen-haired painter named Cunigund de Cabbrae, who came here seeking peace, quiet and fresh country air'),
			createMarker([76.64, 37.00], icons.signpost, 'Dancing Windmill', '<h1>Dancing Windmill</h1>When the current owner\'s grandfather, the famous dancer Pablo "Sugar" Sasko, ended his career, he settled here and organised nights of dancing for the nearby peasantry. Supposedly these revelries became so fashionable that dung-booted peasants were dancing rounds with members of Novigrad\'s most elite familes and adventure-seeking urban dandies'),
		// S Novigrad
			createMarker([67.20, -65.48], icons.signpost, 'Loggers Hut', '<h1>Loggers Hut</h1>A lone cabin deep in the Novigrad Forest - an ideal base for woodcutters'),
			createMarker([66.92, -85.25], icons.signpost, 'Lighthouse', '<h1>Lighthouse</h1>Many years ago a horrible accident took place here: a ship carrying the cousin of King Radovid IV the Bald wrecked against the rocks during a storm. The king ordered a lighthouse erected on that spot in order to warn other seafarers of its deadly danger'),
			createMarker([61.90, -14.08], icons.signpost, 'Cunny of the Goose', '<h1>Cunny of the Goose</h1>This inn owes its name to its former owner, a swaggering, blustering fellow who wanted to attract those of a similar temperatment. Luckily he died of liver poisoning after a few years and ownership passed to a distant relative, who turned the Cunny of the Goose into the best spot for stuffed goose liver in all the region'),
			createMarker([58.03, -29.44], icons.signpost, 'Drahim Castle', '<h1>Drahim Castle</h1>In its glory years, this castle was home to the Redanian Moskovitz of the Sea Cats dynasty, patrons of the arts and admirers of elven culture. After the death by suicide of the dynasty\'s last member, Prince Adrien, the castle fell into the hands of the Redanian crown - and then into ruin'),
			createMarker([54.10, -71.98], icons.signpost, 'Widows\' Grotto', '<h1>Widows\' Grotto</h1>According to legend, many years ago a young woman would wait here and watch for her husband\'s return from an overseas raid. Years passed and the woman grew old, still waiting for her husband. Yet he never came, and finally, she died. Three days after her funeral, her husband returned, having at last escaped from the pirates who had held him captive all that time. When he learned about his beloved\'s loyal vigil, he wept bitter tears, then lept to his death'),
			createMarker([45.98, -51.33], icons.signpost, 'Ursten', '<h1>Ursten</h1>War has caused countless refugees to flee Temeria. With the Pontar blockaded, they have tended to flood villages which, like Ursten, are located close to river crossings'),
			createMarker([60.50, -55.55], icons.signpost, 'Lucian\'s Windmill', '<h1>Lucian\'s Windmill</h1>Lucian le Foix, the famous Oxenfurt sculptor and architect, bought this windmill several years ago and made it into his country retreat. Sadly the enormous popularity of the great Lucian\'s designs means he spends little time in his fortress of solitude and has entrusted its care to a steward'),
			createMarker([62.35, 11.69], icons.signpost, 'Eternal Fire Chapel', '<h1>Eternal Fire Chapel</h1>This shrine greets travelers on their way to Oxenfurt. Merchants sometimes stop here to sell goods to pilgrims and visiting scholars'),
			createMarker([37.11, -27.23], icons.signpost, 'Border Post', '<h1>Border Post</h1>A small isle stuck in the river\'s central current - an ideal place for bleaching cloth'),
		// Oxenfurt
			createMarker([38.17, 62.31], icons.signpost, 'Novigrad Gate', '<h1>Novigrad Gate</h1>During Oxenfurt Academy\'s exam sessions, this gate would be closed, to spare the students from Novigrad\'s temptations'),
			createMarker([29.10, 52.58], icons.signpost, 'Western Gate', '<h1>Western Gate</h1>Before war broke out, several hundred people a day would pass through here. Now the Redanian blockade has slowed traffic to a mere trickle'),
			createMarker([37.40, 48.34], icons.signpost, 'Oxenfurt Harbor', '<h1>Oxenfurt Harbor</h1>Oxenfurt\'s picturesque port has featured as the subject of numerous odes and ballads, the setting for at least three lurid crime novels, and a favorite spot for romantic outings for generations of students'),
		// NE Velen
			createMarker([15.62, 25.66], icons.signpost, 'Stonecutters\' Settlement', '<h1>Stonecutters\' Settlement</h1>Over Twenty years ago a certain Bartolomeo, known as "Badger" on account of certain characteristic aspects of his coiffure, discovered a rich deposit of high-quality stone on this spot. He bought the land for a song, then leased it back to local peasants before heading off to Kovir, where he lives the life of a rich and powerful townsman to this day'),
			createMarker([35.96, 34.41], icons.signpost, 'White Eagle Fort', '<h1>White Eagle Fort</h1>The grand name might seem in ill-fitting with this place, but the troll that lives here - a Redanian patriot and military aficionado - goes to great lengths to make his beloved King Radovid proud'),
			createMarker([27.45, 12.00], icons.signpost, 'Codgers\' Quarry', '<h1>Codgers\' Quarry</h1>The now-inactive quarry once only employed stonebreakers over thirty years of age who would work hard all day, then spend the evenings racing down the sides of the quarry pit on hand-crafted wagons'),
			createMarker([39.61, -2.42], icons.signpost, 'Hindhold', '<h1>Hindhold</h1>This watchtower used to protect barges traveling between Oxenfurt and Novigrad. It once even boasted a bridge connecting the two sides of the river, but now it stands abandoned and neglected, its bridge a collapsed ruin'),
			createMarker([-4.01, 63.37], icons.signpost, 'Ferry Station', '<h1>Ferry Station</h1>The ferry\'s former owners were famed for treating travelers who were forced to wait for better conditions to raucous and unforgettable evenings'),
			createMarker([13.75, -9.05], icons.signpost, 'Hanged Man\'s Tree', '<h1>Hanged Man\'s Tree</h1>During the war, both sides committed acts of exorbitant cruelty meant to keep the conquered populaces in check'),
			createMarker([5.22, 5.41], icons.signpost, 'Devil\'s Pit', '<h1>Devil\'s Pit</h1>The inhabitants of Velen believe the expanse of caverns underneath the Devil\'s Pit are home to demons'),
			createMarker([1.43, -15.16], icons.signpost, 'Mulbrydale', '<h1>Mulbrydale</h1>One of the oldest villages in the region. Owes its name to a certain undereducated botanist who could not discern one kind of tree from another and so called them all mulberries'),
			createMarker([0.82, -47.20], icons.signpost, 'Inn at the Crossroads', '<h1>Inn at the Crossroads</h1>A sizeable establishment able to accommodate a crowd of travelers and revelers'),
		// NW Velen
			createMarker([21.78, -106.54], icons.signpost, 'Harpy Feeding Ground', '<h1>Harpy Feeding Ground</h1>One of those places entered by only the very brave, or very foolish'),
			createMarker([30.56, -114.31], icons.signpost, 'Lornruk', '<h1>Lornruk</h1>Years ago smugglers would come here to load and unload illicit cargo'),
			createMarker([-1.85, -98.61], icons.signpost, 'Heatherton', '<h1>Heatherton</h1>The inhabitants of this village were relieved when they learned the path of the marching armies had shifted slightly and passed their village bye. Then, one night... they changed their mind'),
			createMarker([0.97, -110.39], icons.signpost, 'Abandoned Tower', '<h1>Abandoned Tower</h1>Legend has it a beleaguered traveler once stood at this tower\'s gates. He begged for shelter for the night, claiming he\'d been injured, but the baron living inside was afraid the traveler was a spy and sent him away. Little did he know the traveler was a powerful mage, who cast a curse on the tower, its inhospitable owner and all who dwelled with him. Soon thereafter the baron and all his retinue died in mysterious circumstances, and the tower fell into ruin'),
			createMarker([2.37, -122.34], icons.signpost, 'Isolated Shack', '<h1>Isolated Shack</h1>Small hut constructed by a famous sculptor who, having garnered every laurel possible for his trade, abandoned his Koviri residence and moved here in order to find inspiration in solitude and reflect on what to make of the rest of his life'),
			createMarker([-28.27, -103.97], icons.signpost, 'Blackbough', '<h1>Blackbough</h1>This village takes its name from the unwanted limbs loggers used to bring here to burn, leaving stacks of charred logs behind. The locals, however, prefer the old legend which holds that their village was founded by a prominent member of an ancient race of tree people'),
			createMarker([-32.44, -123.05], icons.signpost, 'Hangman\'s Alley', '<h1>Hangman\'s Alley</h1>The road is lined with the hanged bodies of peasants who opposed their new rulers or had the bad luck of happening across bandits who had nothing against adding another dangling installation to the boulevard\'s scenery'),
			createMarker([-39.71, -74.62], icons.signpost, 'Crow\'s Perch', '<h1>Crow\'s Perch</h1>After Vserad, its previous owner, panicked at the news that armies were approaching and fled to Fyke Isle, this castle became home to Phillip Strenger, alias the Bloody Baron, along with his family and entourage'),
			createMarker([-52.81, -55.63], icons.signpost, 'Boatmakers\' Hut', '<h1>Boatmakers\' Hut</h1>Though nothing about this small domicile is particularly eye-catching, a family of the best shipwrights in Velen has lived here for generations, crafting the finest skiffs and dinghies north of the Yaruga'),
			createMarker([-50.35, -140.98], icons.signpost, 'Regugees\' Camp', '<h1>Regugees\' Camp</h1>The members of this small community have erected a large, winged statue - evidence of people turning to old gods and ancient cults in this time of war and famine'),
			createMarker([-45.01, -140.36], icons.signpost, 'Coast of Wrecks', '<h1>Coast of Wrecks</h1>Once the local youth would come here to revel amidst the wrecks. Now inhabitants of nearby villages have started combing the place day and night in search of anything that can be exchanged for food'),
			createMarker([-53.67, -119.50], icons.signpost, 'Midcopse', '<h1>Midcopse</h1>Typical farming settlement which the worst of the fighting has left untouched - but which famine now grips all the same. One of the larger villages in this region'),
			createMarker([-57.30, -98.57], icons.signpost, 'Wastrel Manor', '<h1>Wastrel Manor</h1>The once-beautiful manor house located near here was known for its extravagant balls, which were attended by the cream of the local youth. Its owners abandoned it over a century ago, but soon afterwards it became a place of worship for the local community, which believes a deity dwells in the ruins'),
			createMarker([-62.01, -34.94], icons.signpost, 'Bandit\'s Camp', '<h1>Bandits\' Camp</h1>A place some particularly nasty characters have decided to call home'),
			createMarker([-63.55, -74.44], icons.signpost, 'Oreton', '<h1>Oreton</h1>Village founded by Count Primislavus don Stessa, distant cousin to King Foltest of Temeria. The count was known for his passion for racing chariots down winding forest paths and narrow country roads. This spectacle delighted onlookers, won the hearts of the highborn ladies and aroused hatred in his rivals'),
			createMarker([-45.68, -127.05], icons.signpost, 'Forest Hut', '<h1>Forest Hut</h1>Though his friends advised against building a house in the middle of the woods, Hans refused to listen and did things his way. When the war broke out and laid waste to this region, Hans and his family lived in peace, untouched by the troubles of the wider world - until one fateful night...'),
			createMarker([-13.67, -84.20], icons.signpost, 'Wolven Glade', '<h1>Wolven Glade</h1>A long, long time ago, when this land was ruled by forest spirits and ancient gods, the living would come here to pay their respects to the dead in the way their holy tome comanded: "Walk thee in darkness, on a path of blood, standing under bare sky, naked before the gods and their messengers."'),
			createMarker([-28.84, -60.56], icons.signpost, 'Burned Ruins', '<h1>Burned Ruins</h1>One of many structures in the area which did not survive the onslaught of war'),
			createMarker([-47.10, -92.64], icons.signpost, 'Troll Bridge', '<h1>Troll Bridge</h1>Local legend has it this bridge was erected by trolls who were later killed by an anonymous witcher'),
			createMarker([-53.96, -80.86], icons.signpost, 'Claywich', '<h1>Claywich</h1>Every year at Belleteyn, a great feast is held in Claywich accompanied by games, song and dance. On that night villagers from far and wide come to celebrate, with passing travelers welcome as well. Shortly before midnight the youth in attendance race deep into the forest in search of a fern flower, and though no one has as yet found one, many have found their other halves, or at least a night of moonlight passion'),
			createMarker([-69.33, -39.59], icons.signpost, 'Drudge', '<h1>Drudge</h1>This once-peaceful fishermen\'s settlement now stands almost completely empty. Road-weary travelers sometimes find shelter in its abandoned huts - besides that, not a soul is to be seen'),
		// SW Velen
			createMarker([-64.09, -147.83], icons.signpost, 'Condyle', '<h1>Condyle</h1>This village has been completely and utterly destroyed. Rumors claim its inhabitants perished in a gruesome massacre'),
			createMarker([-65.73, -128.41], icons.signpost, 'Duen Hen', '<h1>Duen Hen</h1>Religious site where the old gods are worshipped'),
			createMarker([-73.30, -69.92], icons.signpost, 'Fyke Isle', '<h1>Fyke Isle</h1>Ruined tower which is said to be afflicted by a terrible curse'),
			createMarker([-77.12, -112.72], icons.signpost, 'Byways', '<h1>Byways</h1>Most of this area\'s residents have fled north or died of plague. In better times they busied themselves making prize-winning bricks'),
			createMarker([-80.79, -69.83], icons.signpost, 'Frischlow', '<h1>Frischlow</h1>Like many other settlements in the area, this one has suffered greatly on account of the war. Its inhabitants have abandoned their property and evacuated lands in which they once dwelled in relative peace'),
			createMarker([-78.73, -41.44], icons.signpost, 'Olena\'s Grove', '<h1>Olena\'s Grove</h1>Legends claim that a beautiful nymph named Olena once lived in this grove. She fell in love with a young hunter and the man swore to be true to the nymph, but later betrayed her. She decided to punish him by casting a spell on his spirit, which wanders the grove to this day'),
		// SE Velen
			createMarker([-79.15, -10.28], icons.signpost, 'Road to Bald Mountain', '<h1>Road to Bald Mountain</h1>The peasants of Velen believe the summit of Bald Mountain is home to witches, werebbubbs and wights'),
			createMarker([-80.90, 30.32], icons.signpost, 'Destroyed Bastion', '<h1>Destroyed Bastion</h1>Bastion built during the reign of King Gardic and destroyed during the First Nilfgaardian War'),
			createMarker([-76.49, 41.62], icons.signpost, 'Crossroads', '<h1>Crossroads</h1>A small crossroads, well trodden by the inhabitants of the surrounding villages'),
			createMarker([-77.56, 110.92], icons.signpost, 'Nilfgaardian Army Group \'Center\' Camp', '<h1>Nilfgaardian Army Group \'Center\' Camp</h1>Pitched in a mere two weeks, the Army Group \'Center\' camp constitutes the quintessence of Nilfgaardian martial architecture'),
			createMarker([-74.73, 98.61], icons.signpost, 'House of Respite', '<h1>House of Respite</h1>The House of Respite\'s motto: "A soldier does not live on war alone." This is slightly misleading, however, for the club is not open to all soldiers, only Nilfgaardian officers (or those capable of passing themselves off as such)'),
			createMarker([-69.16, 82.13], icons.signpost, 'Kimbolt Way', '<h1>Kimbolt Way</h1>Road built on orders of Baron Kimbolt, meant to act as a safe escape route in case his plans to take power after King Foltest\'s death went awry'),
			createMarker([-67.09, 22.19], icons.signpost, 'The Orphans of Crookback Bog', '<h1>The Orphans of Crookback Bog</h1>Orphaned and unwanted children from nearby villages find a roof over their head and a bowl of warm food here'),
			createMarker([-65.05, 37.53], icons.signpost, 'Ruined Tower', '<h1>Ruined Tower</h1>Five centuries ago King Geddes sent his most loyal knight, Martin of Oakdale, to watch over the inhabitants of this troubled land. He also sent his least-loyal knight, to scrub Martin\'s latrines'),
			createMarker([-70.73, 43.68], icons.signpost, 'Ancient Oak', '<h1>Ancient Oak</h1>Centuries ago bloody rituals in honor of the old gods were conducted here. Locals believe dark forces still haunt this place'),
			createMarker([-58.79, 30.63], icons.signpost, 'Downwarren', '<h1>Downwarren</h1>Before the war, the inhabitants of this village were known for their intricate lacemaking and artisanal smithery'),
			createMarker([-54.39, 10.99], icons.signpost, 'Dragonslayer\'s Grotto', '<h1>Dragonslayer\'s Grotto</h1>Underneath this fortress lies a musty, rank cave in which a lost traveler will find nothing but a few fattened leeches - if he\'s lucky. Nevertheless, village elders insist on repeating the legend that gave the grotto its name: that of a legendary dragonslayer said to be buried somewhere deep inside'),
			createMarker([-48.75, 30.72], icons.signpost, 'Reardon Manor', '<h1>Reardon Manor</h1>Abandoned estate of the once prominent Reardon family, relatives to the royal La Louve dynasty'),
			createMarker([-50.63, 67.32], icons.signpost, 'Benek', '<h1>Benek</h1>This small village owes its name to its founding elder, who erected the largest windmill the land had ever seen on this spot - thereby providing work for all the village\'s inhabitants'),
			createMarker([-36.10, 51.68], icons.signpost, 'Toderas', '<h1>Toderas</h1>Village founded by King Griffin of Temeria, the husband of Clarissa of Toussaint. The king had planned to turn Toderas into a large, bustling university city, a sort of Temerian alternative to Oxenfurt, but, as any visitor can quickly attest, his efforts failed utterly'),
			createMarker([-34.42, 11.69], icons.signpost, 'Lurtch', '<h1>Lurtch</h1>Once the Evves family estate was located here and the area bore the name of Lord Evves\' wife, Mortilanca. When the couple died, their will stipulated their land be turned over to their serfs. The grateful peasants then founded a village of freeholders and named it after their first ealdorman, Lurtch, who had previously served as the Evves family\'s butler'),
			createMarker([-36.81, -25.97], icons.signpost, 'Lindenvale', '<h1>Lindenvale</h1>One of Velen\'s many impoverished villages, its poverty deepened by war levies and the epidemic that spread after the Nilfgaardians\' arrival'),
			createMarker([-17.22, 40.17], icons.signpost, 'Marauders\' Bridge', '<h1>Marauders\' Bridge</h1>After the Battle of Velen, marauders swarmed over this bridge in their rush to scavenge the battlefield'),
			createMarker([-22.92, 71.59], icons.signpost, 'Grotto', '<h1>Grotto</h1>A dark and hostile place which creaks from time to time with unsettling, throaty noises...'),
	]);

	// Smugglers' Cache
	var smugglersGeneric = genericMarkers([
		// Novigrad
			[67.37, -33.44],
			[71.07, -9.14],
		// S Novigrad
			[61.17, -84.11],
		// NW Velen
			[-58.90, -158.82],
	], icons.smugglers, 'Smuggler\'s Cache', '<h1>Smuggler\'s Cache</h1>Smuggled goods have been hidden here');

	markers.smugglers = L.layerGroup($.merge(smugglersGeneric, [
		// No custom markers needed
	]));

	// Spoils of War
	markers.spoils = L.layerGroup([
		// NE Velen
			createMarker([33.91, -68.51], icons.spoils, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish'),
		// NW Velen
			createMarker([-22.72, -32.04], icons.spoils, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish (lvl 4<span> Drowners</span>'),
		// SW Velen
			createMarker([-74.75, -144.93], icons.spoils, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish (lvl 10<span> Drowners</span>)'),
	]);

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
}());

