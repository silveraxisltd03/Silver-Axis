import { PlayIcon } from './icons';

// Placeholder until a real client video/photo is available.
export function VideoTestimonial() {
  return (
    <div className="video-testimonial">
      <div className="video-testimonial__label">
        <span className="video-testimonial__avatar" aria-hidden="true" />
        <div>
          <div className="video-testimonial__title">Client Testimonial</div>
          <div className="video-testimonial__name">Client name</div>
        </div>
      </div>
      <button type="button" className="video-testimonial__play" aria-label="Play client testimonial video">
        <PlayIcon />
      </button>
    </div>
  );
}
