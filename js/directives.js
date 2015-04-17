var directives = angular.module('codeamApp.directives', []);

directives.directive('diretivaHeroi', function() {
    return {
        scope: {},
        link: function(scope, element, attrs) {
            element.css('color', 'blue');
        }
    }
});

directives.directive('diretivaVilao', function() {
    return {
        scope: {},
        link: function(scope, element, attrs) {
            element.css('color', 'red');
        }
    }
});

directives.directive('heroiInfo', function() {
    return {
        scope: {
            city: '=',
            color: '=',
            aparicoes: '='
        },
        templateUrl: 'heroi_info.html',
        link: function(scope, element, attrs) {
        }
    }
});