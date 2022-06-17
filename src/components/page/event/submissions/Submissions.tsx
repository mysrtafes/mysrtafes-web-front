import InputBox from '@/components/page/event/submissions/SearchBox/InputBox/InputBox'
import SubmissionContainer from '@/components/page/event/submissions/SubmissionContainer/SubmissionContainer'
import useChallengers from '@/hooks/useChallenger'
import styles from '@/components/page/event/submissions/Submissions.module.scss'
import { Challenger } from '@prisma/client'
import { useState } from 'react'

interface Props {
  challengers: Challenger[]
}

const Submissions = (props: Props) => {
  const { challengers, isLoading } = useChallengers(props.challengers)
  const [searchChallengers, setSearchChallengers] = useState<Challenger[] | null>([])
  const search = (challengers: Challenger[] | null) => {
    setSearchChallengers(challengers)
  }

  const result = searchChallengers ?? challengers
  console.log(challengers)
  console.warn(result)
  console.error(searchChallengers)

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <h2 className={styles.title}>ふしチャレ！応募一覧</h2>
        <InputBox setChallengers={search} challengers={challengers ?? []} />
      </div>

      <div className={styles.inner}>
        {!isLoading &&
          result?.map(challenger => (
            <SubmissionContainer challenger={challenger} key={challenger.id} />
          ))}
      </div>
    </div>
  )
}

export default Submissions
