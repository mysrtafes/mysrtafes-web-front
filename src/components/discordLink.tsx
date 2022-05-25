import Link from 'next/link'
import styles from '../styles/DiscordLink.module.scss'

const DiscordLink = () => {
  return (
    <Link href="#">
        <a className={styles.discordLinkButton}>
            <img src="images/discord.png" />
            <p>
                不思議RTAフェス<br />
                公式Discordサーバは<br />
                こちら
            </p>
        </a>
    </Link>
  )
}

export default DiscordLink

