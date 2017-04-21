angular.module('gymTrackr.gymDetails')

.component('gymSnapshot', {
  templateUrl: 'gym-snapshot/gym-snapshot.component.html',
  controller: GymSnapshotController,
  bindings: {
    gymSnapshot: '<',
    scroll: '<'
  }
})

GymSnapshotController.$inject = ['GymLevelCalculator', '$anchorScroll', '$timeout', '$location', '$routeParams']
function GymSnapshotController(GymLevelCalculator, $anchorScroll, $timeout, $location, $routeParams) {
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

    ctrl.absUrl = $location.absUrl()
    if ($routeParams.eventId) {
      ctrl.absUrl = ctrl.absUrl.substring(0, ctrl.absUrl.lastIndexOf('/'))
    }

    ctrl.absUrl += '/' + ctrl.gymSnapshot.date
  }
}

