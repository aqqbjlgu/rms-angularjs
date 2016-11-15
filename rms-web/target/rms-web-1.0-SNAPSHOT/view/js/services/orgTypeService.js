//'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: #user/flatfull
 */

angular.module('app').service('orgTypeService', ['$http', '$q', function ($http, $q) {

    /**
     * Chain loads the given sources
     * @param srcs array, script or css
     * @returns {*} Promise that will be resolved once the sources has been loaded.
     */
    this.getAll = function () {
        var d = $q.defer();
        $http.get('http://localhost:8080/orgType/getAll.do').success(function (response) {
            d.resolve(response);
        }).error(function(){
            d.reject("error");
        });
        return d.promise;
    };
    this.save = function (orgType) {
        var d = $q.defer();
        $http.post('http://localhost:8080/orgType/add.do',orgType).success(function (response) {
            d.resolve(response);
        }).error(function(){
            d.reject("error");
        });
        return d.promise;
    };
    this.delete = function (ids) {
        var d = $q.defer();
        console.info(ids);
        $http.delete('http://localhost:8080/orgType/deleteAll.do',{
            params:{ids: ids}
        }).success(function (response) {
            d.resolve(response);
        }).error(function(){
            d.reject("error");
        });
        return d.promise;
    };

}]);