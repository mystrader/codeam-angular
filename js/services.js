var services = angular.module('codeamApp.services', []);


//sevice exemplo.
/* a funcao sera INICIALIZADA */
services.service('heroiService', function() {
    return {
        fazerSaucadao: function(name) {
            console.log('eu sou o '+name);
        }
        //mais funcoes...
    }
});

//factory exemplo.
/* a funcao sera INVOCADA */
services.factory('heroiFactory', [function() {
    var saudacao = 'ola';

    function fazerSaudacao(name) {
        console.log(saudacao + ', eu sou o ' + name);
    }

    //mais funcoes...

    return {
        fazerSaudacao: fazerSaudacao
    }
}]);

//provider example.
//*configuravel na fase de configuracao!!!
services.provider('finalHerois', function finalHeroisProvider() {

    var saudacao = "boa noite";

    this.setSaudacao = function(value) {
        this.saudacao = value;
    };

    function Heroi(name, configSaudacao) {
        this.fazerSaudacao = function() {
            console.log(configSaudacao + ', eu sou o '+name);
        }
    }

    this.$get = function() {
        return new Heroi('batman provider', this.saudacao);
    }
});



services.factory('codeAmAppFactory', ['$http', function($http) {
    var myCollection = function() {
        var herois = [];
        var viloes = [];
    };

    myCollection.prototype.getHerois = function() {
        var self = this;

        return $http.get('/herois.json').then(
            function (response) {
                self.herois = response.data.herois;
                return response;

            }, function (response) {
                console.log('problema');
                return response;
            }
        );
    };

    myCollection.prototype.getViloes = function() {
        var self = this;

        return $http.get('/viloes.json').then(
            function (response) {
                self.viloes = response.data.viloes;
                return response;

            }, function (response) {
                console.log('problema');
                return response;
            }
        );
    };

    return myCollection;
}]);