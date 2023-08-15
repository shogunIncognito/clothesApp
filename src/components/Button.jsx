export default function Button ({ className, children, ...props }) {
  return (
    <button {...props} className={`bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-700 text-white ${className}`}>
      {children}
    </button>
  )
}
