import Navbar from "@/components/Navbar";
import GlobalScrollTransition from "@/components/GlobalScrollTransition";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalScrollTransition />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </>
  );
}
