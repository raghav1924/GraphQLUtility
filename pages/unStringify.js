import { useState } from 'react';
import Navbar from '@/component/Navbar';
import DataInputField from '@/component/DataInputField';
import CodeOutputPane from '@/component/CodeOutputPane';
import { unStringify } from '@/helper/helper';

export default function UnStringifyTool() {
  const [inputText, setInputText] = useState(`{
  "Fragments": {},
  "Queries": {
    "COPY_SUBMISSION": "  mutation Mutation(    $quoteNumber: String    $quoteVersion: String    $product: String    $policyStatus: String    $lastSubmittedPage: String  ) {    copySubmission(      quoteNumber: $quoteNumber      quoteVersion: $quoteVersion      product: $product      policyStatus: $policyStatus      lastSubmittedPage: $lastSubmittedPage    ) {      ...CorePolicyFields    }  }"
  }
}`);
  const [outputCode, setOutputCode] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      const obj = JSON.parse(inputText);
      const result = unStringify(obj);
      setOutputCode(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
      setError('');
    } catch (e) {
      console.error(e);
      setOutputCode('');
      setError('⚠️ Invalid JSON object');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] space-x-4 p-4">
        <DataInputField
          title="Stringified JS Object"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onConvert={handleConvert}
          error={error}
          placeholder="Paste your stringified JS object here…"
        />

        <CodeOutputPane
          title="GraphQL Output"
          code={outputCode}
          placeholder="// Click Convert to generate GraphQL code"
          copyText={outputCode}
        />
      </div>
    </>
  );
}
