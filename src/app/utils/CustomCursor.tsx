"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const radialRef = useRef<HTMLDivElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  // store last mouse coords and use rAF to update
  const posRef = useRef({
    x: 0,
    y: 0,
    visible: false,
    hideRadial: true,
  });
  const rafRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // Only enable on non-touch devices
    // const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    // if (!hasFinePointer) return;

    // setIsEnabled(true);

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const radial = radialRef.current;
    if (!cursor || !dot || !radial) return;

    const updateDOM = () => {
      const { x, y, visible, hideRadial } = posRef.current;

      // Only update if values changed (reduces unnecessary DOM updates)
      if (
        visible &&
        (cursor.style.opacity !== "1" || dot.style.opacity !== "1")
      ) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        cursor.style.opacity = "1";
        dot.style.opacity = "1";
        radial.style.opacity = hideRadial ? "0" : "1";
        // if (!hideRadial) {
        //   radial.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(43, 84, 142, 0.15), transparent 80%)`;
        // }
      } else if (
        !visible &&
        (cursor.style.opacity !== "0" || dot.style.opacity !== "0")
      ) {
        cursor.style.opacity = "0";
        dot.style.opacity = "0";
        radial.style.opacity = "0";
      } else if (visible) {
        // Only update position if visible
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        radial.style.opacity = hideRadial ? "0" : "1";
        // if (!hideRadial) {
        //   radial.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(43, 84, 142, 0.15), transparent 80%)`;
        // }
      }

      if (visible || isAnimatingRef.current) {
        rafRef.current = requestAnimationFrame(updateDOM);
        isAnimatingRef.current = visible;
      } else {
        isAnimatingRef.current = false;
        rafRef.current = null;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const target = e.target;
      const overTechStack =
        target instanceof HTMLElement &&
        target.closest(".tech-stack-section") !== null;

      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      posRef.current.visible = true;
      posRef.current.hideRadial = overTechStack;

      // Start animation loop if not already running
      if (rafRef.current === null && !isAnimatingRef.current) {
        isAnimatingRef.current = true;
        rafRef.current = requestAnimationFrame(updateDOM);
      }
    };

    const onPointerEnter = (e: PointerEvent) => {
      posRef.current.visible = true;
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (rafRef.current === null && !isAnimatingRef.current) {
        isAnimatingRef.current = true;
        rafRef.current = requestAnimationFrame(updateDOM);
      }
    };

    const onPointerLeave = () => {
      posRef.current.visible = false;
    };

    // Use pointer events for better coverage (mouse, touch pen)
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerenter", onPointerEnter, {
      passive: true,
    });
    document.addEventListener("pointerleave", onPointerLeave, {
      passive: true,
    });

    // optional: hide native cursor globally while our custom cursor is visible
    document.documentElement.style.cursor = "none";

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerenter", onPointerEnter);
      document.removeEventListener("pointerleave", onPointerLeave);
      // restore
      document.documentElement.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  // if (!isEnabled) {
  //   return null;
  // }

  return (
    <>
      {/* radial: full-screen gradient */}
      <div ref={radialRef} className="cursor-radial" aria-hidden="true" />

      {/* trailing ring / outline */}
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />

      {/* small center dot */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
