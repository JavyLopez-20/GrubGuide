import { Router } from "express";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/homePage";
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import SearchResults from "./pages/searchResultsPage";
import UserProfile from "./pages/userPage";
import RestaurantDetails from "./pages/restaurantDetailsPage";

function App () {
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<SearchResults />}></Route>
            <Route path="/user" element={<UserProfile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/restaurant/:id" element={<RestaurantDetails />}></Route>
        </Routes>
        </Router>
    )
};

module.exports = App;