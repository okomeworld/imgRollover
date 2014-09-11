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
				'js/imgRollover.namespace.js',
				'js/imgRollover.util.js',
				'js/imgRollover.default.js',
				'js/imgRollover.fade.js'
				],
				dest : 'js/imgRollover.js'
			}
		},
		watch: {
			js: {
				files: ["js/*.js"],
				tasks: ['concat','uglify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

};