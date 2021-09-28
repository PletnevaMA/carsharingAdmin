import React, { useState } from "react";
import { Path } from "../../../const";
import "./Menu.scss";
import { Link } from "react-router-dom";
import logoIcon from "../../../icons/LogoIcon.svg";
import classNames from "classnames";

import cities from "../../../icons/menu/cities.svg";
import orders from "../../../icons/menu/orders.svg";
import points from "../../../icons/menu/points.svg";
import rates from "../../../icons/menu/rates.svg";
import cart from "../../../icons/menu/cart.svg";

const Menu = () => {
  const menuItems = [
    {
      id: 0,
      title: "Карточка автомобиля",
      link: Path.CAR,
      image: cart,
    },
    {
      id: 1,
      title: "Карточка заказа",
      link: Path.ORDER,
      image: cart,
    },
    {
      id: 2,
      title: "Заказы",
      link: Path.ORDERS,
      image: orders,
    },
    {
      id: 3,
      title: "Автомобили",
      link: Path.CARLIST,
      image: cities,
    },
    {
      id: 4,
      title: "Города",
      link: Path.CITIES,
      image: cities,
    },
    {
      id: 5,
      title: "Адреса",
      link: Path.POINTS,
      image: points,
    },
    {
      id: 6,
      title: "Тарифы",
      link: Path.RATES,
      image: rates,
    },
  ];
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu">
      <input
        id="menu__toggle"
        type="checkbox"
        checked={isOpen}
        onClick={() => clickHandler()}
        onChange={() => {}}
      />
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
            <li
              key={el.id}
              className={classNames("menu__item", { visible: isOpen })}
              onClick={() => clickHandler()}
            >
              <Link to={el.link} className="menu__item__box">
                <img src={el.image} className="menu__item__image" />
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
