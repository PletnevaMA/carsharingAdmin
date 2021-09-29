import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose , combineReducers} from "redux";
import thunk from "redux-thunk";
import root from './redux/root';
import "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import api from "./components/api";
import {appId} from './const';

const store = createStore(
  combineReducers({...root}),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  api.interceptors.request.use((config) => {
    if (store.getState().user.access_Token) {
      config.headers.Authorization = `Bearer ${
        store.getState().user.access_Token
      }`;
    }

    config.headers["X-Api-Factory-Application-Id"] = appId;
    return config;
  });
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
