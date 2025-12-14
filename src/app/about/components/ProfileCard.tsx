// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export const ProfileCard = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cyanRef = useRef<HTMLDivElement>(null);
//   const blueRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const cyan = cyanRef.current;
//     const blue = blueRef.current;
//     if (!container || !cyan || !blue) return;

//     const offsetAngle = 10; // Angle difference between cyan and blue
//     let currentRotation = 0;
//     let rafId = 0;
//     let lastX = 0;
//     let lastY = 0;
//     let isInitialized = false;

//     // Smooth transitions
//     cyan.style.transition = "transform 0.1s ease-out";
//     blue.style.transition = "transform 0.1s ease-out";

//     const setRotation = (clientX: number, clientY: number) => {
//       const rect = container.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;

//       // Current mouse position relative to center
//       const currentX = clientX - centerX;
//       const currentY = clientY - centerY;

//       if (!isInitialized) {
//         lastX = currentX;
//         lastY = currentY;
//         isInitialized = true;
//         return;
//       }

//       // Calculate cross product to determine rotation direction
//       // Positive = clockwise, Negative = anti-clockwise
//       const crossProduct = lastX * currentY - lastY * currentX;

//       // Calculate movement magnitude
//       const dx = currentX - lastX;
//       const dy = currentY - lastY;
//       const magnitude = Math.sqrt(dx * dx + dy * dy);

//       // Determine rotation direction and add to current rotation
//       const rotationDelta = (crossProduct > 0 ? 1 : -1) * magnitude * 0.3;
//       currentRotation += rotationDelta;

//       // Apply rotation while maintaining offset
//       cyan.style.transform = `rotate(${currentRotation}deg)`;
//       blue.style.transform = `rotate(${currentRotation + offsetAngle}deg)`;

//       // Update last position
//       lastX = currentX;
//       lastY = currentY;
//     };

//     const handleMove = (e: MouseEvent) => {
//       if (rafId) cancelAnimationFrame(rafId);
//       rafId = requestAnimationFrame(() => setRotation(e.clientX, e.clientY));
//     };

//     const reset = () => {
//       currentRotation = 0;
//       isInitialized = false;
//       cyan.style.transform = `rotate(0deg)`;
//       blue.style.transform = `rotate(${offsetAngle}deg)`;
//     };

//     container.addEventListener("mousemove", handleMove);
//     container.addEventListener("mouseleave", reset);

//     return () => {
//       container.removeEventListener("mousemove", handleMove);
//       container.removeEventListener("mouseleave", reset);
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//   }, []);

//   return (
//     <>
//       <div className="profile-section" ref={containerRef}>
//         <div className="bg-card cyan" ref={cyanRef}></div>
//         <div className="bg-card blue" ref={blueRef}></div>
//         <div className="profile-card">
//           <Image
//             src="/luna-reading.svg"
//             alt="Frontend developer profile illustration"
//             rel="preload"
//             height={100}
//             width={100}
//             className="profile-image"
//             priority
//           />
//         </div>
//       </div>
//     </>
//   );
// };

import Image from "next/image";
import { useEffect, useRef } from "react";

export const ProfileCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cyan = cyanRef.current;
    const blue = blueRef.current;
    if (!container || !cyan || !blue) return;

    const offsetAngle = 10; // Angle difference between cyan and blue
    let currentRotation = 0;
    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;
    let isInitialized = false;

    // Smooth transitions
    cyan.style.transition = "transform 0.1s ease-out";
    blue.style.transition = "transform 0.1s ease-out";

    const setRotation = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Current mouse position relative to center
      const currentX = clientX - centerX;
      const currentY = clientY - centerY;

      if (!isInitialized) {
        lastX = currentX;
        lastY = currentY;
        isInitialized = true;
        return;
      }

      // Calculate cross product to determine rotation direction
      // Positive = clockwise, Negative = anti-clockwise
      const crossProduct = lastX * currentY - lastY * currentX;

      // Calculate movement magnitude
      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const magnitude = Math.sqrt(dx * dx + dy * dy);

      // Only update if movement is significant (reduces unnecessary updates)
      if (magnitude > 0.5) {
        // Determine rotation direction and add to current rotation
        const rotationDelta = (crossProduct > 0 ? 1 : -1) * magnitude * 0.3;
        currentRotation += rotationDelta;

        // Apply rotation while maintaining offset
        cyan.style.transform = `rotate(${currentRotation}deg)`;
        blue.style.transform = `rotate(${currentRotation + offsetAngle}deg)`;

        // Update last position
        lastX = currentX;
        lastY = currentY;
      }

      rafId = null;
    };
    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const currentX = e.clientX - centerX;
      const currentY = e.clientY - centerY;

      if (!isInitialized) {
        lastX = currentX;
        lastY = currentY;
        isInitialized = true;
        return;
      }

      if (rafId === null) {
        rafId = requestAnimationFrame(() => setRotation(e.clientX, e.clientY));
      }
    };

    const reset = () => {
      currentRotation = 0;
      isInitialized = false;
      cyan.style.transform = `rotate(0deg)`;
      blue.style.transform = `rotate(${offsetAngle}deg)`;
    };

    // container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mousemove", handleMove, { passive: true });
    container.addEventListener("mouseleave", reset);

    return () => {
      // container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", reset);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <div className="profile-section" ref={containerRef}>
        <div className="bg-card cyan" ref={cyanRef}></div>
        <div className="bg-card blue" ref={blueRef}></div>
        <div className="profile-card">
          <Image
            src="/luna-reading.svg"
            alt="Frontend developer profile illustration"
            height={100}
            width={100}
            className="profile-image"
            priority
          />
        </div>
      </div>
    </>
  );
};
