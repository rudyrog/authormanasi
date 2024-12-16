"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    gsap.to("#socials", {
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
    <div className="flex min-h-[400vh] items-center">
      <h1
        id="socials"
        className="fodo fixed left-0 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "36rem",
          letterSpacing: "2rem",
          whiteSpace: "nowrap",
        }}
      >
        SOCIALS
      </h1>

      <div className="socials-content fixed left-0 top-0 z-50 h-screen w-[300vw]">
        <div className="translate-x-[10%] translate-y-[70vh] text-3xl text-white">
          <div className="card flex w-fit items-center justify-center">
            <FaFacebookF style={{ fontSize: "8rem" }} />
            <div>@manasiMehta</div>
          </div>
        </div>

        <div className="translate-x-[30%] translate-y-[-20vh] text-3xl text-white">
          <div className="card flex w-fit items-center justify-center">
            <FaInstagram style={{ fontSize: "8rem" }} />
            <div>@manasiMehta</div>
          </div>
        </div>
      </div>
    </div>
  );
}
