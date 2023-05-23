import React, { useRef } from 'react';

import { IdeDiv } from './styled'

import Editor from '@monaco-editor/react';
import { editor as EditorType } from 'monaco-editor';

const CodeInputComponent: React.FC = () => {
  const editorRef = useRef<EditorType.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (
    editor: EditorType.IStandaloneCodeEditor,
  ) => {
    editorRef.current = editor;
  };

  const showValue = () => {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  };

  return (
    <IdeDiv>
      <Editor
        height="auto"
        defaultLanguage="python"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}

        className='IDE'
      />
    </IdeDiv>
  );
};

export default CodeInputComponent;
