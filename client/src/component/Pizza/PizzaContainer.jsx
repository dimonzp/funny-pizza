import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadProducts, change } from "../../store/product/actions";
import Pizza from "./Pizza";

class PizzaContainer extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts("pizza");
  }
  render() {
    const { products, change } = this.props;
    return <Pizza {...this.props} products={products} change={change} />;
  }
}

const mapStateToProps = (state) => ({
  products: state.productPage.products,
  onChange: state.productPage.onChange,
});
export default compose(connect(mapStateToProps, { loadProducts, change }))(
  PizzaContainer
);
