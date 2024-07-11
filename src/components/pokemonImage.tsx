import { DetailPokemon } from "../interface/pokemonInterface"
import { Box } from "@mui/system"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"

interface PokemonImageProps {
  pokemon: DetailPokemon
}

const PokemonImage = ({pokemon}: PokemonImageProps) => {

  return (
    <Card sx={{backgroundColor: pokemon.color}}>
      <CardMedia 
          component="img"
          sx={{height: 100, objectFit: "contain"}}
          image={pokemon.sprites.other["official-artwork"].front_default}
          title={pokemon.name}
        />
      <CardContent>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography sx={{textTransform: "capitalize"}}>
            {pokemon.name}
          </Typography>
          <Typography sx={{textTransform: "capitalize"}}>
            #{pokemon.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PokemonImage;