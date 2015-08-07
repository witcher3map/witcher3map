// loosely based on https://github.com/sephcoster/leaflet-hash but heavily modified
// to remove underscore and fix a few issues
(function(window) {
    var HAS_HASHCHANGE = (function() {
        var doc_mode = window.documentMode;
        return ('onhashchange' in window) &&
            (doc_mode === undefined || doc_mode > 7);
    })();

    L.Hash = function(map) {
        this.onHashChange = L.Util.bind(this.onHashChange, this);

        if (map) {
            this.init(map);
        }
    };

	// Return the hash parameters from a string. [based on source](http://goo.gl/mebsOI)
	L.Hash.getHashParams = function() {
    var str = window.location.hash.split("/")[3];
    if(!str) return;
		var hashParams = {};
		var e,
			a = /\+/g,  // Regex for replacing addition symbol with a space
			r = /([^!&;=<>]+)(!?[=><]?)([^&;]*)/g,
			d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
			q = str.replace(/^!\/?/, '');

		while (e = r.exec(q)) {
			hashParams[d(e[1])] = d(e[3]);
		}
		return hashParams;
	};

  L.Hash.removeParam = function(paramName) {
    var hashParams = this.getHashParams();
    var newHash, hashParamsTemp = {};
    for(var param in hashParams) {
        if(paramName != param) hashParamsTemp[param] = hashParams[param];
    }
    this.updateUrlHash(hashParamsTemp);
  };

	L.Hash.addParam = function( paramName, value ){
    var hashParams = this.getHashParams();
    if(!hashParams) hashParams = {};
    hashParams[paramName] = value;
    this.updateUrlHash(hashParams);
	};

  L.Hash.getBaseHash = function() {
    var args = window.location.hash.split("/");
    if (args.length >= 3 && args.length <= 4) {
      return args.splice(0, 3).join("/");
    } else {
      return window.location.hash;
    }
  };

	L.Hash.updateUrlHash = function(hashParams) {
		var newHash, hashParamsTemp = [];
		// Loop through params, stringify them and push them into the temp array.
		for(var param in hashParams) {
			hashParamsTemp.push(param + '=' + hashParams[param]);
		}

    var baseHash = this.getBaseHash();

    newHash = baseHash + '/' + hashParamsTemp.join('&');
    window.location.hash = newHash;
	};

  L.Hash.parseHash = function(hash) {
    if(hash.indexOf('#') === 0) {
      hash = hash.substr(1);
    }
    var args = hash.split("/");
    if (args.length >= 3 && args.length <= 4) {
      var zoom = parseInt(args[0], 10),
			lat = parseFloat(args[1]),
			lon = parseFloat(args[2]),
      params = this.getHashParams();
			if (isNaN(zoom) || isNaN(lat) || isNaN(lon)) {
				return false;
			} else {
				return {
					center: new L.LatLng(lat, lon),
					zoom: zoom,
          params: params
				};
			}
		} else {
			return false;
		}
  };

  L.Hash.formatHash = function(map) {
    var center = map.getCenter(),
		    zoom = map.getZoom(),
		    precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));

    var baseHash = "#" + [zoom,
			center.lat.toFixed(precision),
			center.lng.toFixed(precision)
		].join("/");

    var hashParams = this.getHashParams();

    if(hashParams) {
      var hashParamsTemp = [];
      // Loop through params, stringify them and push them into the temp array.
      for(var param in hashParams) {
        hashParamsTemp.push(param + '=' + hashParams[param]);
      }
      return baseHash + '/' + hashParamsTemp.join('&');
    } else {
      return baseHash;
    }
  };

  L.Hash.prototype = {
      map: null,
      lastHash: null,

	    getHashParams: L.Hash.getHashParams,
	    addParam: L.Hash.addParam,
      removeParam: L.Hash.removeParam,
      getBaseHash: L.Hash.getBaseHash,
	    updateUrlHash: L.Hash.updateUrlHash,
      parseHash: L.Hash.parseHash,
      formatHash: L.Hash.formatHash,

      init: function(map) {
          this.map = map;

          // reset the hash
          this.lastHash = null;
          this.onHashChange();

          if (!this.isListening) {
              this.startListening();
          }
      },

      removeFrom: function(map) {
          if (this.changeTimeout) {
              clearTimeout(this.changeTimeout);
          }

          if (this.isListening) {
              this.stopListening();
          }

          this.map = null;
      },

      onMapMove: function() {
          // bail if we're moving the map (updating from a hash),
          // or if the map is not yet loaded

          if (this.movingMap || !this.map._loaded) {
              return false;
          }

          var hash = this.formatHash(this.map);
          if (this.lastHash != hash) {
            location.replace(hash);
            this.lastHash = hash;
          }
      },

      movingMap: false,
      update: function() {
        var hash = location.hash;
        if (hash === this.lastHash) {
          return;
        }
        var parsed = this.parseHash(hash);
        if (parsed) {
          this.movingMap = true;

          this.map.setView(parsed.center, parsed.zoom);

          this.movingMap = false;
        } else {
          this.onMapMove(this.map);
        }
      },

      // defer hash change updates every 200ms
      changeDefer: 200,
      changeTimeout: null,
      onHashChange: function() {
          // throttle calls to update() so that they only happen every
          // `changeDefer` ms
          if (!this.changeTimeout) {
              var that = this;
              this.changeTimeout = setTimeout(function() {
                  that.update();
                  that.changeTimeout = null;
              }, this.changeDefer);
          }
      },

      isListening: false,
      hashChangeInterval: null,
      startListening: function() {
          this.map.on("moveend", this.onMapMove, this);

          if (HAS_HASHCHANGE) {
              L.DomEvent.addListener(window, "hashchange", this.onHashChange);
          } else {
              clearInterval(this.hashChangeInterval);
              this.hashChangeInterval = setInterval(this.onHashChange, 500);
          }
          this.isListening = true;
      },

      stopListening: function() {
          this.map.off("moveend", this.onMapMove, this);

          if (HAS_HASHCHANGE) {
              L.DomEvent.removeListener(window, "hashchange", this.onHashChange);
          } else {
              clearInterval(this.hashChangeInterval);
          }
          this.isListening = false;
      }
  };

  L.hash = function(map) {
      return new L.Hash(map);
  };
  L.Map.prototype.addHash = function() {
      this._hash = L.hash(this);
  };
  L.Map.prototype.removeHash = function() {
      this._hash.removeFrom();
  };
})(window);
