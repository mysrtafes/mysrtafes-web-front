import styles from '@/components/Footer/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
<<<<<<< HEAD
        <Link href="/privacy-policy"><a>プライバシーポリシー</a></Link>
=======
        <Link href="privacy-policy">
          <a>プライバシーポリシー</a>
        </Link>
>>>>>>> f978ae248ceee5a9d60abf415224c434e19e2e8b
      </div>
      © 2022 Mystery dungeon rta fes All rights reserved.
    </footer>
  )
}

export default Footer
