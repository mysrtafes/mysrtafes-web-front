import Link from 'next/link'
import styles from '@/components/Header/HeaderBanner.module.scss'

const HeaderBanner = () => {
  return (
    <div className={styles.headerBanner}>
      <span>
        チャレンジダンジョン！イベント応募受け付け中！！詳細は
        <Link href="/event/challenge">
          <a>こちら</a>
        </Link>
      </span>
    </div>
  )
}

export default HeaderBanner
