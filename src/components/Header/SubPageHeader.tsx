import Link from 'next/link'
import styles from '@/components/Header/Header.module.scss'
import React, { useState } from 'react'
import Image from 'next/image'
import HeaderSP from './HeaderSP'

const SubPageHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const closeWithClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpenMenu(false)
    }
  }

  return (
    <>
      <HeaderSP />
      <header className={styles.headerSticky}>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomInner}>
            <Link href="/">
              <a className={styles.headerBottomLeft}>
                <Image src="/images/logo.png" className={styles.logo} height="44" width="44" />
                <h1 className={styles.h1}>不思議のダンジョンRTAフェス</h1>
              </a>
            </Link>
            <ul>
              <li>
                <Link href="/#first-view">
                  <a>直近の企画</a>
                </Link>
              </li>
              <li>
                <Link href="/#event-archives">
                  <a>過去アーカイブ</a>
                </Link>
              </li>
              <li>
                <Link href="/#comunity-links">
                  <a>コミュニティリンク集</a>
                </Link>
              </li>
              <li>
                <Link href="/#about-fushigi-fes">
                  <a>不思議RTAフェスとは？</a>
                </Link>
              </li>
              <li>
                <Link href="/#special-thanks">
                  <a>主催・運営</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={styles.hamburgerMenu} id="hamburger-menu">
        <div className={isOpenMenu ? styles.active : ''}>
          <div
            className={styles.overlay}
            onClick={e => {
              closeWithClick(e)
            }}
          >
            <div className={styles.hamburgerMenuList}>
              <ul>
                <li>
                  <Link href="/">
                    <a>トップ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#first-view">
                    <a>直近の企画</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#event-archives">
                    <a>過去アーカイブ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#comunity-links">
                    <a>コミュニティリンク集</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about-fushigi-fes">
                    <a>不思議RTAフェスとは？</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#special-thanks">
                    <a>主催・運営</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={styles.hamburgerMenuIcon}
            id="hamburger-menu-icon"
            onClick={() => toggleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubPageHeader
