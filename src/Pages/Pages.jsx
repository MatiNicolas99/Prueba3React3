import { Route, Routes } from "react-router-dom"
import { Home } from './Home';
import { InitPage } from "./InitPage";
import { Pokemon } from "./Pokemon";
import { PokemonSelection } from "./PokemonSelection";
 
export const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Pokemon/" element={<Pokemon />} />
        <Route path="/Pokemon/:name" element={<PokemonSelection />} />
    </Routes>
  )
}
