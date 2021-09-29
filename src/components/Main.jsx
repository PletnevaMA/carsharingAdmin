import React from "react";
import { Path } from "../const";
import {  Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login/Login";
import AdminPanel from "./AdminPanel/AdminPanel";

const Main = () => {
  const {isUserLogin} = useSelector((state) => state.user);
     if (isUserLogin) {
        return(
        <React.Fragment>
        <Route path={Path.MAIN} render={() => <AdminPanel />} />
        <Redirect to={Path.MAIN} />
      </React.Fragment>
       );        
    } else { 
        return(
            <React.Fragment>
            <Route path= {Path.LOGIN} exact render={() => <Login />} />
            <Redirect to= {Path.LOGIN} />
          </React.Fragment>
        );       
    }   
};

export default Main;
