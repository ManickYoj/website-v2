module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		assemble: {
			options: {
				partials: ["src/partials/*"],
				assets: "src/assets",
				layout: "src/layouts/default.hbs",
				flatten: "true"
			},
			pages: {
				files: {
					'web/': ['src/pages/*.hbs']
				}
			}
		},
		//Delete cached HTML files before recompiling
		clean: {
			all: ['web/*.html']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-assemble');
	grunt.registerTask('default', ['clean', 'assemble']);
}