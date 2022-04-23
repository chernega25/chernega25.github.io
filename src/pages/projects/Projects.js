import React from "react";

import {
    useLocation,
    Outlet,
    Link
} from "react-router-dom"

export const Projects = () => {
    return (
        <div className="content projectsContainer">
            Projects
            <Outlet/>
        </div>
    );
};