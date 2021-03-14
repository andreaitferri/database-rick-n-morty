import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

function Grid({ charatchers }){
    return (
       <div className="container grid">
           {charatchers.map((character) => (
               <Card key={character.id} character={character} />
           ))}
       </div>
    );
}

Grid.protoType = {
    charatchers: PropTypes.array.isRequired,
};




export default Grid;        
