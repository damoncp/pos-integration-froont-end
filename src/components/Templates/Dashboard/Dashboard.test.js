import { render, screen, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard';
import GlobalContexts from '../../../contexts/globalContexts';
import { mockProducts } from '../../../constants/mocks';

describe('Test <Dashboard /> component', () => {
  let contexts;
  let renderDashboard;

  beforeEach(() => {
    contexts = {
      products: mockProducts,
    };

    renderDashboard= render(<GlobalContexts.Provider value={{contexts}}>
      <Dashboard />
    </GlobalContexts.Provider>);
  });

  afterEach(cleanup);

  it('should render products and order component', () => {
    // Arrange
    const DashboardDOM = screen.getByTestId('dashboard-layout');

    // Act
  
    // Assert
    expect(DashboardDOM).toBeInTheDocument();
  });

  it('Snapshot test for <Dashboard />', () => {
    const { asFragment } = renderDashboard;

    expect(asFragment(renderDashboard)).toMatchSnapshot()
  });
});
