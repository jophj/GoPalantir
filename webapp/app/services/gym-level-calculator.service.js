angular
  .module('gymTrackr.services')
  .factory('GymLevelCalculator', GymLevelCalculatorService);

function GymLevelCalculatorService($http) {
  const gymLevels = [0, 2000, 4000, 8000, 12000, 16000, 20000, 30000, 40000, 50000]

var service = {}
  service.level = level
  return service
  function level(points) {
    for (var i = gymLevels.length - 1; i > 0; i--) {
      if (points >= gymLevels[i]) {
        return i + 1
      }
    }
  }

}