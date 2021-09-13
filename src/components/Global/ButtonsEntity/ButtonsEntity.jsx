import React, {useCallback} from "react";
import "./ButtonsEntity.scss";
import edit from "../../../icons/edit.svg";
import cancel from '../../../icons/cancel.svg';
import { NavLink } from "react-router-dom";

const ButtonsEntity = ({ onClickEdit = () => {}, pathedit, onClickDelete = () => {} , pathdelete}) => {
 

  const clickHadlerEdit = useCallback(() => {
    onClickEdit();
  }, [onClickEdit]);

  const clickHadlerDelete = useCallback(() => {
    onClickDelete();
  }, [onClickDelete]);
  console.log(pathedit);
  console.log(pathdelete);

  return (
    <div className="buttons">
      <ul className="buttons__list">
        <li className="buttons__item">
          <img src={edit} alt="" />
          <NavLink
            to={pathedit}          
            key={pathedit}
            onClick={() => clickHadlerEdit()}
            className = "buttons__item"
          >            
            <span className="buttons__text ">Изменить</span>
          </NavLink>
        </li>
        <li className="buttons__item">
          <img src={cancel} alt="" />
          <NavLink
            to={pathdelete}          
            key={pathdelete}
            onClick={() => clickHadlerDelete()}
            className = "buttons__item"
          >            
            <span className="buttons__text ">Удалить</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ButtonsEntity;
