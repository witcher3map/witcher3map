(function() {
	if (localStorage['lang'] == null) {
		var lang = window.navigator.userLanguage || window.navigator.language;
		lang = lang.substring(0,2);
		localStorage['lang'] = lang;
	}

	window.changeLang = function(lang) {
		localStorage['lang'] = lang;
	};

	var options = {
		debug: false,
		getAsync: true,
		ns: 'general',
		lng: localStorage['lang'],
		fallbackLng: "en",
		resGetPath: "../files/locales/__lng__/__ns__.json"
	};
	$.i18n.init(options,
			  function() {
					var namespace = location.pathname.replace(/\//g, '');
					if(options.debug) console.log('i18next initialization complete.  loading namespace:'+namespace);
					$.i18n.loadNamespace(namespace, function() {
						if(options.debug) console.log('i18next is ready.');
						if(options.debug) console.log('loading shared');
						$(document).trigger("loadShared");

						if(options.debug) console.log('loading mapdata');
						$(document).trigger("loadMapdata");

						if(options.debug) console.log('loading custom');
						$(document).trigger("loadCustom");

						if(options.debug) console.log('performing language substitutions')
						$(document).i18n();

						if(options.debug) console.log('map loaded and ready')
					});
			  }
	);
})();
