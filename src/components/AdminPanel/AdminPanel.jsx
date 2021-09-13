import React from "react";
import Menu from "./Menu/Menu";
import { Path } from "../../const";
import Orders from "../Orders/Orders";
import Cars from "../Cars/Cars";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cities from "../Cities/Cities";
import Points from "../Points/Points";
import Rates from "../Rates/Rates";
import CarCreate from "../CarCreate/CarCreate";
import OrderCreate from "../OrderCreate/OrderCreate";

const AdminPanel = () => {
  return (
    <main className="adminpanel">
      <Menu />
      <Header />
      <Switch>
        <Route path={Path.CAR} render={() => <CarCreate />} />
        <Route path={Path.ORDER} render={() => <OrderCreate />} />
        <Route path={Path.ORDERS} render={() => <Orders />} />
        <Route path={Path.CARLIST} render={() => <Cars />} />
        <Route path={Path.CITIES} render={() => <Cities />} />
        <Route path={Path.POINTS} render={() => <Points />} />
        <Route path={Path.RATES} render={() => <Rates />} />
      </Switch>
      <Footer />
    </main>
  );
};

export default AdminPanel;
