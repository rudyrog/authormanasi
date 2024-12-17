"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { gsap } from "gsap";

export default function Navigation() {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);

        gsap.to(overlayRef.current, {
          y: "-200%",
          delay: 0.5,
          duration: 4,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="absolute -top-0 left-[-120vw] z-[50] h-screen w-[200vw] translate-y-[100%] bg-black"
      ></div>

      <div
        className="relative z-[51] flex items-center justify-center gap-3 text-xl"
        style={{ color: "wheat" }}
      >
        <Link href="/" className="navButton" onClick={handleNavigation("/")}>
          Home
        </Link>
        <div>|</div>
        <Link
          href="/books"
          onClick={handleNavigation("/books")}
          className="navButton"
        >
          Books
        </Link>
        <Link
          href="/blogs"
          onClick={handleNavigation("/blogs")}
          className="navButton"
        >
          Blogs
        </Link>
        <Link
          href="/about"
          onClick={handleNavigation("/about")}
          className="navButton"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={handleNavigation("/contact")}
          className="navButton"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
