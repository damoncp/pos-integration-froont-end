import './Orders.css';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'reactstrap';
import GlobalContexts from '../../../contexts/globalContexts';
// utils
import {
  decrement,
  increment,
  getProductsList,
  payButtonDisabled,
} from '../../../utils/ordersHelpers';
import payRequest from '../../../utils/payRequest';

export default function Orders() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { contexts: { products } } = useContext(GlobalContexts);

  useEffect(() => {
    // convert products object array into products array
    const currentProductsList = getProductsList(products);
    setCurrentProducts(currentProductsList);
  }, [products])

  const updateQuantityValue = (operation, index) => {
    let updatedProductsList = [...currentProducts];
    let targetProduct = currentProducts[index];

    targetProduct.quantity = operation(targetProduct.quantity);
    updatedProductsList[index] = targetProduct;

    setCurrentProducts(updatedProductsList);
  }

  const updateTotalCost = () => {
    // calculate total payment first
    const eachItemCost = currentProducts
      .map(({ name, price, quantity }) => price * quantity);

    setTotalCost(eachItemCost.reduce(
      (accumulator, value) => accumulator + value
    ));
  }

  const quantityDecrease = (index) => {
    updateQuantityValue(decrement, index);
    updateTotalCost();
  };

  const quantityIncrease = (index) => {
    updateQuantityValue(increment, index);
    updateTotalCost();
  };

  return (
    <div id="orders">
      <h5 className={"text--centered text--bold heading__default"}>
        Order
      </h5>
      <Container>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.length === 0 ?
                  (<tr>
                      <td>
                        <Spinner color={"dark"} children="" />
                      </td>
                    </tr>)
                  : currentProducts.map(({ title, quantity, price }, index) => (
                    <tr key={`${index}--${title}`} className="orders-table__row">
                      <td>
                        <Button
                          onClick={() => { quantityDecrease(index) }}
                          disabled={quantity === 0}
                        >-</Button>
                        <span className="orders-text__regular">{quantity}</span>
                        <Button
                          onClick={() => { quantityIncrease(index) }}
                        >+</Button>
                      </td>
                      <td className="orders-text__regular">{title}</td>
                      <td className="orders-text__regular">${price}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        {error && (
          <Row>
            <Col>{error}</Col>
          </Row>)}
        <Row>
          <Col>Total: </Col>
          <Col data-testid="order-total">$ {totalCost}</Col>
        </Row>
        <Row>
          <Button
            className="element--no-border-radius bg-success text-white p-3 mt-2"
            onClick={() => payRequest(
              setLoading,
              setError,
              setTotalCost,
              setCurrentProducts,
              totalCost,
              currentProducts,
              products)}
            disabled={payButtonDisabled(loading, totalCost)}
          >
            {loading ? <Spinner color={"dark"} children="" /> : 'Pay'}
          </Button>
        </Row>
      </Container>
    </div>
  )
}

Orders.propTypes = {
  contexts: PropTypes.shape({
    products: PropTypes.arrayOf({
      type: PropTypes.string,
      data: PropTypes.arrayOf({
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
      })
    })
  }),
};
