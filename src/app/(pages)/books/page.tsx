"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

function BookCard({
  title,
  description,
  date,
  imageUrl,
}: {
  title: string;
  description: any;
  date: string;
  imageUrl: string;
}) {
  return (
    <div className="book translate-x-[20%] translate-y-[10%] text-white">
      <div className="flex w-fit items-start justify-center gap-5">
        <Image
          alt="BookImg"
          src={imageUrl}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-3 p-5 py-20">
          <div className="fodo text-7xl" style={{ color: "wheat" }}>
            {title}
          </div>
          <div className="brownbulgary">{description}</div>
          <div className="brownbulgary text-orange-200/80">{date}</div>
          <Link href={"https://amzn.in/d/6efa52m"}>
            <button className="buyButton">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BooksList() {
  return (
    <div className="novels-content fixed left-0 top-0 z-40 h-screen w-[300vw]">
      <BookCard
        title="The India Story"
        description={
          <>
            {" "}
            Discover the soul of a nation where
            <br /> ancient traditions harmonize with modern aspirations.
            <br /> Where Tradition Meets Transformation
            <br /> is a heartfelt exploration of India's journey from <br />
            its rich historical roots to its vibrant, evolving present.
          </>
        }
        imageUrl="/images/BookImg.jpg"
        date={"23 NOV 2024"}
      />
      <div className="translate-x-[40%] translate-y-[-100%] text-white">
        <div className="fodo text-7xl">...more coming soon!</div>
      </div>
    </div>
  );
}

export default function Books() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".novels", {
        left: "-120%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=400%",
          scrub: 1.5,
        },
      });

      gsap.to(".novels-content", {
        left: "-130%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=250%",
          scrub: 1.5,
        },
      });
    } else {
      gsap.killTweensOf(".novels");
      gsap.killTweensOf(".novels-content");

      document.querySelector(".novels-content")?.classList.remove("fixed");
      document.querySelector(".novels-content")?.classList.add("relative");
    }
  }, [isMobile, window]);

  return (
    <div className="flex min-h-[200vh] items-center">
      <h1
        className="novels fodo fixed left-20 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "12rem",
          whiteSpace: "nowrap",
        }}
      >
        Novels
      </h1>
      <BooksList />
    </div>
  );
}
