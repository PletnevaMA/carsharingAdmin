import {
  GET_ORDERS,
  CREATE_ORDER,
  EDIT_PRICE,
  EDIT_CAR,
  EDIT_CITY,
  EDIT_DATE_FROM,
  EDIT_DATE_TO,
  EDIT_RATE,
} from "../reducers/orders";
import api from "../../components/api";

export const getOrders = () => async (dispatch) => {
  try {
    await api
      .get(`db/order?&limit=3`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => dispatch({ type: GET_ORDERS, payload: res.data.data }));
  } catch (e) {
    console.error(e);
  }
};

export const createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    payload: order,
  };
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    await api.delete(`db/order/${id}`)
    .finally((res) => {
      dispatch(createOrder({
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
          rateTypeId:{
            id: "",
            name: "",
          }
        },
        price: 0,
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false,
      }));
    })
    ;
  } catch (e) {
    console.error(e);
  }
};

export const editPrice = (price) => {
  return {
    type: EDIT_PRICE,
    payload: price,
  };
};

export const editCar = (car) => {
  return {
    type: EDIT_CAR,
    payload: car,
  };
};

export const editCity = (city) => {
  return {
    type: EDIT_CITY,
    payload: city,
  };
};

export const editDateFrom = (date) => {
  return {
    type: EDIT_DATE_FROM,
    payload: date,
  };
};

export const editDateTo = (date) => {
  return {
    type: EDIT_DATE_TO,
    payload: date,
  };
};
export const editRate = (rate) => {
  return {
    type: EDIT_RATE,
    payload: rate,
  };
};

export const changeOrder = (order, id) => async (dispatch) => {
  try {
    await api.put(`db/order/${id}`,  JSON.stringify(order), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(createOrder({
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
            rateTypeId:{
              id: "",
              name: "",
            }
          },
          price: 0,
          isFullTank: false,
          isNeedChildChair: false,
          isRightWheel: false,
        }));
      })
      ;
      
  } catch (e) {
    console.error(e);
  }
};

