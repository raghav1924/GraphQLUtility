import { useState } from 'react';
import Navbar from '@/component/Navbar';
import DataInputField from '@/component/DataInputField';
import CodeOutputPane from '@/component/CodeOutputPane';
import { fragement_and_query } from '@/constant/static';
import { generateFragmentsFromString } from '@/helper/helper';

export default function FragmentsFromTypedefTool() {
  const [inputText, setInputText] = useState(fragement_and_query);
  const [outputFragments, setOutputFragments] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      const fragments = generateFragmentsFromString(inputText);
      setOutputFragments(fragments);
      setError('');
    } catch (err) {
      setError('⚠️ Failed to generate fragments');
      setOutputFragments('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] space-x-4 p-4">
        <DataInputField
          title="GraphQL SDL Input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onConvert={handleConvert}
          error={error}
        />

        <CodeOutputPane
          title="Generated Fragments"
          code={outputFragments}
          placeholder="// Click Convert to generate fragments"
          copyText={outputFragments}
        />
      </div>
    </>
  );
}
