"use client";

import { useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside card
    const y = e.clientY - rect.top;  // mouse Y inside card
    const centerX = rect.width / 1;
    const centerY = rect.height / 1;

    const rotateX = ((y - centerY) / centerY) * 10; // tilt max 10deg
    const rotateY = ((x - centerX) / centerX) * -10;

    if (innerRef.current) {
      innerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      className={`relative [perspective:1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className="transition-transform duration-300 ease-out will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
