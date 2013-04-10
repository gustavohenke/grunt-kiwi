module.exports = function( grunt ) {
	"use strict";

	var kiwi = require("kiwi");
	var path = require("path");
	var defaults = {
		encoding:   "utf8"
	};

	grunt.registerMultiTask( "kiwi", "Compiles Kiwi templates", function() {
		var options = grunt.util._.extend( {}, defaults, this.options() ),
			src = grunt.file.expand( this.data.src ),
			dest = this.data.dest,
			locals = this.data.data,
			done = this.async(),
			i = 0;

		// Can't write rendered templates to a file, duh!
		if ( grunt.file.isFile( dest ) ) {
			grunt.fatal("The destination must be a directory, not a file.");
			return; // I bet it isn't necessary, but who knows
		}

		// Let's create the dest dir
		grunt.file.mkdir( dest );

		src.forEach(function( name ) {
			new kiwi.Template().loadAndRender( name, locals, function( e, rendered ) {
				if ( e ) {
					done( e );
					return;
				}

				var baseName = path.basename( name, path.extname( name ) );
				grunt.file.write( path.join( dest, baseName + ".html"), rendered.toString(), {
					encoding: options.encoding
				});

				i++;
				if ( i === src.length ) {
					done();
				}
			});
		});
	});
};