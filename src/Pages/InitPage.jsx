import { SelectItem } from "../Components/SelectItem"
import "./home.css"

export const InitPage = () => {
  return (
    <div className="pokemonItems">
      <h1>Select your pokemon</h1>
      <SelectItem/>
      <img src="https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-pokemon-25.gif" alt="" />
    </div>
  )
}
