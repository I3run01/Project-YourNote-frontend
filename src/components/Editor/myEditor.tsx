import { MyEditorContainer } from './myEditorStyled';
import { Editor, EditorState, ContentState } from 'draft-js';
import { FC, useState, useEffect } from 'react';

type props = {
  initialTXT: string
}

const MyEditor = ({initialTXT}: props) => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  useEffect(() => {
    const initialContentState = ContentState.createFromText(initialTXT);
    const initialEditorState = EditorState.createWithContent(initialContentState);
    setEditorState(initialEditorState);
  }, []);

  const handleChange = (state: EditorState) => {
    setEditorState(state);

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
      <Editor editorState={editorState} onChange={handleChange} />
    </MyEditorContainer>
  );
};

export default MyEditor;
