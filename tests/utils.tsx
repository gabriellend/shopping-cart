import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ShopProvider, CartProvider } from '../src/contexts';

export const customRender = (children, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ShopProvider>
        <CartProvider>{children}</CartProvider>
      </ShopProvider>
    </MemoryRouter>
  );
};
