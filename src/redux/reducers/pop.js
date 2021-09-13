const defaultState = {
   pop: false,
   popCreate: false
  };
  
  export const SET_POP = 'setPop';
  export const SET_POP_CREATE = 'setPopCreate';
  
  export default (state = defaultState, { type, payload }) => {
    switch (type) {
      case SET_POP:
        return {
          ...state,
          pop: payload,
        };
        case SET_POP_CREATE:
        return {
          ...state,
          popCreate: payload,
        };
      default:
        return state;
    }
  };