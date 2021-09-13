import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteColor } from "../../../../redux/actions/carCreate";
import "./ColorSetting.scss";

const ColorSetting = () => {
  const { newCar } = useSelector((state) => state.carCreate);
  const dispatch = useDispatch();

  return (
    <div className="colors">
      {newCar.colors.map((el) => {
        return (
          <div className="colors__check">
            <input type="checkbox" value={el} id={el} checked />            
            <label
              className="colors__item"
              htmlFor={el}
              onClick={() => dispatch(deleteColor(newCar.colors.indexOf(el)))}
            >                
              {el}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ColorSetting;
