angular.module('gymTrackr.gymDetails')

.component('deployedPokemon', {
  templateUrl: 'deployed-pokemon/deployed-pokemon.html',
  bindings: {
    pokemon: '<'
  }
})
