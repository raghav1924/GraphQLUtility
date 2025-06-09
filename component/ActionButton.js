import React from 'react'

/**
 * A reusable button with optional icon.
 *
 * Props:
 * - label: string (button text)
 * - onClick: () => void
 * - Icon: React component (e.g. from lucide-react)
 * - small: boolean (use smaller padding / text)
 * - disabled: boolean
 */
export default function ActionButton({
  label,
  onClick,
  Icon,
  small = false,
  disabled = false
}) {
  const base = small
    ? 'px-3 py-1 text-xs'
    : 'px-4 py-2 text-sm'
  const opacity = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        bg-gradient-to-r from-blue-500 to-blue-600
        text-white font-medium rounded-md shadow
        focus:outline-none focus:ring-2 focus:ring-blue-400
        ${base} ${opacity}
      `}
    >
      {Icon && <Icon className={small ? 'mr-1 w-4 h-4' : 'mr-2 w-5 h-5'} />}
      {label}
    </button>
  )
}
