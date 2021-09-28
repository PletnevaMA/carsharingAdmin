import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SelectEntity = ({
  value,
  label,
  onChange = () => {},
  objectsList,
  path,
}) => {
  const dispatch = useDispatch();

  const clickHandler = (el) => {
    dispatch(onChange(el.target.value));
  };
  return (
    <div className="input">
      <label htmlFor={label} className={`input__label`}>
        {label}
      </label>

      {objectsList !== undefined && (
        <select value={value} className="input__global" onChange={clickHandler}>
          <option selected disabled hidden value=""></option>
          {objectsList.map((el) => {
            if (path === undefined) {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            }
            return (
              <option key={el.id} value={el.id}>
                {el.rateTypeId.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default SelectEntity;
