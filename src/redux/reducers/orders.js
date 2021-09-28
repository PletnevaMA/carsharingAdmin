import { orderActions } from "../consts";
const defaultState = {
  orders: [],
  orderStatus: [],
  car: "",
  city: "",
  status: "",
  page: 1,
  amountOrders: 0,
  newOrder: {
    orderStatusId: null,
    cityId: null,
    pointId:null,
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
  
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case orderActions.GET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case orderActions.GET_ORDERS_AMOUNT:
      return {
        ...state,
        amountOrders: payload,
      };
    case orderActions.GET_ORDERS_STATUS:
      return {
        ...state,
        orderStatus: payload,
      };
    case orderActions.CREATE_ORDER:
      return {
        ...state,
        newOrder: payload,
      };
    case orderActions.EDIT_PAGE:
      return {
        ...state,
        page: payload,
      };
    case orderActions.EDIT_PRICE:
      return {
        ...state,
        newOrder: { ...state.newOrder, price: payload },
      };
    case orderActions.EDIT_CITY:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          cityId: { ...state.newOrder.cityId, id: payload },
        },
      };
    case orderActions.EDIT_POINT:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          pointId: { ...state.newOrder.pointId, id: payload },
        },
      };
    case orderActions.EDIT_CAR:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          carId: { ...state.newOrder.carId, id: payload },
        },
      };
    case orderActions.EDIT_STATUS:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          orderStatusId: { ...state.newOrder.orderStatusId, id: payload },
        },
      };
    case orderActions.EDIT_DATE_FROM:
      return {
        ...state,
        newOrder: { ...state.newOrder, dateFrom: payload },
      };
    case orderActions.EDIT_DATE_TO:
      return {
        ...state,
        newOrder: { ...state.newOrder, dateTo: payload },
      };
    case orderActions.EDIT_RATE:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          rateId: {
            ...state.newOrder.rateId,
            rateTypeId: { ...state.newOrder.rateTypeId, id: payload },
          },
        },
      };
    case orderActions.EDIT_TANK:
      return {
        ...state,
        newOrder: { ...state.newOrder, isFullTank: payload },
      };
    case orderActions.EDIT_CHAIR:
      return {
        ...state,
        newOrder: { ...state.newOrder, isNeedChildChair: payload },
      };
    case orderActions.EDIT_WHEEL:
      return {
        ...state,
        newOrder: { ...state.newOrder, isRightWheel: payload },
      };
    case orderActions.SET_CAR:
      return {
        ...state,
        car: payload,
      };
    case orderActions.SET_CITY:
      return {
        ...state,
        city: payload,
      };
    case orderActions.SET_STATUS:
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};
