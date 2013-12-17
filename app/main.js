require.config({
    paths: {
    	controller: 'controller',

        angular: '../vendor/angular/angular',
        angularRoute: '../vendor/angular-route/angular-route'
    },

    shim: {
    	angular: {
    		exports: 'angular'
    	},
    	angularRoute: ['angular']
    },
    baseUrl : 'app'
});


require(['angular', 'app'], function(angular, app) {
    // var $html = angular.element(document.getElementsByTagName('html')[0]);

	// angular.element().ready(function() {
	//   angular.bootstrap(document, app.name);
	// });
       angular.element(document).ready(function() {
         angular.module('myApp', []);
         angular.bootstrap(document, ['myApp']);
       });
});