import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonselection.css"

export const PokemonSelection = () => {

    const [pokemon, setPokemon] = useState([])
    const params = useParams();
  
    const getPokemonSearch = async(name) => {
  
      try {
        const api_fetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        const data = await api_fetch.json();
        console.log(data);
        const pokeData = {
  
          name: data.name,
          type: data.types[0].type.name,
          img: data.sprites.other.dream_world.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          special_attack: data.stats[3].base_stat,
          special_defense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        
        };
  
        setPokemon(pokeData);
        console.log(pokeData)
      } catch (error) {
        console.log(error)
      };
      
    };
      useEffect(() => {
        getPokemonSearch(params.name)
      }, [params.name]);

  return (
    <div className="profile-card"><img src={pokemon.img} className="img img-responsive"/>
    <div className="profile-name">{pokemon.name}
        <br/><p className="profile-name-p">{pokemon.type}</p></div>
    
    <div className="profile-overview">
        <div className="profile-overview">
            <div className="profile-items">
                <div className="col-xs-4">
                    <h3>{pokemon.hp}</h3>
                    <p>HP</p>
                </div>
                <div className="col-xs-4">
                    <h3>{pokemon.attack}</h3>
                    <p>Attack</p>
                </div>
                <div className="col-xs-4">
                    <h3>{pokemon.defense}</h3>
                    <p>Defense</p>
                </div>
                <div className="col-xs-4">
                    <h3>{pokemon.special_attack}</h3>
                    <p>S.Attack</p>
                </div>
                <div className="col-xs-4">
                    <h3>{pokemon.special_defense}</h3>
                    <p>S.Defense</p>
                </div>
                <div className="col-xs-4">
                    <h3>{pokemon.speed}</h3>
                    <p>Speed</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
