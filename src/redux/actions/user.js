import { userActions } from "../consts";
import api from "../../components/api";

export const userLogin = (
  isUserLogin,
  refresh_Token,
  access_Token,
  user_Id,
  isUserLoginFailed,
  basicKey
) => {
  return {
    type: userActions.USER_LOGIN,
    payload: {
      isUserLogin,
      refresh_token: refresh_Token,
      access_token: access_Token,
      user_id: user_Id,
      isUserLoginFailed,
      basicKey,
    },
  };
};

export const userAuthorize = (body, basicKey) => async (dispatch) => {
  try {
    await api
      .post(`auth/login`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicKey}`,
        },
      })

      .then((res) =>
        dispatch(
          userLogin(
            true,
            res.data.refresh_token,
            res.data.access_token,
            res.data.user_id,
            false,
            basicKey
          )
        )
      );
  } catch (e) {
    dispatch(userLogin(false, null, null, null, true));
    console.error(e);
  }
};

export const changeUserName = (value) => {
  return {
    type: userActions.CHANGE_USERNAME,
    payload: value,
  };
};

export const changePassword = (value) => {
  return {
    type: userActions.CHANGE_PASSWORD,
    payload: value,
  };
};
