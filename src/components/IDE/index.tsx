import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

const CodeInputComponent = () => {


  return (
    <div>
        <Editor 
            height="90vh"
            defaultLanguage="python" 
            defaultValue="//put some code" />;
    </div>
  );
};

export default CodeInputComponent;
