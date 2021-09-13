const defaultState = {
  rates: [],
  newRate: {
    rateTypeId: {
      unit: "",
      name: "",
    },
    price: 0,
  },
};

export const GET_RATES = "getRates";
export const CREATE_RATE = "createRate";
export const EDIT_NAME = "editName";
export const EDIT_PRICE = "editPrice";
export const EDIT_UNIT = "editUnit";

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_RATES:
      return {
        ...state,
        rates: payload,
      };

    case CREATE_RATE:
      return {
        ...state,
        newRate: payload,
      };
    case EDIT_NAME:
      return {
        ...state,
        newRate: {
          ...state.newRate,
          rateTypeId: { ...state.newRate.rateTypeId, name: payload },
        },
      };
    case EDIT_PRICE:
      return {
        ...state,
        newRate: { ...state.newRate, price: payload },
      };
    case EDIT_PRICE:
      return {
        ...state,
        newRate: { ...state.newRate.rateTypeId, unit: payload },
      };

    default:
      return state;
  }
};
