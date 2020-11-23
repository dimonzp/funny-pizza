import React from "react";
import s from "./AddToCart.module.sass";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";

class AddToCart extends React.Component {
  state = {
    showModal: false,
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  addProduct = () => {
    const { isRegistrate, changeQuantity, product, size } = this.props;
    if (isRegistrate) {
      changeQuantity(product._id, true, {
        size: size,
      });
      this.handleOpenModal();
    }
  };

  render() {
    const { showModal } = this.state;
    const { product } = this.props;
    return (
      <div>
        <button
          onClick={this.addProduct}
          activeClassName={s.submit}
          className={s.but}
        >
          В корзину
        </button>
        <Modal
          className={s.modal}
          isOpen={showModal}
          contentLabel="Add To Cart Success"
        >
          <div>
            <h2>Добавленно в корзину</h2>
            <div className={s.content}>{product.name} Успешно добавленно</div>

            <div className={s.allBut}>
              <button
                className={s.buto}
                onClick={this.handleCloseModal}
              >
                Продолжить покупки
              </button>
              <button className={s.buto}>
                <NavLink to={"/cart"}>Оформить покупку</NavLink>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddToCart;
