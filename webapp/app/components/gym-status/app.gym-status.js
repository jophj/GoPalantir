angular.module('gymTrackr.gymStatus', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gym-status', {
    url: '/gym-status',
    template: '<gym-status-view layout="column" flex></gym-status-view>'
  })
}])

.component('gymStatusView', {
  templateUrl: 'gym-status/gym-status-view.html',
  controller: GymStatusViewController,
})

.component('gymStatus', {
  templateUrl: 'gym-status/gym-status.component.html',
  controller: GymStatusComponentController,
  bindings: {
    gym: '='
  }
})

GymStatusViewController.$inject = ['GymStatusService', '$scope'];
function GymStatusViewController(GymStatusService, $scope) {
  var ctrl = this
  GymStatusService
    .getAll()
    .then(function(gymsStatus) {$scope.gymsStatus = gymsStatus})
    .catch(console.log)
}

function GymStatusComponentController() {
  var ctrl = this
  ctrl.gymIcon = [
    '',
    'images/mystic-1.svg',
    'images/valor-1.svg',
    'images/mystic-1.svg'
  ]
}
