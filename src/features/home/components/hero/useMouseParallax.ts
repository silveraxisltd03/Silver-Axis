'use client';

import { useEffect, useRef } from 'react';

export function useMouseParallax<T extends HTMLElement>(maxOffset = 15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      const setLayerOffset = (layer: string, factor: number) => {
        element.style.setProperty(
          `--architecture-${layer}-x`,
          `${(currentX * factor).toFixed(2)}px`,
        );
        element.style.setProperty(
          `--architecture-${layer}-y`,
          `${(currentY * factor).toFixed(2)}px`,
        );
      };

      setLayerOffset('background', 0.2);
      setLayerOffset('connections', 0.38);
      setLayerOffset('cards', 0.68);
      setLayerOffset('core', 1);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = null;
      }
    };

    const requestRender = () => {
      if (frame === null) frame = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetX = normalizedX * maxOffset * 2;
      targetY = normalizedY * maxOffset * 2;
      requestRender();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      requestRender();
    };

    element.addEventListener('pointermove', onPointerMove, { passive: true });
    element.addEventListener('pointerleave', onPointerLeave);

    return () => {
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerleave', onPointerLeave);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [maxOffset]);

  return ref;
}
