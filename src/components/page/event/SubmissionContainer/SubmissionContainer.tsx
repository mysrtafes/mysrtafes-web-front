import styles from '@/components/page/event/SubmissionContainer/SubmissionContainer.module.scss'
import GameContainer from '@/components/page/event/GameContainer/GameContainer'
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
        <a href={'https://twitter.com/' + props.twitterId} target="_blank">
          @{props.twitterId}
        </a>{' '}
        {props.broadcastUrl && (
          <a href={props.broadcastUrl} target="_blank">
            配信場所
          </a>
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
