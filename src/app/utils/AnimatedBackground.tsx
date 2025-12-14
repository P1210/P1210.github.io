"use client";
import { useEffect, useRef, useState } from "react";

// Optimized collision detection using spatial partitioning
function getSpatialGrid(
  particles: Array<{ x: number; y: number }>,
  cellSize: number,
  width: number,
  height: number
) {
  const grid: Map<string, number[]> = new Map();

  particles.forEach((particle, index) => {
    const cellX = Math.floor(particle.x / cellSize);
    const cellY = Math.floor(particle.y / cellSize);
    const key = `${cellX},${cellY}`;

    if (!grid.has(key)) {
      grid.set(key, []);
    }
    grid.get(key)!.push(index);
  });

  return grid;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d"); // Disable alpha for better performance
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const area = canvas.width * canvas.height;
    const PARTICLE_COUNT = Math.min(80, Math.max(60, Math.floor(area / 10000)));
    const CONNECTION_DISTANCE = Math.min(
      220,
      Math.max(70, Math.min(canvas.width, canvas.height) * 0.18)
    );
    const CELL_SIZE = CONNECTION_DISTANCE;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    let animationId: number;
    let lastTime = performance.now();
    const TARGET_FPS = 60;
    const FRAME_TIME = 1000 / TARGET_FPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      // Throttle to target FPS if needed
      if (deltaTime < FRAME_TIME) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      // Use spatial grid for optimized collision detection
      const grid = getSpatialGrid(
        particles,
        CELL_SIZE,
        canvas.width,
        canvas.height
      );
      const checkedPairs = new Set<string>();

      // Draw particles and connections
      particles.forEach((particle, i) => {
        // Draw particle
        // ctx.beginPath();
        // ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        // ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        // ctx.fill();

        // Check connections only with particles in nearby cells
        const cellX = Math.floor(particle.x / CELL_SIZE);
        const cellY = Math.floor(particle.y / CELL_SIZE);

        // Check current cell and 8 neighboring cells
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${cellX + dx},${cellY + dy}`;
            const cellIndices = grid.get(key);

            if (cellIndices) {
              cellIndices.forEach((j) => {
                if (i >= j) return; // Avoid duplicate checks

                const pairKey = `${Math.min(i, j)},${Math.max(i, j)}`;
                if (checkedPairs.has(pairKey)) return;
                checkedPairs.add(pairKey);

                const otherParticle = particles[j];
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distanceSq = dx * dx + dy * dy; // Use squared distance to avoid sqrt

                if (distanceSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(otherParticle.x, otherParticle.y);
                  ctx.strokeStyle = `rgba(59, 130, 246, ${0.25})`;
                  ctx.stroke();
                }
              });
            }
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-1"
      style={{ opacity: 0.6 }}
    />
  );
}
