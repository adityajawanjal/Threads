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
    // getUsers: builder.query({
    //   query: () => `user`,
    //   providesTags: ["User"],
    // }),
    searchUsers: builder.query({
      query: (key) => `user/search?key=${key}`,
      providesTags: ["User"],
    }),
    checkUserName: builder.mutation({
      query: (body) => ({
        url: `check`,
        method: "POST",
        body,
      }),
    }),
    followUser: builder.mutation({
      query: (id) => ({
        url: `user/follow/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),
    getMe: builder.query({
      query: () => ({
        url: "me",
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `user/${id}`,
      }),
      providesTags:['User']
    }),
    getPost: builder.query({
      query: (page = 1) => `post?page=${page}`,
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: `post`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `post/like/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Post"],
    }),
    repost: builder.mutation({
      query: (id) => ({
        url: `post/repost/${id}`,
        method: "PUT",
      }),
      invalidatesTags:['User']
    }),
  }),
  keepUnusedDataFor: 1000 * 60 * 60,
});

export const {
  useSignupMutation,
  useLoginUserMutation,
  useCheckUserNameMutation,
  useGetPostQuery,
  useAddPostMutation,
  useGetMeQuery,
  useLikePostMutation,
  useFollowUserMutation,
  useSearchUsersQuery,
  useRepostMutation,
  useGetUserDetailsQuery,
} = serverApi;
