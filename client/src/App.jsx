import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
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
            <Route path="/results" element={<SearchResults />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/business/:id" element={<RestaurantDetails />} />
        </Routes>
        </>
    )
};

export default App;