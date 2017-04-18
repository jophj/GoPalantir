angular.module('gymTrackr.gymDetails')

.component('gymSnapshot', {
  templateUrl: 'gym-snapshot/gym-snapshot.html',
  controller: GymSnapshotController,
  bindings: {
    gymSnapshot: '<'
  }
})

GymSnapshotController.$inject = ['GymLevelCalculator']
function GymSnapshotController(GymLevelCalculator) {
  const ctrl = this

  ctrl.teamColor = [
    'grey',
    'blue',
    'red',
    'yellow'
  ]

  ctrl.gymIcon = [
    '/images/noteam-1.svg',
    '/images/mystic-1.svg',
    '/images/valor-1.svg',
    '/images/instinct-1.svg',
  ]

  ctrl.$onInit = function() {
    ctrl.date = new Date(ctrl.gymSnapshot.gym.date).toLocaleDateString()
    ctrl.time = new Date(ctrl.gymSnapshot.gym.date).toLocaleTimeString()
    ctrl.gymSnapshotLevel = GymLevelCalculator.level(ctrl.gymSnapshot.gym.gym_points)
  }
}

