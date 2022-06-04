import styles from '@/components/SubmissionContainer/SubmissionContainer.module.scss'
import GameContainer from '@/components/GameContainer/GameContainer'
import Link from 'next/link'

interface Props {
  name: string
  furigana: string
  title1: string
  department1: string
  goal1: string
  title2?: string
  department2?: string
  goal2?: string
  title3?: string
  department3?: string
  goal3?: string
  message?: string
  broadcastUrl?: string
  twitterId: string
}

const SubmissionContainer = (props: Props) => {
  return (
    <div className={styles.submissionContainer}>
      <h2 className={styles.TwitterId}>
        {props.name}({props.furigana}){' '}
        <Link href={'https://twitter.com/' + props.twitterId}>
          <a>@{props.twitterId}</a>
        </Link>{' '}
        {props.broadcastUrl && (
          <Link href={props.broadcastUrl}>
            <a>配信場所</a>
          </Link>
        )}
      </h2>
      {props.message && <p>{props.message}</p>}

      <ul className={styles.p}>
        {props.title1 && (
          <GameContainer title={props.title1} department={props.department1} goal={props.goal1} />
        )}
        {props.title2 && (
          <GameContainer title={props.title2} department={props.department2} goal={props.goal2} />
        )}
        {props.title3 && (
          <GameContainer title={props.title3} department={props.department3} goal={props.goal3} />
        )}
      </ul>
    </div>
  )
}

export default SubmissionContainer
