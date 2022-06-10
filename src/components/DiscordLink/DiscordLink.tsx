import styles from '@/components/DiscordLink/DiscordLink.module.scss'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DiscordLink = () => {
  return (
    <a
      href="https://discord.gg/5z4hG4uzAd"
      className={styles.discordLinkButton}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faDiscord} className={styles.discordIcon} />

      <p className={styles.server}>
        不思議RTAフェス
        <br />
        公式Discordサーバー
      </p>
    </a>
  )
}

export default DiscordLink
