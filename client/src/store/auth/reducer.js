import { RESET_LOGOUT_DATA, SET_LOAD_ME_DATA, SET_MESSAGE } from "./actions";

const initialState = {
  _id: null,
  email: null,
  name: null,
  phone: null,
  street: null,
  house: null,
  flat: null,
  password: null,
  message: null,
  cart: [],
  isRegistrate: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case SET_LOAD_ME_DATA:
      return {
        ...state,
        ...action.data,
        isRegistrate: true,
      };

    case RESET_LOGOUT_DATA:
      
      return {
        ...state,
        _id: null,
        email: null,
        name: null,
        phone: null,
        street: null,
        house: null,
        flat: null,
        password: null,
        message: null,
        cart: [],
        isRegistrate: false,
      };
    default:
      return state;
  }
};

export default authReducer;
