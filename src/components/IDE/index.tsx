import React, { useRef } from 'react';
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
    <div>
      <Editor
        height="90vh"
        defaultLanguage="python"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <button onClick={showValue}>Show Code</button>
    </div>
  );
};

export default CodeInputComponent;
