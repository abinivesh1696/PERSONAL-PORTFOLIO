import { useMemo } from 'react'

const Particles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 15 + 15,
      color: ['#6c63ff', '#00d4aa', '#ff6b9d', '#f093fb'][Math.floor(Math.random() * 4)]
    }))
  }, [])

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size + 'px',
            height: p.size + 'px',
            left: p.left + '%',
            backgroundColor: p.color,
            animationDelay: p.delay + 's',
            animationDuration: p.duration + 's',
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`
          }}
        />
      ))}
    </div>
  )
}

export default Particles
