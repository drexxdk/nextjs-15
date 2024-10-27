"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 wrap p-2 bg-gray-200 text-black">
      <Link
        className={classNames({ "bg-green-500": pathname === "/" })}
        href="/"
      >
        Home
      </Link>

      <Link
        className={classNames({ "bg-green-500": pathname === "/about" })}
        href="/about"
      >
        About
      </Link>

      <Link
        className={classNames({
          "bg-green-500": pathname.startsWith("/products/"),
        })}
        href="/products"
      >
        Products
      </Link>
    </nav>
  );
}
