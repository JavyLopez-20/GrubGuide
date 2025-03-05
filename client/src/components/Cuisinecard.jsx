import React from "react";

const CuisineCard = ({ cuisine }) => {
    <div className="cuisine-card">
        <img src={cuisine.image} alt={cuisine.name} />
        <h3>{cuisine.name}</h3>
    </div>
};

export default CuisineCard;