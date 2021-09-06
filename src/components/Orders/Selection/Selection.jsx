import React from "react";
import "./Selection.scss";

const Selection = () => {
  const filters = [
    {
      name: "time",
      title: "За неделю",
    },
    {
      name: "car",
      title: "ELANTRA",
    },
    {
      name: "city",
      title: "Ульяновск",
    },
    {
      name: "status",
      title: "В процессе",
    },
  ];

  return (
    <div className = "selections">
       <ul className="selections__list">
      {filters.map((filter) => (
        <li className="selections__item">
          <span>{filter.title}</span>
        </li>
      ))}     
    </ul>
    <div className = "selections__button__container">
      <button className="selections__button">Применить</button>
    </div>
    
    </div>
   
  );
};

export default Selection;
