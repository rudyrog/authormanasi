"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutCard({
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
      style={{
        transform: `translateX(${x}%) translateY(${y}%)`,
      }}
    >
      {children}
    </div>
  );
}

function AboutList() {
  return (
    <div className="about-content fixed left-0 top-0 z-40 h-screen w-[300vw] sm:w-[100vw] md:w-[200vw]">
      <AboutCard y={20} x={20}>
        <Image
          src="/images/m2Image.jpg"
          alt="manasi"
          style={{ filter: "saturate(0)" }}
          className="h-96 w-72 rounded-lg sm:h-64 sm:w-48 md:h-72 md:w-56"
          width={400}
          height={350}
        />
      </AboutCard>
      <AboutCard y={-80} x={30}>
        <div className="relative">
          <Image
            className="rotate-[-6deg]"
            src="/images/paper.png"
            alt="paper"
            width={500}
            height={500}
          />
          <div className="brownbulgary absolute left-10 top-[25vh] w-[30vw] rotate-[-6deg] font-bold text-black sm:w-[90%] md:w-[40vw]">
            Hi there! I’m Manasi Mehta, a student and part-time blogger from
            Ahmedabad, Gujarat. Welcome to my blog! I’m excited to share my
            thoughts and experiences with you, and I hope to spark curiosity and
            provide fresh perspectives as we explore different topics together.
          </div>
        </div>
      </AboutCard>
      <AboutCard y={-170} x={44}>
        <div className="relative">
          <Image
            className="rotate-[6deg]"
            src="/images/paper.png"
            alt="paper"
            width={500}
            height={500}
          />
          <div className="brownbulgary absolute left-10 top-[25vh] w-[30vw] rotate-[6deg] font-bold text-black sm:w-[90%] md:w-[40vw]">
            In my free time, I’m usually writing, cooking, reading, painting, or
            practicing public speaking. I find joy in the little things and love
            how creative expression connects us all.
          </div>
        </div>
      </AboutCard>
      <AboutCard y={-280} x={58}>
        <div className="relative">
          <Image src="/images/paper.png" alt="paper" width={500} height={500} />
          <div className="brownbulgary absolute left-10 top-[25vh] w-[30vw] font-bold text-black sm:w-[90%] md:w-[40vw]">
            Books are my escape, and I’m always diving into a new one. Through
            my blogs, I aim to encourage others to embrace self-improvement,
            share valuable life lessons, and celebrate the beauty of diversity.
          </div>
        </div>
      </AboutCard>
    </div>
  );
}

export default function Books() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isPhone = window.innerWidth <= 768;
      gsap.to(".about", {
        left: isPhone ? "-300%" : "-120%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: isPhone ? "+=200%" : "+=400%",
          scrub: 1.5,
        },
      });

      gsap.to(".about-content", {
        left: isPhone ? "-100%" : "-190%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: isPhone ? "+=200%" : "+=350%",
          scrub: 1.5,
        },
      });
    }
  }, []);

  return (
    <div className="flex min-h-[300vh] items-center">
      <h1
        className="about fodo fixed left-20 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "12rem",
          whiteSpace: "nowrap",
        }}
      >
        Author
      </h1>
      <AboutList />
    </div>
  );
}
