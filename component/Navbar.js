import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className="relative rounded-lg overflow-hidden shadow-lg font-mono text-sm"
      style={{ margin: '1rem', width: '96%' }}
    >
      {/* Toolbar */}
      <div className="flex items-center space-x-2 bg-gray-900 px-6 py-4">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />

        <span className="ml-4 text-gray-200 font-medium flex-1">
          GraphQL Utility
        </span>

        <div className="flex space-x-4">
          <Link
            href="/"
            className="text-gray-400 hover:text-white text-sm"
          >
            Home
          </Link>
          <Link
            href="/typedef"
            className="text-gray-400 hover:text-white text-sm"
          >
            JSON → Typedef
          </Link>
          <Link
            href="/fragement_and_query"
            className="text-gray-400 hover:text-white text-sm"
          >
            Generate Fragments
          </Link>
          <Link
            href="/wrapFragmentInGql"
            className="text-gray-400 hover:text-white text-sm"
          >
            .js File Format
          </Link>
        </div>
      </div>
    </nav>
  )
}
