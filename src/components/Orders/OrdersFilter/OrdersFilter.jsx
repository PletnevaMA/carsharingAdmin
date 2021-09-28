import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./OrderFilter.scss";

const OrderFilter = ({ filter, setFilter, label }) => {
  const dispatch = useDispatch();
  const { car, city, status } = useSelector((state) => state.orders);
  const inputChange = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  let value;
  if (label === "status") {
    value = status;
  } else if (label === "car") {
    value = car;
  } else value = city;

  let selectLabel;
  if (label === "status") {
    selectLabel = "Статус";
  } else if (label === "car") {
    selectLabel = "Машина";
  } else selectLabel = "Город";

  if (filter !== null) {
    return (
      <select
        value={value}
        className="input__global filter-order"
        onChange={inputChange}
      >
        <option
          className="filter-order__option"
          selected
          disabled
          hidden
          value=""
        >
          {selectLabel}
        </option>
        {filter.map((el) => {
          return (
            <option key = {el.id} className="filter-order__option" value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
    );
  } else return <div className="filter__empty"></div>;
};

export default OrderFilter;
