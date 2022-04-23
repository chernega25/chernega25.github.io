import React from "react";

import {
    useParams
} from "react-router-dom"

export const Project = () => {
    let params = useParams();

    return (
        <div className="projectContainer">
            Project {params.projectId}
        </div>
    );
};