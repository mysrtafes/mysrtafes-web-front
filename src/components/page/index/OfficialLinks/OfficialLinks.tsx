import DiscordLink from '@/components/DiscordLink/DiscordLink'
import styles from '@/components/page/index/OfficialLinks/OfficialLinks.module.scss'
import TweetList from '@/components/TweetList/TweetList'
import TwitchLink from '@/components/TwitchLink/TwitchLink'
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery'

const OfficialLinks = () => {
  const isPC = useBetterMediaQuery('(min-width: 768px)')
  return (
    <div className={styles.officialLink} id="official-links">
      <div className={styles.inner}>
        <div className={styles.officialLinkFlex}>
          <div className={styles.officialLinkFlexContent}>
            <TwitchLink />
            <DiscordLink />
          </div>
          {isPC && (
            <div className={styles.officialLinkFlexContent}>
              <TweetList />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OfficialLinks
