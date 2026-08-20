import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const PARTICLE_COLOR = "59, 130, 246";

    const createParticles = () => {
      const area = window.innerWidth * window.innerHeight;

      const count = Math.min(
        110,
        Math.max(55, Math.floor(area / 13000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,

        size: Math.random() * 1.2 + 0.7,
      }));
    };

    const resizeCanvas = () => {
      const ratio = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      createParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      // --------------------------------
      // MOVE PARTICLES
      // --------------------------------

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -10) {
          particle.x = window.innerWidth + 10;
        }

        if (particle.x > window.innerWidth + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = window.innerHeight + 10;
        }

        if (particle.y > window.innerHeight + 10) {
          particle.y = -10;
        }
      });

      // --------------------------------
      // NETWORK LINES
      // --------------------------------

      const connectionDistance = 145;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.16;

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle =
              `rgba(${PARTICLE_COLOR}, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }

      // --------------------------------
      // PARTICLES
      // --------------------------------

      particles.forEach((particle, index) => {
        const pulse =
          Math.sin(Date.now() * 0.0015 + index) * 0.15;

        const size = particle.size + pulse;

        // Very subtle glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 5
        );

        gradient.addColorStop(
          0,
          `rgba(${PARTICLE_COLOR}, 0.25)`
        );

        gradient.addColorStop(
          1,
          `rgba(${PARTICLE_COLOR}, 0)`
        );

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          size * 5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();

        // Crisp blue center
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(${PARTICLE_COLOR}, 0.85)`;

        ctx.fill();
      });

      // --------------------------------
      // MOUSE INTERACTION
      // --------------------------------

      const mouseRadius = 130;

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (
          distance < mouseRadius &&
          distance > 0
        ) {
          const force =
            (mouseRadius - distance) /
            mouseRadius;

          // Repel
          particle.x +=
            (dx / distance) * force * 1.2;

          particle.y +=
            (dy / distance) * force * 1.2;

          // Mouse connection
          const opacity =
            (1 - distance / mouseRadius) * 0.25;

          ctx.beginPath();

          ctx.moveTo(
            particle.x,
            particle.y
          );

          ctx.lineTo(mouse.x, mouse.y);

          ctx.strokeStyle =
            `rgba(${PARTICLE_COLOR}, ${opacity})`;

          ctx.lineWidth = 0.6;

          ctx.stroke();
        }
      });

      animationFrameId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;