import styles from '@/components/DiscordLink/DiscordLink.module.scss'
import links from '@/const/links'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DiscordLink = () => {
  return (
    <a
      href={links.discord}
      className={styles.discordLinkButton}
      target="_blank"
      rel="noreferrer noopener"
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
