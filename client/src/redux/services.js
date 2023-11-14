import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");

export const serverApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/`,
    headers: {
      authorization: token ? `Bearer ${JSON.parse(token)}` : "",
    },
  }),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: `signup`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
    }),
    getUsers: builder.query({
      query: () => `user`,
      providesTags: ["User"],
    }),
    getPost: builder.query({
      query: (page) => `post?page=${page}`,
      providesTags: ["Post"],
    }),
  }),
  keepUnusedDataFor: 1000 * 60 * 60,
});

export const {
  useSignupMutation,
  useLoginUserMutation,
  useGetUsersQuery,
  useGetPostQuery,
} = serverApi;
