import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { customRender } from '../../../../../tests';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { ItemCard } from '..';
import * as contextModule from '../../../../contexts';
import { InventoryItemModel } from '../../../../models';

vi.mock('../../../contexts', async (importOriginal) => {
  const originalModule = (await importOriginal()) as typeof contextModule;
  return {
    ...originalModule,
    useCart: () => ({
      addToCart: vi.fn(),
      updateItemSize: vi.fn(),
      isItemInCart: vi.fn().mockReturnValue(null),
    }),
  };
});

const mockItem: InventoryItemModel = {
  id: 1,
  title: 'Test Item',
  price: 29.99,
  description: 'Awesome test item made from awesome material',
  category: "women's clothing",
  image: 'https://via.placeholder.com/150',
  rating: {
    rate: 4,
    count: 12,
  },
};

describe('ItemCard component', () => {
  it('shows "Added to cart" message when item is added', () => {
    customRender(<ItemCard item={mockItem} />);

    // Select a size option
    const sizeCircle = screen.getAllByText(/m/i)[0]; // Just pick the first "m"
    fireEvent.click(sizeCircle);

    // Click the "Add to Cart" button
    const addToCartButton = screen.getAllByRole('button', {
      name: /Add to cart/i,
    })[0]; // Pick the first button
    fireEvent.click(addToCartButton);

    // Check if the message changes to "Added to cart"
    expect(screen.getAllByText(/Added to cart/i)[0]).toBeInTheDocument();
  });

  it('alerts if no size is selected and user clicks "Add to Cart"', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    customRender(<ItemCard item={mockItem} />);

    // Click the first "Add to Cart" button found
    const addToCartButton = screen.getAllByRole('button', {
      name: /Add to cart/i,
    })[0]; // Pick the first button
    fireEvent.click(addToCartButton);

    // Ensure alert is called since no size is selected
    expect(alertMock).toHaveBeenCalledWith('Please select a size');

    alertMock.mockRestore();
  });
});
