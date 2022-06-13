import HeaderBanner from '@/components/Header/HeaderBanner'
import HeaderMenu from '@/components/Header/HeaderMenu'
import styles from '@/components/Header/HeaderPC.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const HeaderPC = ({ isTopPage = false }) => {
  return (
    <>
      {isTopPage && (
        <div className={styles.PC}>
          <HeaderBanner />
        </div>
      )}
      <header className={styles.headerPC}>
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
                  priority={true}
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
