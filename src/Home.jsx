import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">WELCOME</h1>
      <nav>
        <ul>
          <li>
            <Link className="toCounter" to="/counter">
              Counter
            </Link>
          </li>
          <li>
            <Link className="toPage" to="/404">
              Error Page
            </Link>
          </li>
          <li>
            <Link className="toError" to="/test">
              Error Boundary
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
