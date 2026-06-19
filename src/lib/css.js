// Tiny helper: convert a CSS text string into a React style object.
// Lets us reuse the exact inline-style strings from the original design 1:1.
export function css(str) {
  const out = {};
  for (const part of String(str).split(';')) {
    const idx = part.indexOf(':');
    if (idx < 0) continue;
    let key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) continue;
    // -webkit-foo -> WebkitFoo ; background-color -> backgroundColor
    key = key.replace(/^-(?=[a-z])/, (m) => m).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (key.startsWith('-')) key = key.slice(1).replace(/^([a-z])/, (_, c) => c.toUpperCase());
    out[key] = val;
  }
  return out;
}
