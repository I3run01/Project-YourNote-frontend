import { MyEditorContainer } from './myEditorStyled';
import { Editor, EditorState, ContentState } from 'draft-js';
import { FC, useState, useEffect } from 'react';

const MyEditor: FC = () => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  useEffect(() => {
    const initialContentState = ContentState.createFromText('Hello World');
    const initialEditorState = EditorState.createWithContent(initialContentState);
    setEditorState(initialEditorState);
  }, []);

  const handleChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleGetText = () => {
    if (editorState) {
      const contentState: ContentState = editorState.getCurrentContent();
      const text: string = contentState.getPlainText();
      console.log(text);
    }
  };

  if (!editorState) {
    return <div>Loading...</div>;
  }

  return (
    <MyEditorContainer>
      <h1>Reference</h1>
      <Editor editorState={editorState} onChange={handleChange} />
      <button onClick={handleGetText}>Get Text</button>
    </MyEditorContainer>
  );
};

export default MyEditor;
