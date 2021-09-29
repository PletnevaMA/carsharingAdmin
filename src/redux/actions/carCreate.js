import { carActions, emptyObject} from '../consts';
import api from '../../components/api';

export const createCar = (car) => {
  return {
    type: carActions.CREATE_CAR,
    payload: car,
  };
};

export const deleteColor = (color) => {
  return {
    type: carActions.DELETE_COLOR,
    payload: color,
  };
};

export const addColor = (value) => {
  return {
    type: carActions.ADD_COLOR,
    payload: value,
  };
};

export const editNameCar = (name) => {
  return {
    type: carActions.EDIT_NAME_CAR,
    payload: name,
  };
};

export const editDescriptionCar = (description) => {
  return {
    type: carActions.EDIT_DESCRIPTION_CAR,
    payload: description,
  };
};

export const editCategoryCar = (category) => {
  return {
    type: carActions.EDIT_CATEGORY_CAR,
    payload: category,
  };
};

export const editColorsCar = (color) => {
  return {
    type: carActions.EDIT_COLORS_CAR,
    payload: color,
  };
};

export const editPriceMinCar = (price) => {
  return {
    type: carActions.EDIT_PRICE_MIN_CAR,
    payload: price,
  };
};

export const editPriceMaxCar = (price) => {
  return {
    type: carActions.EDIT_PRICE_MAX_CAR,
    payload: price,
  };
};


export const editImageCar = (image) => {
  return {
    type: carActions.EDIT_IMAGE_CAR,
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
        dispatch(createCar(emptyObject.emptyCar));
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
        dispatch(createCar(emptyObject.emptyCar));
      })
      ;
  } catch (e) {
    console.error(e);
  }
};

export const addCar = (car) => async (dispatch) => {
  try {
    return await api
      .post(`db/car/`, JSON.stringify(car), {
        headers: { "Content-Type": "application/json" },
      })
      .finally((res) => {
        dispatch(createCar(emptyObject.emptyCar));
      })
      ;
  } catch (e) {
    console.error(e);
  }
};
