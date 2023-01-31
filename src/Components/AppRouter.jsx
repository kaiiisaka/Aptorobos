import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Snakefish from "../Pages/snakefish.jsx";
import About from "../Pages/About.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/snakefish" element={<Snakefish />}/>
            <Route
                path="*"
                element={<Navigate to = "/home" replace />}
            />
        </Routes>
    );
}
export default AppRouter;