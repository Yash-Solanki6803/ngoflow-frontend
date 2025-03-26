import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: () => "/campaigns",
    }),
    login: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export the auto-generated hooks
export const { useGetCampaignsQuery, useLoginMutation } = apiSlice;
