import { orderActions } from "../consts";
import { emptyObject } from "../consts";
import api from "../../components/api";

export const getOrders = (page, filter) => async (dispatch) => {
  try {
    await api
      .get(`db/order?&limit=3&page=${page}${filter}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: orderActions.GET_ORDERS_AMOUNT, payload: res.data.count });
        return res;
      })
      .then((res) =>
        dispatch({ type: orderActions.GET_ORDERS, payload: res.data.data })
      );
  } catch (e) {
    console.error(e);
  }
};

export const getOrdersStatus = () => async (dispatch) => {
  try {
    await api
      .get(`db/orderStatus`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) =>
        dispatch({ type: orderActions.GET_ORDERS_STATUS, payload: res.data.data })
      );
  } catch (e) {
    console.error(e);
  }
};

export const getOrdersAmount = (amount) => {
  return {
    type: orderActions.GET_ORDERS_AMOUNT,
    payload: amount,
  };
};

export const createOrder = (newOrder) => {
  return {
    type: orderActions.CREATE_ORDER,
    payload: newOrder,
  };
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await api.delete(`db/order/${id}`).finally((res) => {
      dispatch(createOrder(emptyObject.emptyOrder));
    });
  } catch (e) {
    console.error(e);
  }
};

export const editPage = (page) => {
  return {
    type: orderActions.EDIT_PAGE,
    payload: page,
  };
};

export const editPrice = (price) => {
  return {
    type: orderActions.EDIT_PRICE,
    payload: price,
  };
};

export const editCar = (car) => {
  return {
    type: orderActions.EDIT_CAR,
    payload: car,
  };
};

export const editStatus = (status) => {
  return {
    type: orderActions.EDIT_STATUS,
    payload: status,
  };
};
export const editCity = (city) => {
  return {
    type: orderActions.EDIT_CITY,
    payload: city,
  };
};

export const editPoint = (point) => {
  return {
    type: orderActions.EDIT_POINT,
    payload: point,
  };
};

export const editDateFrom = (date) => {
  return {
    type: orderActions.EDIT_DATE_FROM,
    payload: date,
  };
};

export const editDateTo = (date) => {
  return {
    type: orderActions.EDIT_DATE_TO,
    payload: date,
  };
};
export const editRate = (rate) => {
  return {
    type: orderActions.EDIT_RATE,
    payload: rate,
  };
};

export const editTank = (tank) => {
  return {
    type: orderActions.EDIT_TANK,
    payload: tank,
  };
};

export const editChair = (chair) => {
  return {
    type: orderActions.EDIT_CHAIR,
    payload: chair,
  };
};

export const editWheel = (wheel) => {
  return {
    type: orderActions.EDIT_WHEEL,
    payload: wheel,
  };
};
export const changeOrder = (order, id) => async (dispatch) => {
  try {
    await api
      .put(`db/order/${id}`, JSON.stringify(order), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(createOrder(emptyObject.emptyOrder));
      });
  } catch (e) {
    console.error(e);
  }
};

export const setCar = (car) => {
  return {
    type: orderActions.SET_CAR,
    payload: car,
  };
};

export const setCity = (city) => {
  return {
    type: orderActions.SET_CITY,
    payload: city,
  };
};

export const setStatus = (status) => {
  return {
    type: orderActions.SET_STATUS,
    payload: status,
  };
};
