import React from 'react'
import usePokemons from '../hooks/usePokemons';
import PokemonList from '../components/pokemonList';
import { IndexedType } from '../interface/pokemonInterface';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const HomePage = () => {
    const { 
        pokemons,
        hasMorePokemon,
        fetchNextPage,
        pokemonTypes,
        setSelectedType,
        selectedType, 
        setPokemons,
    } = usePokemons();

    const handleSelectType = (type: IndexedType | null) => {
        if (type) {
          setSelectedType(type);
        } else {
          setPokemons([]);
          setSelectedType(null);
        }
    };

    const imageStyle: React.CSSProperties = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '15px',
      width: '50%'
    };
  
    const containerStyle: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    
      return (
        <Container>
          <div style={containerStyle}>
            <img src="/hero-pokedex.png" alt="hero-image" style={imageStyle} />
          </div>
          <Grid container spacing={2} mt={1}>
            <Grid
              container
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {pokemonTypes.map((type) => (
                <Button
                  variant="contained"
                  sx={{
                    "&.MuiButton-contained": {
                      background: type.color,
                    },
                    m: 1,
                  }}
                  onClick={() => handleSelectType(type)}
                >
                  {type.name}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  m: 1,
                }}
                onClick={() => handleSelectType(null)}
              >
                ALL
              </Button>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
            <PokemonList pokemons = { pokemons }></PokemonList>
            {hasMorePokemon ? (
              <Button 
                variant="contained" 
                onClick={fetchNextPage}
                style={{ marginTop: '20px', display:"flex" }}
                >
                See More
              </Button>
            ) : null}
            </Grid>
          </Grid>
        </Container>
      );
};
    
export default HomePage;