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
        className="absolute top-[-150%] z-[50] h-[90vh] w-[100vw]"
      >
        <Image
          src="/tran.svg"
          alt="bg"
          height={300}
          width={600}
          className="opacity-0 md:w-[100vw] md:opacity-100"
        />
      </div>

      <div className="fixed bottom-0 left-1/2 z-50 -translate-x-1/2 md:bottom-10">
        <div
          className="relative z-[51] flex transform items-center justify-center gap-3 py-5 text-lg"
          style={{
            color: "wheat",
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          }}
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
