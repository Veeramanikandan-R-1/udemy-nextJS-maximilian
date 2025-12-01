import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      test
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </>
  );
}
