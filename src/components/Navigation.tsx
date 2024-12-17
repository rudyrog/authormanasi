"use client";
import Link from "next/link";
export default function Navigation() {
  return (
    <div
      className="flex items-center justify-center gap-3 text-xl"
      style={{ color: "wheat" }}
    >
      <Link href={"/"} className="navButton">
        Home
      </Link>
      <div>|</div>
      <Link href={"/books"} className="navButton">
        Books
      </Link>
      <Link href={"/blogs"} className="navButton">
        Blogs
      </Link>
      <Link href={"/about"} className="navButton">
        About
      </Link>
      <Link href={"/contact"} className="navButton">
        Contact
      </Link>
    </div>
  );
}
