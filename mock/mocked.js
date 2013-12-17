'use strict';
define(['angular'], function(){
    angular.module('mocked',['ng'])
        .value('defaultJSON',{
            pop : {"key1" : "value1", "key2" : "value2"}
        });
});
