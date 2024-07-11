import React from 'react';
import { IndexedPokemon, ListPokemon } from '../interface/pokemonInterface';
import PokemonCard from '../components/pokemonCard';
import Grid from '@mui/material/Grid';

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <Grid container spacing={2}>
      {pokemons.length > 0
        ? pokemons.map((p) => {
            return (
              <Grid item xs={4}>
                <PokemonCard key={p.name} pokemon={p} />
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default PokemonList;