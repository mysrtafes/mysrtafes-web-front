import Link from 'next/link'
import styles from '@/components/Header/HeaderPC.module.scss'
import HeaderBanner from '@/components/Header/HeaderBanner'
import Image from 'next/image'
import HeaderMenu from '@/components/Header/HeaderMenu'

const HeaderPC = ({ isTopPage = false }) => {
  return (
    <>
      {isTopPage && <HeaderBanner />}
      <header className={styles.headerSticky}>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomInner}>
            <Link href="/">
              <a className={styles.headerBottomLeft}>
                <Image
                  src="/images/logo.png"
                  alt="不思議RTAフェスロゴ"
                  className={styles.logo}
                  height="44"
                  width="44"
                  unoptimized={true}
                />
                <h1>不思議のダンジョンRTAフェス</h1>
              </a>
            </Link>
            <HeaderMenu isTopPage={isTopPage} />
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderPC
