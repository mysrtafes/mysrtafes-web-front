import Link from 'next/link'
import styles from '../styles/DownloadLink.module.scss'

const DownloadLink = () => {
  return (
    <Link href="#">
        <a className={styles.downloadLinkButton}>
            <img src="images/download.png" />
            <p>
                不思議RTAフェス<br />
                素材ダウンロードは<br />
                こちら
            </p>
        </a>
    </Link>
  )
}

export default DownloadLink

