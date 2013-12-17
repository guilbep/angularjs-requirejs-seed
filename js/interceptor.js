define(['app'], function(app) {
    app.config(["$httpProvider",
        function($httpProvider) {
            $httpProvider.interceptors.push(function($q, $rootScope, $location, GlobalErrorSrvc) {
                return {
                    'responseError': function(rejection) {
                        var title = "Error " + rejection.status;
                        var msg = "unknown";
                        GlobalErrorSrvc.clear();
                        if (rejection.status >= 400 && rejection.status < 500) {
                            GlobalErrorSrvc.setType("warning");
                            switch (rejection.status) {
                                case 401:
                                    title = "";
                                    msg = "invalid credentials";
                                    $rootScope.$broadcast('event:login-required');
                                    break;
                                case 403:
                                    $location.path("/403");
                                    break;
                                case 404:
                                    $location.path("/404");
                                    break;
                                case 423:
                                    title = "";
                                    msg = "";
                                    rejection.data = "";
                                    $rootScope.$broadcast('event:captcha-required', rejection.data);
                                    break;
                                default:
                                    msg = "";
                                    // fail silently || and overiding nginx 4xx;
                                    rejection.data = "";
                                    $location.path("/4xx");
                                    break;
                            }
                        }
                        if (rejection.status >= 500 || rejection.status === 0) {
                            GlobalErrorSrvc.setType("danger");
                            $location.path("/5xx");
                            switch (rejection.status) {
                                case 500:
                                    msg = "Server error";
                                    break;
                                case 502:
                                    msg = "Oups, something went wrong.";
                                    break;
                                case 0:
                                    msg = "Server did not send any response";
                                    break;
                            }
                        }


                        GlobalErrorSrvc.setTitle(title);
                        if ( !! rejection.data && !! rejection.data.error && !! rejection.data.error[0]) {
                            msg = rejection.data.error[0];
                        }
                        GlobalErrorSrvc.setMsg(msg);
                        return $q.reject(rejection);

                    }
                };
            });
        }
    ]);
    return app;
});
