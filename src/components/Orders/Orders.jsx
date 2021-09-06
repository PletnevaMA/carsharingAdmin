import React from "react";
import "./Orders.scss";
import OrderLine from "./OrderLine/OrderLine";
import Selection from "./Selection/Selection";
import Pagination from "./Pagination/Pagination";

const Orders = () => {
  return (
    <div className="orders">
      <div className="orders__container">
        <a className="orders__title">Заказы</a>
        <div className="orders__block">
          <Selection />
          <div className="orders__line">
            <OrderLine />
          </div>
          <div className="orders__pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
