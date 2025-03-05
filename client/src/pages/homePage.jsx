import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import CuisineCard from "../components/Cuisinecard";


const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] =  useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('/home');
              if (!response.ok) {
                throw new Error('Network error');
              }
              const result = await response.json();
              setData(result);
            } catch (error) {
              console.error('Could not get data', error);
              setError(error.message);
            }
          };
          fetchData();
        }, []);
const cuisines = [
    { name: 'Mexican', image: ''},
    { name: 'Italian', image: ''},
];

    return (
    <div>
        <Navbar />
        <Searchbar />
        <h1>Welcome to GrubGuide</h1>
        {error && <p>Error: {error}</p>}
        <div className="cuisine-list">
            {cuisines.map((cuisine, index) => (
                <CuisineCard key={index} cuisine={cuisine} />
            ))}
        </div>
    </div>
    );
};

console.log('homePage is rendering');

export default Home;