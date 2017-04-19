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

  ctrl.$onInit = function() {
    ctrl.date = new Date(ctrl.gymSnapshot.date).toLocaleDateString()
    ctrl.time = new Date(ctrl.gymSnapshot.date).toLocaleTimeString()
    ctrl.gymSnapshotLevel = GymLevelCalculator.level(ctrl.gymSnapshot.points)
  }
}

