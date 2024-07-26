import React, {useState, useEffect} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('COUNT CHANGED', count)

  }, [count])

  return <button onClick={() => setCount(x => x + 1)}>Count: {count}</button>
}

export default Counter
