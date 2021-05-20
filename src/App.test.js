import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const productTitle = screen.getByText(/Products/i);
  const orderTitle = screen.getByText(/Order/i);

  expect(productTitle).toBeInTheDocument();
  expect(orderTitle).toBeInTheDocument();  
});
