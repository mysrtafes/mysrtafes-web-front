import Link from 'next/link'
import styles from '@/components/Header/Header.module.scss'
import React, { useState } from 'react'
import Image from 'next/image'

const HeaderSP = () => {
  return (
    <>
      <div className={styles.headerSP}>
        <Link href="/">
          <a>
            <Image src="/images/logo.png" className={styles.logo} height="44" width="44" />
            <h1>不思議のダンジョンRTAフェス</h1>
          </a>
        </Link>
      </div>
    </>
  )
}

export default HeaderSP
