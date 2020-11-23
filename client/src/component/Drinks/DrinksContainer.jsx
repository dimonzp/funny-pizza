import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadProducts } from "../../store/product/actions";
import Drink from "./Drink";

class DrinksContainer extends React.Component {
  componentDidMount() {
    this.props.loadProducts("drink");
  }

  render() {
    return <Drink {...this.props} products={this.props.products} />;
  }
}

let mapStateToProps = (state) => ({
  products: state.productPage.products,
});

export default compose(connect(mapStateToProps, { loadProducts }))(
  DrinksContainer
);
