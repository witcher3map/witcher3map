(function() {
	if (localStorage['lang'] == null) {
		var lang = window.navigator.userLanguage || window.navigator.language;
		lang = lang.substring(0,2);
		localStorage['lang'] = lang;
	}

	var options = {
		debug: false,
		getAsync: true,
		ns: 'general',
		lng: localStorage['lang'],
		fallbackLng: 'en',
		resGetPath: '../files/locales/__lng__/__ns__.json',
		useDataAttrOptions: true,
		lngWhitelist: [ 'en', 'de', 'ru', 'pl', 'fr' ]
	};

	var getMapdata = function(mapname) {
		$.getScript("../files/js/mapdata-"+mapname+".js").done(function(script, textStatus) {
			$.getScript("../files/js/custom.js").done(function(script, textStatus) {
				$(document).i18n();
			});
		});
	};

	$.i18n.init(options, function() {
		var namespace = location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)[1];
		$.i18n.loadNamespace(namespace, function() {
			if(namespace == "w") {
				getMapdata('white_orchard');
			} else if (namespace == "v") {
				getMapdata('velen');
			} else if (namespace == "s") {
				getMapdata('skellige');
			}
		});
	});

	window.changeLang = function(lang) {
		if(localStorage['lang'] != lang) {
			localStorage['lang'] = lang;
			window.location.reload();
		}
	};

	var languageOptions = [
		{text: "English",value: "en",selected: (localStorage['lang'] == "en" ? true : false), description: " ",imageSrc: "../files/img/flags/en.png"},
		{text: "Deutsch",value: "de",selected: (localStorage['lang'] == "de" ? true : false),description: " ",imageSrc: "../files/img/flags/de.png"},
		{text: "Русский",value: "ru",selected: (localStorage['lang'] == "ru" ? true : false),description: " ",imageSrc: "../files/img/flags/ru.png"},
		{text: "Polski",value: "pl",selected: (localStorage['lang'] == "pl" ? true : false),description: " ",imageSrc: "../files/img/flags/pl.png"},
		{text: "Français",value: "fr",selected: (localStorage['lang'] == "fr" ? true : false),description: " ",imageSrc: "../files/img/flags/fr.png"}
	];

	$('#lang-switcher').ddslick({
		data: languageOptions,
		width: 150,
		onSelected: function(obj){
			changeLang(obj.selectedData.value);
		}
	});

	//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
	$('.dd-selected').on('click', function() {
		setTimeout(function() {
				$("#sidebar").getNiceScroll().resize();
		}, 500);
	});
})();
