"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutCard({
  y,
  x,
  children,
  isMobile,
}: {
  y: number;
  x: number;
  children: React.ReactNode;
  isMobile: any;
}) {
  console.log(isMobile);
  return (
    <div
      className="book text-white"
      style={
        !isMobile.isMobile
          ? {
              transform: `translateX(${x}%) translateY(${y}%)`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
}

function AboutList(isMobile: any) {
  return (
    <div className="about-content sm:w-[100vw] md:fixed md:left-0 md:top-0 md:z-40 md:h-screen md:w-[200vw]">
      <AboutCard y={30} x={28} isMobile={isMobile}>
        <Image
          src="/images/m2Image.jpg"
          alt="manasi"
          style={{ filter: "saturate(0)" }}
          className="rounded-lg sm:h-64 sm:w-48 md:h-96 md:w-72"
          width={500}
          height={450}
        />
      </AboutCard>
      <AboutCard y={-70} isMobile={isMobile} x={40}>
        <div className="relative">
          <Image
            className="md:rotate-[-6deg]"
            src="/images/paper.png"
            alt="paper"
            width={510}
            height={500}
          />
          <div className="aptos absolute left-8 top-24 w-[85%] text-black sm:w-[90%] md:left-10 md:top-[25vh] md:w-[30vw] md:rotate-[-6deg] md:text-lg">
            Hi there! I’m Manasi Mehta, a student
            <br />
            and part-time blogger from Ahmedabad, Gujarat. Welcome to my blog!
            <br /> I’m excited to share my thoughts and experiences with you,
            sparking
            <br /> curiosity and providing fresh perspectives
            <br /> as we explore different topics together.
            <br />
          </div>
        </div>
      </AboutCard>
      <AboutCard isMobile={isMobile} y={-170} x={60}>
        <div className="relative">
          <Image
            className="md:rotate-[6deg]"
            src="/images/paper.png"
            alt="paper"
            width={525}
            height={500}
          />
          <div className="aptos absolute left-8 top-24 w-[85%] text-black sm:w-[90%] md:left-10 md:top-[25vh] md:w-[30vw] md:rotate-[6deg] md:text-lg">
            In my free time, I’m usually writing, cooking, reading, painting, or
            <br /> practicing public speaking. <br /> I find joy in the little
            things and love <br /> how creative expression connects us all{" "}
            <br />
            and makes society as a whole a better place.
          </div>
        </div>
      </AboutCard>
      <AboutCard isMobile={isMobile} y={-270} x={80}>
        <div className="relative">
          <Image src="/images/paper.png" alt="paper" width={510} height={500} />
          <div className="absolute left-8 top-24 w-[85%] text-black sm:w-[90%] md:left-10 md:top-[25vh] md:w-[30vw] md:text-lg">
            Books are my escape, and I’m always diving into a new one.
            <br /> Through my blogs, I aim to encourage others to embrace
            self-improvement, share valuable life lessons, and celebrate
            <br />
            the beauty of diversity.
          </div>
        </div>
      </AboutCard>
    </div>
  );
}

export default function Books() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    gsap.to(".about", {
      left: "-120%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=400%",
        scrub: 1.5,
      },
    });

    gsap.to(".about-content", {
      left: "-190%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=350%",
        scrub: 1.5,
      },
    });
  }, [window]);

  return (
    <div className="flex flex-col items-center p-5 md:min-h-[300vh] md:flex-row md:p-0">
      <h1
        className="about fodo py-10 text-7xl font-bold text-orange-200 md:fixed md:left-20 md:top-1/2 md:-translate-y-1/2 md:py-0 md:text-[12rem]"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        Author
      </h1>
      <AboutList isMobile={isMobile} />
    </div>
  );
}
