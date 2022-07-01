import { Challenger } from '@prisma/client'
import { useMemo, useState } from 'react'

interface Props {
  challengers?: Challenger[]
  order: 'asc' | 'desc'
}
const useChallengerResult = (props: Props) => {
  const { challengers, order } = props
  const [searchChallengers, setSearchChallengers] = useState<Challenger[] | null>([])
  const search = (challengers: Challenger[] | null) => {
    setSearchChallengers(challengers)
  }

  const result = searchChallengers ?? challengers
  const reverseResult = useMemo(() => (result ? [...result].reverse() : []), [result])

  return [search, order === 'desc' ? reverseResult : result] as const
}

export default useChallengerResult
