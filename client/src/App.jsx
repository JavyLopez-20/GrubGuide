import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import SearchResults from "./pages/searchResultsPage";
import UserProfile from "./pages/userPage";
import RestaurantDetails from "./pages/restaurantDetailsPage";
import Navbar from "./components/Navbar";

const App = () => {
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        </Routes>
        </>
    )
};

export default App;