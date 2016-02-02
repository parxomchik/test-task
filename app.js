    angular
        .module('myTestApp',[])
        .controller('testController',TestController)
        .factory('testFactory',TestFactory)
        .directive('testDirective',TestDirective);


    function TestController(testFactory){
        var vm = this;

        vm.title = 'myTitle';
        testFactory.getData()
            .success(function(data){
                vm.factoryData = data.data;

            })
            .error(function(data){
            });
    }


    function TestFactory($http){
        return {
            getData: function () {
                return $http({
                    method: 'GET',
                    url: 'factory.json'
                })
            }

        };
    }


    function TestDirective(){
        var directive = {
            restrict: 'E',
            templateUrl: 'include.html',
            scope: {
                creationDate: '='
            }
        };
        return directive;
    }

