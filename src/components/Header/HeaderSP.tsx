import HamburgerMenu from '@/components/Header/HamburgerMenu'
import HeaderBanner from '@/components/Header/HeaderBanner'
import styles from '@/components/Header/HeaderSP.module.scss'
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderSP = ({ isTopPage = false }) => {
  const isPC = useBetterMediaQuery('(min-width: 768px)')
  return (
    <>
      <div className={styles.headerSP}>
        <Link href="/">
          <a>
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
        <HamburgerMenu isTopPage={isTopPage} />
      </div>
      {isTopPage && !isPC && <HeaderBanner />}
    </>
  )
}

export default HeaderSP
