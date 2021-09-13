import { SET_FILTER } from "../reducers/filter";

export const setFilter = (category) => ({
    type: SET_FILTER,
    payload: category
  })
  