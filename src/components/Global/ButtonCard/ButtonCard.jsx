import React from "react";
import "./ButtonCard.scss";
import { NavLink } from "react-router-dom";

const Button = ({ label, className, onClick = () => {}, pathedit }) => {
  return (
    <NavLink
      to={pathedit}
      key={pathedit}
      onClick={() => onClick()}
      className={className}
    >
      <span className="buttons__text ">{label}</span>
    </NavLink>
  );
};

export default Button;
