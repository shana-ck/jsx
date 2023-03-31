import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useAddPostMutation } from '../store';

export default function NewPost() {
  const toolbarStyle = {
    background: '#3d003d'
  };
  const [addPost, addPostResults] = useAddPostMutation();
  const _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState);
  const [post, setPost] = useState(raw);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(
    () => {
      console.log(editorState);
    },
    [editorState]
  );

  const handleSubmit = async e => {
    e.preventDefault();
    let content = convertToRaw(editorState.getCurrentContent());
    setPost(content);
    let response = await addPost(content);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ui inverted container">
        <h1 className="ui header inverted">New Post</h1>
        <h2 className="ui header inverted">Start writing!</h2>
        <div
          className="ui inverted container"
          style={{
            border: '1px solid white',
            padding: '2px',
            minHeight: '400px',
            margin: '1rem'
          }}
        >
          <Editor
            toolbarClassName="contrast toolbar"
            toolbarStyle={toolbarStyle}
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <div className="submit section">
          <button className="ui contrast button padded" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
