import styles from '@/components/TweetList/TweetListSP.module.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TweetListSP = () => {
  return (
    <div className={styles.tweetListSP}>
      <TwitterTimelineEmbed sourceType="profile" screenName="mysrtafes" options={{ height: 500 }} />
    </div>
  )
}

export default TweetListSP
