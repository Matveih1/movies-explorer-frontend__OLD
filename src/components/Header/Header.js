import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {

    const history = useHistory();
    const location = useLocation();

    const headerClassName = `header ${props.loggedIn && 'header__start'}`; 

    function handleLogin() {
        history.push('/sing-in');
    }

    function handleProfile() {
        history.push('/profile');
    }

    console.log(`header__link ${location.pathname === '/movies' && 'header__link_active'}`);

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
                <Link 
                    to = "/movies" 
                    className = {`header__link ${location.pathname === '/movies' && 'header__link_active'}`} 
                > 
                Фильмы
                </Link>
                <Link 
                    to="/saved-movies" 
                    className = {`header__link ${location.pathname === '/saved-movies' && 'header__link_active'}`} 
                >
                Сохраненные фильмы
                </Link> 
                <button 
                type = "button" 
                className = "header__button"
                onClick = {handleProfile}
                >
                    Аккаунт
                </button>
            </div> 
            )}   
        </header>
    );
}

export default Header;
