import styles from '@/components/Footer/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/privacy-policy">
          <a>プライバシーポリシー</a>
        </Link>
      </div>
      © 2020 Mystery Dungeon RTA FES
    </footer>
  )
}

export default Footer
