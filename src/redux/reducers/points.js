const defaultState = {
  points: [],
  newPoint: {
    id: "",
    address: "",
    name: "",
    cityId: {
      name: "",
      id: "",
    },
  },
};

export const GET_POINTS = "getPoints";
export const CREATE_POINT = "createPoint";
export const EDIT_ADDRESS = 'editAddress';
export const EDIT_CITYPOINT = 'editCityOoint';
export const EDIT_POINT_NAME = 'editPointName';

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POINTS:
      return {
        ...state,
        points: payload,
      };
    case CREATE_POINT:
      return {
        ...state,
        newPoint: payload,
      };
      case EDIT_ADDRESS:
      return {
        ...state,
        newPoint: { ...state.newPoint, address: payload },
      };
    case EDIT_CITYPOINT:
      return {
        ...state,
        newPoint: { ...state.newPoint, cityId: payload },
      };

    case EDIT_POINT_NAME:
      return {
        ...state,
        newPoint: { ...state.newPoint, name: payload },
      };

    default:
      return state;
  }
};
