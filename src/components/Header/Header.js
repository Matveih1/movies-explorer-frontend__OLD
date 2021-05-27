import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {

  const history = useHistory();

  const headerClassName = `header ${props.loggedIn && 'header__start'}`; 

  function handleLogin({ email, password}) {
    history.push('/sing-in');
  }

  return (
    <header className = { headerClassName } >
      <img className="header__logo" src={logo} alt="Лого"/>
      {props.loggedIn ? (
          <div className="header__links">
            <Link to="/sing-up" className="header__link">
              Регистрация
            </Link>
            <button 
              type = "button" 
              className = "header__button-green"
              onClick = {handleLogin}
            >
                Войти
            </button>
          </div>  
        ) : (
          <div className="header__links">
            <Link to="/sing-up" className="header__link">
              Фильмы
            </Link>
            <Link to="/movies" className="header__link">
              Сохраненные фильмы
            </Link> 
          </div> 
        )}   
    </header>
  );
}

export default Header;
