(function() {
    'use strict';

    var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        const MESSAGE_SUCCESS = 'Enjoy!';
        const MESSAGE_EMPTY = 'Please enter data first';
        const MESSAGE_ERROR = 'Too much!';

        $scope.content = '';
        $scope.status = 'none';
        $scope.message = '';

        $scope.count = function() {
            if ($scope.content == '') {
                $scope.status = 'error';
                return $scope.message = MESSAGE_EMPTY;
            }

            var filtered = filterContent(parseContent());

            if (filtered.length <= 3) {
                $scope.message = MESSAGE_SUCCESS;
            } else {
                $scope.message = MESSAGE_ERROR;
            }

            $scope.status = 'success';
        }

        function parseContent() {
            return $scope.content.split(/[ ,]+/);
        }

        function filterContent(content) {
            if (!Array.isArray(content)) return false;

            var array = [];

            for (let value of content) {
              if (value.trim().length > 0) {
                  array.push(value);
              }
            }

            return array;
        }
    }

})();
