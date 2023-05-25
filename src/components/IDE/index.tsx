import React, { useRef, useState } from 'react';

import { IdeDiv } from './styled'

import Editor from '@monaco-editor/react';
import { editor as EditorType } from 'monaco-editor';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateContentCode } from '../../redux/slice/fileSlice'

type props = {
  defaultValue: string
  index: number
}

const CodeInputComponent = ({defaultValue, index}: props) => {
  const editorRef = useRef<EditorType.IStandaloneCodeEditor | null>(null);
  const dispatch = useDispatch()

  const theme = useSelector((state: RootState) => state.theme)
  const file = useSelector((state: RootState) => state.file.data)

  const [lines, setLines] = useState<number>(1)

  const handleEditorDidMount = (editor: EditorType.IStandaloneCodeEditor,) => {
    editorRef.current = editor;

    editor.onDidChangeModelContent(() => {
      const model = editor.getModel();
      
      if (model) {
        let codeValue = model.getValue()
        let numbersLine = model.getLineCount()

        setLines(numbersLine)

        dispatch(updateContentCode({index, newCode: codeValue}))
      }
    });

    
  };

  return (
    <IdeDiv>
      <Editor
        className="customEditor"
        height={`${lines*23 + 25}px`}
        width='55vw'
        defaultLanguage="javascript"
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
        options={{
          theme: theme.isDark ? 'vs-dark' : 'vs',
          scrollBeyondLastLine: false,
          padding: { top: 10 },
          fontSize: 16,
          minimap: { enabled: false },
          scrollbar: {
            vertical: 'hidden',
            verticalScrollbarSize: 0,
            handleMouseWheel:false,
          },
        }}
      />
    </IdeDiv>
    
  );
};

export default CodeInputComponent;
