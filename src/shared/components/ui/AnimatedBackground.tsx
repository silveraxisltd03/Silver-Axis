'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export type AnimatedBackgroundVariant = 'network' | 'minimal';

interface AnimatedBackgroundProps {
  variant?: AnimatedBackgroundVariant;
  className?: string;
}

// Soft ambient gradient blobs — shared base layer for both variants.
const BLOBS = [
  { x: 12, y: 24, size: 'clamp(240px, 30vw, 440px)', tone: 'rgba(42, 107, 255, 0.24)' },
  { x: 82, y: 18, size: 'clamp(220px, 26vw, 380px)', tone: 'rgba(42, 107, 255, 0.18)' },
  { x: 58, y: 82, size: 'clamp(260px, 32vw, 460px)', tone: 'rgba(42, 107, 255, 0.16)' },
  { x: 30, y: 90, size: 'clamp(180px, 20vw, 300px)', tone: 'rgba(234, 240, 255, 0.06)' },
];

// Ambient drifting stars, spread edge to edge — no connecting lines.
const PARTICLES = [
  { x: 2, y: 5 }, { x: 10, y: 14 }, { x: 18, y: 4 }, { x: 26, y: 22 }, { x: 34, y: 8 },
  { x: 42, y: 18 }, { x: 50, y: 4 }, { x: 58, y: 14 }, { x: 66, y: 6 }, { x: 74, y: 20 },
  { x: 82, y: 8 }, { x: 90, y: 16 }, { x: 97, y: 4 },
  { x: 5, y: 34 }, { x: 14, y: 44 }, { x: 22, y: 30 }, { x: 30, y: 42 }, { x: 38, y: 32 },
  { x: 46, y: 46 }, { x: 54, y: 32 }, { x: 62, y: 44 }, { x: 70, y: 34 }, { x: 78, y: 46 },
  { x: 86, y: 36 }, { x: 94, y: 48 },
  { x: 4, y: 62 }, { x: 12, y: 74 }, { x: 20, y: 60 }, { x: 28, y: 72 }, { x: 36, y: 58 },
  { x: 44, y: 70 }, { x: 52, y: 60 }, { x: 60, y: 72 }, { x: 68, y: 58 }, { x: 76, y: 70 },
  { x: 84, y: 60 }, { x: 92, y: 72 },
  { x: 6, y: 88 }, { x: 16, y: 96 }, { x: 24, y: 86 }, { x: 34, y: 94 }, { x: 44, y: 86 },
  { x: 54, y: 96 }, { x: 64, y: 88 }, { x: 74, y: 96 }, { x: 84, y: 88 }, { x: 94, y: 94 },
];

// Occasional shooting stars, each streaking from one point to another.
const SHOOTING_STARS: [number, number][] = [
  [26, 6], [37, 39], [17, 4], [43, 8], [13, 21], [46, 33],
];

export function AnimatedBackground({ variant = 'network', className }: AnimatedBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const tweens: (gsap.core.Tween | gsap.core.Timeline)[] = [];

    const blobs = root.querySelectorAll<HTMLDivElement>('.animated-bg__blob');
    tweens.push(
      gsap.to(blobs, {
        x: () => gsap.utils.random(-30, 30),
        y: () => gsap.utils.random(-24, 24),
        duration: () => gsap.utils.random(11, 18),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }),
    );

    if (variant === 'network') {
      const particles = root.querySelectorAll<HTMLSpanElement>('.animated-bg__particle');
      tweens.push(
        gsap.to(particles, {
          x: () => gsap.utils.random(-16, 16),
          y: () => gsap.utils.random(-14, 14),
          duration: () => gsap.utils.random(6, 11),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: () => gsap.utils.random(0, 3),
        }),
        gsap.to(particles, {
          opacity: () => gsap.utils.random(0.25, 0.7),
          duration: () => gsap.utils.random(2.5, 5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: () => gsap.utils.random(0, 2.5),
        }),
      );

      const stars = root.querySelectorAll<HTMLSpanElement>('.animated-bg__star');
      stars.forEach((starEl, i) => {
        const [a, b] = SHOOTING_STARS[i];
        const from = PARTICLES[a];
        const to = PARTICLES[b];
        const timeline = gsap.timeline({
          repeat: -1,
          delay: gsap.utils.random(0, 8),
          repeatDelay: gsap.utils.random(4, 10),
        });
        timeline
          .set(starEl, { left: `${from.x}%`, top: `${from.y}%`, opacity: 0 })
          .to(starEl, { opacity: 1, duration: 0.15 })
          .to(
            starEl,
            { left: `${to.x}%`, top: `${to.y}%`, duration: gsap.utils.random(0.9, 1.4), ease: 'power1.in' },
            '<',
          )
          .to(starEl, { opacity: 0, duration: 0.3 }, '-=0.3');
        tweens.push(timeline);
      });
    }

    return () => tweens.forEach((tween) => tween.kill());
  }, [variant]);

  return (
    <div ref={rootRef} className={`animated-bg animated-bg--${variant}${className ? ` ${className}` : ''}`} aria-hidden="true">
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="animated-bg__blob"
          style={{ left: `${blob.x}%`, top: `${blob.y}%`, width: blob.size, height: blob.size, background: `radial-gradient(circle, ${blob.tone} 0%, transparent 70%)` }}
        />
      ))}
      {variant === 'network' && (
        <>
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className={`animated-bg__particle${i % 5 === 0 ? ' animated-bg__particle--lg' : ''}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            />
          ))}
          {SHOOTING_STARS.map((_, i) => (
            <span key={i} className="animated-bg__star" />
          ))}
        </>
      )}
    </div>
  );
}
