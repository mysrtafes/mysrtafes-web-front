import Link from 'next/link'
import styles from '@/components/TwitchLink/TwitchLink.module.scss'
import Image from 'next/image'

const TwitchLink = () => {
  return (
    <Link href="#">
      <a className={styles.twitchLinkButton}>
        <Image src="/images/twitchLink.svg" height="71" width="69" />
        <p>
          不思議RTAフェス
          <br />
          素材ダウンロードは
          <br />
          こちら
        </p>
      </a>
    </Link>
  )
}

export default TwitchLink
