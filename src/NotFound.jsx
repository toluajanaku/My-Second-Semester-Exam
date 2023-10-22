import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-center">
      <h1 className="pageError">404 Page</h1>
      <p className="pageNotFound">Page Error</p>
      <Link className="homeError" to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
