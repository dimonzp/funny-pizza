import { ORDER_CALC, PUSH_TO_CART } from "./actions";
import calculatePrice from "../../utils/getPrice";

const initialState = {
  totalOrder: 0,
  cart: [],
};



export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_TO_CART:
      return { ...state, cart: action.product };
    case ORDER_CALC:
     
      let totalOrder = 0;
      action.cart.map((item) => {
        totalOrder += calculatePrice(item) * item.quantity;
      });
      return { ...state, totalOrder };
    default:
      return state;
  }
};

export default cartReducer;
