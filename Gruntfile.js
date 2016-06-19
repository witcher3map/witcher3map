module.exports = function (grunt) {

	grunt.initConfig({

		sitemap_xml: {
			files: {
				cwd: 'dist',
				src: '{,**/}*.html',
				dest: 'dist/sitemap.xml',
			}
		},

		clean: {
			scripts: [
				'dist/files/scripts/*.js',
				'!dist/files/scripts/vendor.bundle.js',
			],
			vendor: ['dist/files/scripts/vendor.bundle.js'],
			dist: ['dist/*'],
		},

		eslint: {
			scripts: [
				'assets/scripts/custom/**.js'
			],
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			styles: {
				src: ['assets/styles/*.css']
			},
		},

		htmlhint: {
			options: {
				htmlhintrc: '.htmlhintrc'
			},
			markup: {
				src: ['assets/markup/{,**/}*.html']
			},
		},

		// SYNC will only copy changed files!
		sync: {
			scripts: {
				expand: true,
				cwd: 'assets/scripts/custom/',
				src: ['**'],
				dest: 'dist/files/scripts/',
			},
			markup: {
				expand: true,
				cwd: 'assets/markup/',
				src: ['**'],
				dest: 'dist/',
			},
			locales: {
				expand: true,
				cwd: 'assets/locales/',
				src: ['**'],
				dest: 'dist/files/locales/',
			},
			images: {
				expand: true,
				cwd: 'assets/images/',
				src: ['**'],
				dest: 'dist/files/images/',
			},
			fonts: {
				expand: true,
				cwd: 'assets/fonts/',
				src: ['**'],
				dest: 'dist/files/fonts/',
			},
		},

		// COPY will copy EVERY file in the directory reardless of what changed
		copy: {
			font_awesome_css: {
				expand: true,
				cwd: 'node_modules/font-awesome/css/',
				src: 'font-awesome.min.css',
				dest: 'dist/files/styles/',
				filter: 'isFile'
			},
			font_awesome_fonts: {
				expand: true,
				cwd: 'node_modules/font-awesome/fonts/',
				src: '**',
				dest: 'dist/files/fonts/',
				filter: 'isFile'
			},
			leaflet_css: {
				expand: true,
				cwd: 'node_modules/leaflet/dist/images/',
				src: '**',
				dest: 'dist/files/images/leaflet',
				filter: 'isFile'
			},
			leaflet_images: {
				expand: true,
				cwd: 'node_modules/leaflet/dist/',
				src: 'leaflet.css',
				dest: 'dist/files/styles/',
				filter: 'isFile'
			},
			favicon: {
				expand: true,
				cwd: 'assets/favicon/',
				src: ['**'],
				dest: 'dist/',
				filter: 'isFile'
			},
		},

		uglify: {
			vendor: {
				src: [
					'node_modules/jquery/dist/jquery.js',
					'node_modules/i18next-client/i18next.js',
					'node_modules/ddslick/src/jquery.ddslick.js',
					'node_modules/nicescroll/jquery.nicescroll.js',
					'node_modules/leaflet/dist/leaflet-src.js',
					'node_modules/fuse.js/src/fuse.js',
					'node_modules/file-saver/FileSaver.js',
					'assets/scripts/vendor/**.js', // vendor folder
				],
				dest: 'dist/files/scripts/vendor.bundle.js',
			},
		},

		cssmin: {
			styles: {
				expand: true,
				cwd: 'assets/styles/',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/files/styles/',
				ext: '.min.css'
			}
		},

		curl: {
			maps: {
				src: 'https://github.com/witcher3map/witcher3map-maps/releases/download/1.1/witcher3map-maps-master.zip',
				dest: 'tmp/maps.zip'
			},
		},

		unzip: {
			maps: {
				src: '<%= curl.maps.dest %>',
				dest: 'dist/files/maps'
			},
		},

		watch: {
			express: {
				files:  ['server.js'],
				tasks:  ['express:dev'],
				options: {
					spawn: false
				}
			},
			css: {
				files: 'assets/styles/**.css',
				tasks: ['cssmin:styles'],
			},
			scripts: {
				files: '<%= eslint.scripts %>', 
				tasks: ['eslint:scripts', 'sync:scripts'],
			},
			vendor: {
				files: 'assets/scripts/vendor/**.js', 
				tasks: ['uglify:vendor'],
			},
			markup: {
				files: '<%= htmlhint.markup.src %>',
				tasks: ['htmlhint', 'sync:markup'],
			},
			other: {
				files: [
					'<%= sync.images.cwd %>',
					'<%= sync.fonts.cwd %>',
				],
				tasks: ['sync:images', 'sync:fonts'],
			},
		},

		express: {
			options: {
				port: 81,
			},
			dev: {
				options: {
					script: 'server.js'
				},
			},
		},

	});

	grunt.loadNpmTasks('gruntify-eslint');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-sitemap-xml');
	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-zip');

	grunt.registerTask('server', [ 'express:dev', 'watch' ])

	grunt.registerTask('build', [
		'clean:dist',
		'csslint',
//		'htmlhint',
//		'eslint',
		'uglify',
		'curl:maps',
		'unzip:maps',
		'sync',
	]);

	grunt.registerTask('rebuild', [
		'clean:dist',
		'csslint',
//		'htmlhint',
//		'eslint',
		'uglify',
		'cssmin',
//		'curl:maps',
		'unzip:maps',
		'copy',
		'sync',
	]);

};