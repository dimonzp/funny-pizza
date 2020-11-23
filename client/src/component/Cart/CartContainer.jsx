import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  changeQuantity,
  getFullCart,
  orderCalc,
  removeFromCart,
} from "../../store/cart/actions";
import Cart from "./Cart";

class CartContainer extends React.Component {
  componentDidMount() {
    this.props.getFullCart();
  }

  render() {
    const {
      cart,
      changeQuantity,
      orderCalc,
      totalOrder,
      getFullCart,
      removeFromCart,
    } = this.props;
    return (
      <Cart
        {...this.props}
        cart={cart}
        changeQuantity={changeQuantity}
        orderCalc={orderCalc}
        totalOrder={totalOrder}
        getFullCart={getFullCart}
        removeFromCart={removeFromCart}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  cart: state.cartPage.cart,
  totalOrder: state.cartPage.totalOrder,
});

export default compose(
  connect(mapStateToProps, {
    getFullCart,
    orderCalc,
    removeFromCart,
    changeQuantity,
  })
)(CartContainer);
