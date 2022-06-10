import Link from 'next/link'
import styles from '@/components/Header/HeaderSP.module.scss'
import React from 'react'
import Image from 'next/image'

const HeaderSP = () => {
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
            />
            <h1>不思議のダンジョンRTAフェス</h1>
          </a>
        </Link>
      </div>
    </>
  )
}

export default HeaderSP
