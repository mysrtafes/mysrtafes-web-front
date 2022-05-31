import Link from 'next/link'
import styles from '@/components/DiscordLink/DiscordLink.module.scss'
import Image from 'next/image'

const DiscordLink = () => {
  return (
    <Link href="#">
        <a className={styles.discordLinkButton}>
            <Image src="/images/discord.svg" height="71" width="67.9" />
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

