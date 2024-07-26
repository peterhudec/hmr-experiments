import React, {useEffect, useState} from 'react'

const Sideeffect = () => {
  const [count, setCount] = useState(0)
  // This gets called on HMR update
  useEffect(() => {
    console.log('ON MOUNT', window.hmrStatuses)
  }, [count])

  return <button onClick={() => setCount(x => x + 1)}>{count}</button>
}


export default Sideeffect
