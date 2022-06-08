import { Challenger } from '@prisma/client'
import axios from 'axios'
import { useQuery } from 'react-query'

const getChallengers = async () => {
  return (await axios.get<Challenger[]>('/api/challengers')).data
}
const useChallengers = () => {
  const { data: challengers, isLoading, isError } = useQuery('challenger', getChallengers)

  return { challengers, isLoading, isError }
}

export default useChallengers
