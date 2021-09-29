import React from "react";
import Input from "../Input/Input";
import SelectEntity from "../Select/Select";

const PopLine = ({ el, type }) => {
  return (
    <div key={el.id} className="pop__input">
      <div className="pop__input__label">{el.label}</div>
      {type === "input" && (
        <SelectEntity
          value={el.value}
          onChange={el.onChange}
          objectsList={el.arr}
        />
      )}
      {type === "select" && (
        <Input
          value={el.value}
          onChange={el.onChange}
          objectsList={el.arr}
          list={el.list}
          type={el.type}
        />
      )}
    </div>
  );
};
export default PopLine;
