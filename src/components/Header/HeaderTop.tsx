import Link from 'next/link'
import styles from '@/components/Header/HeaderTop.module.scss'

const HeaderTop = () => {
  return (
    <>
      <p className={styles.headerTop}>
        <span>
          チャレンジダンジョン！イベント応募受け付け中！！詳細は
          <Link href="/event/challenge">
            <a>こちら</a>
          </Link>
        </span>
      </p>
    </>
  )
}

export default HeaderTop
