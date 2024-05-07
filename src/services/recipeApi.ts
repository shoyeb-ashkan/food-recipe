import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.edamam.com/" }),
  endpoints: (builder) => ({
    getRecipes: builder.mutation({
      query: ({ query, health }) => {
        return {
          url: `api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&health=${health}`,
          method: "get",
        };
      },
    }),
  }),
});


export const { useGetRecipesMutation } = recipeApi;
