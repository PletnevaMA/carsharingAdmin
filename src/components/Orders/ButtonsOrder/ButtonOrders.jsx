import React from "react";
import "./ButtonOrders.scss";
import ready from "../../../icons/ready.svg";
import cancel from "../../../icons/cancel.svg";
import edit from "../../../icons/edit.svg";

const ButtonOrders = () => {
  const buttons = [
    {
      text: "Готов",
      image:  ready ,
    },
    {
      text: "Отмена",
      image:  cancel ,
    },
    {
      text: "Изменить",
      image:  edit ,
    },
  ];
  return (
    <section className="buttons">
      <ul className="buttons__list">
        {buttons.map((button) => (
          <li className="buttons__item">
            <img src={button.image} alt="" />
            <span className="buttons__text ">{button.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ButtonOrders;
