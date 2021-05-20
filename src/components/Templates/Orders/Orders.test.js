import { render, screen, cleanup,fireEvent } from '@testing-library/react';
import Orders from './Orders';
import GlobalContexts from '../../../contexts/globalContexts';
import { mockProducts } from '../../../constants/mocks';

describe('Test <Orders /> component', () => {
  let contexts;
  let renderOrders;

  beforeEach(() => {
    contexts = {
      products: mockProducts,
    };

    renderOrders = render(
      <GlobalContexts.Provider value={{contexts}}>
        <Orders />
      </GlobalContexts.Provider>
    );
  });

  afterEach(cleanup);

  it('Orders Snapshot test', () => {
    const { asFragment } = renderOrders;

    expect(asFragment(renderOrders)).toMatchSnapshot();
  });

  it('should disable "quantity minus button" when quantity is 0', async () => {
    // Act
    const minusButtonText = await screen.findAllByText('-');

    // Assert
    expect(minusButtonText[0].className.includes("disabled")).toBeTruthy();
    expect(minusButtonText.length > 0).toBeTruthy();
  });

  it('should update the total value after click "quantity plus button"', async () => {
    const onePlusButton = await screen.findAllByText('+');

    fireEvent(onePlusButton[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    const totalCost = screen.getByTestId('order-total').innerHTML.split('$')[1];

    expect(parseFloat(totalCost) > 0).toBeTruthy();
  });
});
