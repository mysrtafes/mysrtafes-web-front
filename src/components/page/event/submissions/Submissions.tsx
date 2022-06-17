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
  console.log(challengers)

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        {!isLoading &&
          challengers?.map(challenger => (
            <SubmissionContainer challenger={challenger} key={challenger.id} />
          ))}
      </div>
    </div>
  )
}

export default Submissions
