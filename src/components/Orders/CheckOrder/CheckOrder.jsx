import React from "react";
import "./CheckOrder.scss";
import { editTank, editChair, editWheel } from "../../../redux/actions/orders";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const CheckOrder = ({ tank, baby, drive }) => {
  const dispatch = useDispatch();
  const { newOrder } = useSelector((state) => state.orders);

  return (
    <div className="checkbox">
      <div className="checkbox__item">
        <input
          type="checkbox"
          className="checkbox__input"
          id="tank"
          checked={tank}
          onChange={() => dispatch(editTank(!newOrder.isFullTank))}
        />
        <label htmlFor="tank" className="checkbox__label">
          <span>Полный бак</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input
          type="checkbox"
          className="checkbox__input"
          id="baby"
          checked={baby}
          onChange={() => dispatch(editChair(!newOrder.isNeedChildChair))}
        />
        <label htmlFor="baby" className="checkbox__label">
          <span>Детское кресло</span>
        </label>
      </div>
      <div className="checkbox__item">
        <input
          type="checkbox"
          className="checkbox__input"
          id="drive"
          checked={drive}
          onChange={() => dispatch(editWheel(!newOrder.isRightWheel))}
        />
        <label htmlFor="drive" className="checkbox__label">
          <span>Правый руль</span>
        </label>
      </div>
    </div>
  );
};

export default CheckOrder;
