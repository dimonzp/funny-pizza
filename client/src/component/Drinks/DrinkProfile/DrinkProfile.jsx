import React from "react";
import AddToCartContainer from "../../common/addToCartButton/AddToCartContainer";
import s from "../../ProductProfile.module.sass";

const DrinkProfile = (props) => {
  const { productItem } = props;
  return (
    <div className={s.product}>
      <div>
        <img src={productItem.img} />
      </div>
      <div>
        <div>
          <h1>{productItem.name}</h1>
        </div>
        <h4>{productItem.volume} л</h4>
        <h3>Цена {productItem.price} ₴</h3>
        <AddToCartContainer product={props.productItem} />
      </div>
    </div>
  );
};

export default DrinkProfile;
