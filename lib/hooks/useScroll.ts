import { useState, useEffect } from 'react'
import { isClient } from '#/lib/util/device'

type Direction = 'up' | 'down'

export function useScroll() {
  const getIsPastHeader = () =>
    isClient() &&
    window.pageYOffset >
      parseInt(
        document.body.style.getPropertyValue('--header-height-level-0'),
        10
      )
  const getIsPastTop = () => isClient() && window.pageYOffset > 0

  const [scrollDirection, setScrollDirection] = useState<Direction>('up')
  const [isPastHeader, setIsPastHeader] = useState<boolean>(false)
  const [isPastTop, setIsPastTop] = useState<boolean>(false)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let isTicking = false

    const update = () => {
      const scrollY = window.pageYOffset

      if (scrollY === lastScrollY) {
        isTicking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      setIsPastHeader(getIsPastHeader())
      setIsPastTop(getIsPastTop())
      isTicking = false
    }

    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(update)
        isTicking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isClient()) {
    return {
      isPastHeader: false,
      isPastTop: false,
      scrollDirection: 'up',
    }
  }

  return {
    isPastHeader,
    isPastTop,
    scrollDirection,
  }
}
