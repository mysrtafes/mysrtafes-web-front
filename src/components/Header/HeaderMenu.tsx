import styles from '@/components/Header/HeaderMenu.module.scss'
import Link from 'next/link'
import { useMemo } from 'react'
import { Link as Scroll } from 'react-scroll'

const HeaderMenu = ({ isTopPage = false }) => {
  const menuList = useMemo(
    () =>
      isTopPage ? (
        <>
          <li>
            <Scroll smooth={true} duration={600} to="first-view" href="/#first-view">
              最新イベント
            </Scroll>
          </li>
          <li>
            <Scroll smooth={true} duration={600} to="event-archives" href="/#event-archives">
              過去イベント
            </Scroll>
          </li>
          <li>
            <Scroll smooth={true} duration={600} to="special-thanks" href="/#special-thanks">
              主催・運営
            </Scroll>
          </li>
          <li>
            <Scroll smooth={true} duration={600} to="about" href="/#about">
              不思議RTAフェスとは？
            </Scroll>
          </li>
        </>
      ) : (
        <>
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

  return <ul className={styles.menu}>{menuList}</ul>
}

export default HeaderMenu
