angular
  .module('gymTrackr.gymDetails')
  .factory('GymDetailsService', GymDetailsService);

GymDetailsService.$inject = ['$http', 'API_SERVER_LOCATION']
function GymDetailsService($http, API_SERVER_LOCATION) {
  let service = {}
  service.loadHistory = loadHistory
  return service

  function loadHistory(gymId) {
    return $http.get('/api/gym-history/' + gymId).then(handleSuccess)
  }

  function handleSuccess(res) {
    return res.data;
  }

  function handleError(error) {
    return function () {
      return { success: false, message: error };
    };
  }
}
