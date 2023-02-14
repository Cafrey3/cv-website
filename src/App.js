import {Navigate, Route, Routes} from "react-router-dom";
import React from 'react';

import './App.css';
import NavBar from "./components/nav-bar/nav-bar";
import HomePage from "./components/home-page/home-page";
import AboutPage from "./components/about-page/about-page";
import ResumePage from "./components/resume-page/resume-page";

const App = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Navigate to={"/home"}/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/resume" element={<ResumePage/>}/>
            </Routes>
        </div>

    );
};

export default App;


