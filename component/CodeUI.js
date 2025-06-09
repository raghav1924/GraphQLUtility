import { useState } from 'react'
import Link from 'next/link'
import { Copy } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// Import the VSCode dark theme + the Prism highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscodeDark ,docco,atomOneDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function CodeSnippet({ code, language = 'js' }) {
  const [copied, setCopied] = useState(false)

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg font-mono text-sm"
      style={{ margin: '6rem'}}
    >
      {/* Toolbar */}
      <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />

        <span className="ml-4 text-gray-200 font-medium flex-1">
          index.tsx
        </span>

        <Link
          href="/typedef"
          className="text-gray-400 hover:text-white text-sm"
        >
          JSON → Typedef
        </Link>

        <div className="flex space-x-2">
          <CopyToClipboard
            text={code}
            onCopy={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            <button
              aria-label="Copy code"
              className="p-1 rounded hover:bg-slate-600 text-slate-300"
            >
              <Copy size={16} />
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* Syntax‑highlighted code block */}
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '1rem',
          // backgroundColor: '#1e1e1e', // match VSCode dark
          borderRadius: '0 0 0.5rem 0.5rem',
        }}
        wrapLines={true}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>

      {/* “Copied!” feedback */}
      {copied && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  )
}
