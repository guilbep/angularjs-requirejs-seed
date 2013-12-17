define(['services/services-module'], function(servicesModule) {
    servicesModule.factory('GlobalErrorSrvc', function() {
        return {
            errorObj: {
                title: 'Error',
                type: 'warning',
                msg: undefined,
                active: !! this.msg
            },
            set: function(errorObj) {
                if ( !! errorObj) {
                    if ( !! errorObj.title) {
                        this.errorObj.title = errorObj.title;
                    }
                    if ( !! errorObj.type) {
                        this.errorObj.type = errorObj.type;
                    }
                    if ( !! errorObj.msg) {
                        this.errorObj.msg = errorObj.msg;
                    }
                }
            },
            setMsg: function(msg) {
                this.errorObj.msg = msg;
            },
            setTitle: function(title) {
                this.errorObj.title = title;
            },
            setType: function(type) {
                this.errorObj.type = type;
            },
            clear: function() {
                this.errorObj = {
                    type: 'warning'
                };
            }
        };
    });
});
