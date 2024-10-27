import Link from "next/link";

export default async function Page() {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        <li>
          <Link href={`/products/1`}>Products 1</Link>
        </li>
      </ul>
    </section>
  );
}
