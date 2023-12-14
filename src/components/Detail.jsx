import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemon } from "../api/pokemonApi";
import Card from "./Card";

const Detail = () => {
  const { name } = useParams(); // get name from link
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const getAndSetPokemon = async (name) => {
    const selectedPokemon = await getPokemon(name);
    setPokemon(selectedPokemon);
    setLoading(false);
  };

  useEffect(() => {
    getAndSetPokemon(name);
  }, []);

  return (
    <div className="pokemon-detail">
      {!loading ? <Card pokemon={pokemon} /> : <p>Loading pokemon</p>}
      <div className="home-back">
        <Link to={"/"}>Back to Home 🏡</Link>
      </div>
    </div>
  );
};

export default Detail;
