import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeQuantity } from "../../../store/cart/actions";
import AddToCart from "./AddToCart";

class AddToCartContainer extends React.Component {
  render() {
    const { changeQuantity, product, isRegistrate } = this.props;
    return (
      <AddToCart
        {...this.props}
        changeQuantity={changeQuantity}
        product={product}
        isRegistrate={isRegistrate}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  isRegistrate: state.authPage.isRegistrate,
});

export default compose(connect(mapStateToProps, { changeQuantity }))(
  AddToCartContainer
);
