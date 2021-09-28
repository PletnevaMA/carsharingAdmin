import { popActions } from "../consts";

export const setPop = (bool) => {
    return {
      type: popActions.SET_POP,
      payload: bool,
    };
  };

  export const setPopCreate = (bool) => {
    return {
      type: popActions.SET_POP_CREATE,
      payload: bool,
    };
  };