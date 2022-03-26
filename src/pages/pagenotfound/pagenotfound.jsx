import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="container">
            <div className="page-title">
                Page not found
            </div>
            <div className="article">
                move to <Link to='/'>Homepage</Link>
            </div>
        </div>
    );
}
export default PageNotFound;
