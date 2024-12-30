import { API_URL } from "@/configs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "./type";

export const CategoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  endpoints: (build) => ({
    // GET LIST
    getListCategories: build.query<
      ICategory[],
      {
        query?: string;
      }
    >({
      query: (payload) => {
        return {
          url: `/category?q=${payload?.query}`,
          method: "GET",
        };
      },
    }),

    // GET BY ID
    getCategoryById: build.query<ICategory, { id: number }>({
      query: ({ id }) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetCategoryByIdQuery,
  useGetListCategoriesQuery,
  useLazyGetCategoryByIdQuery,
  useLazyGetListCategoriesQuery,
} = CategoryAPI;
