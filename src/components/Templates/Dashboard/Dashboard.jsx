import './Dashboard.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// components
import Orders from '../Orders/Orders';
import Products from '../Products/Products';

export default function Dashboard() {
  return (
    <Container fluid id="dashboard-layout" data-testid="dashboard-layout">
      <Row>
        <Col xs="8" nogutters="true">
          <Products />
        </Col>
        <Col xs="4" nogutters="true">
          <Orders />
        </Col>
      </Row>
    </Container>
  )
}
