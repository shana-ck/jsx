import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { postsApi } from './apis/postsApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  }
});

setupListeners(store.dispatch);

export {
  useFetchPostsQuery,
  useAddPostMutation,
  useRemovePostMutation
} from './apis/postsApi';
