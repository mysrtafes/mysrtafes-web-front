import Link from 'next/link'
import styles from '@/components/Header/Header.module.scss'

const HeaderTop = () => {
  return (
    <>
      <p className={styles.headerTop}>
        <span>
          チャレンジダンジョン！イベント応募受け付け中！！詳細は
          <Link href="/event/challenge-dungeon">
            <a>こちら</a>
          </Link>
        </span>
      </p>
    </>
  )
}

export default HeaderTop
