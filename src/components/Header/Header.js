import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого"/>
      <div className="header__links">
        <Link to="/sing-up" className="header__link">
          Фильмы
        </Link>
        <Link to="/movies" className="header__link">
          Сохраненные фильмы
        </Link>
        <Link to="/sing-up" className="header__link">
          Регистрация
        </Link>
        <button type="button" className="header__button-green">
          <Link to="/sing-in" className="button-link">
            Войти
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;