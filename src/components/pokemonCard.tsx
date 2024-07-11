import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { IndexedPokemon, ListPokemon } from "../interface/pokemonInterface";
  import { getColorFromUrl } from "../utils/color";
  
  interface PokemonCardProps {
    pokemon: ListPokemon;
  }
  
  const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const [pokemonColor, setPokemonColor] = useState<string | null>(null);
  
    const getPokemonColor = async () => {
      const color = await getColorFromUrl(pokemon.image);
      if (color) setPokemonColor(color);
    };
  
    useEffect(() => {
      getPokemonColor();
    }, []);
  
    return (
      <Card sx={{ backgroundColor: pokemonColor }}>
        <CardActionArea>
          <Link to={`pokemon/${pokemon.name}`} style={{textDecoration:"none", color: "white"}}>
          <CardMedia
            component="img"
            image={pokemon.image}
            title={pokemon.name}
            sx={{ height: 100, objectFit: "contain", marginTop: '15px'}}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                #{pokemon.pokedexNumber}
              </Typography>
            </Box>
          </CardContent>  
          </Link>
        </CardActionArea>
      </Card>
    );
  };
  
  export default PokemonCard;