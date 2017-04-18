angular
  .module('gymTrackr.gymDetails')
  .factory('GymDetailsService', GymDetailsService);

GymDetailsService.$inject = ['$http']
function GymDetailsService($http) {
  let service = {}
  service.gym = {"id":"OWVlZWZkNTZlMWY1NGM1NmFhOTY4ZTE1ODM0NDAwZWIuMTE=","name":"Church Holy Family","points":22075,"teamId":2,"date":"2017-04-17T08:21:11.965Z","lastModified":1492417215798,"pokemon":[{"num_upgrades":0,"move_1":230,"move_2":107,"additional_cp_multiplier":0,"iv_defense":14,"weight":28.81873321533203,"pokemon_id":134,"stamina_max":372,"cp_multiplier":0.6941436529159546,"height":0.927509069442749,"stamina":372,"pokemon_uid":14470015020172450000,"iv_attack":6,"trainer_name":"AxelPush","trainer_level":27,"cp":2300,"iv_stamina":8,"_id":"58f47ae140268f6cc6757ec3"},{"num_upgrades":11,"move_1":241,"move_2":22,"additional_cp_multiplier":0.07718189060688019,"iv_defense":11,"weight":120.7626724243164,"pokemon_id":112,"stamina_max":302,"cp_multiplier":0.5974000096321106,"height":1.7536969184875488,"stamina":302,"pokemon_uid":17124491130239070000,"iv_attack":10,"trainer_name":"Alicina2605","trainer_level":27,"cp":2327,"iv_stamina":14,"_id":"58f47ae140268f6cc6757ec2"},{"num_upgrades":9,"move_1":235,"move_2":30,"additional_cp_multiplier":0.03989700227975845,"iv_defense":15,"weight":27.888566970825195,"pokemon_id":196,"stamina_max":210,"cp_multiplier":0.7068842053413391,"height":0.8968143463134766,"stamina":210,"pokemon_uid":5913209965022008000,"iv_attack":6,"trainer_name":"Gabbuino","trainer_level":31,"cp":2556,"iv_stamina":11,"_id":"58f47ae140268f6cc6757ec1"},{"num_upgrades":11,"move_1":253,"move_2":107,"additional_cp_multiplier":0.07251615077257156,"iv_defense":6,"weight":288.1106872558594,"pokemon_id":130,"stamina_max":292,"cp_multiplier":0.6406529545783997,"height":6.887065887451172,"stamina":292,"pokemon_uid":17266744386619930000,"iv_attack":14,"trainer_name":"Zero1901","trainer_level":28,"cp":2604,"iv_stamina":15,"_id":"58f47ae140268f6cc6757ec0"},{"num_upgrades":1,"move_1":234,"move_2":31,"additional_cp_multiplier":0.006284897215664387,"iv_defense":11,"weight":542.9381713867188,"pokemon_id":143,"stamina_max":476,"cp_multiplier":0.7068842053413391,"height":2.4308674335479736,"stamina":476,"pokemon_uid":7348521785769552000,"iv_attack":11,"trainer_name":"facklea93","trainer_level":31,"cp":2652,"iv_stamina":15,"_id":"58f47ae140268f6cc6757ebf"},{"num_upgrades":25,"move_1":253,"move_2":107,"additional_cp_multiplier":0.16798649728298187,"iv_defense":15,"weight":338.5016174316406,"pokemon_id":130,"stamina_max":298,"cp_multiplier":0.5667545199394226,"height":7.702584266662598,"stamina":298,"pokemon_uid":14063671738000558000,"iv_attack":15,"trainer_name":"tuamammaaah","trainer_level":32,"cp":2829,"iv_stamina":14,"_id":"58f47ae140268f6cc6757ebe"},{"num_upgrades":15,"move_1":253,"move_2":279,"additional_cp_multiplier":0.08634994179010391,"iv_defense":15,"weight":299.24700927734375,"pokemon_id":130,"stamina_max":296,"cp_multiplier":0.6544356346130371,"height":6.588422775268555,"stamina":296,"pokemon_uid":13369734756593973000,"iv_attack":14,"trainer_name":"ChanseyBillups1","trainer_level":31,"cp":2843,"iv_stamina":11,"_id":"58f47ae140268f6cc6757ebd"}],"latitude":43.873713,"longitude":11.117311,"imageUrl":"http://lh6.ggpht.com/vHLRF2K_RXlGH_irub31NzQowXjE5NlObGU2BVSqGJODVaJzbORYCGc3R_MgguD3Z6jArDn_vHmKh7S2LwnvSM9Ygi8WLRq8-P1yrb6qGL63jS3y","activityIntensity":325,"$$hashKey":"object:6","level":7};
  service.loadHistory = loadHistory
  return service

  function loadHistory(gymId) {
    return $http.get('http://localhost:3009/api/gym-history/' + gymId).then(handleSuccess)
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
