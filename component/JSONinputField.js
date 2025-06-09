import { Copy } from 'lucide-react'

export default function JSONInputPane({
  title = 'JSON',
  value,
  onChange,
  onConvert,
  buttonLabel = 'Convert',
  error = '',
  placeholder = 'Paste JSON here…',
  height = 'h-96',
  margin = 'm-24'
}) {
  return (
    <div className="w-1/2 p-4">
      <div
        className={`relative rounded-lg overflow-hidden shadow-lg font-mono text-sm ${margin}`}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between bg-slate-700 px-4 py-2">
          <span className="text-xs uppercase tracking-wide text-slate-300">
            {title}
          </span>
          <button
            onClick={onConvert}
            className="flex items-center space-x-1 p-1 rounded hover:bg-slate-600 text-slate-300"
          >
            <Copy size={16} />
            <span className="text-xs">{buttonLabel}</span>
          </button>
        </div>

        {/* Textarea */}
        <textarea
          className={`block w-full ${height} bg-slate-800 text-slate-100 p-4 font-mono text-sm leading-5 outline-none resize-none`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {/* Error */}
        {error && (
          <div className="absolute bottom-3 left-4 text-red-400 text-xs">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}
