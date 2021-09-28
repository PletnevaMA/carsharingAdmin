import { carActions } from "../consts";
const defaultState = {
  newCar: {
    id: "",
    priceMax: 0,
    priceMin: 0,
    name: "",
    thumbnail: null,
    description: "",
    categoryId: null,
    colors: [],
  },
};

const neww = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case carActions.CREATE_CAR:
      return {
        ...state,
        newCar: payload,
      };
    case carActions.DELETE_COLOR:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          colors: neww.concat(
            state.newCar.colors.slice(0, payload),
            state.newCar.colors.slice(payload + 1)
          ),
        },
      };
    case carActions.ADD_COLOR:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          colors: [...state.newCar.colors, payload],
        },
      };
    case carActions.EDIT_NAME_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, name: payload },
      };
    case carActions.EDIT_DESCRIPTION_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, description: payload },
      };
    case carActions.EDIT_CATEGORY_CAR:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          categoryId: { ...state.newCar.categoryId, id: payload },
        },
      };
    case carActions.EDIT_COLORS_CAR:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          color: payload,
        },
      };
    case carActions.EDIT_PRICE_MIN_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, priceMin: payload },
      };
    case carActions.EDIT_PRICE_MAX_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, priceMax: payload },
      };
    case carActions.EDIT_IMAGE_CAR: {
      return {
        ...state,
        newCar: {
          ...state.newCar,
          thumbnail: {
            path: payload.path,
            size: payload.size,
            mimetype: payload.mimetype,
            originalname: payload.originalname,
          },
        },
      };
    }

    default:
      return state;
  }
};
