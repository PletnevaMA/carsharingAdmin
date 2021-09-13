import React, { useCallback } from "react";
import Button from "../Button/Button";
import "./Login.scss";
import logoIcon from "../../icons/LogoIcon.svg";
import {
  changePassword,
  changeUserName,
  userAuthorize,
} from "../../redux/actions/user";
import { secret_key } from "../../const";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
   const { username, password } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const authUser = useCallback(() => {
    let secret = secret_key;
    let random =  uuidv4();
    let basicKey = window.btoa(`${random}:${secret}`);
    let body = {
      username: `${username}`,
      password: `${password}`,
    };
    console.log(body, basicKey);
    dispatch(userAuthorize(body, basicKey));
  }, [password, username]);

  const changeUsernameHandler = useCallback(
    (e) => {
      return dispatch(changeUserName(e.target.value));
    },
    [username, changeUserName]
  );

  const changePasswordHandler = useCallback(
    (e) => {
      return dispatch(changePassword(e.target.value));
    },
    [password, changeUserName]
  ); 
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
              <input
                type="text"
                className="login__container__email"
                id="email"
                onChange={(e) => changeUsernameHandler(e)}
              />
              <label
                htmlFor="password"             
              >
                Пароль{" "}
              </label>
              <input
                type="password"
                className="login__container__password"
                id="password"
                onChange={(e) => changePasswordHandler(e)}
              />
              <div className="login__buttons">
                <Button text={"Запросить доступ"} type="button-link" />
                <Button
                  text={"Войти"}
                  type="button-standart"
                  onClick={() => authUser()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
