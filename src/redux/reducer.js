import {Action} from '../const';

const initalState = {
    isAutoresUser: false
}

export default (state = initalState, action) => {
    switch (action.type) {
      case Action.LOGIN_USER:
        return {
          ...state,
          isAutoresUser: action.payload,
        };
      default:
        return state;
    }
  };