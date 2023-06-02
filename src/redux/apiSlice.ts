import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductFormValues } from "../interfaces/interface";
import { store } from "./store";

const environment = import.meta.env;

interface ProductResponse {
  productDetails: ProductFormValues[];
}

const productsSlice = createSlice({
  name: "products",
  initialState: [] as ProductFormValues[],
  reducers: {
    setProducts: (state, action: PayloadAction<ProductFormValues[]>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const getProductsApi = createApi({
  reducerPath: "getProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: environment.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProductData: builder.query<ProductResponse, void>({
      query: () => "product",
    }),
  }),
});

export const { useGetProductDataQuery } = getProductsApi;

// getProductsApi.endpoints.getProductData.initiate(undefined).then((data) => {
//   store.dispatch(setProducts(data));
// });
