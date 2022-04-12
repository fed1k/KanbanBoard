import getPoke from './pokeApi.js';

// This function filter the Api information
const getPokeDesc = async (pokeId) => {
  const poke = await getPoke(pokeId);
  const pokemon = await {
    image: poke.sprites.front_default,
    name: poke.name,
    type: poke.types[0].type.name,
    abilities: poke.abilities[0].ability.name,
    height: `${poke.height / 10} m`,
    weight: `${poke.weight / 10} kg`,
  };
  return pokemon;
};

export default getPokeDesc;
