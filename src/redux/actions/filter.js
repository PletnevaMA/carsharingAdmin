import { SET_FILTER } from "../consts";

export const setFilter = (category) => ({
    type: SET_FILTER,
    payload: category
  })
  