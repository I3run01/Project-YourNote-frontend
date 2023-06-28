import React, { useEffect, useRef, useState } from 'react';
import { IdeDiv } from './styled'
import Editor from '@monaco-editor/react';
import { editor as EditorType } from 'monaco-editor';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type props = {
  defaultValue: string
  index: number
  onDataReceived: (index:number, data:string) => void
}

const CodeInputComponent = ({defaultValue, index, onDataReceived}: props) => {
  const editorRef = useRef<EditorType.IStandaloneCodeEditor | null>(null);
  const isDark = useSelector((state: RootState) => state.theme.isDark)
  const [lines, setLines] = useState<number>(1)

  const handleEditorDidMount = (editor: EditorType.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  
    const processModel = (model: EditorType.ITextModel | null) => {
      if (model) {
        const codeValue = model.getValue();
        const lineCount = model.getLineCount();
        setLines(lineCount);
        onDataReceived(index, codeValue);
      }
    };

    processModel(editor.getModel());
  
    editor.onDidChangeModelContent(() => {
      processModel(editor.getModel());
    });
  };
  

  return (
    <IdeDiv>
      <Editor
        className="customEditor"
        height={`${lines*23 + 25}px`}
        width='55vw'
        defaultLanguage="python"
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
        options={{
          theme: isDark ? 'vs-dark' : 'vs',
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
