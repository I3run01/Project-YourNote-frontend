import { RootState } from '@/redux/store';
import { MyEditorContainer } from './myEditorStyled';
import { Editor, EditorState, ContentState } from 'draft-js';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

type props = {
  initialTXT: string
  index: number
  onDataReceived: (index:number, data:string) => void
}

const MyEditor = ({initialTXT, index, onDataReceived}: props) => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const isDark = useSelector((state: RootState) => state.theme.isDark)

  useEffect(() => {
    const initialContentState = ContentState.createFromText(initialTXT);
    const initialEditorState = EditorState.createWithContent(initialContentState);
    setEditorState(initialEditorState);
  }, []);
  
const handleChange = (state: EditorState) => {
    setEditorState(state);

    const contentState: ContentState = state.getCurrentContent();
    const text: string = contentState.getPlainText();
    
    onDataReceived(index, text)
  }
  

  if (!editorState) {
    return <div>Loading...</div>;
  }

  return (
    <MyEditorContainer isDark={isDark}>
      <Editor editorState={editorState} onChange={handleChange} />
    </MyEditorContainer>
  );
};

export default MyEditor;
