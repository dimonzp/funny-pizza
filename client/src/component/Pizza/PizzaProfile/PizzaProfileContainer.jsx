import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { loadProductById } from "../../../store/product/actions";
import PizzaProfile from "./PizzaProfile";

class PizzaProfileContainer extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      loadProductById,
    } = this.props;
    loadProductById(id);
  }

  render() {
    const { productItem } = this.props;
    return <PizzaProfile {...this.props} productItem={productItem} />;
  }
}

const mapStateToProps = (state) => ({
  productItem: state.productPage.productItem,
});

export default compose(
  connect(mapStateToProps, { loadProductById }),
  withRouter
)(PizzaProfileContainer);
