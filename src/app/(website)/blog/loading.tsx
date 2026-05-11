export default function BlogLoading() {
  return (
    <main className="w-full min-h-screen flex flex-col pt-32 bg-[#FFFAF5]">
      <div className="w-full max-w-6xl mx-auto px-6 pb-32">
        {/* Header skeleton */}
        <div className="mb-14 text-center flex flex-col items-center">
          <div className="h-8 w-32 bg-black/5 rounded-full mb-6 animate-pulse" />
          <div className="h-16 w-3/4 max-w-2xl bg-black/5 rounded-2xl mb-4 animate-pulse" />
          <div className="h-5 w-1/2 max-w-md bg-black/5 rounded-lg animate-pulse" />
        </div>

        {/* Filter skeleton */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-9 w-24 bg-black/5 rounded-full animate-pulse" />
          ))}
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`rounded-3xl bg-white border border-black/5 animate-pulse ${
                i === 1 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
