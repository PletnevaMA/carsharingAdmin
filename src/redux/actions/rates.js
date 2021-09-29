import { rateActions, emptyObject } from "../consts";
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
      .then((res) => dispatch({ type: rateActions.GET_RATES, payload: res.data }));
  } catch (e) {
    console.error(e);
  }
};

export const getRatesTypes = () => async (dispatch) => {
  try {
    await fetch(`${url}db/rateType`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: rateActions.GET_RATES_TYPES, payload: res.data }));
  } catch (e) {
    console.error(e);
  }
};


export const createRates = (newRate) => {
  return {
    type: rateActions.CREATE_RATE,
    payload: newRate,
  };
};

export const editName = (name) => {
  return {
    type: rateActions.EDIT_NAME,
    payload: name,
  };
};

export const editPrice = (price) => {
  return {
    type: rateActions.EDIT_PRICE,
    payload: price,
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
          createRates(emptyObject.emptyRate)
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
          createRates(emptyObject.emptyRate)
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
          createRates(emptyObject.emptyRate)
        );
      });
  } catch (e) {
    console.error(e);
  }
};