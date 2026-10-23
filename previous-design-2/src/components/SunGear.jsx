/**
 * The SRK Foundation emblem redrawn as a large animated mark:
 * a turning gear, a rising red sun with rays and the "Knowledge is Power" motto.
 */
const TEETH = 24;
const RAYS = 13;

function gearPath(cx, cy, rOuter, rInner, teeth) {
  const pts = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i += 1) {
    const a = i * step;
    const corners = [
      [rInner, a],
      [rOuter, a + step * 0.12],
      [rOuter, a + step * 0.48],
      [rInner, a + step * 0.6],
    ];
    corners.forEach(([r, t]) => pts.push(`${(cx + r * Math.cos(t)).toFixed(2)},${(cy + r * Math.sin(t)).toFixed(2)}`));
  }
  return `M${pts.join('L')}Z`;
}

const GEAR = gearPath(200, 200, 186, 166, TEETH);

export default function SunGear({ className = '' }) {
  return (
    <svg className={`sungear ${className}`} viewBox="0 0 400 400" role="img" aria-label="SRK Foundation emblem: Knowledge is Power">
      <defs>
        <path id="motto-arc" d="M70,200 a130,130 0 0,1 260,0" />
        <clipPath id="horizon">
          <rect x="0" y="0" width="400" height="232" />
        </clipPath>
      </defs>

      <g className="sungear__gear">
        <path d={GEAR} fill="var(--navy)" />
        <circle cx="200" cy="200" r="150" fill="var(--cream)" />
      </g>

      <g clipPath="url(#horizon)">
        <g className="sungear__rays">
          {Array.from({ length: RAYS }, (_, i) => {
            const a = Math.PI + (Math.PI * (i + 0.5)) / RAYS;
            return (
              <line
                key={i}
                x1={200 + 62 * Math.cos(a)}
                y1={232 + 62 * Math.sin(a)}
                x2={200 + 104 * Math.cos(a)}
                y2={232 + 104 * Math.sin(a)}
                stroke="var(--red)"
                strokeWidth="7"
                strokeLinecap="round"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            );
          })}
        </g>
        <circle className="sungear__sun" cx="200" cy="232" r="50" fill="var(--red)" />
      </g>

      <rect x="96" y="232" width="208" height="5" rx="2.5" fill="var(--navy)" />
      <rect x="120" y="244" width="160" height="5" rx="2.5" fill="var(--steel)" />
      <rect x="146" y="256" width="108" height="5" rx="2.5" fill="var(--gold)" />

      <text className="sungear__motto">
        <textPath href="#motto-arc" startOffset="50%" textAnchor="middle">
          KNOWLEDGE · IS · POWER
        </textPath>
      </text>
      <text x="200" y="300" textAnchor="middle" className="sungear__srk">
        SRK FOUNDATION
      </text>
      <text x="200" y="322" textAnchor="middle" className="sungear__city">
        VIJAYAWADA
      </text>
    </svg>
  );
}
