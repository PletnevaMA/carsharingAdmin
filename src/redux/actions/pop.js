import {SET_POP, SET_POP_CREATE} from '../reducers/pop';

export const setPop = (bool) => {
    return {
      type: SET_POP,
      payload: bool,
    };
  };

  export const setPopCreate = (bool) => {
    return {
      type: SET_POP_CREATE,
      payload: bool,
    };
  };