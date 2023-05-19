import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./context/pokemonProvider";
import { MainLayouts } from "./layouts/MainLayouts";
import { Pokemons } from "./page/pokemons";



function App() {
  return (
    <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<MainLayouts/>}>
              <Route index element={<Pokemons />}/>
            </Route>
          </Routes>
        </PokemonProvider>
    </BrowserRouter>
  )
}

export default App
