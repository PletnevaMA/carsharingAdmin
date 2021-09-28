import React from "react";
import Menu from "./Menu/Menu";
import { Path } from "../../const";
import Orders from "../Orders/Orders";
import Cars from "../Cars/Cars";

import { Switch, Route } from "react-router-dom";
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
        <Route path={Path.CAR} component={CarCreate} />
        <Route path={Path.ORDER} component={OrderCreate} />
        <Route path={Path.ORDERS} component={Orders} />
        <Route path={Path.CARLIST} component={Cars} />
        <Route path={Path.CITIES} component={Cities} />
        <Route path={Path.POINTS} component={Points} />
        <Route path={Path.RATES} component={Rates} />
      </Switch>
      <Footer />
    </main>
  );
};

export default AdminPanel;
