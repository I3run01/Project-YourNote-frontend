import { RootState } from '@/redux/store';
import { MyEditorContainer } from './myEditorStyled';
import { Editor, EditorState, ContentState } from 'draft-js';
import { useState, useEffect } from 'react';
import { updateContentText } from '../../redux/slice/fileSlice'
import { useSelector, useDispatch } from 'react-redux';

type props = {
  index: number
}

const MyEditor = ({index}: props) => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const isDark = useSelector((state: RootState) => state.theme.isDark)
  const dispatch = useDispatch()

  useEffect(() => {
    const initialContentState = ContentState.createFromText('Initial text');
    const initialEditorState = EditorState.createWithContent(initialContentState);
    setEditorState(initialEditorState);
  }, []);

  const handleChange = (state: EditorState) => {
    setEditorState(state);

    if(!editorState) return

    const contentState: ContentState = editorState.getCurrentContent();
    const text: string = contentState.getPlainText();

    dispatch(updateContentText({ index: index, newText: text }));
  };

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
