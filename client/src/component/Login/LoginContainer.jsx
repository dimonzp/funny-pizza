import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadLogin, loadMe, setMessage } from "../../store/auth/actions";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    const { message, isRegistrate, loadLogin, setMessage, loadMe } = this.props;
    return (
      <Login
        {...this.props}
        message={message}
        isRegistrate={isRegistrate}
        loadLogin={loadLogin}
        setMessage={setMessage}
        loadMe={loadMe}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.authPage.message,
  isRegistrate: state.authPage.isRegistrate,
});

export default compose(
  connect(mapStateToProps, { loadLogin, setMessage, loadMe })
 
)(LoginContainer);
