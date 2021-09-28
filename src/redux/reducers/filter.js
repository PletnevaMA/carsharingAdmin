import { SET_FILTER } from "../consts";
const defaultState = {    
    filter: "",
  };
  
  
  
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
  