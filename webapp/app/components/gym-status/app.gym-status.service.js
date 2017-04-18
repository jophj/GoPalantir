angular
  .module('gymTrackr.gymStatus')
  .factory('GymStatusService', GymStatusService);

GymStatusService.$inject = ['$http', 'API_SERVER_LOCATION']
function GymStatusService($http, API_SERVER_LOCATION) {
  let service = {};
  service.getAll = getAll;
  return service;

  function getAll() {
    return $http.get('api/gym-status').then(handleSuccess)
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