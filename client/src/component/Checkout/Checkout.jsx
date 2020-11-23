import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { normalizePhone } from "../../utils/normalizePhone";
import { maxLength, minLength, required } from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";
import style from "./Checkout.module.sass";
import Modal from "react-modal";

const maxLength50 = maxLength(50);
const minValue18 = minLength(8);

class Checkout extends React.Component {
  state = {
    showModal: false,
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  onSubmit = (formData) => {
    const { cart, email } = this.props;
    formData = { ...formData, cart, email };
    this.handleOpenModal();
    // close modal
    setTimeout(this.props.checkout, 4000, formData);
  };

  render() {
    const { name, phone, street, house, flat } = this.props;
    return (
      <div>
        <Modal
          className={style.modal}
          isOpen={this.state.showModal}
          contentLabel="Checkout"
        >
          <div>
            <h2>Успех</h2>
            <div class={style.content}>Ваш заказ принят</div>

            <div className={style.allBut}>
              <button className={style.buto}>
                <NavLink to={"/pizza"}>Жду!</NavLink>
              </button>
            </div>
          </div>
        </Modal>
        <div>
          <LoginReduxForm
            onSubmit={this.onSubmit}
            name={name}
            phone={phone}
            street={street}
            house={house}
            flat={flat}
          />
        </div>
      </div>
    );
  }
}

class CheckoutForm extends React.Component {
  componentDidMount() {
    const { name, phone, street, house, flat, initialize } = this.props;
    initialize({
      name: name,
      phone: phone,
      street: street,
      house: house,
      flat: flat,
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <h5>Ваше имя</h5>
          <h5>Телефон</h5>
        </div>
        <div className={style.form}>
          <Field
            placeholder={"Имя"}
            name={"name"}
            component={Input}
            validate={[maxLength50, required]}
          />
          <Field
            placeholder={"099-000-0000"}
            name={"phone"}
            component={Input}
            validate={[maxLength50, required, minValue18]}
            normalize={normalizePhone}
          />
        </div>
        <div className={style.form}>
          <h5>Адресс</h5>
        </div>
        <div className={style.form}>
          <Field
            placeholder={"Улица"}
            name={"street"}
            component={Input}
            validate={[maxLength50, required]}
          />
          <Field
            placeholder={"Дом"}
            name={"house"}
            component={Input}
            validate={[maxLength50, required]}
          />
          <Field
            placeholder={"Квартира"}
            name={"flat"}
            component={Input}
            validate={[maxLength50]}
          />
        </div>
        <div className={style.form}>
          <h5>Время доставки</h5>
        </div>
        <div className={style.form}>
          <label>
            <Field
              name={"deliver"}
              component={"input"}
              value={"faster"}
              checked={"checked"}
              type="radio"
            />{" "}
            Как можно скорее
          </label>
          <label>
            <Field
              name={"deliver"}
              component={"input"}
              value={"otherTime"}
              type="radio"
            />{" "}
            На другое время
          </label>
        </div>
        <div className={style.form}>
          <h5>Способ оплаты</h5>
        </div>
        <div className={style.form}>
          <Field name="payType" component={"select"}>
            <option value="cash">Наличными</option>
            <option value="card">Карта</option>
          </Field>
        </div>
        <div className={style.form}>
          <h5>Комментарий</h5>
        </div>
        <div className={style.form}>
          <Field name="notes" component={"textarea"} />
        </div>
        <div className={style.form}>
          <label>
            <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
            Перезвонить мне
          </label>
        </div>

        <div>
          <button className={style.but}>Оформить заказ</button>
        </div>
      </form>
    );
  }
}

const LoginReduxForm = reduxForm({
  form: "checkout",
})(CheckoutForm);

export default Checkout;
