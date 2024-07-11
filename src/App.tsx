import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import PokemonDetil from "./components/pokemonDetil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <PokemonDetil/>
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
