var app = angular.module('gymTrackr', [
  'ngRoute',
  'ngMaterial',
  'gymTrackr.templates',
  'pascalprecht.translate',

  'gymTrackr.gymStatus'
  ]);

app.config([
  '$translateProvider', '$routeProvider',
  function($translateProvider, $routeProvider) {
    $translateProvider.preferredLanguage('it');
    $routeProvider.otherwise({redirectTo: '/gym-status'})
  }
]);

// All templates dropped here
angular.module('gymTrackr.templates', []);

// All global services dropped here
angular.module('gymTrackr.services', []);
