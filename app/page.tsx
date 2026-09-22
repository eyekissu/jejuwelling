import { Fish } from "@/components/fish"

type Swimmer = {
  top: string
  size: number
  duration: number
  delay: number
  wiggle: number
  color: string
  bellyColor: string
  finColor: string
}

const swimmers: Swimmer[] = [
  { top: "18%", size: 150, duration: 18, delay: 0, wiggle: 0.9, color: "#ff8a4c", bellyColor: "#ffd9b0", finColor: "#ff6b3d" },
  { top: "40%", size: 110, duration: 24, delay: 3, wiggle: 1.1, color: "#4cc9f0", bellyColor: "#cdeffb", finColor: "#3aa0d0" },
  { top: "62%", size: 190, duration: 28, delay: 6, wiggle: 1.0, color: "#ffd166", bellyColor: "#fff0c2", finColor: "#f0b024" },
  { top: "78%", size: 90, duration: 15, delay: 2, wiggle: 0.75, color: "#f78fb5", bellyColor: "#ffd6e6", finColor: "#e86699" },
]

export default function Page() {
  return (
    <main className="tank">
      {/* soft light rays */}
      <div className="rays" aria-hidden="true" />

      {swimmers.map((s, i) => (
        <div
          key={i}
          className="swimmer"
          style={{
            top: s.top,
            width: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <div className="bob" style={{ animationDuration: `${s.duration / 6}s` }}>
            <Fish color={s.color} bellyColor={s.bellyColor} finColor={s.finColor} wiggle={s.wiggle} />
          </div>
        </div>
      ))}

      {/* rising bubbles */}
      <div className="bubbles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 7 + 4) % 100}%`,
              width: 6 + (i % 5) * 4,
              height: 6 + (i % 5) * 4,
              animationDuration: `${6 + (i % 6)}s`,
              animationDelay: `${(i % 7) * 1.3}s`,
            }}
          />
        ))}
      </div>

      {/* seabed */}
      <div className="seabed" aria-hidden="true" />
    </main>
  )
}
