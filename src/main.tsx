import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider, ShopProvider } from './contexts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ShopProvider>
  </StrictMode>
);
