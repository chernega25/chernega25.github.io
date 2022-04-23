import React from "react";
import "./App.css"

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import {
    Contacts,
    Main,
    Projects,
    AboutMe
} from "../pages";

import {
    NoPageFound,
    NavBar
} from "../components";
import {Project} from "../pages/projects/Project";

export const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<NavBar/>}>
                <Route index element={<Main/>}/>
                <Route path="projects" element={<Projects/>}>
                    <Route path=":projectId" element={<Project/>}/>
                </Route>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="about" element={<AboutMe/>}/>
                <Route path="*" element={<NoPageFound/>}/>
            </Route>
        </Routes>
    </Router>
);