import './CircularText.css'

function CircularText({ text, radius = 120, fontSize = 24, startAngle = 270 }) {
  const letters = text.split('')
  const angleStep = 360 / letters.length

  return (
    <div className="circular-text-container">
      {letters.map((letter, index) => {
        const angle = ((angleStep * index + startAngle) * Math.PI / 180)
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)
        const rotation = angleStep * index + startAngle + 90

        return (
          <span
            key={index}
            className="circular-text-letter"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
              fontSize: `${fontSize}px`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        )
      })}
    </div>
  )
}

export default CircularText

