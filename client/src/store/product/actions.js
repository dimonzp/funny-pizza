export const SET_PRODUCTS = "SET_PRODUCTS";
export const LOAD_PRODUCTS_BY_TYPE = "LOAD_PRODUCTS_BY_TYPE";

export const SET_PRODUCT_ITEM = "SET_PRODUCT_ITEM";
export const LOAD_PRODUCT_BY_ID = "LOAD_PRODUCT_BY_ID";

export const CHANGE = "CHANGE";

export const setProducts = (products) => ({ type: SET_PRODUCTS, products });
export const loadProducts = (typeOfProduct) => ({ type: LOAD_PRODUCTS_BY_TYPE, typeOfProduct });

export const setProductItem = (item) => ({
  type: SET_PRODUCT_ITEM,
  item,
});
export const loadProductById = (id) => ({ type: LOAD_PRODUCT_BY_ID, id });

export const change = (change, id) => ({ type: CHANGE, change, id });
