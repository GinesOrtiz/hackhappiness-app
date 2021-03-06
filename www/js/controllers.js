angular.module('app.controllers', [])

    .controller('MapCtrl', function ($scope) {
    })

    .controller('TrendingCtrl', function ($scope, $ionicModal, Happinesses, gpsSV) {
        $scope.happinesses = [];
        $scope.happinessRange = [1, 2, 3, 4, 5];
        $scope.happinessRangeMin = $scope.happinessRange[0];
        $scope.happinessRangeMax = $scope.happinessRange[$scope.happinessRange.length - 1];

        var happinesses = Happinesses.query(function () {
            $scope.happinesses = happinesses;
        });

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/addHappinessModal.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the modal to close it
        $scope.closeAddHappiness = function () {
            $scope.modal.hide();
        };

        // Open the modal
        $scope.openAddHappiness = function () {
            $scope.modal.show();
            gpsSV.getCurrentPosition(
                function onSuccess(location) {
                    console.log(location.coords.latitude, location.coords.longitude);
                    console.log('https://www.google.es/maps/place/' + location.coords.latitude + ',' + location.coords.longitude);
                },
                function onError(error) {
                    alert('Error, timeout superado');
                }
            );

        };
    })

    .controller('AboutCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
