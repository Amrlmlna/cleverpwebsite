import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FFFAF5] px-6">
      <h1 className="font-bricolage text-7xl md:text-9xl font-bold tracking-tight text-[#0A0A0A] mb-4">
        404
      </h1>
      <p className="text-neutral-500 text-lg mb-8 text-center max-w-md">
        Halaman yang kamu cari tidak ditemukan. Mungkin sudah dipindahkan atau URL-nya salah.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0A0A0A]/90 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
