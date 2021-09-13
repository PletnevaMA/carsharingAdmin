import React from "react";
import "./Input.scss";

const Input = ({ value, label, onChange = () => {}, list, arr, type, path }) => {
  let typeInput;
 
  type !== undefined ? (typeInput = type) : (typeInput = "text");
 
  return (
    <div className="input">
      <label htmlFor={label} className={`input__label`}>
        {label}
      </label>
      <input
        type= {typeInput}
        value={value}
        className="input__global"        
        id={label}
        onChange={onChange}
        list={list}
      />     
      {arr !== undefined && (
        <datalist id={list}>
          {arr.map((el) => {
            return <option value={path!==undefined? el.rateTypeId.name:el.name} data = {el} />;
          })}
        </datalist>
      )}
    </div>
  );
};

export default Input;
