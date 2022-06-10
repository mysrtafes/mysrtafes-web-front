import styles from '@/components/TwitchLink/TwitchLink.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'

const TwitchLink = () => {
  return (
    <a
      href="https://www.twitch.tv/mysterydungeon_rtafes"
      className={styles.twitchLinkButton}
      target="_blank"
      rel="noreferrer"
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
