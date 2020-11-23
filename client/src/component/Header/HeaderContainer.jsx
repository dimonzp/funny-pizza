import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadMe, loadLogout } from "../../store/auth/actions";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { isRegistrate, loadMe } = this.props;
    if (!isRegistrate) {
      loadMe();
    }
  }

  render() {
    const { email, loadMe, loadLogout, cart, isRegistrate } = this.props;
    return (
      <Header
        {...this.props}
        email={email}
        loadMe={loadMe}
        loadLogout={loadLogout}
        cart={cart}
        isRegistrate={isRegistrate}
      />
    );
  }
}

let mapStateToProps = (state) => {
  const { email, isRegistrate, cart } = state.authPage;
  return { email, isRegistrate, cart };
};

export default compose(connect(mapStateToProps, { loadMe, loadLogout }))(
  HeaderContainer
);
