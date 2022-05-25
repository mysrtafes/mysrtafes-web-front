import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <>
        <header>
            <p className={styles.headerTop}>
                <span>チャレンジダンジョン！イベント応募受け付け中！！詳細は<Link href="#"><a>こちら</a></Link></span>
            </p>
            <div className={styles.headerBottom}>
                <div className={styles.headerBottomInner}>
                    <a href="#" className={styles.headerBottomLeft}>
                        <img src="/images/logo.png" className={styles.logo}/>
                        <h1 className={styles.h1}>不思議のダンジョンRTAフェス</h1>
                    </a>
                    <ul>
                        <li><Link href="#first-view"><a>直近の企画</a></Link></li>
                        <li><Link href="#event-archives"><a>過去アーカイブ</a></Link></li>
                        <li><Link href="#comunity-links"><a>コミュニティリンク集</a></Link></li>
                        <li><Link href="#about-fushigi-fes"><a>不思議RTAフェスとは？</a></Link></li>
                        <li><Link href="#special-thanks"><a>主催・運営</a></Link></li>
                    </ul>
                </div>
            </div>
        </header>
        <div className={styles.hamburgerMenu} id="hamburger-menu">
            <div className={styles.hamburgerMenuIcon} id="hamburger-menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.hamburgerMenuList}>
                <ul>
                    <li><a href="#first-view">直近の企画</a></li>
                    <li><a href="#event-archives">過去アーカイブ</a></li>
                    <li><a href="#comunity-links">コミュニティリンク集</a></li>
                    <li><a href="#about-fushigi-fes">不思議RTAフェスとは？</a></li>
                    <li><a href="#special-thanks">主催・運営</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header
