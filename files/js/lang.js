(function() {
	var getMapdata = function(mapname) {
		$.getScript("../files/js/mapdata-"+mapname+".js").done(function(script, textStatus) {
			$.getScript("../files/js/custom.js").done(function(script, textStatus) {
				$(document).i18n();
			});
		});
	};

	$.i18n.init(i18noptions, function() {
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

	//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
	$('.dd-selected').on('click', function() {
		setTimeout(function() {
				$("#sidebar").getNiceScroll().resize();
		}, 500);
	});
})();
