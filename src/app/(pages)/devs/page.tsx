"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
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
    <div className="devs-content fixed left-0 top-0 z-40 h-screen w-[300vw]">
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
    <div className="flex min-h-[300vh] items-center">
      <h1
        className="devs fodo fixed left-20 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "12rem",
          whiteSpace: "nowrap",
        }}
      >
        Developers
      </h1>
      <DevList />
    </div>
  );
}
