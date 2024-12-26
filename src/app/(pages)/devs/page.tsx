"use client";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function DevCard({
  y,
  x,
  children,
}: {
  y: number;
  x: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="book text-white"
      style={{ transform: `translateX(${x}%) translateY(${y}%)` }}
    >
      {children}
    </div>
  );
}

function DevList() {
  return (
    <div className="devs-content top-0 z-40 w-[110vw] translate-x-[-28%] md:fixed md:left-0 md:h-screen md:w-[300vw] md:translate-x-0">
      <DevCard y={20} x={28}>
        <div className="relative">
          <Image
            className=""
            src={"/devInfo.svg"}
            alt="devsvg"
            width={700}
            height={700}
          />
          <div className="devLink">
            <Link
              href="https://github.com/rudyrog"
              target="_blank"
              className="flex items-center justify-start gap-2"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <div>Rudra Mehta</div>
            </Link>
          </div>
          <div className="devLink2">
            <Link
              className="flex items-center justify-start gap-2"
              href="https://github.com/parv141206"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <div>Parv Shah</div>
            </Link>
          </div>
        </div>
      </DevCard>
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
    gsap.to(".devs", {
      left: "-120%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=300%",
        scrub: 1.5,
      },
    });

    gsap.to(".devs-content", {
      left: "-90%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom  bottom",
        scrub: 1.5,
      },
    });
  }, [window]);

  return (
    <div className="flex flex-col items-center p-10 md:min-h-[300vh] md:flex-row md:p-0">
      <h1
        className="devs fodo text-5xl font-bold text-orange-200 md:fixed md:left-20 md:top-1/2 md:-translate-y-1/2 md:text-[12rem]"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        Developers
      </h1>
      <DevList />
      {isMobile && (
        <>
          <div className="card flex w-fit translate-y-20 items-center justify-center">
            <Link
              href="https://www.instagram.com/rudrameh06"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 flex items-center justify-center gap-2 text-4xl"
            >
              <FaInstagram />
              Rudra Mehta
            </Link>
          </div>
          <div className="card flex w-fit translate-y-24 items-center justify-center">
            <Link
              href="https://www.instagram.com/calligraphic_parv"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 flex items-center justify-center gap-2 text-4xl"
            >
              <FaInstagram />
              Parv Shah
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
