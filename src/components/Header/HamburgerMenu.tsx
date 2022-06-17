import styles from '@/components/Header/HamburgerMenu.module.scss'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { Link as Scroll } from 'react-scroll'

const HamburgerMenu = ({ isTopPage = false }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const closeWithClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsOpenMenu(false)
    }
  }

  const menuList = useMemo(
    () =>
      isTopPage ? (
        <>
          <li>
            <Scroll
              smooth={true}
              duration={600}
              to="first-view"
              href="first-view"
              onClick={toggleMenu}
              offset={-60}
            >
              最新イベント
            </Scroll>
          </li>
          <li>
            <Scroll
              smooth={true}
              duration={600}
              to="event-archives"
              href="event-archives"
              onClick={toggleMenu}
              offset={-60}
            >
              過去イベント
            </Scroll>
          </li>
          <li>
            <Scroll
              smooth={true}
              duration={600}
              to="special-thanks"
              href="special-thanks"
              onClick={toggleMenu}
              offset={-60}
            >
              主催・運営
            </Scroll>
          </li>
          <li>
            <Scroll
              smooth={true}
              duration={600}
              to="about"
              href="about"
              onClick={toggleMenu}
              offset={-60}
            >
              不思議RTAフェスとは？
            </Scroll>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/">
              <a>トップ</a>
            </Link>
          </li>
          <li>
            <Link href="/#first-view">
              <a>最新イベント</a>
            </Link>
          </li>
          <li>
            <Link href="/#event-archives">
              <a>過去イベント</a>
            </Link>
          </li>
          <li>
            <Link href="/#special-thanks">
              <a>主催・運営</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>不思議RTAフェスとは？</a>
            </Link>
          </li>
        </>
      ),
    [isTopPage],
  )

  return (
    <div className={styles.hamburgerMenu} id="hamburger-menu">
      <div className={isOpenMenu ? styles.active : ''}>
        <div
          className={styles.overlay}
          onClick={e => {
            closeWithClick(e)
          }}
        >
          <div className={styles.hamburgerMenuList}>
            <ul>{menuList}</ul>
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
  )
}

export default HamburgerMenu
