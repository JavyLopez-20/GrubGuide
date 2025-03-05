import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import SearchResults from "./pages/searchResultsPage";
import UserProfile from "./pages/userPage";
import RestaurantDetails from "./pages/restaurantDetailsPage";
import Navbar from "./components/Navbar";

console.log('App is rendering')

const App = () => {
    return(
        <Router>
            <Navbar />
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/search" element={<SearchResults />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/restaurant/:id" element={<RestaurantDetails />}></Route>
        </Routes>
        </Router>
    )
};

export default App;