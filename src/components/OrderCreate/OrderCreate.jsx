import React, { useEffect, useCallback, useState } from "react";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import Title from "../Global/Title/Title";
import "./OrderCreate.scss";
import Input from "../Global/Input/Input";
import ButtonCard from "../Global/ButtonCard/ButtonCard";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../redux/actions/cities";
import { getPoints } from "../../redux/actions/points";
import { getRates } from "../../redux/actions/rates";
import { getCars} from '../../redux/actions/cars';
import {editPrice, editCar, editCity, editDateFrom, editDateTo, editRate, changeOrder, createOrder, deleteOrder} from '../../redux/actions/orders';
import DateTimePicker from "react-datetime-picker";
import { Path } from "../../const";
const OrderCreate = () => {
  const { newOrder } = useSelector((state) => state.orders);
  const {cars} = useSelector((state) => state.cars);
  const { cities } = useSelector((state) => state.cities);
  const { points } = useSelector((state) => state.points);
  const { rates } = useSelector((state) => state.rates);
  const [dateFromValue, setDateFrom] = useState(new Date());
  const [dateToValue, setDateTo] = useState(new Date());
  const {car, city, id} = newOrder;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
    dispatch(getPoints());
    dispatch(getRates());
    dispatch(getCars());
   
  }, [newOrder]);

  useEffect(() => {
    console.log(new Date(dateFromValue).getTime())
    dispatch(editDateFrom(new Date(dateFromValue).getTime()))
    dispatch(editDateTo(new Date(dateToValue).getTime()))
  }, [dateFromValue, dateToValue])

  const editCarHandler = useCallback(
    (e) => {
      return dispatch(editCar(e.target.value));
    },
    [car]
  );

  const editCityHandler = useCallback(
    (e) => {
      return dispatch(editCity(e.target.value));
    },
    [city]
  );

  const editPriceHandler = useCallback(
    (e) => {
      return dispatch(editPrice(e.target.value));
    },
    [city]
  );

  const editRateHandler = useCallback(
    (e) => {
      return dispatch(editRate(e.target.value));
    },
    [city]
  );

  const changeOrderHandler = useCallback(() => {
    dispatch(changeOrder(newOrder, id));
  }, [newOrder, id]);

  const cancelOrderHandler = useCallback(() => {
    dispatch(createOrder(newOrder));
  }, [newOrder]);

  const deleteOrderHandler = useCallback(() => {
    dispatch(deleteOrder(id));
  }, [ id]);
  return (
    <EntityContainer>
      <Title>Карточка заказа</Title>
      <div className="car__container">
        <div className="car-setting">
          <div className="car-setting__block">
            <div className="car-setting__container">
              <span className="car-setting__title">Настройка заказа</span>
              <div className="car-setting__setting">
                <Input
                  key={Math.random(0, 1)}
                  value={newOrder.carId ? newOrder.carId.name : ""}
                  label="Машина"
                  arr = {cars}
                  list = "cars"
                  onChange={editCarHandler}
                />
              </div>
              <div className="car-setting__setting">
                <Input
                  key={Math.random(0, 1)}
                  value={newOrder.cityId ? newOrder.cityId.name : ""}
                  label="Город"
                  arr={cities}
                  list="cities_new"
                  onChange={editCityHandler}
                />
                <Input
                  key={Math.random(0, 1)}
                  value={newOrder.pointId ? newOrder.pointId.address : ""}
                  label="Адрес"
                  //onChange={editCategoryHandler}
                  list="category"
                  arr={points}
                  list="points"
                />
              </div>
              <div className="car-setting__setting">
                <div className = "input">
            <span className = "input__label"> Дата начала аренды</span>
            <DateTimePicker
                  value={new Date(newOrder.dateFrom)}
                  format="y-MM-dd H:mm"
                  calendarIcon={null}
                  onChange = {setDateFrom}
                  className = "date-time"
                />
                </div>
                <div className = "input">
              <span className = "input__label"> Дата окончания аренды</span>
                <DateTimePicker
                  value={new Date(newOrder.dateTo)}
                  format="y-MM-dd H:mm"
                  calendarIcon={null}
                  onChange = {setDateTo}
                  className = "date-time"
                />
                </div>
              </div>
              <div className="car-setting__setting add">
                <Input
                  key={Math.random(0, 1)}
                  value={newOrder.rateId ? newOrder.rateId.rateTypeId.name : ""}
                  label="Тариф"
                  arr={rates}
                  list="rates"
                  onChange={editRateHandler}
                  path = {"el.rateTypeId.name"}
                />
                <Input
                  key={Math.random(0, 1)}
                  value={newOrder.price}
                  label="Цена"
                  type="number"
                  onChange={editPriceHandler}
                />
              </div>
             
            </div>
            <div className="car-setting__buttons">
              <div className="car-setting__buttons-container">
                <ButtonCard
                  onClick={changeOrderHandler}
                  label="Сохранить"
                  className="button button__blue "
                  pathedit = {Path.ORDERS}
                />

                <ButtonCard
                  onClick={cancelOrderHandler}
                  label="Отменить"
                  className="button button__gray "
                  pathedit = {Path.ORDERS}
                />
              </div>
              <div className="car-setting__buttons-container"></div>
              <ButtonCard
                onClick={deleteOrderHandler}
                label="Удалить"
                className="button button__red "
                pathedit = {Path.ORDERS}
              />
            </div>
          </div>
        </div>
      </div>
    </EntityContainer>
  );
};

export default OrderCreate;
