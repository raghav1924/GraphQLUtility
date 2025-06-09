import { Copy } from 'lucide-react'
import ActionButton from './ActionButton'

export default function DataInputField({
  title = 'JSON',
  value,
  onChange,
  onConvert,
  buttonLabel = 'Convert',
  error = '',
  placeholder = 'Paste JSON here…',
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
        <ActionButton
          label={buttonLabel}
          Icon={Copy}
          onClick={onConvert}
          small
        />
      </div>

      {/* Textarea (scrollable) */}
      <textarea
        className="flex-1 bg-slate-800 text-slate-100 p-4 leading-5 outline-none resize-none overflow-auto"
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
  )
}