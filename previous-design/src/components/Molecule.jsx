// Two fused six-membered rings with side chains, drawn bond by bond.
const BONDS = [
  [120, 92, 161.6, 116],
  [161.6, 116, 161.6, 164],
  [161.6, 164, 120, 188],
  [120, 188, 78.4, 164],
  [78.4, 164, 78.4, 116],
  [78.4, 116, 120, 92],
  [161.6, 116, 203.1, 92],
  [203.1, 92, 244.7, 116],
  [244.7, 116, 244.7, 164],
  [244.7, 164, 203.1, 188],
  [203.1, 188, 161.6, 164],
  [120, 92, 120, 50],
  [244.7, 116, 280, 96],
  [78.4, 164, 44, 184],
  [203.1, 188, 203.1, 230],
  [203.1, 230, 238, 250],
  [203.1, 230, 168, 250],
];

const ATOMS = [
  { cx: 120, cy: 50, r: 8, fill: 'var(--gold)', halo: true },
  { cx: 280, cy: 96, r: 6, fill: '#fff' },
  { cx: 44, cy: 184, r: 6, fill: 'var(--red)' },
  { cx: 203.1, cy: 230, r: 8, fill: 'var(--gold)', halo: true },
  { cx: 238, cy: 250, r: 5, fill: '#fff' },
  { cx: 168, cy: 250, r: 5, fill: 'var(--red)' },
];

export default function Molecule({ className = '' }) {
  return (
    <svg className={`molecule ${className}`} viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <circle className="molecule__ring" pathLength="100" cx="120" cy="140" r="28" />
      {BONDS.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          className="molecule__bond"
          pathLength="100"
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={{ animationDelay: `${0.5 + i * 0.08}s` }}
        />
      ))}
      {ATOMS.filter((a) => a.halo).map((a, i) => (
        <circle
          key={`h${i}`}
          className="molecule__halo"
          cx={a.cx}
          cy={a.cy}
          r={a.r}
          style={{ animationDelay: `${2 + i * 0.6}s` }}
        />
      ))}
      {ATOMS.map((a, i) => (
        <circle
          key={`a${i}`}
          className="molecule__atom"
          cx={a.cx}
          cy={a.cy}
          r={a.r}
          style={{ fill: a.fill, animationDelay: `${1.8 + i * 0.07}s` }}
        />
      ))}
    </svg>
  );
}
