var sm = require('sitemap')
	, fs = require('fs');

//configuration
var hostname = 'http://witcher3map.com';

//create the sitemap
var sitemap = sm.createSitemap({
	hostname: hostname,
	cacheTime: 600000
});

//mocks
global = window = {};
L = {};
L.latLng = function(){};
$ = {};
$.t = function(){};

//helper function to iterate the mapdata and generate sitemap
var generateSitemapFromMapdata = function(namespace, mapdata) {
	for(var markerType in mapdata) {
		for(var i=0; i < mapdata[markerType].length; i++) {
			var marker = mapdata[markerType][i];
			for(var j=0; j < marker.coords.length; j++) {
				var coords = marker.coords[j];
				var url = hostname + '/' + namespace + '/#' +global.map_mZoom + '/' + coords[0] + '/' + coords[1] + '/m=' + coords[0] + ',' + coords[1];
				sitemap.add({url: url});
			}
		}
	}
}

//add sitemap entries for our root pages
fs.stat('dist/index.html', function(err, stats) {
	sitemap.add({url: hostname, changefreq: 'daily', lastmod: stats.mtime, priority: 1.0});
	fs.stat('dist/w/index.html', function(err, stats) {
		sitemap.add({url: hostname+'/w/', changefreq: 'daily', lastmod: stats.mtime, priority: 1.0});
		fs.stat('dist/v/index.html', function(err, stats) {
			sitemap.add({url: hostname+'/v/', changefreq: 'daily', lastmod: stats.mtime, priority: 1.0});
			fs.stat('dist/s/index.html', function(err, stats) {
				sitemap.add({url: hostname+'/s/', changefreq: 'daily', lastmod: stats.mtime, priority: 1.0});
				fs.stat('dist/k/index.html', function(err, stats) {
					sitemap.add({url: hostname+'/k/', changefreq: 'daily', lastmod: stats.mtime, priority: 1.0});
					fs.stat('dist/t/index.html', function(err, stats) {
						sitemap.add({url: hostname+'/t/', changefreq: 'daily', lastmod: stats.mtime, priority: 1.0});

						//generate sitemap entries from each mapdata file
						require('../assets/scripts/custom/mapdata-skellige.js');
						generateSitemapFromMapdata('s', global.mapdata_skellige);
						require('../assets/scripts/custom/mapdata-velen.js');
						generateSitemapFromMapdata('v', global.mapdata_velen);
						require('../assets/scripts/custom/mapdata-white_orchard.js');
						generateSitemapFromMapdata('w', global.mapdata_white_orchard);
						require('../assets/scripts/custom/mapdata-kaer_morhen.js');
						generateSitemapFromMapdata('k', global.mapdata_kaer_morhen);
						require('../assets/scripts/custom/mapdata-toussaint.js');
						generateSitemapFromMapdata('t', global.mapdata_toussaint);

						//write the sitemap
						fs.writeFileSync("dist/sitemap.xml", sitemap.toString());
						console.log('Sitemap has been created at dist/sitemap.xml.');

					});
				});
			});
		});
	});
});
