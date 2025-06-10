import { useState } from 'react';
import Navbar from '@/component/Navbar';
import DataInputField from '@/component/DataInputField';
import CodeOutputPane from '@/component/CodeOutputPane';
import { wrapFragments } from '@/helper/helper';


export default function FragmentWrapperTool() {
  const [inputText, setInputText] = useState(`fragment addressFields on address {
  street
  city
  zipCode
  country
}

fragment contactFields on contact {
  phone
  address { ...addressFields }
}`);
  const [wrappedOutput, setWrappedOutput] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      const result = wrapFragments(inputText); // your helper
      setWrappedOutput(result);
      setError('');
    } catch (err) {
      console.log(err);
      
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
