import arrayFlatten from './arrayFlatten';

const getProductsList = (products) => {
  const productsList = products
    .map(product => product.data)
    .reduce((acc, element) => arrayFlatten(acc, element), []);

  productsList.map(product => {
    product.quantity = 0;
    return product;
  });

  return productsList;
}

const decrement = (quantity) => quantity - 1;
const increment = (quantity) => quantity + 1;

const payButtonDisabled = (loading, totalCost) => loading || totalCost === 0;

export {
  decrement,
  increment,
  getProductsList,
  payButtonDisabled,
};
