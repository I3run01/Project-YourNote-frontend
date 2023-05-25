import React, { useEffect, useRef, useState } from 'react';

import { IdeDiv } from './styled'

import Editor from '@monaco-editor/react';
import { editor as EditorType } from 'monaco-editor';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type props = {
  defaultValue: string
  index: number
}

const CodeInputComponent = ({defaultValue, index}: props) => {
  const editorRef = useRef<EditorType.IStandaloneCodeEditor | null>(null);
  const theme = useSelector((state: RootState) => state.theme)

  const [lines, setLines] = useState<number>(0)
  const [editorContent, setEditorContent] = useState<string>(defaultValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!editorRef.current) return;
  
      const model = editorRef.current.getModel();
  
      if (!model) return;
  
      const lineCount = model.getLineCount();
      setLines(lineCount);
  
    }, 50);

    return () => clearInterval(interval);
  }, [])

  const handleEditorDidMount = (editor: EditorType.IStandaloneCodeEditor,) => {
    editorRef.current = editor;

    editor.onDidChangeModelContent(() => {
      const model = editor.getModel();
      
      if (model) {
        setEditorContent(model.getValue());
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
