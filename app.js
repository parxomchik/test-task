    angular
        .module('myTestApp',[])
        .controller('testController',TestController)
        .factory('testFactory',TestFactory)
        .directive('testDirective',TestDirective);

    TestController.$inject = ['testFactory'];
    function TestController(factory){
        var vm = this;

        vm.title = 'myTitle';
        factory.getData()
            .success(function(data){
                vm.factoryData = data.data;

            })
            .error(function(data){
            });
    }

    TestFactory.$inject = ['$http'];
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

