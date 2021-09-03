import React from "react";
import "./OrderLine.scss";
import CheckOrder from "../CheckOrder/CheckOrder";
import elantra from "../../../icons/elantra.png";
import ButtonOrders from "../ButtonsOrder/ButtonOrders";

const OrderLine = () => {
  const orders = [
    {
      car: "ELANTRA",
      city: "Ульяновск",
      point: "Нариманова, 42",
      dateStart: "12.06.2019 12:00",
      dateFinish: "13.06.2019 12:00",
      color: "Голубой",
      image: elantra,
    },
    {
      car: "Hyndai, i30",
      city: "Ульяновск",
      point: "Гончарова, 24",
      dateStart: "15.06.2019 12:00",
      dateFinish: "17.06.2019 12:00",
      color: "Красный",
      image: elantra,
    },
    {
      car: "Hyndai, i30",
      city: "Ульяновск",
      point: "Гончарова, 24",
      dateStart: "15.06.2019 12:00",
      dateFinish: "17.06.2019 12:00",
      color: "Красный",
      image: elantra,
    },
  ];

  return (
    <section className="order__line">
      {orders.map((order) => (
        <ul className="order__line__container">
          <img src={order.image} className="car__image" />
          <li className="order__line__item">
            <div className="order__line__part__width">
              <div className="order__line__car">
                <span className="order__line__car__point">
                  <span>{order.car}</span> в <span>{order.city}</span> ,{" "}
                  {order.point}
                </span>
                <span className="order__line__car__date">
                  {order.dateStart} - {order.dateFinish}
                </span>
                <span className="order__line__car__color">
                  Цвет: <span>{order.color}</span>
                </span>
              </div>
            </div>
            <CheckOrder />
          </li>
          <li className="order__line__item">
            <span className="order__line__price">4 300 ₽</span>
          </li>

          <ButtonOrders />
        </ul>
      ))}
    </section>
  );
};

export default OrderLine;
