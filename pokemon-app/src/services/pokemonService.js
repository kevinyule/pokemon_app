const API_BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = async (limit = 2) => {
  try {
    const details = [];

    for (let i = 1; i <= limit; i++) {
      const res = await fetch(`${API_BASE_URL}/pokemon/${i}`);
      const data = await res.json();
      details.push(data);
    }

    return details;
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
    throw error;
  }
};
