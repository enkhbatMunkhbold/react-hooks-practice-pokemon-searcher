import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const { name, hp, sprites } = pokemon
  const [ frontSide, setFrontSide ] = useState(true)

  const displaySide = () => setFrontSide(prevSide => !prevSide)
  const currentSide = frontSide ? sprites.front : sprites.back

  return (
    <Card>
      <div onClick={displaySide}>
        <div className="image">
          <img src={currentSide} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
