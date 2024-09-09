import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App.tsx';
import { CartProvider, ShopProvider } from './contexts';

describe('App component', () => {
  it('renders nav bar', () => {
    render(
      <ShopProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ShopProvider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
