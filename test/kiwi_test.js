"use strict";
var grunt = require("grunt");

exports.kiwi = {
	main: function( test ) {
		test.expect( 1 );

		var actual   = grunt.file.read("tmp/a.html");
		var expected = grunt.file.read("test/expected/a.html");

		test.equal( actual, expected, "should render as expected" );
		test.done();
	}
};