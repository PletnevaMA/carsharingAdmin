import { rateActions } from "../consts";
const defaultState = {
  rates: [],
  ratesTypes: [],
  newRate: {
    rateTypeId: null,
    price: 0,
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case rateActions.GET_RATES:
      return {
        ...state,
        rates: payload,
      };

    case rateActions.GET_RATES_TYPES:
      return {
        ...state,
        ratesTypes: payload,
      };

    case rateActions.CREATE_RATE:
      return {
        ...state,
        newRate: payload,
      };
    case rateActions.EDIT_NAME:
      return {
        ...state,
        newRate: { ...state.newRate, rateTypeId: payload },
      };
    case rateActions.EDIT_PRICE:
      return {
        ...state,
        newRate: { ...state.newRate, price: payload },
      };

    default:
      return state;
  }
};
