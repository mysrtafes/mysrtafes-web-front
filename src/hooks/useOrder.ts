import { useCallback, useState } from 'react'

const useOrder = () => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const Asc = useCallback(() => {
    setOrder('asc')
  }, [])
  const Desc = useCallback(() => {
    setOrder('desc')
  }, [])
  return [order, Asc, Desc] as const
}

export default useOrder
