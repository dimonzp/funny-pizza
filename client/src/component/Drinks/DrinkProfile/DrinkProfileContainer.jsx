import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { loadProductById } from "../../../store/product/actions";
import DrinkProfile from "./DrinkProfile";

class DrinkProfileContainer extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      loadProductById
    } = this.props;
   loadProductById(id);
  }

  render() {
    return (
      <DrinkProfile {...this.props} productItem={this.props.productItem} />
    );
  }
}

let mapStateToProps = (state) => ({
  productItem: state.productPage.productItem,
});
loadProductById;
export default compose(
  connect(mapStateToProps, { loadProductById }),
  withRouter
)(DrinkProfileContainer);
