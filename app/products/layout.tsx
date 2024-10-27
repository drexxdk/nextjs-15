import { Suspense } from "react";
import Loading from "./loading";

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <h2>Products layout</h2>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
