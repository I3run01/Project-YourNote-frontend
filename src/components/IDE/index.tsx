import React, { useEffect, useRef, useState } from 'react';

import { IdeDiv } from './styled'

import Editor from '@monaco-editor/react';
import { editor as EditorType } from 'monaco-editor';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const CodeInputComponent: React.FC = () => {
  const editorRef = useRef<EditorType.IStandaloneCodeEditor | null>(null);
  const theme = useSelector((state: RootState) => state.theme)

  const [lines, setLines] = useState<number>(0)

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
  };

  return (
    <IdeDiv>
      <Editor
        className="customEditor"
        height={`${lines*23 + 25}px`}
        width='55vw'
        defaultLanguage="python"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        options={{
          theme: theme.isDark ? 'vs-dark' : 'vs',
          scrollBeyondLastLine: false,
          padding: { top: 10 },
          fontSize: 16,
        }}
      />
    </IdeDiv>
  );
};

export default CodeInputComponent;
