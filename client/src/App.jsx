import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import SearchResults from "./pages/searchResultsPage";
import UserProfile from "./pages/userPage";
import RestaurantDetails from "./pages/restaurantDetailsPage";
import LocationPage from "./pages/locationInputPage";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/Auth";

const App = () => {
    return(
        <AuthProvider>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/:id" element={<RestaurantDetails />} />
            <Route path="/cuisine/:cuisineName" element={<LocationPage />} />
        </Routes>
        </AuthProvider>
    )
};

export default App;