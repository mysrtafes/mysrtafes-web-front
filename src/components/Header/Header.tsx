import Link from 'next/link'
import styles from '@/components/Header/Header.module.scss'
import React, {useState} from "react"
import Image from 'next/image'
import { Link as Scroll } from 'react-scroll';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const toggleMenu = () => {
      setIsOpenMenu(!isOpenMenu);
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
                            <Image src="/images/logo.png" className={styles.logo} height="44" width="44"/>
                            <h1>不思議のダンジョンRTAフェス</h1>
                        </a>
                    </Link>
                    <ul>
                        <li><Scroll smooth={true} duration={600} to="first-view">直近の企画</Scroll></li>
                        <li><Scroll smooth={true} duration={600} to="event-archives">過去アーカイブ</Scroll></li>
                        <li><Scroll smooth={true} duration={600} to="comunity-links">コミュニティリンク集</Scroll></li>
                        <li><Scroll smooth={true} duration={600} to="about-fushigi-fes">不思議RTAフェスとは？</Scroll></li>
                        <li><Scroll smooth={true} duration={600} to="special-thanks">主催・運営</Scroll></li>
                    </ul>
                </div>
            </div>
        </header>
        <div className={styles.hamburgerMenu} id="hamburger-menu">
            <div className={styles.hamburgerMenuIcon} id="hamburger-menu-icon" onClick={() => toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={isOpenMenu ? styles.active: ""}>
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
