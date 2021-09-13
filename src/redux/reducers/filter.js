const defaultState = {    
    filter: "",
  };
  
  export const SET_FILTER = "setFilter";
  
  export default (state = defaultState, { type, payload }) => {
    switch (type) {
      case SET_FILTER:
        return {
          ...state,
          filter: payload,
        };          
      default:
        return state;
    }
  };
  