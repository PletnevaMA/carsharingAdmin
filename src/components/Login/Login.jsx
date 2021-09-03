import React from "react";
import Button from "../Button/Button";
import "./Login.scss";
import logoIcon from "../../icons/LogoIcon.svg";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="login__box">
        <div className="login__logo">
          <img src={logoIcon} />
          <span className="login__title">Need for drive</span>
        </div>
        <div className="login__block">
          <div className="login__container">
            <div className="login__container__title">Вход</div>
            <div className="login__container__form">
              <label htmlFor="email">Почта</label>
              <input type="text" className="login__container__email" id="email" />
              <label htmlFor="password">Пароль </label>
              <input
                type="password"
                className="login__container__password"
                id="password"
              />
              <div className="login__buttons">
                <Button text={"Запросить доступ"} type = "button-link"/>
                <Button text={"Войти"} type = "button-standart"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;