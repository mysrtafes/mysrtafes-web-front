import styles from '@/components/DiscordLink/DiscordLink.module.scss'
import Image from 'next/image'

const DiscordLink = () => {
  return (
    <a
      href="https://discord.gg/5z4hG4uzAd"
      className={styles.discordLinkButton}
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/images/discord.svg" alt="Discord招待リンク" height="65" width="83" />
      <p>
        不思議RTAフェス
        <br />
        公式Discordサーバー
      </p>
    </a>
  )
}

export default DiscordLink
