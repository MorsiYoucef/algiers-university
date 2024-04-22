import React, { useState, useRef, useEffect } from 'react'

const CountUp = ({ start = 0, end }) => {
  const [value, setValue] = useState(null)
  const ref = useRef(start)
  const timerRef = useRef(null)

  const counter = end / 200

  const count = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + counter)
      if (result > end) {
        setValue(end)
      } else {
        setValue(result)
      }
      ref.current = result
    }
    timerRef.current = setTimeout(count, 70)
  }

  useEffect(() => {
    count() // Start the count-up on mount

    return () => {
      clearTimeout(timerRef.current) // Clear any pending timeout when unmounting
    }
  }, [end])
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default CountUp
