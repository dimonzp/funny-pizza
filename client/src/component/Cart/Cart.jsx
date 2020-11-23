import React from "react";
import { NavLink } from "react-router-dom";
import remove from "../../assets/button/delete.png";
import CheckoutContainer from "../Checkout/CheckoutContainer";
import s from "./Cart.module.sass";
import calculatePrice from "../../utils/getPrice";

class Cart extends React.Component {
  deleteItem(productId) {
    this.props.removeFromCart(productId);
  }

  render() {
    const { cart, orderCalc, changeQuantity, totalOrder } = this.props;
    if (cart.length !== 0) {
      orderCalc(cart);
      return (
        <div className={s.field}>
          <div></div>

          <div>
            <h1>Оформление заказа</h1>
            {cart.map((order) => {
              return (
                <div className={s.order}>
                  <img src={order.product.img} />
                  <div className={s.name}>{order.product.name}</div>
                  <span>
                    <span>
                      <button
                        className={s.btn}
                        onClick={() =>
                          changeQuantity(order.productId, false, {
                            size: order.params ? order.params.size : undefined,
                          })
                        }
                      >
                        <i>-</i>
                      </button>
                    </span>
                    <span>
                      <input
                        className={s.count}
                        min="1"
                        name="quantity"
                        value={order.quantity}
                      ></input>
                    </span>
                    <span>
                      <button
                        className={s.btn}
                        onClick={() =>
                          changeQuantity(order.productId, true, {
                            size: order.params ? order.params.size : undefined,
                          })
                        }
                      >
                        <i>+</i>
                      </button>
                    </span>
                  </span>
                  <div className={s.price}>{` ${
                    calculatePrice(order) * order.quantity
                  } грн`}</div>
                  <img
                    className={s.deleteItem}
                    onClick={() => this.deleteItem(order._id)}
                    src={remove}
                  />
                </div>
              );
            })}

            <div className={s.all}>
              <h3>Итого</h3>
              <h3>{totalOrder}</h3>
            </div>
            <CheckoutContainer />
          </div>

          <div></div>
        </div>
      );
    }

    return (
      <div className={s.oneOrder}>
        <div></div>

        <div>
          <h1>Корзина пуста</h1>

          <NavLink to={"/pizza"} activeClassName={s.submit} className={s.but}>
            Перейти к покупкам
          </NavLink>
        </div>

        <div></div>
      </div>
    );
  }
}

export default Cart;
