var sm = require('sitemap')
	, fs = require('fs');

//configuration
var hostname = 'http://witcher3map.com';
var cacheTime = 600000;

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

var sitemap = sm.createSitemap({
	hostname: hostname,
	cacheTime: cacheTime,
	urls: [
		{ url: hostname , changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/index.html' },
		{ url: hostname+'/w/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/w/index.html' }, // White Orchard
		{ url: hostname+'/v/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/v/index.html' }, // Velen
		{ url: hostname+'/s/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/s/index.html' }, // Skellige
		{ url: hostname+'/k/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/k/index.html' }, // Kaer Morhen
		{ url: hostname+'/t/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/t/index.html' }  // Toussaint
	]
});

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
