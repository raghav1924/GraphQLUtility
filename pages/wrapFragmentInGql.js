import { useState } from 'react';
import Navbar from '@/component/Navbar';
import DataInputField from '@/component/DataInputField';
import CodeOutputPane from '@/component/CodeOutputPane';
import { wrapFragments } from '@/helper/helper';
import { fragmentsData } from '@/constant/static';

export default function FragmentWrapperTool() {
  const [inputText, setInputText] = useState(fragmentsData);
  const [wrappedOutput, setWrappedOutput] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      const result = wrapFragments(inputText); // your helper
      setWrappedOutput(result);
      setError('');
    } catch (err) {
      setError('⚠️ Error while processing fragments');
      setWrappedOutput('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] space-x-4 p-4">
        <DataInputField
          title="GraphQL Fragment"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onConvert={handleConvert}
          error={error}
          margin=""
        />

        <CodeOutputPane
          title=" .js "
          code={wrappedOutput}
          placeholder="// Click Convert to generate wrapped fragments"
          copyText={wrappedOutput}
          margin=""
        />
      </div>
    </>
  );
}
