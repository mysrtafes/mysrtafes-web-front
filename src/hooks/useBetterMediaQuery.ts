import { useEffect, useState } from 'react'

export default function useBetterMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(!!mediaQueryList.matches)
    listener()
    mediaQueryList.addListener(listener)
    return () => mediaQueryList.removeListener(listener)
  }, [mediaQueryString])

  return matches
}
