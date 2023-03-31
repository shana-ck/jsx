import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/shana-ck/jsx'
    // fetchFn: async (...args) => {
    //   return fetch(...args);
    // }
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        providesTags: (result, error, collection) => {
          const tags = result.map(post => {
            return { type: 'Posts', id: post };
          });
          tags.push({ type: 'Posts', id: collection });
          return tags;
        },
        query: post => {
          return {
            url: '/posts',
            params: {
              post: post
            },
            method: 'GET'
          };
        }
      }),

      addPost: builder.mutation({
        invalidatesTags: (result, error, collection) => {
          return [{ type: 'Posts', id: collection.id }];
        },
        query: collection => {
          return {
            url: '/posts',
            method: 'POST',
            body: {
              id: 2,
              title: 'author',
              author: 'kahdkhf'
            }
          };
        }
      }),
      removePost: builder.mutation({
        invalidatesTags: (result, error, post) => {
          return [{ type: 'Post', id: post.id }];
        },
        query: post => {
          return {
            method: 'DELETE',
            url: `/posts/${post.id}`
          };
        }
      })
    };
  }
});

export const {
  useFetchPostsQuery,
  useAddPostMutation,
  useRemovePostMutation
} = postsApi;

export { postsApi };
