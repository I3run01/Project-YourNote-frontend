import { MyEditorContainer } from './myEditorStyled';
import { Editor, EditorState, ContentState } from 'draft-js';
import { FC, useState, useEffect } from 'react';

type props = {
  initialTXT: string
  fction: () => void
}

const MyEditor = ({initialTXT, fction}: props) => {
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
    }

    fction()
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
