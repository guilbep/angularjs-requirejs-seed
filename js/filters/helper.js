define(['filters/filters-module'], function(module) {
    module.filter('values', [

        function() {
            return function(input) {
                var vals = [];
                angular.forEach(input, function(value, key) {
                    if ( !! key.indexOf && key.indexOf('$') !== 0) {
                        vals.push(value);
                    }
                });

                if (vals.length === 1) {
                    return vals[0];
                }
                return vals;
            };
        }
    ]);
});
