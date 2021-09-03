import React from "react";
import Menu from "./Menu/Menu";
import { Path } from "../../const";
import Orders from "../Orders/Orders";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const AdminPanel = () => {
  return (
    <main className="adminpanel">
      <Menu />
      <Header />
      <Switch>
        <Route path={Path.ORDERS} render={() => <Orders />} />
      </Switch>
      <Footer />
    </main>
  );
};

export default AdminPanel;
