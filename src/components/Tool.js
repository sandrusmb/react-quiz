import React from "react";
import "../stylesheets/Tool.scss";

function Tool() {
  return (
    <ul className="container">
      <li className="container-item start selected">1</li>
      <li className="container-item">2</li>
      <li className="container-item">3</li>
      <li className="container-item">4</li>
      <li className="container-item end">></li>
    </ul>
  );
}

export default Tool;
