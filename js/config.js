define(['app'], function(app) {
    app.config(function($sceProvider) {
        // for ie7 support? use an IF IE with selectivzr
        $sceProvider.enabled(false);
    });

    app.config(["$locationProvider", "$routeProvider",
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
        }
    ]);

    app.config(["$httpProvider",
        function($httpProvider) {
            // Use x-www-form-urlencoded Content-Type
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        }
    ]);
    return app;
});
