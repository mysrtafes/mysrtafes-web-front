import Link from 'next/link'
import styles from '@/components/Header/Header.module.scss'
import React, { useState } from 'react'
import Image from 'next/image'
import { Link as Scroll } from 'react-scroll'
import HeaderTop from '@/components/Header/HeaderTop'
import HeaderSP from '@/components/Header/HeaderSP'

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
                <Image src="/images/logo.png" className={styles.logo} height="44" width="44" />
                <h1>不思議のダンジョンRTAフェス</h1>
              </a>
            </Link>
            <ul>
              <li>
                <Scroll smooth={true} duration={600} to="first-view">
                  直近の企画
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="event-archives">
                  過去イベント
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="community-links">
                  コミュニティリンク集
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="special-thanks">
                  主催・運営
                </Scroll>
              </li>
              <li>
                <Scroll smooth={true} duration={600} to="about-fushigi-fes">
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
                    直近の企画
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="event-archives" onClick={toggleMenu}>
                    過去イベント
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="community-links" onClick={toggleMenu}>
                    コミュニティリンク集
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="special-thanks" onClick={toggleMenu}>
                    主催・運営
                  </Scroll>
                </li>
                <li>
                  <Scroll smooth={true} duration={600} to="about-fushigi-fes" onClick={toggleMenu}>
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
