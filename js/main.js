require.config({
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

        "services": "js/services/",
        "resources": "js/resources",
        "controllers": "js/controllers",
        "directives": "js/directives/",
        "filters": "js/filters/",
        "modules": "js/modules/",

        "angular": "vendor/angular/angular",
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
        }
    },
    "baseUrl": "/"
});
// dynamic versionning
var config = new(function() {
    var data_main = document.getElementById("main_entry").getAttribute("data-main");
    this.version = data_main.substring(data_main.indexOf('v') + 2);
    this.config = {
        "routes": {
            "version": this.version
        }
    };
    this.urlArgs = "v=" + this.version;

})();

require.config(config);

require(["jQuery", "angular", "run"], function($, angular) {
    // check if ie7
    var oldIE;
    if (angular.element("html").is(".ie6, .ie7")) {
        oldIE = true;
    }
    if (!oldIE) {
        angular.element().ready(function() {
            angular.bootstrap(document, ["app"])
        });
    }
});
