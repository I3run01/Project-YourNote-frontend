import React, { useState } from 'react';

const CodeInputComponent: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('The code entered is: ', code);
    // Handle code submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={code} onChange={handleCodeChange} />
      <button type="submit">Submit Code</button>
    </form>
  );
};

export default CodeInputComponent;
