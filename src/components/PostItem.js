import { useRemovePostMutation, useAddPostMutation } from '../store';

export default function PostItem({ post }) {
  const [removePost, results] = useRemovePostMutation();
  const [addPost, addPostResults] = useAddPostMutation();
  const handleDeletePost = () => {
    removePost(post);
  };

  const handleAddPost = () => {
    addPost('blah');
  };

  console.log(addPostResults);
  return (
    <div className="ui container">
      <div className="ui text container segment inverted">
        <h1>
          {post.title}
        </h1>
        <p>
          {post.author}
        </p>
        <button onClick={handleAddPost}>Add Post Test</button>
      </div>
    </div>
  );
}
