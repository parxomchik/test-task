    angular
        .module('myTestApp',[])
        .controller('testController',TestController)
        .factory('testFactory',TestFactory)
        .service('testService',TestService)
        .directive('testDirective',TestDirective)
        .constant('testConstant',{
            "url" : "factory.json"
        });


    TestController.$inject = ['testFactory','testService'];
    function TestController(factory,testService){
        var vm = this;

        vm.title = 'myTitle';
        factory.getData()
            .success(function(data){
                vm.factoryData = data.data;

            })
            .error(function(data){

            });
       vm.serviceData =  testService.getPrivate();


    }

    TestFactory.$inject = ['$http','testConstant'];
    function TestFactory($http,testConstant){
        return {
            getData: function () {
                return $http({
                    method: 'GET',
                    url: testConstant.url
                })
            }

        };
    }

    function TestService(){

        var PrivateData = "PrivateData";
        this.variable = "This is public";

        this.getPrivate = function() {
            return PrivateData;
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

