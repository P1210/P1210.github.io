"use client";
import { useState, useEffect, useRef } from "react";

// Throttle function to limit scroll event frequency
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
      rafRef.current = null;
    };

    // Use requestAnimationFrame for smooth updates, throttled to ~60fps
    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    // Throttle scroll events to reduce computation
    const throttledHandleScroll = throttle(handleScroll, 16); // ~60fps

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-border z-50"
      data-testid="scroll-progress"
    >
      <div
        className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
