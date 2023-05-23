// pages/ide.tsx
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

// Dynamic import for react-ace
const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    return ace.default;
  },
  { ssr: false }
);

const Ide = () => {
  const [code, setCode] = useState('// Write your code here...');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        onChange={setCode}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: '100%', height: '70vh' }}
      />
      <Button onClick={handleCopyCode}>Copy Code</Button>
    </div>
  );
};

export default Ide;
