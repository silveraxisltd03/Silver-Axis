'use client';

import { useEffect, useRef } from 'react';

interface GlobePoint {
  lat: number;
  lon: number;
  color: number;
}

interface ProjectedPoint {
  x: number;
  y: number;
  z: number;
  visible: boolean;
}

interface GlobeRoute {
  from: [number, number];
  to: [number, number];
  label?: string;
  color: string;
  duration: number;
  offset: number;
}

const POINT_COLORS = ['#3b82f6', '#7c5cff', '#ec4899'];

const BLAZE_PALETTE = ['#ffd23f', '#f6c945', '#e6b325', '#ffc94d', '#f4b73f', '#ffdc73'];

const LAND_MASKS: Array<[number, number, number, number]> = [
  [-112, 49, 39, 24],
  [-88, 30, 25, 18],
  [-100, 17, 17, 12],
  [-42, 72, 19, 12],
  [-61, -14, 18, 38],
  [13, 51, 27, 15],
  [20, 7, 24, 36],
  [74, 43, 55, 27],
  [79, 20, 13, 18],
  [112, 6, 27, 16],
  [136, -25, 25, 16],
  [172, -42, 8, 8],
];

function createRoutes(): GlobeRoute[] {
  let seed = 55217;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const routes: GlobeRoute[] = [
    { from: [40.71, -74], to: [51.5, -0.12], label: 'Cloud Platform', color: '#ffd23f', duration: 2.6, offset: 0 },
    { from: [37.77, -122.42], to: [1.35, 103.82], label: 'Enterprise API', color: '#f6c945', duration: 2.9, offset: 0.05 },
    { from: [52.52, 13.4], to: [25.2, 55.27], label: 'Commerce System', color: '#e6b325', duration: 2.4, offset: 0.1 },
    { from: [31.52, 74.36], to: [-33.87, 151.21], label: 'Mobile Release', color: '#ffc94d', duration: 3, offset: 0.15 },
  ];

  let regionIndex = 0;
  while (routes.length < 240) {
    const region = LAND_MASKS[regionIndex % LAND_MASKS.length];
    const [centerLon, centerLat, radiusLon, radiusLat] = region;
    const fromLon = centerLon + (random() * 2 - 1) * radiusLon;
    const fromLat = centerLat + (random() * 2 - 1) * radiusLat;

    const longHaul = random() < 0.2;
    const targetRegion = longHaul
      ? LAND_MASKS[Math.floor(random() * LAND_MASKS.length)]
      : region;
    const [toCenterLon, toCenterLat, toRadiusLon, toRadiusLat] = targetRegion;
    const toLon = toCenterLon + (random() * 2 - 1) * toRadiusLon;
    const toLat = toCenterLat + (random() * 2 - 1) * toRadiusLat;

    routes.push({
      from: [fromLat, fromLon],
      to: [toLat, toLon],
      color: BLAZE_PALETTE[Math.floor(random() * BLAZE_PALETTE.length)],
      duration: 1.5 + random() * 2,
      offset: random(),
    });
    regionIndex += 1;
  }

  return routes;
}

const ROUTES: GlobeRoute[] = createRoutes();

function longitudeDistance(a: number, b: number) {
  const difference = Math.abs(a - b) % 360;
  return difference > 180 ? 360 - difference : difference;
}

function isLand(lat: number, lon: number) {
  return LAND_MASKS.some(([centerLon, centerLat, radiusLon, radiusLat]) => {
    const x = longitudeDistance(lon, centerLon) / radiusLon;
    const y = (lat - centerLat) / radiusLat;
    return x * x + y * y <= 1;
  });
}

function createPoints(total: number) {
  let seed = 918273;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const points: GlobePoint[] = [];
  let attempts = 0;

  while (points.length < total && attempts < total * 20) {
    attempts += 1;
    const lat = random() * 145 - 62;
    const lon = random() * 360 - 180;
    if (!isLand(lat, lon)) continue;
    points.push({
      lat,
      lon,
      color: lon < -35 ? 0 : lon < 55 ? 2 : 1,
    });
  }

  return points.sort((a, b) => a.color - b.color);
}

function project(
  lat: number,
  lon: number,
  rotation: number,
  centerX: number,
  centerY: number,
  radius: number,
): ProjectedPoint {
  const latitude = (lat * Math.PI) / 180;
  const longitude = (lon * Math.PI) / 180 + rotation;
  const cosLatitude = Math.cos(latitude);
  const z = cosLatitude * Math.cos(longitude);

  return {
    x: centerX + radius * cosLatitude * Math.sin(longitude),
    y: centerY - radius * Math.sin(latitude),
    z,
    visible: z > -0.025,
  };
}

function quadraticPoint(
  start: ProjectedPoint,
  controlX: number,
  controlY: number,
  end: ProjectedPoint,
  progress: number,
) {
  const inverse = 1 - progress;
  return {
    x: inverse * inverse * start.x + 2 * inverse * progress * controlX + progress * progress * end.x,
    y: inverse * inverse * start.y + 2 * inverse * progress * controlY + progress * progress * end.y,
  };
}

export function DeliveryGlobeCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !frame || !context) return;

    const points = createPoints(2800);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 1;
    let height = 1;
    let radius = 1;
    let centerX = 0;
    let centerY = 0;
    let rotation = 1.36;
    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;
    let previousTime = 0;
    let animationFrame = 0;
    let isVisible = true;

    const resize = () => {
      const bounds = frame.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      radius = Math.min(width * 0.43, height * 0.46);
      centerX = width * 0.54;
      centerY = height * 0.52;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      const delta = Math.min(32, time - previousTime || 16);
      previousTime = time;
      currentPointerX += (pointerX - currentPointerX) * 0.06;
      currentPointerY += (pointerY - currentPointerY) * 0.06;
      if (!reducedMotion) rotation += delta * 0.00014;

      const adjustedCenterX = centerX + currentPointerX * 12;
      const adjustedCenterY = centerY + currentPointerY * 8;
      context.clearRect(0, 0, width, height);

      const ambient = context.createRadialGradient(
        adjustedCenterX,
        adjustedCenterY,
        radius * 0.12,
        adjustedCenterX,
        adjustedCenterY,
        radius * 1.18,
      );
      ambient.addColorStop(0, 'rgba(78,91,255,0.09)');
      ambient.addColorStop(0.58, 'rgba(229,71,203,0.035)');
      ambient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = ambient;
      context.fillRect(0, 0, width, height);

      const shell = context.createRadialGradient(
        adjustedCenterX - radius * 0.28,
        adjustedCenterY - radius * 0.32,
        radius * 0.08,
        adjustedCenterX,
        adjustedCenterY,
        radius,
      );
      shell.addColorStop(0, 'rgba(28,66,139,0.46)');
      shell.addColorStop(0.5, 'rgba(9,29,69,0.72)');
      shell.addColorStop(1, 'rgba(3,9,24,0.96)');
      context.beginPath();
      context.arc(adjustedCenterX, adjustedCenterY, radius, 0, Math.PI * 2);
      context.fillStyle = shell;
      context.fill();
      context.strokeStyle = 'rgba(96,165,250,0.28)';
      context.lineWidth = 1;
      context.stroke();

      context.save();
      context.beginPath();
      context.arc(adjustedCenterX, adjustedCenterY, radius, 0, Math.PI * 2);
      context.clip();
      context.strokeStyle = 'rgba(96,165,250,0.075)';
      context.lineWidth = 0.8;

      [-60, -30, 0, 30, 60].forEach((latitude) => {
        const latitudeRadians = (latitude * Math.PI) / 180;
        const lineY = adjustedCenterY - radius * Math.sin(latitudeRadians);
        const lineRadius = radius * Math.cos(latitudeRadians);
        context.beginPath();
        context.ellipse(adjustedCenterX, lineY, lineRadius, lineRadius * 0.075, 0, 0, Math.PI * 2);
        context.stroke();
      });

      [-60, -30, 0, 30, 60].forEach((longitude) => {
        const longitudeRadians = (longitude * Math.PI) / 180 + rotation;
        context.beginPath();
        context.ellipse(
          adjustedCenterX,
          adjustedCenterY,
          Math.max(radius * 0.06, radius * Math.abs(Math.cos(longitudeRadians))),
          radius,
          0,
          0,
          Math.PI * 2,
        );
        context.stroke();
      });
      context.restore();

      let currentColor = -1;
      for (const point of points) {
        const projected = project(
          point.lat,
          point.lon,
          rotation,
          adjustedCenterX,
          adjustedCenterY,
          radius,
        );
        if (!projected.visible) continue;
        if (point.color !== currentColor) {
          currentColor = point.color;
          context.fillStyle = POINT_COLORS[currentColor];
        }
        const depth = Math.max(0.12, projected.z);
        const size = 0.7 + depth * 1.05;
        context.globalAlpha = 0.18 + depth * 0.66;
        context.fillRect(projected.x - size / 2, projected.y - size / 2, size, size);
      }
      context.globalAlpha = 1;

      ROUTES.forEach((route) => {
        const start = project(
          route.from[0],
          route.from[1],
          rotation,
          adjustedCenterX,
          adjustedCenterY,
          radius,
        );
        const end = project(
          route.to[0],
          route.to[1],
          rotation,
          adjustedCenterX,
          adjustedCenterY,
          radius,
        );
        if (!start.visible || !end.visible) return;

        const middleX = (start.x + end.x) / 2;
        const middleY = (start.y + end.y) / 2;
        const directionX = middleX - adjustedCenterX;
        const directionY = middleY - adjustedCenterY;
        const length = Math.hypot(directionX, directionY) || 1;
        const lift = radius * 0.2;
        const controlX = middleX + (directionX / length) * lift;
        const controlY = middleY + (directionY / length) * lift;

        const isPrimary = Boolean(route.label);

        context.beginPath();
        context.moveTo(start.x, start.y);
        context.quadraticCurveTo(controlX, controlY, end.x, end.y);
        context.strokeStyle = route.color;
        context.globalAlpha = isPrimary ? 0.6 : 0.4;
        context.lineWidth = isPrimary ? 1.25 : 0.9;
        context.stroke();
        context.globalAlpha = 1;

        const progress = reducedMotion
          ? 0.62
          : ((time / 1000 / route.duration + route.offset) % 1);
        const packet = quadraticPoint(start, controlX, controlY, end, progress);
        context.beginPath();
        context.arc(packet.x, packet.y, isPrimary ? 5.5 : 3.4, 0, Math.PI * 2);
        context.fillStyle = `${route.color}26`;
        context.fill();
        context.beginPath();
        context.arc(packet.x, packet.y, isPrimary ? 2.2 : 1.4, 0, Math.PI * 2);
        context.fillStyle = route.color;
        context.fill();
      });

      if (isVisible && !reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = frame.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    };

    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(performance.now());
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = window.requestAnimationFrame(draw);
      }
    }, { rootMargin: '160px' });

    resizeObserver.observe(frame);
    visibilityObserver.observe(frame);
    frame.addEventListener('pointermove', onPointerMove, { passive: true });
    frame.addEventListener('pointerleave', onPointerLeave);
    resize();
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      frame.removeEventListener('pointermove', onPointerMove);
      frame.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div ref={frameRef} className={`delivery-globe-canvas ${className}`.trim()}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animated dotted globe showing software delivery routes between global regions"
      />
    </div>
  );
}
