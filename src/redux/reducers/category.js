const defaultState = {
  categories: [],
};

export const GET_CATEGORY = "getCategory";

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: payload,
      };
     

    default:
      return state;
  }
};
