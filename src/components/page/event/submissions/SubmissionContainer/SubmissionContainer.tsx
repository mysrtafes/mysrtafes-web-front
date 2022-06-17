import GameContainer from '@/components/page/event/submissions/GameContainer/GameContainer'
import styles from '@/components/page/event/submissions/SubmissionContainer/SubmissionContainer.module.scss'
import { Challenger } from '@prisma/client'

interface Props {
  challenger: Challenger
}

const SubmissionContainer = (props: Props) => {
  const challenger = props.challenger
  const twitterId = challenger.TwitterId.replace('@', '')

  return (
    <div className={styles.submissionContainer}>
      <h2>
        {challenger.Name}
        <div className={styles.links}>
          <a
            href={'https://twitter.com/' + twitterId}
            className={styles.twitter}
            target="_blank"
            rel="noreferrer noopener"
          >
            @{twitterId}
          </a>

          {challenger.StreamUrl && (
            <a
              href={challenger.StreamUrl}
              className={styles.stream}
              target="_blank"
              rel="noreferrer noopener"
            >
              配信場所
            </a>
          )}
        </div>
      </h2>
      {challenger.Message && <p className={styles.message}>{challenger.Message}</p>}

      <ul>
        <GameContainer
          title={challenger.Game1}
          department={challenger.Department1}
          goal={challenger.Goal1}
        />
        {challenger.Game2 && challenger.Department2 && challenger.Goal2 && (
          <GameContainer
            title={challenger.Game2}
            department={challenger.Department2}
            goal={challenger.Goal2}
          />
        )}
        {challenger.Game3 && challenger.Department3 && challenger.Goal3 && (
          <GameContainer
            title={challenger.Game3}
            department={challenger.Department3}
            goal={challenger.Goal3}
          />
        )}
      </ul>
    </div>
  )
}

export default SubmissionContainer
