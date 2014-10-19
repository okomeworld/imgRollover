module.exports = function(grunt) {

	grunt.initConfig({
		uglify: {
			js: {
				src: "js/imgRollover.js",
				dest: "js/imgRollover.min.js"
			}
		},
		concat : {
			js : {
				src : [
				'assets/imgRollover.namespace.js',
				'assets/imgRollover.base.js',
				'assets/imgRollover.default.js',
				//'assets/imgRollover.fade.js'
				],
				dest : 'js/imgRollover.js'
			}
		},
		watch: {
			js: {
				files: ['assets/*.js','js/*.js'],
				tasks: ['concat','uglify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

};
