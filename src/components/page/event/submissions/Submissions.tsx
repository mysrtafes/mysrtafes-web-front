import InputBox from '@/components/page/event/submissions/SearchBox/InputBox/InputBox'
import SubmissionContainer from '@/components/page/event/submissions/SubmissionContainer/SubmissionContainer'
import useChallengers from '@/hooks/useChallenger'
import styles from '@/components/page/event/submissions/Submissions.module.scss'
import { Challenger } from '@prisma/client'
import useOrder from '@/hooks/useOrder'
import OrderInput from './OrderInput/OrderInput'
import useChallengerResult from '@/hooks/useChallengerResult'

interface Props {
  challengers: Challenger[]
}

const Submissions = (props: Props) => {
  const { challengers, isLoading } = useChallengers(props.challengers)
  const [order, Asc, Desc] = useOrder()
  const [search, result] = useChallengerResult({ challengers, order })

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <h2 className={styles.title}>ふしチャレ！応募一覧</h2>
        <InputBox setChallengers={search} challengers={challengers ?? []} />
        <OrderInput order={order} Desc={Desc} Asc={Asc} />
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
