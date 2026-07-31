'use client';

import { useEffect, useState } from 'react';

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 500);
    const removeTimer = setTimeout(() => setVisible(false), 850);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`page-loader${fading ? ' page-loader--hidden' : ''}`} aria-hidden="true">
      <img className="page-loader__mark" src="/assets/logo-mark-white.png" alt="" />
      <div className="page-loader__brand">SILVER AXIS</div>
      <div className="page-loader__tagline">Your Vision. Our Execution.</div>
      <div className="page-loader__bar">
        <div className="page-loader__bar-fill" />
      </div>
    </div>
  );
}
