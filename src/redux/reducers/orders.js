const defaultState = {
  orders: [],
  newOrder: {
    orderStatusId: {
      id: "",
      name: "",
    },
    cityId: {
      id: "",
      name: "",
    },
    pointId: {
      id: "",
      cityId: "",
      address: "",
      name: "",
    },
    carId: {
      id: "",
      name: "",
      priceMin: 0,
      priceMax: 0,
      description: "",
      colors: [],
      thumbnail: {
        path: "",
        size: 0,
        mimetype: "",
        originalname: "",
      },
      categoryId: {
        id: "",
        name: "",
      },
    },
    color: "",
    dateFrom: new Date(),
    dateTo: new Date(),
    rateId: {
      rateTypeId:{
        id: "",
        name: "",
      }
    },
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
  },
};

export const GET_ORDERS = "getOrders";
export const CREATE_ORDER = "createOrder";
export const EDIT_PRICE = "editPrice";
export const EDIT_CAR = "editCar";
export const EDIT_CITY = "editCity";

export const EDIT_DATE_FROM = "editDateFrom";
export const EDIT_DATE_TO = "editDateTo";

export const EDIT_RATE = "editRate";

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        newOrder: payload,
      };
    case EDIT_PRICE:
      return {
        ...state,
        newOrder: { ...state.newOrder, price: payload },
      };
    case EDIT_CITY:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          cityId: { ...state.newOrder.cityId, name: payload },
        },
      };
    case EDIT_CAR:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          carId: { ...state.newOrder.carId, name: payload },
        },
      };
    case EDIT_DATE_FROM:
      return {
        ...state,
        newOrder: { ...state.newOrder, dateFrom: payload },
      };
    case EDIT_DATE_TO:
      return {
        ...state,
        newOrder: { ...state.newOrder, dateTo: payload },
      };
      case EDIT_RATE:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          rateId: { ...state.newOrder.rateId,
             rateTypeId:{...state.newOrder.rateTypeId, name: payload }},
        },
      };

    default:
      return state;
  }
};
