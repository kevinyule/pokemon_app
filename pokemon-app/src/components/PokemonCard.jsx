import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="card text-center shadow-sm" style={{ width: "18rem" }}>
      <img
        src={pokemon.sprites.front_default}
        className="card-img-top"
        alt={pokemon.name}
        style={{ height: "150px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">#{pokemon.id} {pokemon.name}</h5>
        <p className="card-text">
          <strong>Tipo(s):</strong>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;
