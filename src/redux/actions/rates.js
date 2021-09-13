import {
  GET_RATES,
  CREATE_RATE,
  EDIT_NAME,
  EDIT_PRICE,
  EDIT_UNIT
} from "../reducers/rates";
import { url } from "../../const";
import api from "../../components/api";

export const getRates = () => async (dispatch) => {
  try {
    await fetch(`${url}db/rate`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_RATES, payload: res.data }));
  } catch (e) {
    console.error(e);
  }
};

export const createRates = (newRate) => {
  return {
    type: CREATE_RATE,
    payload: newRate,
  };
};

export const editName = (name) => {
  return {
    type: EDIT_NAME,
    payload: name,
  };
};

export const editPrice = (price) => {
  return {
    type: EDIT_PRICE,
    payload: price,
  };
};

export const editUnit = (unit) => {
  return {
    type: EDIT_UNIT,
    payload: unit,
  };
};

export const changeRate = (rate, id) => async (dispatch) => {
  try {
    await api
      .put(`db/rate/${id}`, JSON.stringify(rate), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(
          createRates({
            rateTypeId: {
              unit: "",
              name: "",
            },
            price: 0,
          })
        );
      });
  } catch (e) {
    console.error(e);
  }
};

export const deleteRate = (id) => async (dispatch) => {
  try {
    await api
      .delete(`db/rate/${id}`,  {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(
          createRates({
            rateTypeId: {
              unit: "",
              name: "",
            },
            price: 0,
          })
        );
      });
  } catch (e) {
    console.error(e);
  }
};

export const createRate = (rate) => async (dispatch) => {
  try {
    await api
      .post(`db/rate/`, JSON.stringify(rate), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(
          createRates({
            rateTypeId: {
              unit: "",
              name: "",
            },
            price: 0,
          })
        );
      });
  } catch (e) {
    console.error(e);
  }
};