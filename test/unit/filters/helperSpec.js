define([
    'angularMocks',
    'filters/helper',
    'mock/mocked'
], function(angularMocks, filterModule, mocked) {

    'use strict';
    describe('values Filter',
        function() {
            beforeEach(function() {
                module('app.filters', 'mocked');
            });

            it('should return a empty list if input Array of Object',
                inject(function(valuesFilter, defaultJSON) {
                    var expectedResult = [];
                    var mockedJSON = [{
                        label: 'Label1',
                        value: 4346
                    }, {
                        label: 'Label2',
                        value: 153
                    }, {
                        label: 'Label3',
                        value: 6
                    }];
                    expect(valuesFilter(mockedJSON))
                        .toEqual(expectedResult);
                })
            );
            it('should return a empty list if undefined input',
                inject(function(valuesFilter, defaultJSON) {
                    var expectedResult = [];
                    var mockedJSON = undefined;
                    expect(valuesFilter(mockedJSON))
                        .toEqual(expectedResult);
                })
            );
            it('should return a list of the value of an object',
                inject(function(valuesFilter, defaultJSON) {
                    var expectedResult = ['Label1', 4346];
                    var mockedJSON = {
                        label: 'Label1',
                        value: 4346
                    };
                    expect(valuesFilter(mockedJSON))
                        .toEqual(expectedResult);
                })
            );
            it('should ignore $ key in the object',
                inject(function(valuesFilter, defaultJSON) {
                    var expectedResult = ['Label1', 4346];
                    var mockedJSON = {
                        label: 'Label1',
                        value: 4346,
                        "$dollarkey": "DollarValue"
                    };
                    expect(valuesFilter(mockedJSON))
                        .toEqual(expectedResult);
                })
            );
        });
});
