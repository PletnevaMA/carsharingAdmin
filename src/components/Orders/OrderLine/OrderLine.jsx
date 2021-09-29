import React, { useEffect, useCallback } from "react";
import "./OrderLine.scss";
import CheckOrder from "../CheckOrder/CheckOrder";
import {
  createOrder,
  getOrders,
  deleteOrder,
} from "../../../redux/actions/orders";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ButtonsEtity from "../../Global/ButtonsEntity/ButtonsEntity";
import { Path } from "../../../const";

const OrderLine = ({ filter }) => {
  const { orders, newOrder, page } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders(page - 1, filter));
  }, [newOrder, page, filter]);

  function pathImage(img) {
    return img.includes("/files")
      ? `https://api-factory.simbirsoft1.com${img}`
      : img;
  }

  const deleteOrderHandler = useCallback((val, id) => {
    dispatch(createOrder(val));
    dispatch(deleteOrder(id));
  });

  return (
    <section className="order__line">
      {orders.map((order) => {
        const dateStart = new Date(order.dateFrom).toLocaleDateString("ru-RU");
        const dateEnd = new Date(order.dateTo).toLocaleDateString("ru-RU");

        return (
          <ul key={order.id} className="order__line__container">
            <li className="order__line__item">
              <img
                src={order.carId ? pathImage(order.carId.thumbnail.path) : ""}
                width="250px"
                height="100px"
                className="order__line__car__image"
                alt="Машина не выбрана"
              />
            </li>
            <li className="order__line__item">
              <div className="order__line__part__width">
                <div className="order__line__car">
                  <span className="order__line__car__point">
                    <span>{order.carId ? order.carId.name : ""}</span> в{" "}
                    <span>
                      {order.cityId !== null ? order.cityId.name : ""}
                    </span>{" "}
                    , {order.pointId !== null ? order.pointId.address : ""}
                  </span>
                  <span className="order__line__car__date">
                    {dateStart} - {dateEnd}
                  </span>
                  <span className="order__line__car__color">
                    Цвет: <span>{order.color}</span>
                  </span>
                  <span className="order__line__car__color">
                    Статус:{" "}
                    <span>
                      {order.orderStatusId ? order.orderStatusId.name : ""}
                    </span>
                  </span>
                </div>
              </div>
              <CheckOrder
                tank={order.isFullTank}
                baby={order.isNeedChildChair}
                drive={order.isRightWheel}
              />
            </li>
            <li className="order__line__item">
              <span className="order__line__price">{order.price} ₽</span>
            </li>
            <ButtonsEtity
              pathedit={Path.ORDER}
              onClickEdit={() => dispatch(createOrder(order))}
              pathdelete={Path.ORDERS}
              onClickDelete={() => deleteOrderHandler(order, order.id)}
            />
          </ul>
        );
      })}
    </section>
  );
};

export default OrderLine;
