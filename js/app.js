define(['angular', 'uiRouter', 'ngResource', 'ngCookies',
        'resources/resources', 'services/services', 'controllers/controllers',
        'directives/directives', 'filters/filters'
    ],
    function() {
        var app = angular.module('app', [
            'ngRoute',
            'ui.router',
            'ngResource',
            'ngCookies',
            'app.filters',
            'app.directives',
            'app.resources',
            'app.services',
            'app.controllers'
        ]);
        return app;
    });
