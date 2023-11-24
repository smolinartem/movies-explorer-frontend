import { useState, useLayoutEffect } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({
    width: null,
    height: null,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 1000)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { width: size.width, height: size.height }
}
