import { GET_CITIES, CREATE_CITY, EDIT_CITY} from "../reducers/cities";
import {url} from "../../const";
import api from '../../components/api';

export const getCities = () => async (dispatch) => {
  try {
    await fetch (`${url}db/city`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    }).then((res) =>  res.json())
      .then((res) => dispatch({ type: GET_CITIES, payload: res.data }))
    
  } catch (e) {
    console.error(e);
  }
};


export const changeCity = (city, id) => async (dispatch) => {
  try {
    return await api
      .put(`db/city/${id}`, JSON.stringify(city), {
        headers: { "Content-Type": "application/json" },
      })
      .finally((res) => {
        dispatch(
          createCity({
            id: "",
            name: "",
          })
        );
      });
  } catch (e) {
    console.error(e);
  }
};

export const deleteCity = ( id) => async (dispatch) => {
  try {
    return await api
      .delete(`db/city/${id}`,  {
        headers: { "Content-Type": "application/json" },
      })
      .finally((res) => {
        dispatch(
          createCity({
            id: "",
            name: "",
          })
        );
      });
  } catch (e) {
    console.error(e);
  }
};
export const addCity = (city) => async (dispatch) => {
  try {
    return await api
      .post(`db/city/`, JSON.stringify(city), {
        headers: { "Content-Type": "application/json" },
      })
      .finally((res) => {
        dispatch(
          createCity({
            id: "",
            name: "",
          })
        );
      });
  } catch (e) {
    console.error(e);
  }
};

export const createCity = (newCity) => {
    return {
      type: CREATE_CITY,
      payload: newCity,
    };
  };

  export const editCity = (city) => {
    return {
      type: EDIT_CITY,
      payload: city,
    };
  };

