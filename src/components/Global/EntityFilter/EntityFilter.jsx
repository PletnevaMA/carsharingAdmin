import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./EntityFilter.scss";
import { setFilter } from "../../../redux/actions/filter";

const EntityFilter = ({ filter, placeholder, setValue }) => {
  const inputref = useRef(null);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    e.preventDefault();
    dispatch(
      setFilter({
        value: e.target.value,
      })
    );
  };
  if (filter !== null) {
    return (
      <div>
        <input
          className="filter__list"
          list="filter__list"
          placeholder={placeholder}
          onChange={inputChange}
          ref={inputref}
        />
        <datalist id="filter__list">
          {filter.map((filter) => {
            return <option value={filter.name} />;
          })}
        </datalist>
      </div>
    );
  } else return <div className="filter__empty"></div>;
};

export default EntityFilter;
