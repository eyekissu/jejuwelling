type FishProps = {
  color?: string
  bellyColor?: string
  finColor?: string
  /** seconds for one tail wiggle cycle — smaller = faster flapping */
  wiggle?: number
}

/**
 * Side-view fish drawn in its own 0..200 x 0..120 coordinate space.
 * The fish faces right, so the tail sits on the left and is animated
 * independently around its base for a natural swimming motion.
 */
export function Fish({
  color = "#ff8a4c",
  bellyColor = "#ffd9b0",
  finColor = "#ff6b3d",
  wiggle = 0.9,
}: FishProps) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%" role="img" aria-label="헤엄치는 물고기">
      {/* whole body gently undulates */}
      <g className="fish-body" style={{ animationDuration: `${wiggle}s` }}>
        {/* tail — pivots at its base (right side, x≈60) */}
        <g className="fish-tail" style={{ animationDuration: `${wiggle}s`, transformOrigin: "60px 60px" }}>
          <path d="M60 60 C 30 38, 12 30, 6 34 C 16 48, 16 72, 6 86 C 12 90, 30 82, 60 60 Z" fill={finColor} />
        </g>

        {/* top fin */}
        <path className="fish-dorsal" d="M108 44 C 118 18, 150 16, 150 40 C 138 40, 122 42, 108 52 Z" fill={finColor} style={{ animationDuration: `${wiggle}s` }} />

        {/* body */}
        <ellipse cx="120" cy="60" rx="62" ry="34" fill={color} />
        {/* belly highlight */}
        <path d="M70 70 C 100 96, 150 96, 176 74 C 150 84, 100 84, 70 70 Z" fill={bellyColor} opacity="0.75" />

        {/* bottom fin flaps */}
        <path className="fish-pelvic" d="M116 88 C 118 104, 138 104, 140 90 C 132 92, 124 92, 116 88 Z" fill={finColor} style={{ animationDuration: `${wiggle}s` }} />

        {/* gill line */}
        <path d="M150 38 C 158 50, 158 70, 150 82" fill="none" stroke={finColor} strokeWidth="3" strokeLinecap="round" opacity="0.5" />

        {/* eye */}
        <circle cx="168" cy="52" r="8" fill="#fff" />
        <circle cx="170" cy="52" r="4" fill="#20232a" />
      </g>
    </svg>
  )
}
