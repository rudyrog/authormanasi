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
    <div className="book text-white md:translate-x-[20%] md:translate-y-[10%]">
      <div className="flex w-fit flex-col items-center justify-center gap-5 md:flex-row md:items-start">
        <Image
          alt="BookImg"
          src={imageUrl}
          width={300}
          height={300}
          className="mt-8 rounded-lg md:m-0"
        />
        <div className="flex flex-col gap-3 p-5 py-20 text-center md:text-start">
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
    <div className="novels-content md: fixed z-40 md:left-0 md:top-0 md:h-screen md:w-[300vw]">
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
      <div className="text-white md:translate-x-[40%] md:translate-y-[-100%]">
        <div className="fodo text-center text-3xl md:text-start md:text-7xl">
          more coming soon!
        </div>
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
    <div className="flex flex-col items-center p-5 pb-32 md:min-h-[200vh] md:flex-row md:p-0">
      <h1
        className="novels fodo text-7xl font-bold text-orange-200 md:fixed md:left-20 md:top-1/2 md:-translate-y-1/2 md:text-[12rem]"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        Novels
      </h1>
      <BooksList />
    </div>
  );
}
