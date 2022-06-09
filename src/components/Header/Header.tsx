import Link from 'next/link'
import styles from '@/components/Header/Header.module.scss'
import React, { useState } from 'react'
import { Link as Scroll } from 'react-scroll'
import HeaderTop from '@/components/Header/HeaderTop'
import HeaderSP from '@/components/Header/HeaderSP'
import Image from 'next/image'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const closeWithClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsOpenMenu(false)
    }
  }

  return (
    <>
      <HeaderSP />
      <HeaderTop />
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
            <ul>
              <li>
                <Scroll smooth={true} duration={600} to="first-view">
                  最新イベント
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="event-archives">
                  過去イベント
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="special-thanks">
                  主催・運営
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="about">
                  不思議RTAフェスとは？
                </Scroll>
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
                  <Scroll smooth={true} duration={600} to="first-view" onClick={toggleMenu}>
                    最新イベント
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="event-archives" onClick={toggleMenu}>
                    過去イベント
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="special-thanks" onClick={toggleMenu}>
                    主催・運営
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="about" onClick={toggleMenu}>
                    不思議RTAフェスとは？
                  </Scroll>
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

export default Header
