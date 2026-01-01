"use client"

import { useState } from "react"

type Particle = {
  left: string
  top: string
  delay: string
  duration: string
}

export default function FloatingParticles() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    })),
  )

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  )
}
