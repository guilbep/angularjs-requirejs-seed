var tests = Object.keys(window.__karma__.files).filter(function(file) {
    return /Spec\.js$/.test(file);
});

// load config from js/main not duplicating keys.
require.config({
    baseUrl: '/base/',
    "paths": {
        "js": "./js",
        "vendor": "./vendor",
        "main": "js/main",
        "app": "js/app",
        "config": "js/config",
        "routes": "js/routes",
        "interceptor": "js/interceptor",
        "run": "js/run",
        "setting": "js/setting",

        "services": "js/services",
        "resources": "js/resources",
        "controllers": "js/controllers",
        "directives": "js/directives",
        "filters": "js/filters",
        "modules": "js/modules",

        "angular": "vendor/angular/angular",
        "angularMocks"   : "vendor/angular-mocks/angular-mocks",
        "ngRoute": "vendor/angular-route/angular-route",
        "ngResource": "vendor/angular-resource/angular-resource",
        "ngCookies": "vendor/angular-cookies/angular-cookies",
        "uiRouter": "vendor/angular-ui-router/release/angular-ui-router",

        "jQuery": "vendor/jquery/jquery",

        "bootstrap": "vendor/bootstrap/dist/js/bootstrap",
        "bootstrap_datepicker": "vendor/bootstrap-datepicker/js/bootstrap-datepicker",

        "momentjs": "vendor/momentjs/moment",
    },
    "shim": {
        "jQuery": {
            "exports": "jQuery"
        },
        "typeaheadjs": ["jQuery"],
        "bootstrap": {
            "deps": ["jQuery"]
        },
        "angular": {
            "exports": "angular",
            "deps": ["bootstrap", "momentjs"]
        },
        "ngResource": ["angular"],
        "ngCookies": ["angular"],
        "ngRoute": ["angular"],
        "uiRouter": {
            "deps": ["ngRoute"],
            "exports": "uiRouter"
        },
        "angularMocks": {
            "deps": ["ngResource"],
            "exports": "angularMocks"
        }
    },

    // array with all spec files
    deps: tests,

    callback: window.__karma__.start
});
