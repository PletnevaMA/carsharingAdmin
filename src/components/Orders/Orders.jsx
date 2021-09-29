import React, { useEffect, useState } from "react";
import "./Orders.scss";
import OrderLine from "./OrderLine/OrderLine";
import Pagination from "./Pagination/Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars";
import { getCities } from "../../redux/actions/cities";
import {
  editPage,
  setCar,
  setCity,
  setStatus,
} from "../../redux/actions/orders";
import { getOrdersStatus } from "../../redux/actions/orders";
import OrderFilter from "./OrdersFilter/OrdersFilter";
import Button from "../Global/Button/Button";

const Orders = () => {
  const { cars } = useSelector((state) => state.cars);
  const { cities } = useSelector((state) => state.cities);
  const { orderStatus, car, city, status } = useSelector(
    (state) => state.orders
  );
  const { newOrder, page, amountOrders } = useSelector((state) => state.orders);
  let filter = `${status ? `&orderStatusId=${status}` : ""}${
    car ? `&carId=${car}` : ""
  }${city ? `&cityId=${city}` : ""}`;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
    dispatch(getCities());
    dispatch(getOrdersStatus());
  }, [newOrder]);

  const buttonClickedHandler = () => {
    dispatch(setStatus(""));
    dispatch(setCar(""));
    dispatch(setCity(""));
  };
  return (
    <div className="orders">
      <div className="orders__container">
        <a className="orders__title">Заказы</a>
        <div className="orders__block">
          <div className="orders__options">
            <OrderFilter
              filter={orderStatus}
              placeholder="Статус заказа"
              setFilter={setStatus}
              label="status"
            />
            <OrderFilter
              filter={cars}
              placeholder="Машина"
              setFilter={setCar}
              label="car"
            />
            <OrderFilter
              filter={cities}
              placeholder="Город"
              setFilter={setCity}
              label="city"
            />
            <Button
              label="Сбросить"
              className="button button__blue"
              onClick={buttonClickedHandler}
            />
          </div>
          <div className="orders__line">
            <OrderLine filter={filter} />
          </div>
          <div className="orders__pagination">
            <Pagination
              amountOrders={amountOrders}
              editPage={editPage}
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
