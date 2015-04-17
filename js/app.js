var codeAmApp = angular.module('codeAmApp', ['ngRoute', 'codeamApp.directives', 'codeamApp.services']);

codeAmApp.config(['$routeProvider', '$locationProvider', 'finalHeroisProvider', function($routeProvider, $locationProvider, finalHeroisProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/herois', {
            templateUrl: '/partials/herois.html',
            controller: 'HeroisCtrl'
        })
        .when('/viloes', {
            templateUrl: '/partials/viloes.html',
            controller: 'ViloesCtrl'
        })
        .when('/herois/:heroiID', {
            templateUrl: '/partials/heroi.html',
            controller: 'HeroiCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

    finalHeroisProvider.setSaudacao('Good morning! ');

}]);

codeAmApp.controller('HomeCtrl', ['$scope','heroiService', 'heroiFactory', 'finalHerois', function($scope, heroiService, heroiFactory, finalHerois) {
    var myHeroi = new heroiService.fazerSaucadao('batman sevice');
    heroiFactory.fazerSaudacao('batman factory');
    finalHerois.fazerSaudacao();

}]);

codeAmApp.controller('HeroisCtrl', ['$scope', 'codeAmAppFactory', function($scope, codeAmAppFactory) {
    var codeAmCollection = new codeAmAppFactory();
    codeAmCollection.getHerois().then(function(response) {
        $scope.herois = codeAmCollection.herois;
    })
}]);

codeAmApp.controller('ViloesCtrl', ['$scope', 'codeAmAppFactory', function($scope, codeAmAppFactory) {
    var codeAmCollection = new codeAmAppFactory();
    codeAmCollection.getViloes().then(function(response) {
        $scope.viloes = codeAmCollection.viloes;
    })
}]);

codeAmApp.controller('HeroiCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.heroi_slug = $routeParams.heroiID;

    if($scope.heroi_slug == 'batman') {
        $scope.nome = 'Batman';
        $scope.city = 'Gothan';
        $scope.color = 'Black';
        $scope.aparicoes = '200354';
        $scope.primeira_aparicao = '20222224'
    } else if($scope.heroi_slug == 'super-homem') {
        $scope.nome = 'Super Homem';
        $scope.city = 'Metropolis';
        $scope.color = 'Azul';
        $scope.aparicoes = '20013154';
        $scope.primeira_aparicao = '121115231234'

    } else if($scope.heroi_slug == 'homem-aranha') {
        $scope.nome = 'Homem Aranha';
        $scope.city = 'Nova York';
        $scope.color = 'Vermelho';
        $scope.aparicoes = '24';
        $scope.primeira_aparicao = '234923423'
    } else {
        $scope.city = 'Indefinido';
        $scope.color = 'Indefinido';
    }

}]);
