export function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a6bff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: '1px' }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowUR({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
