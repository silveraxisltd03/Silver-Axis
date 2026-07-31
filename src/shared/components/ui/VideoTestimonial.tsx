'use client';

import { useState } from 'react';
import { PlayIcon } from './icons';

const VIDEO_ID = 'x2lsNS5DRTE';

export function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video-testimonial video-testimonial--playing">
        <iframe
          className="video-testimonial__iframe"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
          title="Client testimonial video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-testimonial"
      onClick={() => setPlaying(true)}
      aria-label="Play client testimonial video"
      style={{ backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg)` }}
    >
      <span className="video-testimonial__scrim" aria-hidden="true" />
      <span className="video-testimonial__label">
        <span className="video-testimonial__title">Client Testimonial</span>
      </span>
      <span className="video-testimonial__play" aria-hidden="true">
        <PlayIcon />
      </span>
    </button>
  );
}
