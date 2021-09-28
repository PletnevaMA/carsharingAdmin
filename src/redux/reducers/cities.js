import { cityActions } from "../consts";

const defaultState = {
  cities: [],
  newCity: {
    id: "",
    name: "",
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case cityActions.GET_CITIES:
      return {
        ...state,
        cities: payload,
      };

    case cityActions.CREATE_CITY:
      return {
        ...state,
        newCity: payload,
      };
    case cityActions.EDIT_CITY:
      return {
        ...state,
        newCity: { ...state.newCity, name: payload },
      };

    default:
      return state;
  }
};
