import React from "react";
import "./Input.scss";

const Input = ({
  value,
  label,
  onChange = () => {},
  list,
  objectsList,
  type,
  path,
}) => {
  return (
    <div className="input">
      <label htmlFor={label} className={`input__label`}>
        {label}
      </label>
      <input
        type={type ? type : "text"}
        value={value}
        className="input__global"
        id={label}
        onChange={onChange}
        list={list}
      />
      {objectsList !== undefined && (
        <datalist id={list}>
          {objectsList.map((el) => {
            return (
              <option
                key={el.id}
                value={path !== undefined ? el.rateTypeId.name : el.name}
                data={el}
              />
            );
          })}
        </datalist>
      )}
    </div>
  );
};

export default Input;
