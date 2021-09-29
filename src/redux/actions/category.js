import { GET_CATEGORY } from "../consts";
import {url} from "../../const";

export const getCategory = () => async (dispatch) => {
  try {
    await fetch (`${url}db/category`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    }).then((res) =>  res.json())
      .then((res) => dispatch({ type: GET_CATEGORY, payload: res.data }))
    
  } catch (e) {
    console.error(e);
  }
};

