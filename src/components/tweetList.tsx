import styles from '../styles/TweetList.module.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TweetList = () => {
  return (
    <div className={styles.tweetList}>
        <TwitterTimelineEmbed sourceType="profile" screenName="mysrtafes" options={{height: 500}}/>
    </div>
  )
}

export default TweetList

