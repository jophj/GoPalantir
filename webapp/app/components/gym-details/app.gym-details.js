angular.module('gymTrackr.gymDetails', ['gymTrackr.services'])

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

GymDetailsViewController.$inject = ['GymDetailsService', '$routeParams']
function GymDetailsViewController(GymDetailsService, $routeParams) {
  let ctrl = this
  ctrl.gym = GymDetailsService.gym

  GymDetailsService
    .loadHistory($routeParams.id)
    .then(function(gymHistory) {ctrl.gymHistory = gymHistory})
    .catch(console.log)
}