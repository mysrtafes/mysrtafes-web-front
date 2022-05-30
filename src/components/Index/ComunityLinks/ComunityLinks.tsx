import styles from '@/components/Index/ComunityLinks/ComunityLinks.module.scss'
import DiscordLink from '@/components/DiscordLink/DiscordLink'
import DownloadLink from '@/components/DownloadLink/DownloadLink'
import TweetList from '@/components/TweetList/TweetList'

const ComunityLinks = () => {
  return (
    <div className={styles.comunityLink} id="comunity-links">
        <h2 className={styles.h2}>コミュニティリンク集</h2>
        <div className={styles.inner}>
            <div className={styles.comunityLinkFlex}>
                <div className={styles.comunityLinkFlexContent}>
                <DiscordLink />
                <DownloadLink />
                </div>
                <div className={styles.comunityLinkFlexContent}>
                    <TweetList />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComunityLinks
