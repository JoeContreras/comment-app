import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Comment {
  id: number;
  email: string;
  comment: string;
  deleted: boolean;
}

export const commentApi = createApi({
  reducerPath: "pokemonApi",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => `/comment`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments" as const, id })),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),
    createComment: builder.mutation<Comment, Omit<Comment, "id">>({
      query: (body) => ({
        url: `/comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),
    deleteComment: builder.mutation<Comment, number>({
      query: (id) => ({
        url: `/comment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),
    getSingleComment: builder.query<Comment, number>({
      query: (id) => `/comment/${id}`,
    }),
    updateComment: builder.mutation<Comment, Comment>({
      query: (body) => ({
        url: `/comment/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Comments", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useGetSingleCommentQuery,
  useUpdateCommentMutation,
} = commentApi;
