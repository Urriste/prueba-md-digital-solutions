import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>¿Qué inciso querés ver?</h1>
      <Link to="/r2">Inciso R2</Link>
      <Link to="/r3">Inciso R3</Link>
      <Link to="/r4">Inciso R4</Link>
    </div>
  );
};

export default Main;
