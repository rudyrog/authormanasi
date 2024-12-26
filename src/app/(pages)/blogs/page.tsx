"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

function BlogCard({
  isMobile,
  title,
  description,
  date,
  imageUrl,
  x,
}: {
  isMobile: any;
  title: any;
  description: any;
  date: string;
  imageUrl: string;
  x: number;
}) {
  console.log("IS mobile", isMobile.isMobile);
  return (
    <div
      style={isMobile.isMobile ? {} : { transform: `translateX(${x + "%"})` }}
      className={`Blog bg-black/50 py-5 text-white backdrop-blur-md md:translate-y-[0%] md:py-0`}
    >
      <div className="flex w-fit flex-col items-center justify-stretch gap-1 md:h-[95%] md:flex-row md:gap-5">
        <Image
          alt="BlogImg"
          src={imageUrl}
          width={300}
          height={200}
          className="mt-8 aspect-[4/5] rounded-lg md:m-0"
        />
        <div className="flex flex-col gap-3 p-1 py-3 text-center md:p-5 md:py-20 md:text-start">
          <div className="fodo text-5xl md:text-7xl" style={{ color: "wheat" }}>
            {title}
          </div>
          <div className="aptos">{description}</div>
          <div className="brownbulgary text-orange-200/80">{date}</div>
        </div>
      </div>
    </div>
  );
}

function BlogsList(isMobile: any) {
  return (
    <div className="blogs-content flex flex-col md:fixed md:left-0 md:top-0 md:z-40 md:h-screen md:w-[300vw] md:flex-row">
      <BlogCard
        isMobile={isMobile}
        x={100}
        title={
          <Link
            href={
              "https://manasimehta28.blogspot.com/2024/06/balancing-truth-and-tact.html"
            }
          >
            Balancing Truth & Tact
          </Link>
        }
        description={
          <>
            {" "}
            Discover a world where honesty and kindness
            <br /> come together in the art of communication.
            <br /> Where Honesty Meets Respect is a thoughtful reflection
            <br /> on the profound impact our words can have on others.
            <br /> It highlights the importance of constructive feedback,
            <br /> emphasizing how compassion and empathy
            <br /> can transform our interactions.
            <br />
          </>
        }
        imageUrl="/images/bekindImg.jpg"
        date={"29 JUN 2024"}
      />
      <BlogCard
        isMobile={isMobile}
        x={110}
        title={
          <Link
            href={
              "https://manasimehta28.blogspot.com/2023/02/books-that-made-my-2022.html"
            }
          >
            Books That Made My 22
          </Link>
        }
        description={
          <>
            {" "}
            Welcome to a world where words transport you
            <br /> across time, genres, and emotions.
            <br /> For the Love of Books is a handpicked guide
            <br /> to some of the most beautiful reads,
            <br /> spanning romance, thrillers, fiction, biographies,
            <br /> and so much more.
            <br />
          </>
        }
        imageUrl="/images/blog2Img.jpg"
        date={"1 FEB 2023"}
      />
      <BlogCard
        isMobile={isMobile}
        x={100}
        title={
          <Link
            href={
              "https://manasimehta28.blogspot.com/2021/11/my-journey-of-learning-english-from.html"
            }
          >
            Learning English from Scratch
          </Link>
        }
        description={
          <>
            {" "}
            Step into a journey where words unlock
            <br /> opportunities and confidence takes flight.
            <br /> The Language of Possibilities is a heartfelt story
            <br /> of overcoming barriers and embracing English,
            <br /> from humble beginnings to a world
            <br /> of endless communication.
            <br />
          </>
        }
        imageUrl="/images/blog3Img.jpg"
        date={"15 NOV 2021"}
      />
      <BlogCard
        isMobile={isMobile}
        x={150}
        title={
          <Link
            href={
              "https://manasimehta28.blogspot.com/2021/08/the-indian-economy.html"
            }
          >
            The Indian Economy
          </Link>
        }
        description={
          <>
            {" "}
            Explore the journey of a nation where
            <br /> the past struggles fuel the future’s progress.
            <br /> The Indian Economy: A Tale of Growth and Resilience
            <br /> takes you through India’s evolution from colonial struggles
            <br /> to its rise as a global economic power, with a look
            <br /> at its diverse history, challenges, and ever-growing
            potential.
          </>
        }
        imageUrl="/images/blog4Image.jpg"
        date={"04 Aug 2021"}
      />

      <div className="text-center text-white md:translate-x-[360%] md:translate-y-[30%] md:text-start">
        <Link
          target="_blank"
          href="https://manasimehta28.blogspot.com"
          className="fodo text-5xl underline md:text-7xl"
        >
          read more blogs
        </Link>
      </div>
    </div>
  );
}

export default function Blogs() {
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
    gsap.to(".blogs", {
      left: "-120%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=300%",
        scrub: 1.5,
      },
    });

    gsap.to(".blogs-content", {
      left: "-320%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=340%",
        scrub: 1.5,
      },
    });
  }, [window]);

  return (
    <div className="flex flex-col items-center p-5 pb-32 md:min-h-[400vh] md:flex-row md:p-0">
      <h1
        className="blogs fodo my-5 text-7xl font-bold text-orange-200 md:fixed md:left-28 md:top-1/2 md:my-0 md:-translate-y-1/2 md:text-[12rem]"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        Blogs
      </h1>
      <BlogsList isMobile={isMobile} />
    </div>
  );
}
