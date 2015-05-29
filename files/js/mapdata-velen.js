$(function()
{
	// Abandoned Site
		var abandonedIcon = L.icon({
			iconUrl  : '/files/img/icons/abandoned.png',
			iconSize : [30, 30]
		});

		abandonedMarkers = L.layerGroup(genericMarkers([
			// NE Velen
				[13.70, 46.05],
				[-8.23, 72.16],
				[-17.06, 8.26],
			// NW Velen
				[-53.59, -56.34],
				[-29.34, -136.23],
				[-50.25, -140.63],
				[-58.95, -142.21],
			// SW Velen
				[-79.70, -112.15],
				[-78.68, -40.69],
			// SE Velen
				[-36.95, 3.08],
		], abandonedIcon, 'Abandoned Site', '<h1>Abandoned Site</h1>A place abandoned due to monster or bandit attacks. Once the danger is eliminated, it will fill with life once more'));

	// Alchemy Supplies
		var alchemyIcon = L.icon({
			iconUrl  : '/files/img/icons/alchemy.png',
			iconSize : [20, 28]
		});

		alchemyMarkers = L.layerGroup([
			// Novigrad
				L.marker([77.71, -15.91], setMarker(alchemyIcon)).bindLabel('Alchemy Supplies*').bindPopup('<h1>Alchemy Supplies*</h1>Here you can buy alchemy ingredients, also pays well trophies'),
				L.marker([79.75, -49.83], setMarker(alchemyIcon)).bindLabel('Alchemy Supplies').bindPopup('<h1>Alchemy Supplies</h1>Here you can buy alchemy ingredients'),
			// NW Velen
				L.marker([-18.52, -110.21], setMarker(alchemyIcon)).bindLabel('Alchemy Supplies').bindPopup('<h1>Pellar</h1>Here you can buy alchemy ingredients'),
		]);

	// Armourer
		var armourerIcon = L.icon({
			iconUrl  : '/files/img/icons/armourer.png',
			iconSize : [24, 34]
		});

		armourerMarkers = L.layerGroup([
			// Novigrad
				L.marker([74.23, -38.23], setMarker(armourerIcon)).bindLabel('Journeyman Armorer').bindPopup('<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// Oxenfurt
				L.marker([38.82, 54.01], setMarker(armourerIcon)).bindLabel('Journeyman Armorer').bindPopup('<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// NE Velen
				L.marker([2.18, -12.92], setMarker(armourerIcon)).bindLabel('Amateur Armorer').bindPopup('<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// NW Velen
				L.marker([-30.95, -71.02], setMarker(armourerIcon)).bindLabel('Journeyman Armorer').bindPopup('<h1>Journeyman Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([-54.06, -122.97], setMarker(armourerIcon)).bindLabel('Amateur Armorer').bindPopup('<h1>Amateur Armorer</h1>Here you can craft armor, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		]);

	// Armourer's Table
		var armourerstableIcon = L.icon({
			iconUrl  : '/files/img/icons/armourerstable.png',
			iconSize : [30, 27]
		});

		armourerstableMarkers = L.layerGroup(genericMarkers([
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
		], armourerstableIcon, 'Armorer\'s Table', '<h1>Armorer\'s Table</h1>Armorer\'s tables grant your gear increased armor for a limited duration'));

	// Bandit Camp
		var banditcampIcon = L.icon({
			iconUrl  : '/files/img/icons/banditcamp.png',
			iconSize : [29, 30]
		});

		banditcampMarkers = L.layerGroup(genericMarkers([
			// E Novigrad
				[74.40, 49.06],
			// SE Novigrad
				[13.37, 84.36],
			// S Novigrad
				[55.43, -63.00],
			// NE Velen
				[0.53, 33.05],
				[11.61, -54.42],
				[8.67, 1.76],
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
				[-69.81, -142.91],
			// SE Velen
				[-74.40, -6.81],
				[-77.24, 36.69],
				[-53.33, 54.49],
				[-38.96, -4.75],
				[-29.69, -17.23],
				[-26.90, 24.43],
		], banditcampIcon, 'Bandit Camp', '<h1>Bandit Camp</h1>A group of dangerous bandits have made camp here'));

	// Barber
		var barberIcon = L.icon({
			iconUrl  : '/files/img/icons/barber.png',
			iconSize : [30, 30]
		});

		barberMarkers = L.layerGroup(genericMarkers([
			// Novigrad
				[76.45, -33.18],
				[76.32, -20.39],
			// Oxenfurt
				[33.87, 52.12],
			// NW Velen
				[-54.36, -81.81],
		], barberIcon, 'Barber', '<h1>Barber</h1>Visit barbers for a shave or a new haircut'));

	// Blacksmith
		var blacksmithIcon = L.icon({
			iconUrl  : '/files/img/icons/blacksmith.png',
			iconSize : [27, 30]
		});

		blacksmithMarkers = L.layerGroup([
			// Novigrad
				L.marker([69.15, -41.00], setMarker(blacksmithIcon)).bindLabel('Master Blacksmith*').bindPopup('<h1>Master Blacksmith</h1>You must complete "Of Swords and Dumplings" (level 24) quest in order to unlock this blacksmith. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([73.14, -37.96], setMarker(blacksmithIcon)).bindLabel('Journeyman Blacksmith').bindPopup('<h1>Journeyman Blacksmith</h1>This blacksmith is available immediately. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([75.17, -43.15], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>This blacksmith is available immediately. Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// NW Velen
				L.marker([-29.27, -106.47], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
				L.marker([-64.28, -75.87], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
			// SE Velen
				L.marker([-32.96, -26.91], setMarker(blacksmithIcon)).bindLabel('Amateur Blacksmith').bindPopup('<h1>Amateur Blacksmith</h1>Here you can craft weapons, repair damaged equipment, dismantle equipment for parts or remove upgrades from sockets'),
		]);

	// Brothel
		var brothelIcon = L.icon({
			iconUrl  : '/files/img/icons/brothel.png',
			iconSize : [28, 26]
		});

		brothelMarkers = L.layerGroup([
			// Novigrad
				L.marker([71.22, -41.84], setMarker(brothelIcon)).bindLabel('Crippled Kate').bindPopup('<h1>Crippled Kate Brothel</h1>You can call on the services of a prostitute here'),
				L.marker([78.34, -33.40], setMarker(brothelIcon)).bindLabel('Passiflora').bindPopup('<h1>Passiflora Brothel</h1>You can call on the services of a prostitute here')
		]);

	// Boat
/*
		var boatIcon = L.icon({
			iconUrl  : '/files/img/icons/boat.png',
			iconSize : [30, 28]
		});

		boatMarkers = L.layerGroup(genericMarkers([
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
		], boatIcon, 'Boat', '<h1>Boat</h1>You can use boats to travel across bodies of water'));
*/
	// Entrance
		var entranceIcon = L.icon({
			iconUrl  : '/files/img/icons/entrance.png',
			iconSize : [28, 27]
		});

		// todo, entrance to what?
		entranceMarkers = L.layerGroup([
			// NE Novigrad
				L.marker([82.18, 32.78], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// SE Novigrad
				L.marker([58.34, 66.68], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([61.02, 89.12], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([36.43, 114.21], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// S Novigrad
				L.marker([53.96, -71.48], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// NE Velen
				L.marker([27.06, -29.27], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// NW Velen
				L.marker([3.05, -122.17], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-26.70, -63.75], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-28.77, -77.74], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// SW Velen
				L.marker([-75.36, -124.19], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-76.32, -114.87], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
			// SE Velen
				L.marker([-71.64, -1.67], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-70.16, 39.55], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-48.52, -29.03], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-22.84, 72.02], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-56.51, 80.33], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-43.71, 39.20], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-35.32, 69.74], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
				L.marker([-38.00, 70.36], setMarker(entranceIcon)).bindLabel('Entrance').bindPopup('<h1>Entrance</h1>Entrance to cave or ruins'),
		]);

	// Grindstone
		var grindstoneIcon = L.icon({
			iconUrl  : '/files/img/icons/grindstone.png',
			iconSize : [30, 26]
		});

		grindstoneMarkers = L.layerGroup(genericMarkers([
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
		], grindstoneIcon, 'Grindstone', '<h1>Grindstone</h1>A blade sharpened here will deal more damage'));

	// Guarded Treasure
		var guardedIcon = L.icon({
			iconUrl  : '/files/img/icons/guarded.png',
			iconSize : [23, 34]
		});

		var guardedGeneric = genericMarkers([
			// NE Novigrad
				[82.61, -33.49],
				[80.52, -4.53],
				[76.43, -2.07],
			// SE Novigrad
				[45.62, 99.05],
			// S Novigrad
				[51.97, -12.00],
				[62.00, -97.38],
			// NE Velen
				[-7.89, 55.37],
				[-8.93, 12.30],
				[22.51, -56.78],
			// NW Velen
				[25.96, -99.67],
				[-43.55, -40.08],
				[-28.07, -119.66],
				[-38.62, -123.40],
				[-62.39, -118.17],
				[-45.61, -152.31],
				[-38.27, -149.24],
			// SW Velen
				[-77.77, -102.04],
				[-81.30, -69.74],
				[-82.20, -69.57],
				[-78.56, -48.91],
			// SE Velen
				[-81.11, 31.33],
				[-80.19, 28.87],
				[-75.81, 30.63],
				[-73.42, 31.77],
				[-70.26, 102.44],
				[-63.27, 48.87],
				[-51.78, -6.42],
		], guardedIcon, 'Guarded Treasure', '<h1>Guarded Treasure</h1>A particularly powerful monster guards a valuable cache here');

		guardedMarkers = L.layerGroup($.merge(guardedGeneric, [
			// No custom markers needed
		]));

	// Gwent Player
		var gwentIcon = L.icon({
			iconUrl  : '/files/img/icons/gwent.png',
			iconSize : [24, 30]
		});

		gwentMarkers = L.layerGroup([
			// Novigrad
				L.marker([71.00, -41.90], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Crippled Kate Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([78.25, -33.79], setMarker(gwentIcon)).bindLabel('Gwent Tournament').bindPopup('<h1>Gwent Tournament (Quest)</h1>Find the scribe and sign up for the high-stakes Gwent tournament'),
				L.marker([72.58, -26.21], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([70.15, -36.93], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([71.43, -35.51], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Herbalist Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([70.14, -1.45], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([70.00, -20.27], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Merchant Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([70.12, -29.16], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([73.32, -43.81], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([76.25, -23.95], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([73.20, -37.66], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([73.81, -37.76], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Banker Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([74.52, -46.63], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Fishmonger Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([75.37, -43.15], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([75.49, -44.62], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([76.87, -33.02], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([75.04, -20.82], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([75.39, -19.02], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Loan Shark Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([79.80, -49.53], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Alchemist Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([77.77, -15.58], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Alchemist Player</h1>Gamble your hard earned coin playing Gwent here'),
			// S Novigrad
				L.marker([62.43, -14.22], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// SE Novigrad
				L.marker([50.64, 72.27], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Herbalist Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// Oxenfurt
				L.marker([36.56, 52.47], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Innkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([38.92, 54.21], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([40.11, 51.68], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// NE Velen
				L.marker([2.58, -12.92], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// NW Velen
				L.marker([-27.64, -102.54], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-28.87, -106.47], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-34.76, -72.57], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-31.70, -71.52], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Quartermaster Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-30.85, -70.82], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-28.39, -75.45], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Bloody Baron Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-52.60, -81.19], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-62.53, -76.44], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-54.27, -121.56], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-53.86, -122.97], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Armorer Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
			// SE Velen
				L.marker([-36.78, -24.15], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Shopkeeper Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-32.76, -26.61], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Blacksmith Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
				L.marker([-78.74, 108.44], setMarker(gwentIcon)).bindLabel('Gwent Player').bindPopup('<h1>Quartermaster Gwent Player</h1>Gamble your hard earned coin playing Gwent here'),
		]);

	// Harbor
		var harborIcon = L.icon({
			iconUrl  : '/files/img/icons/harbor.png',
			iconSize : [27, 30]
		});

		harborMarkers = L.layerGroup(genericMarkers([
			// Novigrad
				[70.64, -58.93],
			// Oxenfurt
				[37.75, 47.99],
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
		], harborIcon, 'Harbor', '<h1>Harbor</h1>A place where you can find a boat, boats will respawn here'));

	// Herbalist
		var herbalistIcon = L.icon({
			iconUrl  : '/files/img/icons/herbalist.png',
			iconSize : [25, 28]
		});

		var herbalistGeneric = genericMarkers([
			// Novigrad
				[73.65, -34.89],
				[71.33, -35.51],
			// S Novigrad
				[61.89, -13.16],
			// SE Novigrad
				[50.54, 72.07],
		], herbalistIcon, 'Herbalist', '<h1>Herbalist</h1>Here you can buy alchemy ingredients');

		herbalistMarkers = L.layerGroup($.merge(herbalistGeneric, [
			// NW Velen
				L.marker([-50.26, -138.91], setMarker(herbalistIcon)).bindLabel('Herbalist').bindPopup('<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
				L.marker([-28.15, -135.26], setMarker(herbalistIcon)).bindLabel('Herbalist').bindPopup('<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
			// SW Velen
				L.marker([-78.53, -41.44], setMarker(herbalistIcon)).bindLabel('Herbalist').bindPopup('<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
			// SE Velen
				L.marker([-36.92, 2.37], setMarker(herbalistIcon)).bindLabel('Herbalist').bindPopup('<h1>Herbalist</h1>This merchant appears after liberating the area. Here you can buy alchemy ingredients'),
		]));


	// Hidden Treasure
		var hiddenIcon = L.icon({
			iconUrl  : '/files/img/icons/hidden.png',
			iconSize : [23, 34]
		});

		var hiddenGeneric = genericMarkers([
			// S Novigrad
				[49.38, -68.91],
				[34.55, -43.68],
			// NE Velen
				[3.03, 64.56],
				[45.49, 26.76],
				[-3.51, 21.40],
				[-16.89, 10.06],
				[47.72, 38.50],
				[52.35, 16.17],
			// NW Velen
				[33.06, -115.25],
				[-27.92, -128.06],
				[-31.65, -143.17],
				[-42.33, -140.33],
				[-50.76, -155.04],
			// SW Velen
				[-70.50, -150.64],
				[-72.78, -131.40],
				[-71.34, -107.75],
				[-71.09, -109.96],
				[-76.90, -80.68],
			// SE Velen
				[-72.84, 77.08],
				[-37.16, 97.29],
				[-20.96, 48.78],
				[-29.99, 28.39],
		], hiddenIcon, 'Hidden Treasure', '<h1>Hidden Treasure</h1>A hidden cache of valuable goods');

		hiddenMarkers = L.layerGroup($.merge(hiddenGeneric, [
			// No custom markers needed
		]));

	// Innkeep
		var innkeepIcon = L.icon({
			iconUrl  : '/files/img/icons/tavern.png',
			iconSize : [26, 30]
		});

		innkeepMarkers = L.layerGroup([
			// Novigrad
				L.marker([73.24, -44.21], setMarker(innkeepIcon)).bindLabel('The Golden Sturgen').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
				L.marker([78.22, -33.49], setMarker(innkeepIcon)).bindLabel('Passiflora').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
				L.marker([76.20, -24.35], setMarker(innkeepIcon)).bindLabel('The Nowhere').bindPopup('<h1>Innkeep</h1>Sells Food and drink'),
				L.marker([70.02, -29.56], setMarker(innkeepIcon)).bindLabel('Rosemary &amp; Thyme').bindPopup('<h1>Innkeep</h1>Sells Food and drink'),
				L.marker([70.04, -1.85], setMarker(innkeepIcon)).bindLabel('Seven Cats Inn').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
				L.marker([74.50, -32.61], setMarker(innkeepIcon)).bindLabel('The Kingfisher').bindPopup('<h1>The Kingfisher</h1>You cannot seem to buy anything here, although it is a tavern/cabaret'),
			// S Novigrad
				L.marker([62.33, -14.02], setMarker(innkeepIcon)).bindLabel('Cunny of the Goose').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			// Oxenfurt
				L.marker([36.46, 52.27], setMarker(innkeepIcon)).bindLabel('The Alchemy').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, food, and drink'),
			// NE Velen
				L.marker([0.09, -45.62], setMarker(innkeepIcon)).bindLabel('Inn at the Crossroads').bindPopup('<h1>Innkeep</h1>Sells Gwent cards, and drink'),
		]);

	// Monster Den
		var monsterdenIcon = L.icon({
			iconUrl  : '/files/img/icons/monsterden.png',
			iconSize : [30, 27]
		});

		var monsterdenGeneric = genericMarkers([
			// NE Novigrad
				[82.19, -32.08],
			// S Novigrad
				[46.99, -40.08],
			// NE Velen
				[20.47, -13.76],
			// SE Velen
				[-54.47, 12.00],
		], monsterdenIcon, 'Monster Den', '<h1>Monster Den</h1>Monster-infested location. A constant worry for those living nearby');

		monsterdenMarkers = L.layerGroup($.merge(monsterdenGeneric, [
			// No custom markers needed
		]));

	// Monster Nest
		var monsternestIcon = L.icon({
			iconUrl  : '/files/img/icons/monsternest.png',
			iconSize : [23, 30]
		});

		var monsternestGeneric = genericMarkers([
			// S Novigrad
				[50.98, -20.99],
				[50.79, -42.19],
				[49.84, -45.97],
				[34.31, -60.51],
			// NE Velen
				[7.36, 48.78],
				[8.01, 47.37],
				[41.64, 13.97],
				[33.87, 10.20],
				[41.44, -0.79],
				[-2.94, 27.38],
			// NW Velen
				[-23.97, -55.95],
				[-36.56, -87.14],
				[-53.38, -57.74],
			// SW Velen
				[-75.14, -122.29],
				[-74.73, -121.49],
				[-75.68, -27.11],
			// SE Velen
				[-68.69, -2.20],
				[-49.12, 42.36],
				[-49.04, 46.93],
				[-46.01, 52.56],
				[-50.23, 57.57],
				[-40.18, 80.29],
				[-41.38, 80.38],
		], monsternestIcon, 'Monster Nest', '<h1>Monster Nest</h1>Destroy monster nests with Grapeshot or Dancing Star bombs');

		monsternestMarkers = L.layerGroup($.merge(monsternestGeneric, [
			// No custom markers needed
		]));

	// Notice Board
		var noticeIcon = L.icon({
			iconUrl  : '/files/img/icons/notice.png',
			iconSize : [23, 28]
		});

		noticeMarkers = L.layerGroup(genericMarkers([
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
		], noticeIcon, 'Notice Board', '<h1>Notice Board</h1>Here you can find monster contracts and announcements about matters of local concern'));

	// Person in Distress
		var pidIcon = L.icon({
			iconUrl  : '/files/img/icons/pid.png',
			iconSize : [24, 34]
		});

		var pidGeneric = genericMarkers([
			// SE Novigrad
				[20.47, 100.55],
			// NE Velen
				[-17.64, -29.18],
				[26.43, -11.87],
			// NW Velen
				[-61.23, -33.93],
				[-33.94, -132.36],
		], pidIcon, 'Person(s) in Distress', '<h1>Person(s) in Distress</h1>There\'s a person or a group of people here in need of assitance');

		pidMarkers = L.layerGroup($.merge(pidGeneric, [
			// No custom markers needed
		]));

	// Place of Power
		var popIcon = L.icon({
			iconUrl  : '/files/img/icons/pop.png',
			iconSize : [27, 30]
		});

		//todo get all place of power types
		popMarkers = L.layerGroup([
			// Novigrad
				L.marker([80.72, -40.83], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Igni</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			// E Novigrad
				L.marker([71.02, 48.78], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Axii</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			// NW Velen
				L.marker([32.69, -112.60], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Quen</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			// SW Velen
				L.marker([-82.85, -72.69], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Aard</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([-71.82, -105.91], setMarker(popIcon)).bindLabel('Place of Power*').bindPopup('<h1>Place of Power - Yrden</h1>\'Wandering in the Dark\' quest. Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
			// SE Velen
				L.marker([-78.19, 7.91], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([-70.41, 38.41], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - todo</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				L.marker([-55.68, 18.94], setMarker(popIcon)).bindLabel('Place of Power').bindPopup('<h1>Place of Power - Yrden</h1>Draw from a Place of Power to gain a temporary bonus. The first time you draw from any Place of Power, you also receive 1 Ability Point'),
				
		]);

	// Point of Interest
		var poiIcon = L.icon({
			iconUrl  : '/files/img/icons/poi.png',
			iconSize : [10, 30]
		});


		poiMarkers = L.layerGroup([
			// Novigrad
				L.marker([74.84, -25.88], setMarker(poiIcon)).bindLabel('Triss\' Residence').bindPopup('<h1>Triss\' Residence</h1>todo'),
				L.marker([70.12, -28.76], setMarker(poiIcon)).bindLabel('Dandelion &amp; Zoltan\'s Residence').bindPopup('<h1>Dandelion &amp; Zoltan\'s Residence</h1>todo'),
			// NW Velen
				L.marker([-47.34, -111.81], setMarker(poiIcon)).bindLabel('Keira Metz\'s Residence').bindPopup('<h1>Keira Metz\'s Residence</h1>todo'),
		]);

	// Shopkeeper
		var shopkeeperIcon = L.icon({
			iconUrl  : '/files/img/icons/merchant.png',
			iconSize : [21, 30]
		});

		shopkeeperMarkers = L.layerGroup([
			// Novigrad
				L.marker([74.22, -35.41], setMarker(shopkeeperIcon)).bindLabel('Book Merchant').bindPopup('<h1>Book Merchant</h1>Buys and sells books'),
				L.marker([72.82, -39.99], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells alchemy supplies, food, and drink'),
				L.marker([73.71, -37.96], setMarker(shopkeeperIcon)).bindLabel('Banker').bindPopup('<h1>Banker</h1>You can exchange your unusable currency or borrow gold here'),
				L.marker([69.90, -20.47], setMarker(shopkeeperIcon)).bindLabel('Clothing Merchant').bindPopup('<h1>Clothing Merchant</h1>Sells clothes and masks'),
				L.marker([70.05, -37.13], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells crafting supplies, weapons and \'Zerrikanian Saddlebags\' (+100)'),
				L.marker([76.81, -33.26], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells alchemy supplies, quest items (for Aeramas\' Manor), and \'Potion of Clearance\' (1000 gold)'),
				L.marker([75.41, -44.82], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells alchemy supplies, food, and drink'),
				L.marker([74.47, -46.93], setMarker(shopkeeperIcon)).bindLabel('Fishmonger').bindPopup('<h1>Fishmonger</h1>Sells fish'),
				L.marker([76.57, -50.10], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells empty bottles'),
				L.marker([76.12, -49.04], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells runestones and alchemy supplies'),
				L.marker([74.98, -20.57], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells nothing note worthy'),
				L.marker([72.58, -26.41], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells gem dust (crafting supplies), weapons, food, and drink'),
				L.marker([75.33, -19.28], setMarker(shopkeeperIcon)).bindLabel('Loan Shark').bindPopup('<h1>Loan Shark</h1>Sells nothing note worthy'),
				L.marker([75.61, -23.82], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells crafting supplies'),
				L.marker([71.00, -41.60], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells food and drink'),
			// NE Novigrad
				L.marker([80.92, 50.49], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
			// SE Novigrad
				L.marker([3.43, 97.08], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears here after being rescued'),
			// S Novigrad
// appears on my map but nobody there?
//				L.marker([65.95, -21.09], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper'),
				L.marker([63.27, -63.46], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells crafting supplies, food, and weapons'),
				L.marker([48.72, -51.94], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
				L.marker([57.98, -12.00], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
			// Oxenfurt
				L.marker([40.01, 51.48], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells paint (quest item), hides, and drink'),
			// NE Velen
				L.marker([26.00, 30.11], setMarker(shopkeeperIcon)).bindLabel('Wandering Merchant').bindPopup('<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
				L.marker([31.65, -17.93], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears here after being rescued. Sells alchemy supplies and food'),
				L.marker([-6.84, 72.38], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells weapons and crafting supplies'),
				L.marker([13.07, 46.27], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells runestones, alchemy supplies and food'),
			// NW Velen
				L.marker([-27.84, -102.74], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells nothing note worthy'),
				L.marker([-34.96, -72.77], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells Gwent cards and drink'),
				L.marker([-54.42, -121.65], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells Gwent cards and jewellery (crafting supplies)'),
				L.marker([-47.04, -112.50], setMarker(shopkeeperIcon)).bindLabel('Keira Metz').bindPopup('<h1>Keira Metz</h1>Sells alchemy supplies, recipes and \'Potion of Clearance\' (1000 gold)'),
				L.marker([-31.83, -71.77], setMarker(shopkeeperIcon)).bindLabel('Quartermaster').bindPopup('<h1>Quartermaster</h1>Sells Gwent cards, food, and drink'),
				L.marker([-36.10, -72.51], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper Anselm').bindPopup('<h1>Shopkeeper Anselm</h1>This merchant appears here after being rescued. Sells \'Racing Horse Blinders\' (+40)'),
				L.marker([-62.57, -76.89], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells drink and \'Rugged Saddlebags\' (+70)'),
				L.marker([-52.70, -81.49], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells Gwent cards and drink'),
				L.marker([-52.96, -56.65], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells runestones and alchemy supplies'),
				L.marker([-45.09, -138.96], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
				L.marker([-58.36, -142.91], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells armour and crafting supplies'),
			// SW Velen
				L.marker([-79.58, -114.12], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears after liberating the area. Sells runestones, alchemy supplies and food'),
			// SE Velen
				L.marker([-36.17, 3.69], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>This merchant appears here after being rescued. Sells alchemy supplies and food'),
				L.marker([-36.88, -24.35], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells Gwent cards, and crafting supplies'),
				L.marker([-37.79, -26.19], setMarker(shopkeeperIcon)).bindLabel('Shopkeeper').bindPopup('<h1>Shopkeeper</h1>Sells runestones, alchemy supplies and food'),
				L.marker([-78.79, 108.24], setMarker(shopkeeperIcon)).bindLabel('Quartermaster').bindPopup('<h1>Quartermaster</h1>Sells nothing note worthy'),
			
		]);

	// Sign Post
		var signpostIcon = L.icon({
			iconUrl  : '/files/img/icons/fasttravel.png',
			iconSize : [27, 34]
		});

		signpostMarkers = L.layerGroup([
			// Novigrad
				L.marker([73.76, -33.97], setMarker(signpostIcon)).bindLabel('Hierarch Square').bindPopup('<h1>Hierarch Square</h1>Until quite recently a great many mages lived near Novigrad\'s main square. They fled when the witch hunters began their reign of terror, leaving many of the city\'s most beautiful townhouses abandoned and uncared for'),
				L.marker([74.23, -15.86], setMarker(signpostIcon)).bindLabel('Southern Gate').bindPopup('<h1>Southern Gate</h1>In truth demarcating the eastern and not southern edge of the city, the Southern Gate was given its inappropriate name by a one-time city planner who knew nothing about architecture and could not read a map, but had in his favor the fact that he was the mayor\'s cousin and thew lavish parties. Though confusingly incorrect, the name stuck and now the city\'s residents never think twice about its illogical appellation'),
				L.marker([76.44, -16.20], setMarker(signpostIcon)).bindLabel('Oxenfurt Gate').bindPopup('<h1>Oxenfurt Gate</h1>In the times when Novigrad and Oxenfurt were embroiled in fierce neighborly disputes, this gate went through several completely different names, the Gate of Harlots and the Gate of Bloodsuckers being two of the longer lived examples. Its current name was chosen when this conflict was finally put to rest'),
				L.marker([77.64, -36.47], setMarker(signpostIcon)).bindLabel('St. Gregory\'s Bridge').bindPopup('<h1>St. Gregory\'s Bridge</h1>Bridge named after the hero of Novigrad who saved the city from a horrible famine three hundred years ago by sacrificing half his fortune to import food from Nazair. After this, he was declared a saint, something even the jurors of the Church of the Eternal Fire were unable to change'),
				L.marker([79.73, -51.24], setMarker(signpostIcon)).bindLabel('Electors\' Square').bindPopup('<h1>Electors\' Square</h1>Square named after a group of Novigrad reformers who enacted bold transformations that led to the city\'s rapid growth, enriching its residents considerably and ushering in the city\'s golden age'),
				L.marker([71.16, -22.94], setMarker(signpostIcon)).bindLabel('Tretogor Gate').bindPopup('<h1>Tretogor Gate</h1>Gate erected with funds from the Redanian royal family, who, wanting to earn favor with Novigrad merchants and the hierach, dedicated a significant amount of coin to its construction, as well as some no-less-valuable (wo)manpower in the form of the master architect Countess Anna Yaye-Pinkovitz and her skilled crew'),
				L.marker([68.94, -27.77], setMarker(signpostIcon)).bindLabel('Gate of the Hierarch').bindPopup('<h1>Gate of the Hierarch</h1>This gate is named in honor of Novigrad\'s own son, the Hierach of the eternal Fire. Supposedly this name was given to it upon popular request, though no one can be found who remembers requesting any such thing'),
				L.marker([66.32, -35.31], setMarker(signpostIcon)).bindLabel('Glory Gate').bindPopup('<h1>Glory Gate</h1>Toughs and hooligans often end a night of drunken escapades under this gate after being thrown out of the nearby taverns'),
				L.marker([65.99, -43.90], setMarker(signpostIcon)).bindLabel('Portside Gate').bindPopup('<h1>Portside Gate</h1>Though not the most stately of gates, this one\'s location near the bustling port has made it the calling card of the city'),
				L.marker([69.57, -55.28], setMarker(signpostIcon)).bindLabel('Novigrad Docks').bindPopup('<h1>Novigrad Docks</h1>A den of dirt and depravity and the shadiest part of Novigrad. After dark all one finds here are women of loose morals, hoodlums and drunk sailors'),
				L.marker([75.39, -8.88], setMarker(signpostIcon)).bindLabel('Arette').bindPopup('<h1>Arette</h1>Novigrad has always attracted those in search of a better life. Some of them found no welcome within the city walls, and so built huts outside the city'),
				L.marker([69.57, -2.81], setMarker(signpostIcon)).bindLabel('Seven Cats Inn').bindPopup('<h1>Seven Cats Inn</h1>This dank establishment is host to a shady clientele'),
			// NE Novigrad
				L.marker([83.53, -9.40], setMarker(signpostIcon)).bindLabel('Sarrasin Grange').bindPopup('<h1>Sarrasin Grange</h1>Lord Antares Sarrasin moved his wife and smattering of comely daughters here from far-off Nazair on his medic\'s recommendations. The leech proclaimed with absolute certainy that "if you wish to sire a son, it must be in the Gustfields." While waiting to produce a male heir, the Sarrasins took to wine cultivation and soon their grange became renowned from Nazair to Skellige'),
				L.marker([81.92, 3.60], setMarker(signpostIcon)).bindLabel('Yantra').bindPopup('<h1>Yantra</h1>The inhabitants of this village are known for their talkativeness and tendency to exagerrate, which makes them good companions for a round of drink, but impossible to tolerate for long stretches of time'),
				L.marker([82.09, 30.15], setMarker(signpostIcon)).bindLabel('Isolated Hut').bindPopup('<h1>Isolated Hut</h1>Rumors claim a famous painter lives in this house, though no one has ever seen him or knows his name'),
				L.marker([76.24, 18.26], setMarker(signpostIcon)).bindLabel('Honeyfill Meadworks').bindPopup('<h1>Honeyfill Meadworks</h1>The renowned Honeyfill Meadworks has for generations belonged to a respected family of halflings'),
				L.marker([79.04, 65.21], setMarker(signpostIcon)).bindLabel('Martin Feuille\'s Farmstead').bindPopup('<h1>Martin Feuille\'s Farmstead</h1>Founded by Lord Martin Feuille, this vast plantation was until not so long ago the largest producer of alfalfa in the region. Sadly, when war broke out the lord fled to his winter residence in Kovir, leaving his land to be administered by an ill-suited stward who squandered his liege\'s fertile fields'),
				L.marker([81.02, 49.09], setMarker(signpostIcon)).bindLabel('Winespring Grange').bindPopup('<h1>Winespring Grange</h1>Years ago, an eccentric count named Jacobus Ruth of the Rieslings settled here. The count could not stand the pomposity of court life but loved good wine. He thus planted a vineyard here which produces a fabulous beaujolais prized on both sides of the Pontar'),
				L.marker([79.59, 31.03], setMarker(signpostIcon)).bindLabel('Moldavie Residence').bindPopup('<h1>Moldavie Residence</h1>Despite its ideal location and beautiful surroundings, this residence has been tossed from owner to owner like a hot potato, and for some unknown reason suffers from a bad reputation'),
			// E Novigrad
				L.marker([72.92, 41.31], setMarker(signpostIcon)).bindLabel('Alness').bindPopup('<h1>Alness</h1>Until recently, this was a thoroughly unremarkable village. then the Vegelbuds began organizing their famous horse races here, granting Alness the enviable honor of hosting the region\'s most pretigious equestrian contests'),
				L.marker([67.58, 31.03], setMarker(signpostIcon)).bindLabel('Wheat Fields').bindPopup('<h1>Wheat Fields</h1>The fertile soils of the Pontar delta guarantee the inhabitants of Novigrad full granaries and full stomaches all year long'),
				L.marker([65.31, 46.67], setMarker(signpostIcon)).bindLabel('Vegelbud Residence').bindPopup('<h1>Vegelbud Residence</h1>Domicile of a prominent Novigrad family whose line can be traced back to the times when the first human settlers came to these lands'),
			// SE Novigrad
				L.marker([62.02, 39.11], setMarker(signpostIcon)).bindLabel('Carsten').bindPopup('<h1>Carsten</h1>A village named after a baker whose exquisite goods gained him fame, as well as the privilege of supplying bread to the table of the hierarch of the Church of the Eternal Fire in Novigrad. Following his death, none proved capable of recreating his recipes for his delicious and depply aromatic breads, so these days Carsten is known chiefly for its trade in grain and flour'),
				L.marker([58.56, 66.27], setMarker(signpostIcon)).bindLabel('Temerian Partisan Hideout').bindPopup('<h1>Temerian Partisan Hideout</h1>Though the Nilfgaardians thought Temeria died along with King Foltest, Temerian guerillas still hide in the woods, prepared to give their lives at a moment\'s notice in their fight for independence'),
				L.marker([59.82, 85.87], setMarker(signpostIcon)).bindLabel('Est Tayiar').bindPopup('<h1>Est Tayiar</h1>Long before men first peopled these lands, a beautiful, prospering elven city stood here, centered around the palace of King Maeglor. One day, however, the city\'s inhabitants began mysteriously dying off in large numbers. According to legend, King Maeglor sensed he, too, would soon perish and cast a powerful spell that caused the earth to swallow the city whole so that no outsider could ever desecrate it. Centuries later, scholars from the Oxenfurt Academy began painstaking excavations of King Maeglor\'s palace in a search for the causes of the catastrophe. Yet work came to a sudden halt when three subsequent expeditions ventured into the ruins\' depths - and were never heard from again...'),
				L.marker([49.45, 70.67], setMarker(signpostIcon)).bindLabel('Herbalist\'s Hut').bindPopup('<h1>Herbalist\'s Hut</h1>Home to a halfling herbalist who is a passionate devotee of innovative gardening methods and experimental herbal medicine'),
				L.marker([35.51, 110.67], setMarker(signpostIcon)).bindLabel('Aeramas\' Abandoned Manor').bindPopup('<h1>Aeramas\' Abandoned Manor</h1>Peasants living nearby often complain about the overwhelming cheese stench wafting out of this residence...'),
				L.marker([19.89, 83.06], setMarker(signpostIcon)).bindLabel('Crossroads').bindPopup('<h1>Crossroads</h1>A small crossroads in the woods'),
			// S Novigrad
				L.marker([67.20, -65.48], setMarker(signpostIcon)).bindLabel('Loggers Hut').bindPopup('<h1>Loggers Hut</h1>A lone cabin deep in the Novigrad Forest - an ideal base for woodcutters'),
				L.marker([66.92, -85.25], setMarker(signpostIcon)).bindLabel('Lighthouse').bindPopup('<h1>Lighthouse</h1>Many years ago a horrible accident took place here: a ship carrying the cousin of King Radovid IV the Bald wrecked against the rocks during a storm. The king ordered a lighthouse erected on that spot in order to warn other seafarers of its deadly danger'),
				L.marker([61.90, -14.08], setMarker(signpostIcon)).bindLabel('Cunny of the Goose').bindPopup('<h1>Cunny of the Goose</h1>This inn owes its name to its former owner, a swaggering, blustering fellow who wanted to attract those of a similar temperatment. Luckily he died of liver poisoning after a few years and ownership passed to a distant relative, who turned the Cunny of the Goose into the best spot for stuffed goose liver in all the region'),
				L.marker([58.03, -29.44], setMarker(signpostIcon)).bindLabel('Drahim Castle').bindPopup('<h1>Drahim Castle</h1>In its glory years, this castle was home to the Redanian Moskovitz of the Sea Cats dynasty, patrons of the arts and admirers of elven culture. After the death by suicide of the dynasty\'s last member, Prince Adrien, the castle fell into the hands of the Redanian crown - and then into ruin'),
				L.marker([54.10, -71.98], setMarker(signpostIcon)).bindLabel('Widows\' Grotto').bindPopup('<h1>Widows\' Grotto</h1>According to legend, many years ago a young woman would wait here and watch for her husband\'s return from an overseas raid. Years passed and the woman grew old, still waiting for her husband. Yet he never came, and finally, she died. Three days after her funeral, her husband returned, having at last escaped from the pirates who had held him captive all that time. When he learned about his beloved\'s loyal vigil, he wept bitter tears, then lept to his death'),
				L.marker([45.98, -51.33], setMarker(signpostIcon)).bindLabel('Ursten').bindPopup('<h1>Ursten</h1>War has caused countless refugees to flee Temeria. With the Pontar blockaded, they have tended to flood villages which, like Ursten, are located close to river crossings'),
				L.marker([60.50, -55.55], setMarker(signpostIcon)).bindLabel('Lucian\'s Windmill').bindPopup('<h1>Lucian\'s Windmill</h1>Lucian le Foix, the famous Oxenfurt sculptor and architect, bought this windmill several years ago and made it into his country retreat. Sadly the enormous popularity of the great Lucian\'s designs means he spends little time in his fortress of solitude and has entrusted its care to a steward'),
				L.marker([62.35, 11.69], setMarker(signpostIcon)).bindLabel('Eternal Fire Chapel').bindPopup('<h1>Eternal Fire Chapel</h1>This shrine greets travelers on their way to Oxenfurt. Merchants sometimes stop here to sell goods to pilgrims and visiting scholars'),
				L.marker([37.11, -27.23], setMarker(signpostIcon)).bindLabel('Border Post').bindPopup('<h1>Border Post</h1>A small isle stuck in the river\'s central current - an ideal place for bleaching cloth'),
			// Oxenfurt
				L.marker([38.17, 62.31], setMarker(signpostIcon)).bindLabel('Novigrad Gate').bindPopup('<h1>Novigrad Gate</h1>During Oxenfurt Academy\'s exam sessions, this gate would be closed, to spare the students from Novigrad\'s temptations'),
				L.marker([29.10, 52.58], setMarker(signpostIcon)).bindLabel('Western Gate').bindPopup('<h1>Western Gate</h1>Before war broke out, several hundred people a day would pass through here. Now the Redanian blockade has slowed traffic to a mere trickle'),
				L.marker([37.40, 48.34], setMarker(signpostIcon)).bindLabel('Oxenfurt Harbor').bindPopup('<h1>Oxenfurt Harbor</h1>Oxenfurt\'s picturesque port has featured as the subject of numerous odes and ballads, the setting for at least three lurid crime novels, and a favorite spot for romantic outings for generations of students'),
			// NE Velen
				L.marker([15.62, 25.66], setMarker(signpostIcon)).bindLabel('Stonecutters\' Settlement').bindPopup('<h1>Stonecutters\' Settlement</h1>Over Twenty years ago a certain Bartolomeo, known as "Badger" on account of certain characteristic aspects of his coiffure, discovered a rich deposit of high-quality stone on this spot. He bought the land for a song, then leased it back to local peasants before heading off to Kovir, where he lives the life of a rich and powerful townsman to this day'),
				L.marker([35.96, 34.41], setMarker(signpostIcon)).bindLabel('White Eagle Fort').bindPopup('<h1>White Eagle Fort</h1>The grand name might seem in ill-fitting with this place, but the troll that lives here - a Redanian patriot and military aficionado - goes to great lengths to make his beloved King Radovid proud'),
				L.marker([27.45, 12.00], setMarker(signpostIcon)).bindLabel('Codgers\' Quarry').bindPopup('<h1>Codgers\' Quarry</h1>The now-inactive quarry once only employed stonebreakers over thirty years of age who would work hard all day, then spend the evenings racing down the sides of the quarry pit on hand-crafted wagons'),
				L.marker([39.61, -2.42], setMarker(signpostIcon)).bindLabel('Hindhold').bindPopup('<h1>Hindhold</h1>This watchtower used to protect barges traveling between Oxenfurt and Novigrad. It once even boasted a bridge connecting the two sides of the river, but now it stands abandoned and neglected, its bridge a collapsed ruin'),
				L.marker([-4.01, 63.37], setMarker(signpostIcon)).bindLabel('Ferry Station').bindPopup('<h1>Ferry Station</h1>The ferry\'s former owners were famed for treating travelers who were forced to wait for better conditions to raucous and unforgettable evenings'),
				L.marker([13.75, -9.05], setMarker(signpostIcon)).bindLabel('Hanged Man\'s Tree').bindPopup('<h1>Hanged Man\'s Tree</h1>During the war, both sides committed acts of exorbitant cruelty meant to keep the conquered populaces in check'),
				L.marker([5.22, 5.41], setMarker(signpostIcon)).bindLabel('Devil\'s Pit').bindPopup('<h1>Devil\'s Pit</h1>The inhabitants of Velen believe the expanse of caverns underneath the Devil\'s Pit are home to demons'),
				L.marker([1.43, -15.16], setMarker(signpostIcon)).bindLabel('Mulbrydale').bindPopup('<h1>Mulbrydale</h1>One of the oldest villages in the region. Owes its name to a certain undereducated botanist who could not discern one kind of tree from another and so called them all mulberries'),
				L.marker([0.82, -47.20], setMarker(signpostIcon)).bindLabel('Inn at the Crossroads').bindPopup('<h1>Inn at the Crossroads</h1>A sizeable establishment able to accommodate a crowd of travelers and revelers'),
			// NW Velen
				L.marker([21.78, -106.54], setMarker(signpostIcon)).bindLabel('Harpy Feeding Ground').bindPopup('<h1>Harpy Feeding Ground</h1>One of those places entered by only the very brave, or very foolish'),
				L.marker([30.56, -114.31], setMarker(signpostIcon)).bindLabel('Lornruk').bindPopup('<h1>Lornruk</h1>Years ago smugglers would come here to load and unload illicit cargo'),
				L.marker([-1.85, -98.61], setMarker(signpostIcon)).bindLabel('Heatherton').bindPopup('<h1>Heatherton</h1>The inhabitants of this village were relieved when they learned the path of the marching armies had shifted slightly and passed their village bye. Then, one night... they changed their mind'),
				L.marker([0.97, -110.39], setMarker(signpostIcon)).bindLabel('Abandoned Tower').bindPopup('<h1>Abandoned Tower</h1>Legend has it a beleaguered traveler once stood at this tower\'s gates. He begged for shelter for the night, claiming he\'d been injured, but the baron living inside was afraid the traveler was a spy and sent him away. Little did he know the traveler was a powerful mage, who cast a curse on the tower, its inhospitable owner and all who dwelled with him. Soon thereafter the baron and all his retinue died in mysterious circumstances, and the tower fell into ruin'),
				L.marker([2.37, -122.34], setMarker(signpostIcon)).bindLabel('Isolated Shack').bindPopup('<h1>Isolated Shack</h1>Small hut constructed by a famous sculptor who, having garnered every laurel possible for his trade, abandoned his Koviri residence and moved here in order to find inspiration in solitude and reflect on what to make of the rest of his life'),
				L.marker([-28.27, -103.97], setMarker(signpostIcon)).bindLabel('Blackbough').bindPopup('<h1>Blackbough</h1>This village takes its name from the unwanted limbs loggers used to bring here to burn, leaving stacks of charred logs behind. The locals, however, prefer the old legend which holds that their village was founded by a prominent member of an ancient race of tree people'),
				L.marker([-32.44, -123.05], setMarker(signpostIcon)).bindLabel('Hangman\'s Alley').bindPopup('<h1>Hangman\'s Alley</h1>The road is lined with the hanged bodies of peasants who opposed their new rulers or had the bad luck of happening across bandits who had nothing against adding another dangling installation to the boulevard\'s scenery'),
				L.marker([-39.71, -74.62], setMarker(signpostIcon)).bindLabel('Crow\'s Perch').bindPopup('<h1>Crow\'s Perch</h1>After Vserad, its previous owner, panicked at the news that armies were approaching and fled to Fyke Isle, this castle became home to Phillip Strenger, alias the Bloody Baron, along with his family and entourage'),
				L.marker([-52.81, -55.63], setMarker(signpostIcon)).bindLabel('Boatmakers\' Hut').bindPopup('<h1>Boatmakers\' Hut</h1>Though nothing about this small domicile is particularly eye-catching, a family of the best shipwrights in Velen has lived here for generations, crafting the finest skiffs and dinghies north of the Yaruga'),
				L.marker([-50.35, -140.98], setMarker(signpostIcon)).bindLabel('Regugees\' Camp').bindPopup('<h1>Regugees\' Camp</h1>The members of this small community have erected a large, winged statue - evidence of people turning to old gods and ancient cults in this time of war and famine'),
				L.marker([-45.01, -140.36], setMarker(signpostIcon)).bindLabel('Coast of Wrecks').bindPopup('<h1>Coast of Wrecks</h1>Once the local youth would come here to revel amidst the wrecks. Now inhabitants of nearby villages have started combing the place day and night in search of anything that can be exchanged for food'),
				L.marker([-53.67, -119.50], setMarker(signpostIcon)).bindLabel('Midcopse').bindPopup('<h1>Midcopse</h1>Typical farming settlement which the worst of the fighting has left untouched - but which famine now grips all the same. One of the larger villages in this region'),
				L.marker([-57.30, -98.57], setMarker(signpostIcon)).bindLabel('Wastrel Manor').bindPopup('<h1>Wastrel Manor</h1>The once-beautiful manor house located near here was known for its extravagant balls, which were attended by the cream of the local youth. Its owners abandoned it over a century ago, but soon afterwards it became a place of worship for the local community, which believes a deity dwells in the ruins'),
				L.marker([-62.01, -34.94], setMarker(signpostIcon)).bindLabel('Bandit\'s Camp').bindPopup('<h1>Bandits\' Camp</h1>A place some particularly nasty characters have decided to call home'),
				L.marker([-63.55, -74.44], setMarker(signpostIcon)).bindLabel('Oreton').bindPopup('<h1>Oreton</h1>Village founded by Count Primislavus don Stessa, distant cousin to King Foltest of Temeria. The count was known for his passion for racing chariots down winding forest paths and narrow country roads. This spectacle delighted onlookers, won the hearts of the highborn ladies and aroused hatred in his rivals'),
				L.marker([-45.68, -127.05], setMarker(signpostIcon)).bindLabel('Forest Hut').bindPopup('<h1>Forest Hut</h1>Though his friends advised against building a house in the middle of the woods, Hans refused to listen and did things his way. When the war broke out and laid waste to this region, Hans and his family lived in peace, untouched by the troubles of the wider world - until one fateful night...'),
				L.marker([-13.67, -84.20], setMarker(signpostIcon)).bindLabel('Wolven Glade').bindPopup('<h1>Wolven Glade</h1>A long, long time ago, when this land was ruled by forest spirits and ancient gods, the living would come here to pay their respects to the dead in the way their holy tome comanded: "Walk thee in darkness, on a path of blood, standing under bare sky, naked before the gods and their messengers."'),
				L.marker([-28.84, -60.56], setMarker(signpostIcon)).bindLabel('Burned Ruins').bindPopup('<h1>Burned Ruins</h1>One of many structures in the area which did not survive the onslaught of war'),
				L.marker([-47.10, -92.64], setMarker(signpostIcon)).bindLabel('Troll Bridge').bindPopup('<h1>Troll Bridge</h1>Local legend has it this bridge was erected by trolls who were later killed by an anonymous witcher'),
				L.marker([-53.96, -80.86], setMarker(signpostIcon)).bindLabel('Claywich').bindPopup('<h1>Claywich</h1>Every year at Belleteyn, a great feast is held in Claywich accompanied by games, song and dance. On that night villagers from far and wide come to celebrate, with passing travelers welcome as well. Shortly before midnight the youth in attendance race deep into the forest in search of a fern flower, and though no one has as yet found one, many have found their other halves, or at least a night of moonlight passion'),
				L.marker([-69.33, -39.59], setMarker(signpostIcon)).bindLabel('Drudge').bindPopup('<h1>Drudge</h1>This once-peaceful fishermen\'s settlement now stands almost completely empty. Road-weary travelers sometimes find shelter in its abandoned huts - besides that, not a soul is to be seen'),
			// SW Velen
				L.marker([-64.09, -147.83], setMarker(signpostIcon)).bindLabel('Condyle').bindPopup('<h1>Condyle</h1>This village has been completely and utterly destroyed. Rumors claim its inhabitants perished in a gruesome massacre'),
				L.marker([-65.73, -128.41], setMarker(signpostIcon)).bindLabel('Duen Hen').bindPopup('<h1>Duen Hen</h1>Religious site where the old gods are worshipped'),
				L.marker([-73.30, -69.92], setMarker(signpostIcon)).bindLabel('Fyke Isle').bindPopup('<h1>Fyke Isle</h1>Ruined tower which is said to be afflicted by a terrible curse'),
				L.marker([-77.12, -112.72], setMarker(signpostIcon)).bindLabel('Byways').bindPopup('<h1>Byways</h1>Most of this area\'s residents have fled north or died of plague. In better times they busied themselves making prize-winning bricks'),
				L.marker([-80.79, -69.83], setMarker(signpostIcon)).bindLabel('Frischlow').bindPopup('<h1>Frischlow</h1>Like many other settlements in the area, this one has suffered greatly on account of the war. Its inhabitants have abandoned their property and evacuated lands in which they once dwelled in relative peace'),
				L.marker([-78.73, -41.44], setMarker(signpostIcon)).bindLabel('Olena\'s Grove').bindPopup('<h1>Olena\'s Grove</h1>Legends claim that a beautiful nymph named Olena once lived in this grove. She fell in love with a young hunter and the man swore to be true to the nymph, but later betrayed her. She decided to punish him by casting a spell on his spirit, which wanders the grove to this day'),
			// SE Velen
				L.marker([-79.15, -10.28], setMarker(signpostIcon)).bindLabel('Road to Bald Mountain').bindPopup('<h1>Road to Bald Mountain</h1>The peasants of Velen believe the summit of Bald Mountain is home to witches, werebbubbs and wights'),
				L.marker([-80.90, 30.32], setMarker(signpostIcon)).bindLabel('Destroyed Bastion').bindPopup('<h1>Destroyed Bastion</h1>Bastion built during the reign of King Gardic and destroyed during the First Nilfgaardian War'),
				L.marker([-76.49, 41.62], setMarker(signpostIcon)).bindLabel('Crossroads').bindPopup('<h1>Crossroads</h1>A small crossroads, well trodden by the inhabitants of the surrounding villages'),
				L.marker([-77.56, 110.92], setMarker(signpostIcon)).bindLabel('Nilfgaardian Army Group \'Center\' Camp').bindPopup('<h1>Nilfgaardian Army Group \'Center\' Camp</h1>Pitched in a mere two weeks, the Army Group \'Center\' camp constitutes the quintessence of Nilfgaardian martial architecture'),
				L.marker([-74.73, 98.61], setMarker(signpostIcon)).bindLabel('House of Respite').bindPopup('<h1>House of Respite</h1>The House of Respite\'s motto: "A soldier does not live on war alone." This is slightly misleading, however, for the club is not open to all soldiers, only Nilfgaardian officers (or those capable of passing themselves off as such)'),
				L.marker([-69.16, 82.13], setMarker(signpostIcon)).bindLabel('Kimbolt Way').bindPopup('<h1>Kimbolt Way</h1>Road built on orders of Baron Kimbolt, meant to act as a safe escape route in case his plans to take power after King Foltest\'s death went awry'),
				L.marker([-67.09, 22.19], setMarker(signpostIcon)).bindLabel('The Orphans of Crookback Bog').bindPopup('<h1>The Orphans of Crookback Bog</h1>Orphaned and unwanted children from nearby villages find a roof over their head and a bowl of warm food here'),
				L.marker([-65.05, 37.53], setMarker(signpostIcon)).bindLabel('Ruined Tower').bindPopup('<h1>Ruined Tower</h1>Five centuries ago King Geddes sent his most loyal knight, Martin of Oakdale, to watch over the inhabitants of this troubled land. He also sent his least-loyal knight, to scrub Martin\'s latrines'),
				L.marker([-70.73, 43.68], setMarker(signpostIcon)).bindLabel('Ancient Oak').bindPopup('<h1>Ancient Oak</h1>Centuries ago bloody rituals in honor of the old gods were conducted here. Locals believe dark forces still haunt this place'),
				L.marker([-58.79, 30.63], setMarker(signpostIcon)).bindLabel('Downwarren').bindPopup('<h1>Downwarren</h1>Before the war, the inhabitants of this village were known for their intricate lacemaking and artisanal smithery'),
				L.marker([-54.39, 10.99], setMarker(signpostIcon)).bindLabel('Dragonslayer\'s Grotto').bindPopup('<h1>Dragonslayer\'s Grotto</h1>Underneath this fortress lies a musty, rank cave in which a lost traveler will find nothing but a few fattened leeches - if he\'s lucky. Nevertheless, village elders insist on repeating the legend that gave the grotto its name: that of a legendary dragonslayer said to be buried somewhere deep inside'),
				L.marker([-48.75, 30.72], setMarker(signpostIcon)).bindLabel('Reardon Manor').bindPopup('<h1>Reardon Manor</h1>Abandoned estate of the once prominent Reardon family, relatives to the royal La Louve dynasty'),
				L.marker([-50.63, 67.32], setMarker(signpostIcon)).bindLabel('Benek').bindPopup('<h1>Benek</h1>This small village owes its name to its founding elder, who erected the largest windmill the land had ever seen on this spot - thereby providing work for all the village\'s inhabitants'),
				L.marker([-36.10, 51.68], setMarker(signpostIcon)).bindLabel('Toderas').bindPopup('<h1>Toderas</h1>Village founded by King Griffin of Temeria, the husband of Clarissa of Toussaint. The king had planned to turn Toderas into a large, bustling university city, a sort of Temerian alternative to Oxenfurt, but, as any visitor can quickly attest, his efforts failed utterly'),
				L.marker([-34.42, 11.69], setMarker(signpostIcon)).bindLabel('Lurtch').bindPopup('<h1>Lurtch</h1>Once the Evves family estate was located here and the area bore the name of Lord Evves\' wife, Mortilanca. When the couple died, their will stipulated their land be turned over to their serfs. The grateful peasants then founded a village of freeholders and named it after their first ealdorman, Lurtch, who had previously served as the Evves family\'s butler'),
				L.marker([-36.81, -25.97], setMarker(signpostIcon)).bindLabel('Lindenvale').bindPopup('<h1>Lindenvale</h1>One of Velen\'s many impoverished villages, its poverty deepened by war levies and the epidemic that spread after the Nilfgaardians\' arrival'),
				L.marker([-17.22, 40.17], setMarker(signpostIcon)).bindLabel('Marauders\' Bridge').bindPopup('<h1>Marauders\' Bridge</h1>After the Battle of Velen, marauders swarmed over this bridge in their rush to scavenge the battlefield'),
				L.marker([-22.92, 71.59], setMarker(signpostIcon)).bindLabel('Grotto').bindPopup('<h1>Grotto</h1>A dark and hostile place which creaks from time to time with unsettling, throaty noises...'),
			
				
		]);

	// Smugglers' Cache
		var smugglersIcon = L.icon({
			iconUrl  : '/files/img/icons/smugglers.png',
			iconSize : [28, 30]
		});

		var smugglersGeneric = genericMarkers([
			// Novigrad
				[67.37, -33.44],
				[71.07, -9.14],
			// S Novigrad
				[61.17, -84.11],
			// NW Velen
				[-58.90, -158.82],
		], smugglersIcon, 'Smuggler\'s Cache', '<h1>Smuggler\'s Cache</h1>Smuggled goods have been hidden here');

		smugglersMarkers = L.layerGroup($.merge(smugglersGeneric, [
			// No custom markers needed
		]));

	// Spoils of War
		var spoilsIcon = L.icon({
			iconUrl  : '/files/img/icons/spoils.png',
			iconSize : [25, 28]
		});

		spoilsMarkers = L.layerGroup(genericMarkers([
			// NE Velen
				[33.91, -68.51],
			// NW Velen
				[-22.72, -32.04],
			// SW Velen
				[-74.75, -144.93],
		], spoilsIcon, 'Spoils of War', '<h1>Spoils of War</h1>Search here for loot left behind after a battle or skirmish'));

	allLayers = [abandonedMarkers, alchemyMarkers, armourerMarkers, armourerstableMarkers, banditcampMarkers, barberMarkers, blacksmithMarkers, brothelMarkers, entranceMarkers, grindstoneMarkers, guardedMarkers, gwentMarkers, harborMarkers, herbalistMarkers, hiddenMarkers, innkeepMarkers, monsterdenMarkers, monsternestMarkers, noticeMarkers, pidMarkers, popMarkers, poiMarkers, shopkeeperMarkers, signpostMarkers, smugglersMarkers, spoilsMarkers];
});

function genericMarkers(cords, icon, label, popup) {
	var out = [];
	$.each(cords, function(key, val)
	{
		out.push(L.marker(val, setMarker(icon)).bindLabel(label).bindPopup(popup));
	});
	return out;
}

function setMarker(icon, tooltip) {
	return {icon : icon, riseOnHover : true};
}