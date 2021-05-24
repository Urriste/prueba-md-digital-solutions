import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <h1>¿Qué inciso querés ver?</h1>
      <Link className="link" to="/r2">
        Inciso R2
      </Link>
      <Link className="link" to="/r3">
        Inciso R3
      </Link>
      <Link className="link" to="/r4">
        Inciso R4
      </Link>
    </div>
  );
};

export default Main;
