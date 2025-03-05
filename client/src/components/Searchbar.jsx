import { query } from "express";
import { set } from "mongoose";
import React, { useState } from "react";

const Searchbar = () => {
   const [query, setQuery] = useState('');

   const handleSearch = async () => {
    const response = await fetch(`https://api.yelp.com/v3/business/search?term=${query}&location=your_location`,
        {
            headers: {
                Authorization: `Bearer ${process.env.YELP_API_KEY}`,
            },
        })
    const data = await response.json();
    console.log(data);
    };

   return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for cuisines or restaurants"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;