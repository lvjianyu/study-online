/**
 * Created by Andy.Lv on 2014/11/12.
 */

(function (angular) {
    'use strict';

    angular.module('platform').factory('dialogService', ['$modal', '$templateCache', function ($modal, $templateCache) {
        return {
            show: function (options) {
                var defaultOptions = {};
                angular.copy(options, defaultOptions);
                defaultOptions.template = $templateCache.get(options.template);
                var modalInstance = $modal.open(defaultOptions);

                return modalInstance.result;
            }
        };
    }]);
    //.controller('dialogController', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    //	$scope.ok = function () {
    //		$modalInstance.close({type: true, data: $scope.data});
    //	};
    //	$scope.cancel = function () {
    //		$modalInstance.dismiss({type: false});
    //	};
    //}]);
})(angular);
