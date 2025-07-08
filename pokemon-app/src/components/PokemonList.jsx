import React, { useEffect, useState } from "react";
import { fetchPokemons } from "../services/pokemonService";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPokemons = async () => {
      try {
        const data = await fetchPokemons(6); // Puedes cambiar el número aquí
        setPokemons(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarPokemons();
  }, []);

  if (loading) return <p className="text-center mt-5">Cargando pokemones...</p>;

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Lista de Pokemones</h2>
      <div className="row justify-content-center g-4">
        {pokemons.map((pokemon) => (
          <div className="col-md-4" key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
