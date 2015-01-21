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
				browsers: ['last 2 versions', 'ie 9'],
				map: true // Create a new sourcemap based on the found one (or just create a new inlined sourcemap)
			},
			target: { // Target-specific file lists and/or options
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
		},

		copy: {
			dist: {
				expand: true,
				cwd: 'app/',
				src: ['css/style.min.css', 'fonts/**', 'js/**', 'index.html'],
				dest: 'dist/',
				options: {
					process: function (content, srcpath) {
						// Remove livereload
						return content.replace(/<script src="http:\/\/localhost:35729\/livereload.js"><\/script>/g, '');
					}
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'dist/index.html' // Dest: Src
				}
			}
		}
	});

	// Load the plugins that provides the tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'autoprefixer', 'handlebars', 'watch']);
	grunt.registerTask('dist', ['copy', 'htmlmin']);
};
