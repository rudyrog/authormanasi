"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    if (overlayRef.current) {
      gsap.killTweensOf(overlayRef.current);
    }

    gsap.to(overlayRef.current, {
      y: "140%",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);

        gsap.to(overlayRef.current, {
          y: "-140%",
          delay: 0.5,
          duration: 3.5,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="absolute top-[-150%] z-[50] h-[100vh] w-[100vw]"
      >
        <Image
          src="/tran.svg"
          alt="bg"
          height={300}
          width={600}
          className="w-[100vw]"
        />
      </div>

      <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 transform">
        <div
          className="relative z-[51] flex items-center justify-center gap-3 text-xl"
          style={{ color: "wheat" }}
        >
          <Link
            href="/"
            className={`navButton ${pathname === "/" ? "text-white" : ""}`}
            onClick={handleNavigation("/")}
          >
            Home
          </Link>
          <div>|</div>
          <Link
            href="/books"
            className={`navButton ${pathname === "/books" ? "text-white" : ""}`}
            onClick={handleNavigation("/books")}
          >
            Books
          </Link>
          <Link
            href="/blogs"
            className={`navButton ${pathname === "/blogs" ? "text-white" : ""}`}
            onClick={handleNavigation("/blogs")}
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className={`navButton ${pathname === "/about" ? "text-white" : ""}`}
            onClick={handleNavigation("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`navButton ${pathname === "/contact" ? "text-white" : ""}`}
            onClick={handleNavigation("/contact")}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
