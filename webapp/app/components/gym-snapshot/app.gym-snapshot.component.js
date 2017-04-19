angular.module('gymTrackr.gymDetails')

.component('gymSnapshot', {
  templateUrl: 'gym-snapshot/gym-snapshot.component.html',
  controller: GymSnapshotController,
  bindings: {
    gymSnapshot: '<',
    scroll: '<'
  }
})

GymSnapshotController.$inject = ['GymLevelCalculator', '$anchorScroll', '$timeout']
function GymSnapshotController(GymLevelCalculator, $anchorScroll, $timeout) {
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
    if (ctrl.scroll) {
      $timeout(function(){$anchorScroll(ctrl.gymSnapshot.date)})
    }
  }
}

