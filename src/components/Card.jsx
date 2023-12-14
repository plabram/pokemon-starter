import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAscendant } from "../api/pokemonApi";
import { capitaliseFirstLetter } from "../utils/utils";

const Card = ({ pokemon }) => {
  const { id, image, name, types } = pokemon;
  const [ascendant, setAscendant] = useState();
  const [loading, setLoading] = useState(true);

  const getAndSetAscendant = async (name) => {
    const ascendant = await getAscendant(name);
    setAscendant(ascendant);
    setLoading(false);
  };

  useEffect(() => {
    getAndSetAscendant(name);
  }, []);

  return (
    <Link to={`/${name}`}>
      <div className="card-container">
        <div className="image-container">
          <span className="id">ID / {id}</span>
          <img src={image} alt={name} />
        </div>
        <div className="text-container">
          <h1>{capitaliseFirstLetter(name)}</h1>
          {types.map((type) => (
            <span className="type" key={type.slot}>
              {type.type.name.toUpperCase()}
            </span>
          ))}
          {ascendant && !loading ? (
            <div className="evolved">
              <p>Evoluciona de:</p>
              <p className="ascendant">{ascendant}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default Card;
