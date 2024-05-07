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

// console.log(`https://api.edamam.com/search?q=bread&app_id=1975b7ae&app_key=374309c35ce93fcf917714e449092afe&from=0&to=3&calories=591-722&health=vegan`)

export const { useGetRecipesMutation } = recipeApi;
