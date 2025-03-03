import { Router } from "express";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const login = require('./pages/loginPage');

function App () {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<login />}></Route>
        </Routes>
        </BrowserRouter>
    )
};

module.exports = App;