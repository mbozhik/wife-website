import {useEffect, useState} from 'react'

export function Counter({initialValue, className}) {
  const [currentValue, setCurrentValue] = useState(0)

  // Функция для форматирования числа с ведущими нулями
  const formatNumber = (num) => {
    return num.toString().padStart(3, '0')
  }

  useEffect(() => {
    const duration = 3000 // 3 seconds
    const steps = 60
    const increment = initialValue / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= initialValue) {
        setCurrentValue(initialValue)
        clearInterval(timer)
      } else {
        setCurrentValue(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [initialValue])

  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        ...className,
      }}
    >
      {formatNumber(currentValue)}
    </span>
  )
}
