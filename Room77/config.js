/**
 * http://usejsdoc.org/
 */

exports.config = {

	directConnect : true,
	timeout : 20000,
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),
	capabilities : {
		'browserName' : 'chrome'
	},
//	multiCapabilities: [
//	    {'browserName': 'chrome'},
//	    {'browserName': 'firefox'},
//	    
//	  ],


	specs : [ 'feature/*.feature' ],

	cucumberOpts : {

		require : 'feature/stepDefinitions/homePageStepDef.js,feature/stepDefinitions/SearchHotelStepDef.js',

	},
	onPrepare : function() {

		browser.driver.manage().window().maximize();
	}
};