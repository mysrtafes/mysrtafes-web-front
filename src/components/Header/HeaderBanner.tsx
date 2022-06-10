import styles from '@/components/Header/HeaderBanner.module.scss'
import Link from 'next/link'

const HeaderBanner = () => {
  return (
    <div className={styles.headerBanner}>
      <span>
        ふしチャレ！～不思議のダンジョンRTAフェス外伝～ 応募受け付け中！！詳細は
        <Link href="/event/challenge">
          <a>こちら</a>
        </Link>
      </span>
    </div>
  )
}

export default HeaderBanner
