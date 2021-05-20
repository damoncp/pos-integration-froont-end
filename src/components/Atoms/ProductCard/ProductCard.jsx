import './ProductCard.css';
import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

export default function ProductCard({ price, image, title }) {
  return (
    <Card className="product-card">
      <CardImg top
        className="product-card__image"
        data-testid="product-card-image"
        src={image} alt={title}
      />
      <CardBody>
        <CardTitle tag="h5" className="product-card__title">
          <span data-testid="product-card-price">${price}</span>
          {' - '}
          <span data-testid="product-card-title">{title}</span>
        </CardTitle>
      </CardBody>
    </Card>
  )
};

ProductCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
