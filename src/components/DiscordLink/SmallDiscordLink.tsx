import styles from '@/components/DiscordLink/SmallDiscordLink.module.scss'
import links from '@/const/links'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SmallDiscordLink = () => {
  return (
    <a
      href={links.discord}
      className={styles.smallDiscordLinkButton}
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

export default SmallDiscordLink
