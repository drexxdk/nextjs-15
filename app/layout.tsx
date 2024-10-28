import { Suspense } from "react";
import "@/styles/globals.scss";
import { NavLinks } from "@/components/nav-links";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main className="bg-red-500 p-2">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
