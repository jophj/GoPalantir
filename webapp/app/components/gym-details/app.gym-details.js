angular.module('gymTrackr.gymDetails', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gym-details/:id', {
    url: '/gym-details',
    template: '<gym-details-view layout="column" flex></gym-details-view>'
  })
}])

.component('gymDetailsView', {
  templateUrl: 'gym-details/gym-details-view.html',
  controller: GymDetailsViewController,
})

GymDetailsViewController.$inject = ['GymDetailsService']
function GymDetailsViewController(GymDetailsService) {
  let ctrl = this
  ctrl.gym = GymDetailsService.gym
}