import { GET_CARS } from "../reducers/cars";
import {url} from "../../const";


export const getCars = () => async (dispatch) => {
  try {
    await fetch (`${url}db/car?&limit=30`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    }).then((res) =>  res.json())
      .then((res) => dispatch({ type: GET_CARS, payload: res.data }))
    
  } catch (e) {
    console.error(e);
  }
};
