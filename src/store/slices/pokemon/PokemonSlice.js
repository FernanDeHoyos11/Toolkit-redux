import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
     name: 'pokemon',
    initialState: {
        pages: 0,
        pokemons: [],
        isLoading: false,
     },
    reducers: {
        startLoadingPokemon: (state, /* action */ ) => {
            state.counter += 1;
     },
        setPokemon: (state, action) => {
            console.log(action)
        }
     

}
});

export const { startLoadingPokemon} = pokemonSlice.actions;