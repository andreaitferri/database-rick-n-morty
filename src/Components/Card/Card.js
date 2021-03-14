import React from "react";
import PropTypes from "prop-types";
import "./Card.css";


function Card({ character }){
    return (
       <div className="card">
           <img src={character.image} alt={character.name} />
           <div className="card-info">
               <p className="card-info__name">
                   <span>Name:</span>
                   {character.name}
               </p>

               <p lassName="card-info__generics"> 
                    {character.species} <span>from</span>  {character.location.name}
               </p>
           </div>
       </div>
    );
}

Card.prototype = {
    character: PropTypes.object.isRequired,
};

export default Card;
