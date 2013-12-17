define(['app', 'module'], function(appModule, module) {
    'use strict';
    appModule.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('start', {
                url: '/start',
                templateUrl: 'partials/start.html'
            })
    });
    // appModule.config(function($stateProvider, $urlRouterProvider){

    //   $urlRouterProvider.when('', '/home');
    //   $urlRouterProvider.when('/', '/home');
    //   $urlRouterProvider.when('/stats', '/stats/all');
    //   $urlRouterProvider.when('/stats/', '/stats/all');
    //   $urlRouterProvider.when('/segments/', '/segments');
    //   $urlRouterProvider.otherwise("/404");

    //   var states = [

    //     {
    //       name: 'login',
    //       url: "/login",
    //       templateUrl: "/partials/login.html",
    //       controller: function($scope, GlobalErrorSrvc){
    //         // so we don't have any error on /login
    //         GlobalErrorSrvc.clear();
    //       }
    //     },
    //     {
    //       name: 'main',
    //       url: "/",
    //       templateUrl: "/partials/main/main.html",
    //       controller: function($scope, promiseTags){
    //         // should resolve statsHere // so it's global to all sub view ?
    //         $scope.tagids = promiseTags.data;

    //         $scope.tagids.sort(function(a,b) {
    //           function strip(n) {return n.toLowerCase().replace(/_|-/g, '');}
    //           if (!!a && !!b && !!a.name && !!b.name) {
    //             a = strip(a.name);
    //             b = strip(b.name);
    //             return a < b ? -1 : a === b ? 0 : 1;
    //           }
    //           return -1;
    //         });
    //         $scope.tagids.unshift({
    //           _id: "all",
    //           name: "All tags",
    //           status: "enabled"
    //         });
    //       },
    //       resolve: {
    //         'promiseTags': function(TagsRsrc) {
    //           return TagsRsrc.get().$promise;
    //         },
    //         'statsTags' : function(StatsRsrc) {
    //           // maybe resolve authentication here? and not in run?
    //         }
    //       }
    //     },
    //     {
    //       name: 'main.home',
    //       url: "home",
    //       templateUrl: "/partials/main/home/home.html"
    //     },
    //     {
    //       name: "main.globalview",
    //       url: "globalview",
    //       templateUrl: "/partials/main/globalview/globalview.html"
    //     },
    //     {
    //       name: 'main.stats',
    //       abstract: true,
    //       url: "stats",
    //       templateUrl: "/partials/main/stats/stats.html"
    //     },
    //     {
    //       name: 'main.stats.stat',
    //       url: "/{tagId:[0-9]{7,7}|all}",
    //       templateUrl: "/partials/main/stats/stat.html"
    //     },
    //     {
    //       name: 'main.segments',
    //       url: "segments",
    //       templateUrl: "/partials/main/segments/segments.html",
    //       controller: function($scope){
    //       }
    //     },
    //     {
    //       name: '403',
    //       url: "/403",
    //       templateUrl: "/partials/error/403.html"
    //     },
    //     {
    //       name: '404',
    //       url: "/404",
    //       templateUrl: "/partials/error/404.html"
    //     },
    //     {
    //       name: '5xx',
    //       url: "/5xx",
    //       templateUrl: "/partials/error/5xx.html"
    //     },
    //     {
    //       name: '4xx',
    //       url: "/4xx",
    //       templateUrl: "/partials/error/4xx.html"
    //     }
    //   ];
    //   angular.forEach(states, function(value, key){
    //     var version = module.config().version ? module.config().version : "0.666";
    //     value.templateUrl = value.templateUrl + "?v=" +version ;
    //     $stateProvider.state(value);
    //   });
    // });
    return appModule;
});
