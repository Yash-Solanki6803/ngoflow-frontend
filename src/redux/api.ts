import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const apiSlice = createApi({
  reducerPath: "api", // Unique key for the API
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // Backend URL
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: () => "/campaigns", // API endpoint
    }),
  }),
});

// Export the auto-generated hook
export const { useGetCampaignsQuery } = apiSlice;
