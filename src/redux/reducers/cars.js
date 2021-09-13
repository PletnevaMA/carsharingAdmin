
const defaultState = {  
  cars: []  
};

export const GET_CARS = 'getCars';

export default (state = defaultState, { type, payload }) => {
  switch (type) {    
    case GET_CARS:
      return {
        ...state,
        cars: payload,
      };
   
    default:
      return state;
  }
};
