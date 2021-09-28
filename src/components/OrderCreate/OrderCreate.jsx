import React, { useEffect, useCallback, useState } from "react";
import { EntityContainer } from "../Global/EntityContainer/EntityContainer";
import Title from "../Global/Title/Title";
import "./OrderCreate.scss";
import Input from "../Global/Input/Input";
import SelectEntity from "../Global/Select/Select";
import ButtonCard from "../Global/ButtonCard/ButtonCard";
import CheckOrder from "../Orders/CheckOrder/CheckOrder";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../redux/actions/cities";
import { getPoints } from "../../redux/actions/points";
import { getRates } from "../../redux/actions/rates";
import { getCars } from "../../redux/actions/cars";
import {
  editPrice,
  editCar,
  editStatus,
  editCity,
  editDateFrom,
  editDateTo,
  editRate,
  changeOrder,
  createOrder,
  deleteOrder,
  editPoint,
  getOrdersStatus,
} from "../../redux/actions/orders";
import DateTimePicker from "react-datetime-picker";
import { Path } from "../../const";
const OrderCreate = () => {
  const { newOrder, orderStatus } = useSelector((state) => state.orders);
  const { cars } = useSelector((state) => state.cars);
  const { cities } = useSelector((state) => state.cities);
  const { points } = useSelector((state) => state.points);
  const { rates } = useSelector((state) => state.rates);
  const [dateFromValue, setDateFrom] = useState(new Date(newOrder.dateFrom));
  const [dateToValue, setDateTo] = useState(new Date(newOrder.dateTo));
  const { id, price } = newOrder;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
    dispatch(getCities());
    dispatch(getPoints());
    dispatch(getRates());
    dispatch(getOrdersStatus());
  }, []);

  useEffect(() => {
    dispatch(editDateFrom(new Date(dateFromValue).getTime()));
    dispatch(editDateTo(new Date(dateToValue).getTime()));
  }, [newOrder.dateFrom, newOrder.dateTo]);

  const editPriceHandler = useCallback(
    (e) => {
      return dispatch(editPrice(e.target.value));
    },
    [price]
  );

  const changeOrderHandler = useCallback(() => {
    dispatch(changeOrder(newOrder, id));
  }, [newOrder, id]);

  const cancelOrderHandler = useCallback(() => {
    dispatch(
      createOrder({
        orderStatusId: {
          id: "",
          name: "",
        },
        cityId: {
          id: "",
          name: "",
        },
        pointId: {
          id: "",
          cityId: "",
          address: "",
          name: "",
        },
        carId: {
          id: "",
          name: "",
          priceMin: 0,
          priceMax: 0,
          description: "",
          colors: [],
          thumbnail: {
            path: "",
            size: 0,
            mimetype: "",
            originalname: "",
          },
          categoryId: {
            id: "",
            name: "",
          },
        },
        color: "",
        dateFrom: new Date(),
        dateTo: new Date(),
        rateId: {
          rateTypeId: {
            id: "",
            name: "",
          },
        },
        price: 0,
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false,
      })
    );
  }, [newOrder]);

  const deleteOrderHandler = useCallback(() => {
    dispatch(deleteOrder(id));
  }, [id]);

  let newPoints = [];
  points.map((el) => {
    let cityPoint= newOrder.cityId ? newOrder.cityId.id : "";
    if (el.cityId.id === cityPoint) {
      newPoints.push(el);
    }
  });

  return (
    <EntityContainer>
      <Title>Карточка заказа</Title>
      <div className="car__container">
        <div className="car-setting">
          <div className="car-setting__block">
            <div className="car-setting__container">
              <span className="car-setting__title">Настройка заказа</span>
              <div className="car-setting__setting">
                <SelectEntity
                  value={newOrder.carId ? newOrder.carId.id : ""}
                  label="Машина"
                  objectsList={cars}
                  list="cars"
                  onChange={editCar}
                />
                <SelectEntity
                  value={
                    newOrder.orderStatusId ? newOrder.orderStatusId.id : ""
                  }
                  label="Статус"
                  objectsList={orderStatus}
                  list="orders"
                  onChange={editStatus}
                />
              </div>
              <div className="car-setting__setting">
                <SelectEntity
                  value={newOrder.cityId ? newOrder.cityId.id : ""}
                  label="Город"
                  objectsList={cities}
                  list="cities_new"
                  onChange={editCity}
                />
                <SelectEntity
                  value={newOrder.pointId ? newOrder.pointId.id : ""}
                  label="Адрес"
                  onChange={editPoint}
                  list="category"
                  objectsList={newPoints}
                  list="points"
                />
              </div>
              <div className="car-setting__setting">
                <div className="input">
                  <span className="input__label"> Дата начала аренды</span>
                  <DateTimePicker
                    value={dateFromValue}
                    format="y-MM-dd H:mm"
                    calendarIcon={null}
                    onChange={setDateFrom}
                    className="date-time"
                  />
                </div>
                <div className="input">
                  <span className="input__label"> Дата окончания аренды</span>
                  <DateTimePicker
                    value={dateToValue}
                    format="y-MM-dd H:mm"
                    calendarIcon={null}
                    onChange={setDateTo}
                    className="date-time"
                  />
                </div>
              </div>
              <div className="car-setting__setting add">
                <SelectEntity
                  value={newOrder.rateId ? newOrder.rateId.rateTypeId.id : ""}
                  label="Тариф"
                  objectsList={rates}
                  list="rates"
                  onChange={editRate}
                  path={"el.rateTypeId.name"}
                />
                <Input
                  value={newOrder.price}
                  label="Цена"
                  type="number"
                  onChange={editPriceHandler}
                />
              </div>
              <CheckOrder
                tank={newOrder.isFullTank}
                baby={newOrder.isNeedChildChair}
                drive={newOrder.isRightWheel}
              />
            </div>
            <div className="car-setting__buttons">
              <div className="car-setting__buttons-container">
                <ButtonCard
                  onClick={changeOrderHandler}
                  label="Сохранить"
                  className="button button__blue "
                  pathedit={Path.ORDERS}
                />

                <ButtonCard
                  onClick={cancelOrderHandler}
                  label="Отменить"
                  className="button button__gray "
                  pathedit={Path.ORDERS}
                />
              </div>
              <ButtonCard
                onClick={deleteOrderHandler}
                label="Удалить"
                className="button button__red "
                pathedit={Path.ORDERS}
              />
            </div>
          </div>
        </div>
      </div>
    </EntityContainer>
  );
};

export default OrderCreate;
