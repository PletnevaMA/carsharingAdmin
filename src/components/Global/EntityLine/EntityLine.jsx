import React from "react";
import "./EntityLine.scss";
import ButtonsEntity from "../ButtonsEntity/ButtonsEntity";

const EntityLine = ({
  item1,
  item2,
  item3,
  item4,
  onClickEdit = () => {},
  onClickDelete = () => {},
  pathedit,
  pathdelete,
  isVisible,
}) => {
  if (isVisible) {
    return (
      <ul className="order__line__container">
        <li className="order__line__item">{item1}</li>
        <li className="order__line__item">{item2}</li>
        <li className="order__line__item">{item3}</li>
        <li className="order__line__item">{item4}</li>
        <ButtonsEntity          
          pathedit={pathedit}
          onClickEdit={() => onClickEdit()}
          pathdelete={pathdelete}
          onClickDelete={() => onClickDelete()}
        />
      </ul>
    );
  } else {
    return (<></>);
  }
 
} ;

export default EntityLine;
