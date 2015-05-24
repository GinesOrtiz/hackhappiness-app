angular.module('app.services', [])

    .factory('Happinesses', function ($resource) {
        return $resource('http://hackhappiness.herokuapp.com/happinesses/:id', {happinessId: '@id'});
    })

    .service('gpsSV', function () {
        this.getCurrentPosition = function (onSuccess, onError) {
            var options = {
                timeout: 15000, //miliseconds
                maximumAge: 180000 //allows the device to answer immediately with a cached position (until 3 minutes since last value)
            };
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        };
    });