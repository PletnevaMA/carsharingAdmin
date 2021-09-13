const defaultState = {
  isUserLogin: false,
  password: "",
  username: "",
  refresh_Token: null,
  access_Token: null,
  user_Id: null,
  isUserLoginFailed: false,
  basicKey: null,  
};

export const USER_LOGIN = "userAuthorize";
export const CHANGE_USERNAME = 'changeUserName';
export const CHANGE_PASSWORD = 'changePassword';

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isUserLogin: payload.isUserLogin,
        refresh_Token: payload.refresh_token,
        access_Token: payload.access_token,
        user_Id: payload.user_id,
        isUserLoginFailed: payload.isUserLoginFailed,
        basicKey: payload.basicKey,
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    default:
      return state;
  }
};
