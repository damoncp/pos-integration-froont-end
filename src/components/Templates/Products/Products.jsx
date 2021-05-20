import './Products.css';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Spinner } from 'reactstrap';
import GlobalContexts from '../../../contexts/globalContexts';
// components
import ProductCard from '../../Atoms/ProductCard/ProductCard';

export default function Products() {
  const {contexts: { products }} = useContext(GlobalContexts);

  return (
    <div className="products">
      <h5 className={"text--centered text--bold heading__default"}>
        Products
      </h5>
      <Container>
        {products.length === 0 ? <Spinner color={"dark"} children="" />
          : products.map(({ type, data: products }, index) => (
            <Row key={`${index}. ${type}`}>
              <h5 className={"text--bold text--capitalize subheading__default"}>
                {type}
              </h5>
              <hr />
              <Row>
                {products.map(({ title, image, price }, index) => (
                  <Col xs={3} key={`${index}. ${title}`}>
                    <ProductCard
                      title={title}
                      image={image}
                      price={price}
                    />
                  </Col>
                ))}
              </Row>
            </Row>
          ))}
      </Container>
    </div>
  )
}

Products.propTypes = {
  text: PropTypes.string,
  classnames: PropTypes.string,
  products: PropTypes.arrayOf({
    type: PropTypes.string,
    data: PropTypes.arrayOf({
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    })
  })
};
