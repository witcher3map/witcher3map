[witcher3map.com](http://witcher3map.com)
--------------------------------------
Unofficial Witcher 3 interactive maps, with a mobile & tablet friendly design faithful to the game. Any contributions, suggestions, bug reports, etc are welcome. Currently 'Skellige', 'Velen & Novigrad' & 'White Orchard' maps are complete, 'Kaer Morhen' coming soon.

#### Features
* Interactive map featuring all markers in game (plus some extra ones)
* Multiple languages (in progress, [help here](https://crowdin.com/project/witcher3map))
* Mobile and tablet friendly
* Clean interface, absolutely no ads
* Easily link your map view to others, address bar is automatically updated with a permalink
* Hide markers, right click (or long press on mobile)
* Search feature (top right, bottom icon)
* 'Waypoint' marker, right click (or long press on mobile)
* Collapsible sidebar
* Fullscreen option (both desktop and mobile)
* Downloadable for offline browsing

In the first 2 weeks of going live, there were over 200,000 unique visitors to the map. This equated to over 43,000,000 HTTP requests, of which 38,500,000 (~2.4TB of data) were cached by Cloudflare.

What can you do to help?
--------------------------------------
If you notice anything missing or have any improvements please create a pull request of your changes, or link me to your forked repo. Or if you're not experienced with Javascript and Github, create a ticket or message me on [reddit](http://www.reddit.com/message/compose/?to=untamed0) with in game screenshots.

You can also help with translating the project into other languages. We use a translation editor called Crowdin, you can find our project page [here](https://crowdin.com/project/witcher3map). Crowdin offers an easy to use interface so you don't have to be familiar with Git or Github.

How do I contribute code changes?
--------------------------------------
Ensure you have [git](http://git-scm.com/downloads) and [Node.js](https://nodejs.org/download/) installed.

After cloning the repository run the following commands:

1. `npm install` _(downloads dependencies for the project from NPM and builds the project to the dist/ folder.)_

2. `grunt build` _(download & extracts map files, lints markup/js/css/json, creates vendor bundle, minifies js/css, builds the dist folder)_

3. `grunt server` _(runs a local webserver listening on port 80 in the background and watches files for changes. Open your web browser to http://localhost)_

Optional: `grunt rebuild` _(same thing as build but doesn't download the maps again.)_

Credits & Licence
--------------------------------------
Created by [untamed0](https://github.com/untamed0). Licensed under [CC BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/4.0/). With help from [mcarver](https://github.com/mcarver) and the other [contributors](https://github.com/untamed0/witcher3map/graphs/contributors). Thanks to [@DesignGears](https://twitter.com/DesignGears) & [hhrhhr](https://github.com/hhrhhr) for map & asset extraction.

The Witcher 3, logo, icons &amp; map are the property of [CD PROJEKT RED](http://en.cdprojektred.com/) and are used without permission. Under section 9.4 of the CD PROJEKT RED [User Agreement](http://bar.cdprojektred.com/regulations/):
> If you create your User Generated Content using any of CD PROJEKT RED graphics, audio, video, text or any other content - you may use it and share for personal enjoyment, but we do not allow any use of it for financial profit.

This software uses the following libraries developed by third parties, and are licenced seperately;
* [jQuery](http://jquery.com) (MIT)
* [jQuery.NiceScroll](http://git.io/vkLly) (MIT)
* [Leaflet](http://leafletjs.com) (BSD2)
* [Leaflet.label](http://git.io/vkfA2) (MIT)
* [Leaflet-hash](http://git.io/mwK1oA) (MIT)
* [Leaflet.fullscreen](http://git.io/vJw5v) (BSD2)
* [Leaflet Control Search](http://git.io/vkCPC) (MIT)
* [Leaflet.EasyButton](http://git.io/vLhAa) (MIT)
* [FileSaver.js](http://git.io/vLhxv) (MIT)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) (MIT)
* [Fuse](http://kiro.me/projects/fuse.html) (APACHE 2.0)
