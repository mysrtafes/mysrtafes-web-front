import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import React, {useState} from "react"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
      setOpenMenu(!openMenu);
    }

  return (
    <>
        <header>
            <p className={styles.headerTop}>
                <span>チャレンジダンジョン！イベント応募受け付け中！！詳細は<Link href="#"><a>こちら</a></Link></span>
            </p>
            <div className={styles.headerBottom}>
                <div className={styles.headerBottomInner}>
                    <Link href="/">
                        <a className={styles.headerBottomLeft}>
                            <img src="/images/logo.png" className={styles.logo}/>
                            <h1 className={styles.h1}>不思議のダンジョンRTAフェス</h1>
                        </a>
                    </Link>
                    <ul>
                        <li><Link href="/#first-view"><a>直近の企画</a></Link></li>
                        <li><Link href="/#event-archives"><a>過去アーカイブ</a></Link></li>
                        <li><Link href="/#comunity-links"><a>コミュニティリンク集</a></Link></li>
                        <li><Link href="/#about-fushigi-fes"><a>不思議RTAフェスとは？</a></Link></li>
                        <li><Link href="/#special-thanks"><a>主催・運営</a></Link></li>
                    </ul>
                </div>
            </div>
        </header>
        <div className={styles.hamburgerMenu} id="hamburger-menu">
            <div className={styles.hamburgerMenuIcon} id="hamburger-menu-icon" onClick={() => menuFunction()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={openMenu ? styles.active: undefined}>
                <div className={styles.hamburgerMenuList} >
                    <ul>
                        <li><Link href="/#first-view"><a>直近の企画</a></Link></li>
                        <li><Link href="/#event-archives"><a>過去アーカイブ</a></Link></li>
                        <li><Link href="/#comunity-links"><a>コミュニティリンク集</a></Link></li>
                        <li><Link href="/#about-fushigi-fes"><a>不思議RTAフェスとは？</a></Link></li>
                        <li><Link href="/#special-thanks"><a>主催・運営</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
