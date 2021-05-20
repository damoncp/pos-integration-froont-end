import { render, cleanup } from '@testing-library/react';
import Products from './Products';
import GlobalContexts from '../../../contexts/globalContexts';
import { mockProducts } from '../../../constants/mocks';

describe('Test <Products /> component', () => {
  let contexts;
  let renderOrders;

  beforeEach(() => {
    contexts = {
      products: mockProducts,
    };

    renderOrders = render(
      <GlobalContexts.Provider value={{contexts}}>
        <Products />
      </GlobalContexts.Provider>
    );
  });

  afterEach(cleanup);

  it('Products Snapshot test', () => {
    // Arrange
    const { asFragment } = renderOrders;

    // Assert
    expect(asFragment(renderOrders)).toMatchSnapshot();
  });

  it('should render Spinner when products list is empty', () => {
    // Arrange
    contexts = {
      products: [],
    };

    const { container } = render(
      <GlobalContexts.Provider value={{contexts}}>
        <Products />
      </GlobalContexts.Provider>
    );

    // Act
    const spinnerDOM = container.firstChild.lastChild.firstChild;

    // Assert
    expect(spinnerDOM).toHaveClass('spinner-border text-dark')
  });
});
