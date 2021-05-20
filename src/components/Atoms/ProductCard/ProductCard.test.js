import { render, screen, cleanup } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('Test <ProductCard /> component', () => {
  let renderProductCard;

  beforeEach(() => {
    renderProductCard = render(<ProductCard
      price={12}
      title={"Card title demo"} 
      image={"https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?s=612x612"}
    />);
  });

  afterEach(cleanup);

  it('should render product card image', () => {
    // Arrange
    const productCardImageNode = screen.getByTestId('product-card-image');
    const productCardPriceNode = screen.getByTestId('product-card-price');
    const productCardTitleNode = screen.getByTestId('product-card-title');
    const productCardPrice = productCardPriceNode.innerHTML;
    const productCardTitle = productCardTitleNode.innerHTML;
    // Act

    // Assert
    expect(productCardImageNode).toHaveAttribute('src');
    expect(productCardImageNode.src).toBe('https://media.istockphoto.com/photos/bacon-burger-picture-id520215281?s=612x612');
    expect(productCardPrice).toEqual('$12');
    expect(productCardTitle).toEqual('Card title demo');
  });

  it('Products Snapshot test', () => {
    const { asFragment } = renderProductCard;

    expect(asFragment(renderProductCard)).toMatchSnapshot()
  });
});
