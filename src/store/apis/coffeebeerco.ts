import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Product } from '../../types/Product';

export const coffeebeercoApi = createApi({
  reducerPath: 'coffeebeercoApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getCategories: builder.query<string[], void>({
      query: () => `categories`,
    }),
    getProducts: builder.query<Product[], string | undefined>({
      query: (filter) => `products${filter ? `?filter=${filter}` : ''}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = coffeebeercoApi;
