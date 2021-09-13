import React, {useCallback} from "react";
import "./Pop.scss";
import Input from "../../Global/Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { setPop, setPopCreate } from "../../../redux/actions/pop";
import { Path } from "../../../const";

const Pop = ({ editEntity, onClickButton }) => {
  const dispatch = useDispatch();
  const deletePopHandler = useCallback(() => {
    dispatch(setPop(false));
    dispatch(setPopCreate(false));
  });
  return (
    <div className={`pop__active`}>
      <div className="pop__container">
        <div className="pop__block">
          {editEntity.map((el) => {           
              return (
                <div className="pop__input">
                  <div className = "pop__input__label">{el.label}</div>
                  <Input value={el.value} onChange ={el.onChange} arr = {el.arr} list = {el.list} type = {el.type}/>
                </div>
              );                       
          })}
          <div className="pop__buttons">
            <Button label="Применить" className="button button__blue" onClick = {() => onClickButton()}/>
            <Button label="Отменить" className="button button__red" onClick = {() => deletePopHandler()}/>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pop;
