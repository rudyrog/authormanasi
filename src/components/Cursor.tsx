"use client";
import React, { useEffect, useRef } from "react";
import { FaPenNib } from "react-icons/fa";
import { gsap } from "gsap";
const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    >
      <FaPenNib
        className="rotate-90"
        style={{ color: "wheat", fontSize: "24px" }}
      />
    </div>
  );
};

export default Cursor;
