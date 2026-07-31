interface ParticleTrailProps {
  path: string;
  duration: number;
  reducedMotion: boolean;
}

function Packet({
  path,
  duration,
  delay,
  reverse = false,
  size = 2.4,
}: {
  path: string;
  duration: number;
  delay: number;
  reverse?: boolean;
  size?: number;
}) {
  return (
    <circle className="architecture-particle" r={size}>
      <animateMotion
        path={path}
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        calcMode="linear"
        keyPoints={reverse ? '1;0' : '0;1'}
        keyTimes="0;1"
      />
    </circle>
  );
}

export function ParticleTrail({
  path,
  duration,
  reducedMotion,
}: ParticleTrailProps) {
  if (reducedMotion) return null;

  return (
    <>
      <Packet path={path} duration={duration} delay={0} size={2.7} />
      <Packet path={path} duration={duration} delay={duration * -0.5} />
      <Packet path={path} duration={duration * 1.18} delay={duration * -0.72} reverse size={1.8} />
    </>
  );
}
