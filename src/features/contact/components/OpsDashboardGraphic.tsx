export function OpsDashboardGraphic() {
  return (
    <div className="ops-dash" aria-hidden="true">
      <div className="ops-dash__chrome">
        <div className="ops-dash__chrome-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="ops-dash__chrome-title">Scope workspace</span>
        <span className="ops-dash__chrome-status">Live</span>
      </div>

      <div className="ops-dash__body">
        <aside className="ops-dash__rail">
          <div className="ops-dash__dot ops-dash__dot--active" />
          <div className="ops-dash__dot" />
          <div className="ops-dash__dot" />
          <div className="ops-dash__dot" />
        </aside>

        <div className="ops-dash__main">
          <div className="ops-dash__toolbar">
            <span className="ops-dash__toolbar-label">Engagement</span>
            <span className="ops-dash__toolbar-meta">Updated today</span>
          </div>

          <div className="ops-dash__row">
            <div className="ops-dash__panel ops-dash__panel--wide">
              <span className="ops-dash__panel-label">Throughput</span>
              <div className="ops-dash__bars">
                <i style={{ height: '38%' }} />
                <i style={{ height: '62%' }} />
                <i style={{ height: '48%' }} />
                <i style={{ height: '84%' }} />
                <i style={{ height: '56%' }} />
                <i style={{ height: '72%' }} />
                <i style={{ height: '66%' }} />
              </div>
            </div>

            <div className="ops-dash__panel">
              <span className="ops-dash__panel-label">Health</span>
              <div className="ops-dash__ring-wrap">
                <div className="ops-dash__ring" />
                <span className="ops-dash__ring-value">98%</span>
              </div>
            </div>
          </div>

          <div className="ops-dash__row">
            <div className="ops-dash__panel">
              <span className="ops-dash__panel-label">Owners</span>
              <div className="ops-dash__owners">
                <span />
                <span />
                <span />
              </div>
              <div className="ops-dash__line" />
              <div className="ops-dash__line ops-dash__line--short" />
            </div>

            <div className="ops-dash__panel ops-dash__panel--wide">
              <span className="ops-dash__panel-label">Signal</span>
              <div className="ops-dash__spark">
                <svg viewBox="0 0 160 48" preserveAspectRatio="none">
                  <path
                    d="M0 34 C 18 32, 28 18, 44 22 C 60 26, 68 10, 86 14 C 104 18, 112 8, 130 12 C 142 14, 150 22, 160 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
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
