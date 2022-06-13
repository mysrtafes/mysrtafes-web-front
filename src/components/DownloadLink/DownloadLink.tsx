import styles from '@/components/DownloadLink/DownloadLink.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const DownloadLink = () => {
  return (
    <Link href="#">
      <a className={styles.downloadLinkButton}>
        <Image src="/images/download.svg" height="71.75" width="61.25" />
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

export default DownloadLink
