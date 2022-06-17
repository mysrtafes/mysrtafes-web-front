import { Challenger } from '@prisma/client'
import axios from 'axios'
import { useQuery } from 'react-query'

const getChallengers = async () => {
  return (await axios.get<Challenger[]>('/api/challengers')).data
}
const useChallengers = (initialData: Challenger[] = []) => {
  const {
    data: challengers,
    isLoading,
    isError,
  } = useQuery('challenger', getChallengers, {
    initialData: initialData,
    staleTime: 60 * 1000,
  })
  return { challengers, isLoading, isError }
}

export default useChallengers
