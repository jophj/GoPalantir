angular
.module('gymTrackr.gymStatus', [
  'gymTrackr.services',
  'gymTrackr.gymDetails'
])

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
    gym: '<'
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

GymStatusComponentController.$inject = ['$location', 'GymLevelCalculator', 'GymDetailsService']
function GymStatusComponentController($location, GymLevelCalculator, GymDetailsService) {
  var ctrl = this
  ctrl.gymIcon = [
    'images/noteam-1.svg',
    'images/mystic-1.svg',
    'images/valor-1.svg',
    'images/instinct-1.svg'
  ]

  ctrl.$onInit = function() {
    if (ctrl.gym) ctrl.gym.level = GymLevelCalculator.level(ctrl.gym.points)
  }

  ctrl.onClick = function() {
    GymDetailsService.gym = ctrl.gym
    $location.path('/gym-details/' + ctrl.gym.id)
  }
}
