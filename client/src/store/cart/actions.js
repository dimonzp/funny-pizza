export const CHANGE_QUANTITY_IN_CART = "CHANGE_QUANTITY_IN_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const PUSH_TO_CART = "PUSH_TO_CART";
export const ORDER_CALC = "ORDER_CALC";

export const GET_FULL_CART = "GET_FULL_CART";
export const CHECKOUT = "CHECKOUT";
// for watcher
export const getFullCart = () => ({type: GET_FULL_CART})
export const changeQuantity = (product, changeQuantity, params) => ({ type: CHANGE_QUANTITY_IN_CART, product, changeQuantity, params });
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const pushToCart = (product) => ({type: PUSH_TO_CART, product})

export const checkout = (order) => ({ type: CHECKOUT, order });

export const orderCalc = (cart) => ({ type: ORDER_CALC, cart });
