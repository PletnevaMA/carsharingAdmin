import React from "react";
import "./CheckOrder.scss";

export const CheckOrder = ({tank, baby, drive}) => {

  return (
    <div className="checkbox">
      <div className="checkbox__item">
        <input type="checkbox" className= 'checkbox__input' id="tank" checked = {tank} />
        <label htmlFor="tank" className="checkbox__label">
          <span>Полный бак</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="baby" checked = {baby}/>
        <label htmlFor="baby" className="checkbox__label">
         
          <span>Детское кресло</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input type="checkbox" className="checkbox__input" id="drive" checked = {drive} />
        <label htmlFor="drive" className="checkbox__label">
          <span>Правый руль</span>
        </label>
      </div>
    </div>
  );
};

export default CheckOrder;
