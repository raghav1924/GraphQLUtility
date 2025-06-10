import { useState } from 'react';
import Navbar from '@/component/Navbar';
import CodeOutputPane from '@/component/CodeOutputPane';
import DataInputField from '@/component/DataInputField';
import { extractConstants } from '@/helper/helper';
// import { gql } from 'graphql-tag'

const Stringified = () => {
  const [inputCode, setInputCode] = useState(`const COPY_SUBMISSION = gql\`  mutation Mutation(    $quoteNumber: String    $quoteVersion: String    $product: String    $policyStatus: String    $lastSubmittedPage: String  ) {    copySubmission(      quoteNumber: $quoteNumber      quoteVersion: $quoteVersion      product: $product      policyStatus: $policyStatus      lastSubmittedPage: $lastSubmittedPage    ) {      ...CorePolicyFields    }  }\`;`);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

 const handleConvert = () => {
  try {
    // const module = {};

    // // Dummy gql to bypass template literal
    // const gql = (literals, ...placeholders) =>
    //   literals.reduce((result, lit, i) => result + lit + (placeholders[i] || ''), '');

    // // Replace "export const Something =" with "module.Something ="
    // const transformedCode = inputCode.replace(/export\s+const\s+(\w+)\s*=/g, 'module.$1 =');

    // // Evaluate in local scope
    // eval(transformedCode);

    const result = extractConstants(inputCode);
console.log(result);

    setOutput(
      typeof result === 'string' ? result : JSON.stringify(result, null, 2)
    );
    setError('');
  } catch (err) {
    console.error(err);
    setOutput('');
    setError('⚠️ Invalid JavaScript code or structure.');
  }
};



  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] space-x-4 p-4">
       
          <DataInputField
            title="JavaScript"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            onConvert={handleConvert}
            error={error}
            placeholder="Paste or write JavaScript module here..."
            margin="m-0"
          />
  
          <CodeOutputPane
            title="Extracted Object"
            code={output}
            placeholder="// Extracted JavaScript Object will appear here"
            copyText={output}
            margin="m-0"
          />
       
      </div>
    </>
  );
};

export default Stringified;
