/**
 * grunt-kiwi
 * Grunt task for rendering Kiwi templates to HTML.
 *
 * https://github.com/gustavohenke/grunt-kiwi
 */
module.exports = function( grunt ) {
	"use strict";

	grunt.initConfig({
		jshint: {
			all: [ "Gruntfile.js", "tasks/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		clean: {
			test: ["tmp"]
		},
		kiwi: {
			tests: {
				src:  "test/fixtures/*.kiwi",
				dest: "tmp/",
				data: grunt.file.readJSON("test/fixtures/data.json")
			}
		},
		nodeunit: {
			tests: [ "test/*_test.js" ]
		}
	});

	// Dependencies
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");

	// Actually load the module tasks :)
	grunt.loadTasks("tasks");

	grunt.registerTask( "test", [ "clean", "kiwi", "nodeunit", "clean" ] );
	grunt.registerTask( "default", [ "jshint", "test" ] );
};