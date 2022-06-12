import styles from '@/components/Header/HeaderBanner.module.scss'
import Link from 'next/link'

const HeaderBanner = () => {
  return (
    <div className={styles.headerBanner}>
      <span>
        <Link href="/event/challenge">
          <a>【応募受付中！】ふしチャレ！〜不思議のダンジョンRTAフェス外伝〜</a>
        </Link>
      </span>
    </div>
  )
}

export default HeaderBanner
