import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getApiPokemon } from '../Helpers/getApiPokemon';
import "./selectitem.css"


export const SelectItem = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("");

    const navigate = useNavigate();

    const submitHandler = () => {
      navigate(`/Pokemon/${selectedPokemon}`);
  };

    const getImages = async() => {

      const newPokemon = await getApiPokemon();
      const filteredPokemon = newPokemon.map((p) => ({
        name: p.name,
        url: p.url,
      }))
      setPokemon(filteredPokemon);
      console.log(filteredPokemon);
    };
  
    useEffect(() => {
      getImages();
    }, []);

  return (
    <>
    <Form.Select 
    aria-label="Default select example"
    style={{ width: "250px", height: "40px" , fontSize: "10px"}}
    value={selectedPokemon}
    onChange={({ target }) => setSelectedPokemon(target.value)}
    >
      <option>Pokemons</option>
      {
        pokemon.map((pokemon, index) => {
            return (
                <option key={index}>{pokemon.name}</option>
            )
        })
      }
      
    </Form.Select>
    <Button variant="dark" className="btn" onClick={ submitHandler }>Go!</Button>
    </>
  );
}

