import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  const array = [1, 2, 3, 4, 5]
  array.forEach(num => {
    console.log(num)
  })

  const isBear = false

  return (
    <header>
      <ul className={styles.headerRight}>
        <li>a</li>
        <li>b</li>
        <li>
          <Link href="/bear">
            <a>bear</a>
          </Link>
        </li>
      </ul>
      {array.map(num => (
        <p>{num}</p>
      ))}
      {isBear && 'わたしはベアです。28歳'}
    </header>
  )
}

export default Header
