import {
  CREATE_CAR,
  DELETE_COLOR,
  ADD_COLOR,
  EDIT_NAME_CAR,
  EDIT_DESCRIPTION_CAR,
  EDIT_CATEGORY_CAR,
  EDIT_COLORS_CAR,
  EDIT_PRICE_MIN_CAR, 
  EDIT_PRICE_MAX_CAR, 
  EDIT_IMAGE_CAR,
  EDIT_DESCRIPTION
} from "../reducers/carCreate";
import api from '../../components/api';

export const createCar = (car) => {
  return {
    type: CREATE_CAR,
    payload: car,
  };
};

export const deleteColor = (color) => {
  return {
    type: DELETE_COLOR,
    payload: color,
  };
};

export const addColor = (value) => {
  return {
    type: ADD_COLOR,
    payload: value,
  };
};

export const editNameCar = (name) => {
  return {
    type: EDIT_NAME_CAR,
    payload: name,
  };
};

export const editDescriptionCar = (description) => {
  return {
    type: EDIT_DESCRIPTION_CAR,
    payload: description,
  };
};

export const editCategoryCar = (category) => {
  return {
    type: EDIT_CATEGORY_CAR,
    payload: category,
  };
};

export const editColorsCar = (color) => {
  return {
    type: EDIT_COLORS_CAR,
    payload: color,
  };
};

export const editPriceMinCar = (price) => {
  return {
    type: EDIT_PRICE_MIN_CAR,
    payload: price,
  };
};

export const editPriceMaxCar = (price) => {
  return {
    type: EDIT_PRICE_MAX_CAR,
    payload: price,
  };
};


export const editImageCar = (image) => {
  return {
    type: EDIT_IMAGE_CAR,
    payload: image,
  };
};

export const changeCar = (car, id) => async (dispatch) => {
  try {
    await api.put(`db/car/${id}`,  JSON.stringify(car), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(createCar({
          id: "",
          priceMax: 0,
          priceMin: 0,
          name: "",
          thumbnail: {
            size: 0,
            originalname: "",
            mimetype: "",
            path: "",
          },
          description: "",
          categoryId: {
            name: "",
            description: "",
            id: "",
          },
          colors: []
        }));
      })
      ;
  } catch (e) {
    console.error(e);
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    await api.delete(`db/car/${id}`,  {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .finally((res) => {
        dispatch(createCar({
          id: "",
          priceMax: 0,
          priceMin: 0,
          name: "",
          thumbnail: {
            size: 0,
            originalname: "",
            mimetype: "",
            path: "",
          },
          description: "",
          categoryId: {
            name: "",
            description: "",
            id: "",
          },
          colors: []
        }));
      })
      ;
  } catch (e) {
    console.error(e);
  }
};
