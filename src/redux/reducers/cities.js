const defaultState = {
  cities: [],
  newCity: {
    id: "",
    name: "",
  },
};

export const GET_CITIES = "getCities";
export const CREATE_CITY = "createCity";
export const EDIT_CITY = "editCity";

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };

    case CREATE_CITY:
      return {
        ...state,
        newCity: payload,
      };
    case EDIT_CITY:
      return {
        ...state,
        newCity: { ...state.newCity, name: payload },
      };

    default:
      return state;
  }
};
