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
      style={{ transform: `translateX(${x}%) translateY(${y}%)` }}
    >
      {children}
    </div>
  );
}

function AboutList() {
  return (
    <div className="about-content fixed left-0 top-0 z-40 h-screen w-[300vw]">
      <AboutCard y={20} x={20}>
        <Image
          src="/images/m2Image.jpg"
          alt="manasi"
          style={{ filter: "saturate(0)" }}
          className="h-96 w-72 rounded-lg"
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
          <div className="brownbulgary absolute left-10 top-[25vh] w-[30vw] rotate-[-6deg] font-bold text-black">
            Hi there! I’m Manasi Mehta, a student and part-time blogger from
            Ahmedabad, Gujarat. Welcome to my blog! I’m excited to share my
            thoughts and experiences with you, and I hope to spark curiosity and
            provide fresh perspectives as we explore different topics together.
            From learning languages to delving into the complexities of society,
            I love writing about things that inspire growth and reflection.
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
          <div className="brownbulgary absolute left-10 top-[25vh] w-[30vw] rotate-[6deg] font-bold text-black">
            In my free time, I’m usually writing, cooking, reading, painting, or
            practicing public speaking. I find joy in the little things and love
            how creative expression connects us all. When it comes to music, I’m
            a fan of soothing tunes, 90’s classics, party vibes, and
            K-pop—always something to match my mood.
          </div>
        </div>
      </AboutCard>
      <AboutCard y={-280} x={58}>
        <div className="relative">
          <Image src="/images/paper.png" alt="paper" width={500} height={500} />
          <div className="brownbulgary absolute left-10 top-[25vh] w-[30vw] font-bold text-black">
            Books are my escape, and I’m always diving into a new one. One
            Indian Girl, Ikigai, Attitude is Everything, and the Sidney Sheldon
            series are among my favorites. Through my blogs, I aim to encourage
            others to embrace self-improvement, share valuable life lessons, and
            celebrate the beauty of diversity. Join me on this journey, and
            let’s grow together!
          </div>
        </div>
      </AboutCard>
    </div>
  );
}

export default function Books() {
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
