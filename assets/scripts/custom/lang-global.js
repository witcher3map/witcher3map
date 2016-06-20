var isRoot = (location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)) ? false : true;

if (localStorage['lang'] == null) {
	var lang = window.navigator.userLanguage || window.navigator.language;
	lang = lang.substring(0,2);
	localStorage['lang'] = lang;
}

//i18n options
window.i18noptions = {
	debug: false,
	getAsync: true,
	ns: 'general',
	lng: localStorage['lang'],
	fallbackLng: 'en',
	resGetPath: ((isRoot) ? "" : "../")+'files/locales/__lng__/__ns__.json',
	useDataAttrOptions: true,
	lngWhitelist: [ 'en', 'de', 'ru', 'pl', 'fr' ]
};

var languageOptions = [
	{text: "English",value: "en",selected: (localStorage['lang'] == "en" ? true : false), description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/en.png"},
	{text: "Deutsch",value: "de",selected: (localStorage['lang'] == "de" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/de.png"},
	{text: "Русский",value: "ru",selected: (localStorage['lang'] == "ru" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/ru.png"},
	{text: "Polski",value: "pl",selected: (localStorage['lang'] == "pl" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/pl.png"},
	{text: "Français",value: "fr",selected: (localStorage['lang'] == "fr" ? true : false),description: " ",imageSrc: ((isRoot) ? "" : "../")+"files/images/flags/fr.png"}
];

window.changeLang = function(lang) {
	if(localStorage['lang'] != lang) {
		localStorage['lang'] = lang;
		window.location.reload();
	}
};

$(function() {
	$('#lang-switcher').ddslick({
		data: languageOptions,
		width: 150,
		onSelected: function(obj){
			changeLang(obj.selectedData.value);
		}
	});
});

jQuery.cachedScript = function( url, options ) {
	options = $.extend( options || {}, {
		dataType: "script",
		cache: true,
		url: url
	});
	return jQuery.ajax( options );
};
