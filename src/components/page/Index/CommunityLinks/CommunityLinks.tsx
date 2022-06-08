import styles from '@/components/page/Index/CommunityLinks/CommunityLinks.module.scss'
import DiscordLink from '@/components/DiscordLink/DiscordLink'
import DownloadLink from '@/components/DownloadLink/DownloadLink'
import TweetList from '@/components/TweetList/TweetList'
import TwitchLink from '@/components/TwitchLink/TwitchLink'

const CommunityLinks = () => {
  return (
    <div className={styles.comunityLink} id="community-links">
      <h2>コミュニティリンク集</h2>
      <div className={styles.inner}>
        <div className={styles.comunityLinkFlex}>
          <div className={styles.comunityLinkFlexContent}>
            <DiscordLink />
            <TwitchLink />
            {/* <DownloadLink /> */}
          </div>
          <div className={styles.comunityLinkFlexContent}>
            <TweetList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityLinks
