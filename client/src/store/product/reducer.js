import { CHANGE, SET_PRODUCTS, SET_PRODUCT_ITEM } from "./actions";

const initialState = {
  products: [],
  productItem: {
    composition: [],
    variableProduct: [{}, {}, {}],
    
  },
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
    
      return { ...state, products: action.products };
    }

    case SET_PRODUCT_ITEM: {

      return { ...state, productItem: action.item };
    }
    case CHANGE: {
      const productWithPrice = state.products.map((el) => {
        if (el._id == action.id) {
          return (el = { ...el, price: action.change });
        }
        return el;
      });

      return { ...state, products: productWithPrice };
    }
    default:
      return state;
  }
};

export default productReducer;
