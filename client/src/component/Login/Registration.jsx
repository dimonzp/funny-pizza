import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  email,
  matchPassword,
  maxLength,
  minLength,
  required,
} from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";

import style from "./Login.module.sass";

class Registration extends React.Component {
  state = {
    formD: null,
  };

  removeMessage = () => {
    const { setMessage } = this.props;
    setMessage(null);
  };

  onSubmit = (formData) => {
    const { loadAuth } = this.props;
    this.setState({ formD: formData });
    loadAuth(formData);
    setTimeout(this.removeMessage, 3000);
  };
  componentWillUnmount() {
    const { isRegistrate, loadLogin } = this.props;
    const { formD } = this.state;
    if (isRegistrate) {
      loadLogin(formD);
    }
  }

  render() {
    const { isRegistrate, message } = this.props;
    return (
      <div>
        {isRegistrate ? (
          <Redirect to={"/pizza"} />
        ) : (
          <div>
            <h1>Регистрация</h1>
            <LoginReduxForm onSubmit={this.onSubmit} message={message} />
          </div>
        )}
      </div>
    );
  }
}

const maxLength50 = maxLength(50);
const minLength8 = minLength(8);

const RegistrationForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, email, maxLength50]}
        />
      </div>
      <div>
        <Field
          placeholder={"Введите пароль"}
          name={"password"}
          component={Input}
          type="password"
          validate={[required, minLength8]}
        />
      </div>
      <div>
        <Field
          placeholder={"Повторите пароль"}
          name={"tryPassword"}
          component={Input}
          type="password"
          validate={matchPassword}
        />
      </div>
      {props.message && <h5>{props.message}</h5>}

      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        запомнить меня
      </div>
      <div>
        <button className={style.button}>Зарегистрироваться</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(RegistrationForm);
export default Registration;
