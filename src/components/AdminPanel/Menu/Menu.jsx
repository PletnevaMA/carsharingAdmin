import React, { useState } from "react";
import { Path } from "../../../const";
import "./Menu.scss";
import { Link } from "react-router-dom";
import logoIcon from "../../../icons/LogoIcon.svg";

const Menu = () => {
  const menuItems = [
    {
      id: 0,
      title: "Карточка автомобиля",
      link: Path.CAR,
    },
    {
      id: 1,
      title: "Заказы",
      link: Path.ORDERS,
    },
    {
      id: 2,
      title: "Список автомобилей",
      link: Path.CARLIST,
    },
    {
      id: 4,
      title: "Menu 4",
      link: "/",
    },
    {
      id: 5,
      title: "Menu 5",
      link: "/",
    },
    {
      id: 6,
      title: "Menu 6",
      link: "/",
    },
  ];
  const clickHandler = () => {
    setIsOpen(!isOpen);
  }


  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu">
      <input id="menu__toggle" type="checkbox" checked = {isOpen ? true : false} onClick = {() => clickHandler()} />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <div className="menu__head">
        <img src={logoIcon} width="21px" height="21px" />
        <span className="menu__title">Need for car</span>
      </div>
      <ul className="menu__list">
        {menuItems.map((el) => {
          return (
            <li className={`menu__item ${isOpen ? "__visible" : ""}`} onClick = {() => clickHandler()}>
              <Link to={el.link} className="menu__item__box">
                <span className="menu__item__title">{el.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
