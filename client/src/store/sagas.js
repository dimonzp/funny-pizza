import { takeEvery, put, call, all } from "redux-saga/effects";
import { authAPI, buyingAPI, productAPI } from "../api/api";
import {
  LOAD_AUTH,
  LOAD_LOGIN,
  LOAD_LOGOUT,
  LOAD_ME,
  resetLogoutData,
  setLoadMeData,
  setMessage,
} from "./auth/actions";
import {
  CHANGE_QUANTITY_IN_CART,
  CHECKOUT,
  GET_FULL_CART,
  pushToCart,
  REMOVE_FROM_CART,
} from "./cart/actions";
import {
  LOAD_PRODUCTS_BY_TYPE,
  LOAD_PRODUCT_BY_ID,
  setProductItem,
  setProducts,
} from "./product/actions";

//Loading array of products by type
function* workerLoadProducts(action) {
  const products = yield call(
    productAPI.getProductsByType,
    action.typeOfProduct
  );

  yield put(setProducts(products));
}

export function* watchLoadProducts() {
  yield takeEvery(LOAD_PRODUCTS_BY_TYPE, workerLoadProducts);
}

//Loading product by id
function* workerLoadProductItem(action) {
  const item = yield call(productAPI.getProduct, action.id);

  yield put(setProductItem(item));
}
export function* watchLoadProductItem() {
  yield takeEvery(LOAD_PRODUCT_BY_ID, workerLoadProductItem);
}

//Registration
function* workerRegistration(action) {
  const data = yield call(authAPI.registration, action.loginData);
  const dataMe = yield call(authAPI.me);
  if (data.message === "Success") {
    yield put(setLoadMeData(dataMe));
  } else yield put(setMessage(data.message, data.isRegistrate));
}

export function* watchRegistration() {
  yield takeEvery(LOAD_AUTH, workerRegistration);
}

//Login
function* workerLogin(action) {
  
  const data = yield call(authAPI.login, action.loginData);

  const dataMe = yield call(authAPI.me);
  if (data.message === "Success") {
    yield put(setLoadMeData(dataMe));
  } else yield put(setMessage(data.message));
}

export function* watchLogin() {
  
  yield takeEvery(LOAD_LOGIN, workerLogin);
  
}

//Logout
function* workerLogout(action) {
  yield call(authAPI.logout, action.login);
  yield put(resetLogoutData());
}

export function* watchLogout() {
  yield takeEvery(LOAD_LOGOUT, workerLogout);
}

//Check me login
function* workerMe() {
  const data = yield call(authAPI.me);

  if (data && data.email) {
    yield put(setLoadMeData(data));
  }
}
export function* watchMe() {
  yield takeEvery(LOAD_ME, workerMe);
}

// add product to cart on server
function* workerAddToCart(action) {
  const { product, changeQuantity, params } = action;
  const data = yield call(buyingAPI.addToCart, product, changeQuantity, params);
  const dataMe = yield call(authAPI.me);
  const products = yield call(buyingAPI.getFulCart);
  yield put(pushToCart(products));
  if (data.message === "Added successfully") {
    yield put(setLoadMeData(dataMe));
  }
}
export function* watchAddToCart() {
  yield takeEvery(CHANGE_QUANTITY_IN_CART, workerAddToCart);
}

// load for get full cart
function* workerLoadFullCart() {
  const products = yield call(buyingAPI.getFulCart);
  yield put(pushToCart(products));
}
export function* watchLoadFullCart() {
  yield takeEvery(GET_FULL_CART, workerLoadFullCart);
}

// remove product from cart
function* workerRemoveFromCart(action) {
  const data = yield call(buyingAPI.deleteFromCart, action.id);
  const dataMe = yield call(authAPI.me);
  const products = yield call(buyingAPI.getFulCart);
  yield put(pushToCart(products));
  if (data.message === "Delete successfully") {
    yield put(setLoadMeData(dataMe));
  }
}

export function* watchRemoveFromCart() {
  yield takeEvery(REMOVE_FROM_CART, workerRemoveFromCart);
}

// checkout and reset cart
function* workerCheckout(action) {
  const data = yield call(buyingAPI.checkout, action.order);
  const dataMe = yield call(authAPI.me);
  if (data.message === "Success") {
    
    yield put(setLoadMeData(dataMe));
  }
}

export function* watchCheckout() {
  yield takeEvery(CHECKOUT, workerCheckout);
}

export default function* rootSaga() {
  yield all([
    watchLoadFullCart(),
    watchLoadProductItem(),
    watchLoadProducts(),
    watchRemoveFromCart(),
    watchAddToCart(),
    watchCheckout(),
    watchRegistration(),
    watchLogin(),
    watchLogout(),
    watchMe(),
  ]);
}
