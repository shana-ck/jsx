import { useFetchPostsQuery } from '../store';
import Loading from './Loading';

export default function PostsList({ posts }) {
  const { data, isFetching, error } = useFetchPostsQuery(posts);
}
