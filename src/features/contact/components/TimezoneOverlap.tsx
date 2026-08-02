import { TIME_OVERLAP } from '../contact.data';

export function TimezoneOverlap() {
  return (
    <div className="tz-overlap">
      <div className="tz-overlap__head">
        <h3 className="tz-overlap__title">{TIME_OVERLAP.title}</h3>
        <p className="tz-overlap__sub">{TIME_OVERLAP.subtitle}</p>
      </div>
      <div className="tz-overlap__rows">
        {TIME_OVERLAP.rows.map((row) => (
          <div key={row.zone} className="tz-overlap__row">
            <div className="tz-overlap__meta">
              <span className="tz-overlap__zone">{row.zone}</span>
              <span className="tz-overlap__label">{row.label}</span>
            </div>
            <div className="tz-overlap__track" aria-hidden="true">
              <span
                className={`tz-overlap__range${row.active ? ' tz-overlap__range--active' : ''}`}
                style={{ left: `${row.start}%`, width: `${row.end - row.start}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
