import CuisineCard from "../components/Cuisinecard";
import React from "react";

const Home = () => {
    const cuisines = [
        { name: 'Mexican', image: '' },
        { name: 'Italian', image: '' },
      ]
  return (
    <div>
      <h1>Welcome to GrubGuide</h1>
      <div className="cuisine-list">
        {cuisines.map((cuisine, index) => (
          <CuisineCard key={index} cuisine={cuisine} />
        ))}
      </div>
    </div>
  );
};

export default Home;