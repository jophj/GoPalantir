angular.module('gymTrackr.gymDetails')

.component('deployedPokemon', {
  templateUrl: 'deployed-pokemon/deployed-pokemon.html',
  controller: DeployedPokemonController,
  bindings: {
    pokemon: '<'
  }
})

DeployedPokemonController.$inject = ['Moves']
function DeployedPokemonController(Moves) {
  this.moves = Moves
}
