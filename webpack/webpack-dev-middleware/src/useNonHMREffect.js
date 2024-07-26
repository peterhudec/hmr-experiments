import React, {useEffect, useState} from 'react'

const PROP = '______isHmr_____'

if (window[PROP] === undefined) {
  console.log('%cINIT', 'background: brown')

  module?.hot?.addStatusHandler((status) => {
    if (status === 'prepare') {
      window[PROP] = true
    }

    if (status === 'idle') {
      setTimeout(() => {
        window[PROP] = false
      }, 0)
    }
  })
}

const useNonHMREffect = (handler, dependencies) => {
  useEffect(() => {
    ref.current = dependencies
    if (!window[PROP]) {
      return handler()
    }
  }, dependencies)
}

export default useNonHMREffect
