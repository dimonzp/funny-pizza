import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadAuth, loadLogin, setMessage } from "../../store/auth/actions";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {
  render() {
    const { message, setMessage, isRegistrate, loadLogin } = this.props;
    return (
      <Registration
        {...this.props}
        message={message}
        setMessage={setMessage}
        isRegistrate={isRegistrate}
        loadLogin={loadLogin}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.authPage.message,
  isRegistrate: state.authPage.isRegistrate,
});

export default compose(
  connect(mapStateToProps, { loadAuth, loadLogin, setMessage })
)(RegistrationContainer);
