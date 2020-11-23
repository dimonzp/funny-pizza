export default (item) => {
  const paramsKeys = Object.keys(item.params || {});
  if (item.params && paramsKeys.length) {
    const pKey = paramsKeys[0];
    const varParams = item.product.variableProduct.find(
      (v) => v[pKey] === Number.parseInt(item.params[pKey])
    );
    return varParams && varParams.price ? varParams.price : item.product.price;
  }
  return item.product.price;
};
