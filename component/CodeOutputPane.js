import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Copy } from 'lucide-react'
import ActionButton from './ActionButton'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function CodeOutputPane({
  title = 'GRAPHQL',
  code,
  placeholder = '// click Convert to generate SDL',
  copyText = '',
}) {
  return (
    <div className="flex-1 flex flex-col rounded-lg shadow-lg overflow-hidden font-mono text-sm">
      {/* Toolbar */}
      <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 flex-none">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-gray-200 font-medium flex-1 uppercase tracking-wide text-xs">
          {title}
        </span>
        <CopyToClipboard text={copyText || code} onCopy={() => {}}>
          <ActionButton
            label="Copy"
            Icon={Copy}
            onClick={() => {}}
            small
            disabled={!code}
          />
        </CopyToClipboard>
      </div>

      {/* Content area (scrollable) */}
      <div className="flex-1 bg-slate-800 p-4 overflow-auto font-mono text-sm">
        <SyntaxHighlighter
          language="graphql"
          style={atomDark}
          customStyle={{ margin: 0, padding: 0, background: 'transparent' }}
          wrapLines
        >
          {code || placeholder}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}