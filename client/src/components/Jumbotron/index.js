import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron shadow-sm"
    >
      <h1 className="display-4 text-center font-weight-bold">Google Books Search</h1>
    </div>
  );
}

export default Jumbotron;
