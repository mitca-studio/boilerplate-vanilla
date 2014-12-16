module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/css/style.min.css': 'app/scss/main.scss' // Dest: Src
				}
			}
		},

		autoprefixer: {
			options: { // Task-specific options
				browsers: ['last 2 versions', 'ie 9']
			},
			target: { // Target-specific file lists and/or options
				src: 'app/css/style.min.css'
			},
			sourcemap: {
				options: {
					map: {
						inline: false,
						prev: 'app/css/' // Previous Sass sourcemap
					}
				},
				src: 'app/css/style.min.css'
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: 'JST'
				},
				files: {
					'app/js/compiled-templates.js': 'app/templates/**/*.hbs' // Dest: Src
				}
			}
		},

		watch: {
			livereload: {
				files: ['app/**/*'],
				options: { livereload: true } // Enable live reload on port 35729
			},
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'autoprefixer']
			},
			templates: {
				files: ['**/*.hbs'],
				tasks: ['handlebars']
			}
		}
	});

	// Load the plugins that provides the tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'autoprefixer', 'handlebars', 'watch']);
};
