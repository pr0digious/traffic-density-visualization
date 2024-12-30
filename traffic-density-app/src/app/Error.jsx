export default function Error({ message, retry }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-red-500">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          Try Again
        </button>
      )}
    </div>
  )
}