import { startLoadingPokemon } from "./PokemonSlice"


export const getPokemons = () => {
    return (dispatch, getState) => {
        dispatch(startLoadingPokemon())
    }
}
