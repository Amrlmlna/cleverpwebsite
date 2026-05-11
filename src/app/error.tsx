"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FFFAF5] px-6">
      <h1 className="font-bricolage text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-4">
        Terjadi Kesalahan
      </h1>
      <p className="text-neutral-500 text-lg mb-8 text-center max-w-md">
        Maaf, ada yang tidak beres. Silakan coba lagi.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0A0A0A]/90 transition-colors"
      >
        Coba Lagi
      </button>
    </main>
  );
}
