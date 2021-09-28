export const carActions = {
  CREATE_CAR: "createCar",
  DELETE_COLOR: "deleteColor",
  ADD_COLOR: "addColor",
  EDIT_NAME_CAR: "editNameCar",
  EDIT_DESCRIPTION_CAR: "editDescriptionCar",
  EDIT_CATEGORY_CAR: "editCategoryCar",
  EDIT_COLORS_CAR: "editColorsCar",
  EDIT_PRICE_MIN_CAR: "editPriceMinCar",
  EDIT_PRICE_MAX_CAR: "editPriceMaxCar",
  EDIT_IMAGE_CAR: "editImageCar",
  GET_CARS: "getCars",
};

export const cityActions = {
  GET_CITIES: "getCities",
  CREATE_CITY: "createCity",
  EDIT_CITY: "editCity",
};

export const orderActions = {
  GET_ORDERS: "getOrders",
  GET_ORDERS_STATUS: "getOrdersStatus",
  CREATE_ORDER: "createOrder",
  EDIT_PAGE: "editPage",
  GET_ORDERS_AMOUNT: "getOrdersAmount",
  EDIT_PRICE: "editPrice",
  EDIT_CAR: "editCar",
  EDIT_STATUS: "editStatus",
  EDIT_CITY: "editCity",
  EDIT_POINT: "editPoint",
  EDIT_DATE_FROM: "editDateFrom",
  EDIT_DATE_TO: "editDateTo",
  EDIT_RATE: "editRate",
  EDIT_TANK: "editTank",
  EDIT_CHAIR: "editChair",
  EDIT_WHEEL: "editWheel",
  SET_CAR: "setCar",
  SET_CITY: "setCity",
  SET_STATUS: "setStatus",
};

export const pointActions = {
  GET_POINTS: "getPoints",
  CREATE_POINT: "createPoint",
  EDIT_ADDRESS: "editAddress",
  EDIT_CITYPOINT: "editCityOoint",
  EDIT_POINT_NAME: "editPointName",
};

export const popActions = {
  SET_POP: "setPop",
  SET_POP_CREATE: "setPopCreate",
};

export const rateActions = {
  GET_RATES: "getRates",
  GET_RATES_TYPES: "getRatesTypes",
  CREATE_RATE: "createRate",
  EDIT_NAME: "editName",
  EDIT_PRICE: "editPrice",
};

export const userActions = {
  USER_LOGIN: "userAuthorize",
  CHANGE_USERNAME: "changeUserName",
  CHANGE_PASSWORD: "changePassword",
};

export const SET_FILTER = "setFilter";
export const GET_CATEGORY = "getCategory";

export const emptyObject = {
  emptyOrder: {
    orderStatusId: null,
    cityId: null,
    pointId: null,
    carId: null,
    color: "",
    dateFrom: new Date(),
    dateTo: new Date(),
    rateId: null,
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
  emptyCar: {
    id: "",
    priceMax: 0,
    priceMin: 0,
    name: "",
    thumbnail: null,
    description: "",
    categoryId: null,
    colors: [],
  },
  emptyCity: {
    id: "",
    name: "",
  },
  emptyPoint: {
    id: "",
    address: "",
    name: "",
    cityId: null,
  },
  emptyRate: {
    rateTypeId: null,
    price: 0,
  },
};
