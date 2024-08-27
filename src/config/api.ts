export const womensClothing = encodeURIComponent("women's clothing");
export const API_BASE_URL = 'https://fakestoreapi.com';

export const ENDPOINTS = {
  CATEGORIES: `${API_BASE_URL}/products/categories`,
  WOMENS_CLOTHING: `${API_BASE_URL}/products/category/${womensClothing}`,
  JEWELRY: `${API_BASE_URL}/products/category/jewelery`,
};
