import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { checkout } from "../../store/cart/actions";
import Checkout from "./Checkout";

class CheckoutContainer extends React.Component {
  render() {
    const {
      cart,
      checkout,
      name,
      phone,
      street,
      house,
      flat,
      email,
    } = this.props;
    return (
      <Checkout
        {...this.props}
        cart={cart}
        checkout={checkout}
        name={name}
        phone={phone}
        street={street}
        house={house}
        flat={flat}
        email={email}
      />
    );
  }
}

let mapStateToProps = (state) => {
  const { cart, name, phone, street, house, flat, email } = state.authPage;
  return {
    cart,
    name,
    phone,
    street,
    house,
    flat,
    email,
  };
};

export default compose(connect(mapStateToProps, { checkout }))(
  CheckoutContainer
);
