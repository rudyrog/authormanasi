"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Books() {
  useEffect(() => {
    gsap.to(".socials", {
      left: "-120%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=400%",
        scrub: 1.5,
      },
    });

    gsap.to(".socials-content", {
      left: "-130%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=250%",
        scrub: 1.5,
      },
    });
  }, [window]);

  return (
    <div className="flex min-h-[200vh] items-center">
      <h1
        className="socials fodo fixed left-20 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "12rem",
          letterSpacing: "1rem",
          whiteSpace: "nowrap",
        }}
      >
        Novels
      </h1>
      <div className="socials-content fixed left-0 top-0 z-40 h-screen w-[300vw]">
        <div className="translate-x-[20%] translate-y-[10%] text-white">
          <div className="flex w-fit items-start justify-center gap-5">
            <Image
              alt="BookImg"
              src="/images/BookImg.jpg"
              width={300}
              height={300}
            />
            <div className="flex flex-col gap-3 p-5 py-20">
              <div className="fodo text-7xl">The India Story</div>
              <div className="brownbulgary">
                I used to rule the world <br /> Seas would rise when I gave the
                word <br />
                Now in the morning, I sleep alone <br /> Sweep the streets I
                used to own
              </div>
              <div className="brownbulgary text-orange-200/80">
                5th of May 1789
              </div>
            </div>
          </div>
        </div>
        <div className="translate-x-[40%] translate-y-[-100%] text-white">
          <div className="fodo text-7xl">...more coming soon!</div>
        </div>
      </div>
    </div>
  );
}
