import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/" className="footer__item__link">
              Главная страница
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/" className="footer__item__link">
              Ссылка
            </Link>
          </li>
        </ul>
        <div className="footer__footer">
          <span className="footer__copyright">Copyright © 2020 Simbirsoft</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
