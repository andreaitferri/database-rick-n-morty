import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

import "./Grid.css";

function Grid({ charatchers, isLoading}){
    return (
       <div className="container grid">
           {charatchers.map((character) => (
               <Card key={character.id} character={character} />
           ))}
           {isLoading && (
                <div className="loading">
                     <p>loading...</p>
                </div>
           )}
       </div>
    );
}

Grid.protoType = {
    charatchers: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};




export default Grid;        
