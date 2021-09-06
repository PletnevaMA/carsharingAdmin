import React from "react";
import { useSelector, useDispatch } from "react-redux";
import shape from "../../../icons/Shape.svg";
import notification from "../../../icons/Notifications.svg";
import avatar from "../../../icons/Avatar.png";
import "./Header.scss";

const Header = () => {
  
  return (
    <header className="header">
      <ul className="header__list">
        <div
          className="header__button"         
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <li className="header__item__shape">
          <img src={shape} alt="" className="header__item__shape__logo" />
          <input
            type="text"
            className="header__item__shape__input"
            placeholder="Поиск ..."
          />
        </li>
        <li className="header__item__notification">
          <img src={notification} alt="" className="header__item__notification__logo" />
        </li>
        <li className="header__item__avatar">
          <img src={avatar} alt="" className="header__item__avatar__logo" />
          <span className="header__item__avatar__name">Admin</span>
          <div className="header__item__avatar__arrow">
            
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
