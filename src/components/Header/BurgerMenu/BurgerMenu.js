import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import './BurgerMenu.css';

function BurgerMenu(props) {
  return (
    <nav className="burger">
      <input class="burger__check" type="checkbox" id="showmenu"/>
      <label class="burger__showmenu" for="showmenu">&#9776;</label>
      {/* <label class="burger__back" for="showmenu">&#9747;</label> */}
      <label class="burger__back" for="showmenu">+</label>
      <div className="burger-menu">
          <ul class="menu__items">
              <Link to = "/" className = {`menu__item ${props.pathname === '/' && 'menu__item_active'}`}> 
                  Главная
              </Link>
              <Link to = "/movies" className = {`menu__item ${props.pathname === '/movies' && 'menu__item_active'}`}> 
                  Фильмы
              </Link>
              <Link to="/saved-movies" className = {`menu__item ${props.pathname === '/saved-movies' && 'menu__item_active'}`}>
                  Сохраненные фильмы
              </Link> 
          </ul>
          <button 
              type = "button" 
              className = "header__button"
              onClick = {props.handleProfile}
          >
              Аккаунт
          </button>
      </div>
    </nav>
  )
}

export default BurgerMenu;