import React from 'react';
import about from "../Pages/About.jsx";
import home from "../Pages/Home";
import snakefish from "../Pages/snakefish";

export const routes = [
    {path: '/about', component: about, exact: true},
    {path: '/', component: home, exact: true},
    {path: '/snakefish', component: snakefish, exact: true},
]