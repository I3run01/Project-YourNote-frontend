import { RootState } from '@/redux/store';
import { MyEditorContainer } from './myEditorStyled';
import { Editor, EditorState, ContentState } from 'draft-js';
import { useState, useEffect } from 'react';
import { updateContentText } from '../../redux/slice/fileSlice'
import { useSelector, useDispatch } from 'react-redux';

type props = {
  initialTXT: string
  index: number
}

const MyEditor = ({initialTXT, index}: props) => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const file = useSelector((state: RootState) => state.file.data)
  const dispatch = useDispatch()

  useEffect(() => {
    const initialContentState = ContentState.createFromText(initialTXT);
    const initialEditorState = EditorState.createWithContent(initialContentState);
    setEditorState(initialEditorState);
  }, []);

  const handleChange = (state: EditorState) => {
    setEditorState(state);

    if(!editorState) return

    const contentState: ContentState = editorState.getCurrentContent();
    const text: string = contentState.getPlainText();

    dispatch(updateContentText({ index: index, newText: text }));

    console.log(file?.content[index])
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
