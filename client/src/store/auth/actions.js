//For registration
export const LOAD_AUTH = "LOAD_AUTH";
export const SET_MESSAGE = "LOAD_MESSAGE";

//For login
export const LOAD_LOGIN = "LOAD_LOGIN";

//For checkMe login
export const LOAD_ME = "LOAD_ME";
export const SET_LOAD_ME_DATA = "SET_LOAD_ME_DATA";

//for logout
export const LOAD_LOGOUT = "LOAD_LOGOUT";
export const RESET_LOGOUT_DATA = "RESET_LOGOUT_DATA";

//action for watcher
export const loadAuth = (loginData) => ({ type: LOAD_AUTH, loginData });
export const loadLogin = (loginData) => ({ type: LOAD_LOGIN, loginData });
export const loadLogout = (login) => ({ type: LOAD_LOGOUT, login });
export const loadMe = () => ({ type: LOAD_ME });

//action
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});

export const setLoadMeData = (data) => ({
  type: SET_LOAD_ME_DATA,
  data,
});

export const resetLogoutData = () => ({
  type: RESET_LOGOUT_DATA,
});
