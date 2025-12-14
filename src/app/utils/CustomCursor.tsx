"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const radialRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef({
    x: 0,
    y: 0,
    visible: false,
    hideRadial: true,
  });

  const rafRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // ✅ ONLY enable on mouse / trackpad devices
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const radial = radialRef.current;
    if (!cursor || !dot || !radial) return;

    const updateDOM = () => {
      const { x, y, visible, hideRadial } = posRef.current;

      if (visible) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        cursor.style.opacity = "1";
        dot.style.opacity = "1";
        radial.style.opacity = hideRadial ? "0" : "1";

        rafRef.current = requestAnimationFrame(updateDOM);
      } else {
        cursor.style.opacity = "0";
        dot.style.opacity = "0";
        radial.style.opacity = "0";

        isAnimatingRef.current = false;
        rafRef.current = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      // ✅ Ignore touch / pen
      if (e.pointerType !== "mouse") return;

      const target = e.target as HTMLElement | null;
      const overTechStack =
        target?.closest(".tech-stack-section") !== null;

      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      posRef.current.visible = true;
      posRef.current.hideRadial = overTechStack;

      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        rafRef.current = requestAnimationFrame(updateDOM);
      }
    };

    const onPointerLeave = () => {
      posRef.current.visible = false;
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave, {
      passive: true,
    });

    // ✅ Hide native cursor ONLY on desktop
    document.documentElement.style.cursor = "none";

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* radial glow */}
      <div ref={radialRef} className="cursor-radial" aria-hidden />

      {/* outer ring */}
      <div ref={cursorRef} className="custom-cursor" aria-hidden />

      {/* center dot */}
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
