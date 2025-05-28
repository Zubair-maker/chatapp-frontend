import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/`,
  }),
  tagTypes: ["Chat", "User"],
  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "chat/mychat",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),

    searchUser: builder.query({
      query: (name) => ({
        url: `user/search?name=${name}`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),

    sendFreindRequest: builder.mutation({
      query: (data) => ({
        url: "user/sendrequest",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    getMyNotification: builder.query({
      query: () => ({
        url: "user/notifications",
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export default api;
export const {
  useMyChatsQuery,
  useLazySearchUserQuery,
  useSendFreindRequestMutation,
  useGetMyNotificationQuery,
} = api;

//http://localhost:8081/api/v1/user/search?name=
