import React from "react";

import {
    useLocation,
    Outlet,
    Link
} from "react-router-dom"

export const NavBar = () => {
    let location = useLocation();
    const pages = [
        {
            key: 0,
            text: "Projects",
            link: "/projects"
        },
        {
            key: 1,
            text: "Contacts",
            link: "/contacts"
        },
        {
            key: 2,
            text: "About me",
            link: "/about"
        }
    ]

    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Chernega</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            {pages.map(page => (
                                <li key={page.key} className={page.link === location.pathname ? "active" : "junk"}>
                                    <Link to={page.link}>{page.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};