angular
  .module('gymTrackr')
  .factory('GymStatusService', GymStatusService);

GymStatusService.$inject = ['$http']
function GymStatusService($http) {
  let service = {};
  service.getAll = getAll;
  return service;

  function getAll() {
    return $http.get('http://localhost:3009/api/gym-status').then(handleSuccess)
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