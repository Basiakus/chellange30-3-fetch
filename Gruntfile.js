module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'./css/style.css': './scss/style.scss'
				}
			}
		},
		watch: {
			scripts: {
			files: ['scss/*.scss'],
			tasks: ['sass'],
				options: {
					spawn: false,
				},
			}
		}
	});
	// Load the plugins tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'watch']);
	};