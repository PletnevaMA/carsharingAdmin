import { pointActions, emptyObject } from "../consts";
import { url } from "../../const";
import api from "../../components/api";

export const getPoints = () => async (dispatch) => {
  try {
    await fetch(`${url}db/point`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: pointActions.GET_POINTS, payload: res.data }));
  } catch (e) {
    console.error(e);
  }
};

export const createPoint = (newPoint) => {
  return {
    type: pointActions.CREATE_POINT,
    payload: newPoint,
  };
};

export const editAddress = (adress) => {
  return {
    type: pointActions.EDIT_ADDRESS,
    payload: adress,
  };
};

export const editCityPoint = (city) => {
  return {
    type: pointActions.EDIT_CITYPOINT,
    payload: city,
  };
};

export const editPointName = (name) => {
  return {
    type: pointActions.EDIT_POINT_NAME,
    payload: name,
  };
};

export const deletePoint = (id) => async (dispatch) => {
  try {
    await api
      .delete(`db/point/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(
          createPoint(emptyObject.emptyPoint)
        );
      });
  } catch (e) {
    console.error(e);
  }
};

export const changePoint = (point, id) => async (dispatch) => {
  try {
    await fetch(`${url}db/point/${id}`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(point),
    }).finally((res) => {
      dispatch(
        createPoint(emptyObject.emptyPoint)
      );
    });
  } catch (e) {
    console.error(e);
  }
};

export const addPoint = (point) => async (dispatch) => {
  try {
    await api
      .post(`db/point/`, JSON.stringify(point),{
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(
          createPoint(emptyObject.emptyPoint)
        );
      });
  } catch (e) {
    console.error(e);
  }
};
