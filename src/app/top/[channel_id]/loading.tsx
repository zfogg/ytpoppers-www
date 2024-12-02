export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="animate-pulse">
        <div className="h-8 w-64 bg-gray-300 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 w-96 bg-gray-300 rounded"></div>
          <div className="h-4 w-80 bg-gray-300 rounded"></div>
          <div className="h-4 w-88 bg-gray-300 rounded"></div>
        </div>
      </div>
    </main>
  )
}
