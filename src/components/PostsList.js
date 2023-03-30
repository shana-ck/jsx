import { useFetchPostsQuery } from '../store';
import PostItem from './PostItem';
import Loading from './Loading';

export default function PostsList() {
  const { data, isFetching, error } = useFetchPostsQuery();
  console.log(data);
  // console.log(
  //   data.map(post => {
  //     return post.id;
  //   })
  // );
  let content;
  if (isFetching) {
    content = <Loading />;
  } else if (error) {
    content = <div>Error fetching posts</div>;
  } else {
    content = data.map(post => {
      return <PostItem key={post.id} post={post} />;
    });
  }

  return (
    <div>
      <div className="ui inverted container">
        {content}
      </div>
    </div>
  );
}
