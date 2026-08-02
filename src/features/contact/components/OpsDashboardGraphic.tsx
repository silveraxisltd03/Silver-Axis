export function OpsDashboardGraphic() {
  return (
    <div className="ops-dash" aria-hidden="true">
      <div className="ops-dash__chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="ops-dash__body">
        <aside className="ops-dash__rail">
          <div className="ops-dash__dot ops-dash__dot--active" />
          <div className="ops-dash__dot" />
          <div className="ops-dash__dot" />
          <div className="ops-dash__dot" />
        </aside>
        <div className="ops-dash__main">
          <div className="ops-dash__row">
            <div className="ops-dash__card ops-dash__card--wide">
              <div className="ops-dash__bars">
                <i style={{ height: '42%' }} />
                <i style={{ height: '68%' }} />
                <i style={{ height: '54%' }} />
                <i style={{ height: '86%' }} />
                <i style={{ height: '62%' }} />
                <i style={{ height: '74%' }} />
              </div>
            </div>
            <div className="ops-dash__card">
              <div className="ops-dash__ring" />
              <div className="ops-dash__avatars">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="ops-dash__row">
            <div className="ops-dash__card">
              <div className="ops-dash__line" />
              <div className="ops-dash__line ops-dash__line--short" />
              <div className="ops-dash__pill">Live</div>
            </div>
            <div className="ops-dash__card ops-dash__card--wide">
              <div className="ops-dash__spark">
                <svg viewBox="0 0 160 48" preserveAspectRatio="none">
                  <path
                    d="M0 36 C 20 34, 28 18, 44 22 C 60 26, 68 8, 86 14 C 104 20, 112 6, 130 10 C 142 12, 150 20, 160 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
