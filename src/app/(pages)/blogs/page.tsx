"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

function BlogCard({
  title,
  description,
  date,
  imageUrl,
  x,
}: {
  title: string;
  description: any;
  date: string;
  imageUrl: string;
  x: number;
}) {
  return (
    <div
      style={{ transform: `translateX(${x}%)` }}
      className={`Blog translate-y-[0%] bg-black/50 text-white backdrop-blur-md`}
    >
      <div className="flex h-[95%] w-fit items-center justify-stretch gap-5">
        <Image
          alt="BlogImg"
          src={imageUrl}
          width={300}
          height={200}
          className="aspect-[4/5] rounded-lg"
        />
        <div className="flex flex-col gap-3 p-5 py-20">
          <div className="fodo text-7xl" style={{ color: "wheat" }}>
            {title}
          </div>
          <div className="brownbulgary">{description}</div>
          <div className="brownbulgary text-orange-200/80">{date}</div>
        </div>
      </div>
    </div>
  );
}

function BlogsList() {
  return (
    <div className="blogs-content fixed left-0 top-0 z-40 flex h-screen w-[300vw] flex-row">
      <BlogCard
        x={100}
        title="Balancing Truth & Tact"
        description={
          <>
            {" "}
            Discover a world where
            <br /> honesty meets kindness in the art of communication.
            <br /> Where Honesty Meets Respect
            <br /> is a thoughtful reflection on how our words can shape others,
            <br /> emphasizing the beauty of constructive feedback and
            compassion.
          </>
        }
        imageUrl="/images/bekindImg.jpg"
        date={"29 JUN 2024"}
      />
      <BlogCard
        x={120}
        title="Books That Made My 22"
        description={
          <>
            {" "}
            Welcome to a world where
            <br /> words transport you across time, genres, and emotions.
            <br /> For the Love of Books
            <br /> is a handpicked guide to some of the most beautiful reads,
            <br /> spanning romance, thrillers, fiction, biographies, and more.
          </>
        }
        imageUrl="/images/blog2Img.jpg"
        date={"1 FEB 2023"}
      />
      <BlogCard
        x={100}
        title="Journey of Learning English From Scratch"
        description={
          <>
            {" "}
            Step into a journey where
            <br /> words unlock opportunities and confidence takes flight.
            <br /> The Language of Possibilities
            <br /> is a heartfelt story of overcoming <br />
            barriers and embracing English,
            <br /> from humble beginnings to a world of endless communication.
          </>
        }
        imageUrl="/images/blog3Img.jpg"
        date={"15 NOV 2021"}
      />
      <BlogCard
        x={150}
        title="The Indian Economy"
        description={
          <>
            {" "}
            Explore the journey of a nation where
            <br /> the past struggles fuel the future’s progress.
            <br /> The Indian Economy: A Tale of Growth and Resilience
            <br /> takes you through India’s evolution from colonial struggles
            to its rise as a global economic power,
            <br /> with a look at its diverse history, challenges, and
            ever-growing potential.
          </>
        }
        imageUrl="/images/blog4Image.jpg"
        date={"04 Aug 2021"}
      />

      <div className="translate-x-[360%] translate-y-[30%] text-white">
        <Link
          target="_blank"
          href="https://manasimehta28.blogspot.com"
          className="fodo text-7xl underline"
        >
          read more blogs
        </Link>
      </div>
    </div>
  );
}

export default function Blogs() {
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
    <div className="flex min-h-[400vh] items-center">
      <h1
        className="blogs fodo fixed left-20 top-1/2 -translate-y-1/2 transform font-bold text-orange-200"
        style={{
          fontSize: "12rem",
          whiteSpace: "nowrap",
        }}
      >
        Blogs
      </h1>
      <BlogsList />
    </div>
  );
}
