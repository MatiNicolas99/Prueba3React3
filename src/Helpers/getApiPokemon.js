

export const getApiPokemon = async() => {

    try {
        const api_fetch = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20000`);
        const {results} = await api_fetch.json();
        console.log(results);
        return results;    

    } catch (error) {
        console.log(error)
    }
}
