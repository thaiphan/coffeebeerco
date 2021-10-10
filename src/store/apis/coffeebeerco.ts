import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../types/Product';

export const coffeebeercoApi = createApi({
  reducerPath: 'coffeebeercoApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = coffeebeercoApi;
