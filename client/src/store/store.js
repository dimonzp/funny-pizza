import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import authReducer from './auth/reducer';
import cartReducer from './cart/reducer';
import productReducer from './product/reducer';

const { createStore, combineReducers, applyMiddleware } = require('redux');

const reducers = combineReducers({
  authPage: authReducer,
  cartPage: cartReducer,
  productPage: productReducer,
  form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
