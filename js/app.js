var codeAmApp = angular.module('codeAmApp', ['ngRoute', 'codeamApp.directives', 'codeamApp.services', 'pascalprecht.translate']);

codeAmApp.config(['$routeProvider', '$locationProvider', '$translateProvider', function($routeProvider, $locationProvider, $translateProvider){
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

    $translateProvider.translations('en', {
        'herois': 'Heroes from {{editora}}'
    }).translations('pt', {
        'herois': 'Heróis da {{editora}}'
    });

    $translateProvider.preferredLanguage('en');

}]);

codeAmApp.controller('HomeCtrl', ['$scope', function($scope) {
}]);

codeAmApp.controller('HeroisCtrl', ['$scope', 'codeAmAppFactory','$translate', function($scope, codeAmAppFactory, $translate) {

    $scope.creator = "DC";

    $scope.changeLang = function() {
        $translate.use('pt');
    };

    var codeAmCollection = new codeAmAppFactory();
    codeAmCollection.getHerois().then(function(response) {
        $scope.herois = codeAmCollection.herois;
    });

    $translate('herois').then(function(translatedText) {
        $scope.heroisText = translatedText;
    });
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
