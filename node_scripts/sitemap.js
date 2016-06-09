var sm = require('sitemap')
	, fs = require('fs');

var hostname = 'http://witcher3map.com';

var sitemap = sm.createSitemap({
	hostname: hostname,
	cacheTime: 600000,
	urls: [
		{ url: hostname , changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/index.html' },
		{ url: hostname+'/w/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/w/index.html' }, // White Orchard
		{ url: hostname+'/v/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/v/index.html' }, // Velen
		{ url: hostname+'/s/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/s/index.html' }, // Skellige
		{ url: hostname+'/k/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/k/index.html' }, // Kaer Morhen
		{ url: hostname+'/t/', changefreq: 'daily', priority: 1, lastmodrealtime: true, lastmodfile: 'dist/t/index.html' }  // Toussaint
	]
});

//write the sitemap
fs.writeFileSync("dist/sitemap.xml", sitemap.toString());
console.log('Sitemap has been created at dist/sitemap.xml.');
