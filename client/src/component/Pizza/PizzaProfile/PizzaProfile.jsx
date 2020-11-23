import React from "react";
import AddToCartContainer from "../../common/addToCartButton/AddToCartContainer";
import s from "../../ProductProfile.module.sass";

class PizzaProfile extends React.Component {
  state = {
    size: null,
  };

  
  componentDidUpdate() {
    const { size } = this.state;
    if (!size) {
      this.setState({
        size: this.props.productItem.variableProduct[0].size,
      });
    }
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ size: value });
  };

  render() {
    const { size } = this.state;
    const { productItem } = this.props;
    const getPrice = () => {
      if (productItem && productItem.variableProduct) {
        const varItem = productItem.variableProduct.find(
          (item) => item.size == size
        );
        return varItem ? varItem.price : 0;
      }
      return 0;
    };

    return (
      <div className={s.product}>
        <div>
          <img src={productItem.img} />
        </div>
        <div>
          <div>
            <h1>{productItem.name}</h1>
          </div>

          <ul>
            {productItem.composition.map((element) => {
              return <li>{element}</li>;
            })}
          </ul>
          <form>
            <div>
              <label>
                <div>Размер</div>{" "}
                <select id={productItem._id} onChange={this.handleChange}>
                  {productItem.variableProduct.map((pi) => (
                    <option selected={size === pi.size} value={pi.size}>
                      {pi.size}
                      см
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </form>
          <h3>Цена {getPrice()} ₴</h3>
          <AddToCartContainer product={productItem} size={size} />
        </div>
      </div>
    );
  }
}

export default PizzaProfile;
