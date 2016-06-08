module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// run client tests
		mocha: {
			local: {
				options: {
					run: true,
					reporter: 'Spec',
					clearRequireCache: true,
					log: true,
					logErrors: true
				},
				src: ['testrunner.html']
			},
			jenkins: {
				options: {
					run: true,
					reporter: 'XUnit',
					clearRequireCache: true,
					log: false,
					logErrors: false
				},
				src: ['testrunner.html'],
				dest: '../../../reports/client/sample-xunit.xml'
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha');
	grunt.registerTask('testClient', ['mocha:local']);
	grunt.registerTask('testJenkins', ['mocha:jenkins']);
	grunt.registerTask('default', ['testClient']);

};
