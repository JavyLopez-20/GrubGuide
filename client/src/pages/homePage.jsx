import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CuisineCard from "../components/Cuisinecard";

const Home = () => {
const cuisines = [
    { name: 'Mexican', image: ''},
    { name: 'Italian', image: ''},
];

    <div>
        <Navbar />
        <Searchbar />
        <div className="cuisine-list">
            {cuisines.map((cuisine, index) => {
                <CuisineCard key={index} cuisine={cuisine} />
            })}
        </div>
    </div>
};

export default Home;