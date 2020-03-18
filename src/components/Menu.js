import React from "react";
import "../stylesheets/Menu.scss";

function Menu() {
  return (
    <header className="header">
      <ul className="header__container">
        <li className="header__container-element">
          <i className="fas fa-bars"></i>
          Browse
        </li>
        <li className="header__container-element">
          <i className="fas fa-plus"></i>
          Add new questions
        </li>
        <li className="header__container-element">
          <i className="fas fa-cogs"></i>
          Api
        </li>
        <li className="header__container-element">
          <i className="fas fa-comments"></i>
          Discuss
        </li>
        <li className="header__container-element">
          <i className="fas fa-sign-in-alt"></i>
          Login
        </li>
      </ul>
    </header>
  );
}

export default Menu;
