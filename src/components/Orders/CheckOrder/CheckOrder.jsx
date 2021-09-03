import React from "react";
import tank from "../../../icons/tank.svg";
import baby from "../../../icons/baby-chair.svg";
import hand from "../../../icons/rigth-hand.svg";
import "./CheckOrder.scss";

export const CheckOrder = () => {
  return (
    <div className="checkbox">
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="tank" checked />
        <label htmlFor="tank" className="checkbox__label">
          <span>Полный бак</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="baby" />
        <label htmlFor="baby" className="checkbox__label">
         
          <span>Детское кресло</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="drive" />
        <label htmlFor="drive" className="checkbox__label">
          <span>Правый руль</span>
        </label>
      </div>
    </div>
  );
};

export default CheckOrder;
