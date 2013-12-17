define(['angular', 'app'], function(angular, app) {
        'use strict';
        console.log("route yo");
        return app.config(['$routeProvider', function($routeProvider) {

                $routeProvider.when('/', {
                        templateUrl: 'partials/home.html',
                        controller: function() {
                                console.log("lol");
                        }
                });

                $routeProvider.when('/view1', {
                        templateUrl: 'app/partials/partial1.html',
                        controller: 'MyCtrl1'
                });
                $routeProvider.when('/view2', {
                        templateUrl: 'app/partials/partial2.html',
                        controller: 'MyCtrl2'
                });
                $routeProvider.otherwise({redirectTo: '/'});
        }]);

});