import styles from '@/components/TwitchLink/TwitchLink.module.scss'
import links from '@/const/links'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TwitchLink = () => {
  return (
    <a
      href={links.twitch}
      className={styles.twitchLinkButton}
      target="_blank"
      rel="noreferrer noopener"
    >
      <FontAwesomeIcon icon={faTwitch} className={styles.twitchIcon} />
      <p>
        不思議RTAフェス
        <br />
        公式Twitchチャンネル
      </p>
    </a>
  )
}

export default TwitchLink
