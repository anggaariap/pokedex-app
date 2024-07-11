import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import usePokemon from '../hooks/usePokemon'
import PokemonImage from './pokemonImage'
import PokemonDesc from './pokemonDesc'
import PokemonStat from './pokemonStat'

const PokemonDetil = () => {
  let {pokemonName} = useParams()

  const {pokemon, isLoading} = usePokemon({pokemonName})

  return (
    <Container>
      <Grid container flexDirection="column" alignItems="center" justifyContent="center" spacing={2} mt={1}>
        <Grid item container alignItems="center" justifyContent="center" spacing={2}>
          {isLoading ? (
            <Box>Loading...</Box>
          ) : pokemon ? (
            <>
              <Grid item xs={12} sm={6}>
                <PokemonImage pokemon={pokemon}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <PokemonDesc pokemon={pokemon}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <PokemonStat pokemon={pokemon}/>
              </Grid>
            </>
          ) : (
            <Box>Not found</Box>
          )}
        </Grid>
        <Grid item>
          <Button component={Link} to={"/"} variant="contained">
            Back to Pokemon List
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PokemonDetil;