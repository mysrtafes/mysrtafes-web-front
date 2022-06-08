import styles from '@/components/TwitchLink/TwitchLink.module.scss'
import Image from 'next/image'

const TwitchLink = () => {
  return (
    <a
      href="https://www.twitch.tv/mysterydungeon_rtafes"
      className={styles.twitchLinkButton}
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/images/twitchLink.svg" alt="Twitchリンク" height="71" width="69" />
      <p>
        不思議RTAフェス
        <br />
        公式Twitchチャンネル
      </p>
    </a>
  )
}

export default TwitchLink
