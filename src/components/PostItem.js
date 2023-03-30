import { useRemovePostMutation } from '../store';

export default function PostItem({ post }) {
  const [removePost, results] = useRemovePostMutation();
  const handleDeletePost = () => {
    removePost(post);
  };
  console.log(post);
  return (
    <div className="ui container">
      <div className="ui text container segment inverted">
        <h1>
          {post.title}
        </h1>
        <p>
          {post.author}
        </p>
      </div>
    </div>
  );
}
