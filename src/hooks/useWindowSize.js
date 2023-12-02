import { useState, useLayoutEffect } from 'react'

export function useWindowSize() {
  const [width, setWidth] = useState(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth)
      }, 1000)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { width }
}
