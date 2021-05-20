import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getProductsList } from './ordersHelpers';

const payRequest = (
  setLoading,
  setError,
  setTotalCost,
  setCurrentProducts,
  totalCost,
  currentProducts,
  products,
) => {
  setLoading(true);
  // send POST api to backend (save into a json file)
  const requestBody = { data: {} };

  for (const currentProduct of currentProducts) {
    if (currentProduct.quantity > 0) {
      requestBody.data = {
        ...requestBody.data,
        [uuidv4()]: currentProduct,
      }
    }
  }

  requestBody.total = totalCost;

  axios.post(`/api/orders/new`, requestBody)
    .then(response => {
      setLoading(false);

      if (response && response.data) {
        setTotalCost(0);
        setCurrentProducts(getProductsList(products));
      }
    })
    .catch(error => {
      setLoading(false);
      setTotalCost(0);
      setError(error);
    });
}

export default payRequest;
