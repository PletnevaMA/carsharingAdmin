import React, { useCallback } from "react";
import "./Pop.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { setPop, setPopCreate } from "../../../redux/actions/pop";
import PopLine from "./PopLine";

const Pop = ({ editEntity, onClickButton }) => {
  const dispatch = useDispatch();
  const deletePopHandler = useCallback(() => {
    dispatch(setPop(false));
    dispatch(setPopCreate(false));
  });
  return (
    <div className="pop__active">
      <div className="pop__container">
        <div className="pop__block">
          {editEntity.map((el) => {
            if (el.arr === undefined) {
              return <PopLine key={el.key} el={el} type="select" />;
            } else {
              return <PopLine key={el.key} el={el} type="input" />;
            }
          })}
          <div className="pop__buttons">
            <Button
              label="Применить"
              className="button button__blue"
              onClick={() => onClickButton()}
            />
            <Button
              label="Отменить"
              className="button button__red"
              onClick={() => deletePopHandler()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pop;
