import React from "react";
import "./ButtonNewEntity.scss";
import { NavLink } from "react-router-dom";

const ButtonNewEntity = ({ onClick = () => {}, pathedit }) => {
  return (
    <div className="button-new">
      <button onClick={() => onClick()} className="button-new__button">
        <NavLink to={pathedit} key={pathedit} className="button-new__item">
          Создать
        </NavLink>
      </button>
    </div>
  );
};

export default ButtonNewEntity;
