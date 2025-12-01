"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }) {
  const path = usePathname();
  const isActiveClass = (pathName) =>
    path.startsWith(pathName) ? "active" : undefined;
  return (
    <Link href={href} className={isActiveClass(href)}>
      {label}
    </Link>
  );
}
