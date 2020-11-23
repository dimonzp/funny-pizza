import React from "react";
import { NavLink } from "react-router-dom";
import AddToCartContainer from "../common/addToCartButton/AddToCartContainer";
import s from "../Product.module.sass";

class Pizza extends React.Component {
  state = {
    params: {},
  };

  componentDidUpdate() {
    const { params } = this.state;
    const { products } = this.props;
    if (!Object.keys(params).length) {
      products.forEach((p) => {
        if (!p.variableProduct) return;
        this.setState({
          params: { ...params, [p._id]: p.variableProduct[0].size },
        });
      });
    }
  }

  update(price, id) {
    this.props.change(price, id);
  }

  render() {
    const { params } = this.state;

    return (
      <div className={s.oneProduct}>
        {this.props.products.map((p) => {
          const handleChange = (event) => {
            const { value, id } = event.target;
            const price = p.variableProduct.find((item) => item.size == value)
              .price;

            this.setState({ params: { ...params, [id]: value } });

            this.update(price, id);
          };
          return (
            <div className={s.product}>
              <div>
                <NavLink to={`/pizza/${p._id}`}>
                  <img src={p.img} />
                </NavLink>
              </div>
              <div className={s.productItem}>
                <NavLink to={`/pizza/${p._id}`} className={s.name}>
                  <h3>{p.name}</h3>
                </NavLink>
                <ul>
                  {p.composition.map((c) => {
                    return (
                      <div>
                        <li>{c}</li>
                      </div>
                    );
                  })}
                </ul>
                <form>
                  <div>
                    <label>
                      <div>Размер</div> 
                      <select id={p._id} onChange={handleChange}>
                        {p.variableProduct.map((pi) => (
                          <option selected={params.size === pi.size} value={pi.size}>
                            {pi.size}
                            см
                          </option>
                        )).reverse()}
                      </select>
                    </label>
                  </div>
                </form>
                <h3>Цена {p.price ? p.price : p.variableProduct[2].price} ₴</h3>
                <AddToCartContainer product={p} size={params[p._id]} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pizza;
