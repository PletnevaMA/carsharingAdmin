const defaultState = {
  newCar: {
    id: "",
    priceMax: 0,
    priceMin: 0,
    name: "",
    thumbnail: {
      path: "",
      size: 0,
      originalname: "",
      mimetype: "",      
    },
    description: "",
    categoryId: {
      name: "",
      description: "",
      id: "",
    },
    colors: [],
  },
};

export const CREATE_CAR = "createCar";
export const DELETE_COLOR = "deleteColor";
export const ADD_COLOR = "addColor";
export const EDIT_NAME_CAR = "editNameCar";
export const EDIT_DESCRIPTION_CAR = "editDescriptionCar";
export const EDIT_CATEGORY_CAR = "editCategoryCar";
export const EDIT_COLORS_CAR = "editColorsCar";
export const EDIT_PRICE_MIN_CAR = "editPriceMinCar";
export const EDIT_PRICE_MAX_CAR = "editPriceMaxCar";
export const EDIT_IMAGE_CAR = "editImageCar";

const neww = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CREATE_CAR:
      return {
        ...state,
        newCar: payload,
      };
    case DELETE_COLOR:
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
    case ADD_COLOR:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          colors: state.newCar.colors.concat(payload),
        },
      };
    case EDIT_NAME_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, name: payload },
      };
    case EDIT_DESCRIPTION_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, description: payload },
      };
    case EDIT_CATEGORY_CAR:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          categoryId: { ...state.newCar.categoryId, name: payload },
        },
      };
    case EDIT_COLORS_CAR:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          color: payload,
        },
      };
    case EDIT_PRICE_MIN_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, priceMin: payload },
      };
    case EDIT_PRICE_MAX_CAR:
      return {
        ...state,
        newCar: { ...state.newCar, priceMax: payload },
      };
    case EDIT_IMAGE_CAR: {
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
