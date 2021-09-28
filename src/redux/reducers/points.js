import { pointActions } from "../consts";
const defaultState = {
  points: [],
  newPoint: {
    id: "",
    address: "",
    name: "",
    cityId: null,
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case pointActions.GET_POINTS:
      return {
        ...state,
        points: payload,
      };
    case pointActions.CREATE_POINT:
      return {
        ...state,
        newPoint: payload,
      };
    case pointActions.EDIT_ADDRESS:
      return {
        ...state,
        newPoint: { ...state.newPoint, address: payload },
      };
    case pointActions.EDIT_CITYPOINT:
      return {
        ...state,
        newPoint: { ...state.newPoint, cityId: payload },
      };

    case pointActions.EDIT_POINT_NAME:
      return {
        ...state,
        newPoint: { ...state.newPoint, name: payload },
      };

    default:
      return state;
  }
};
