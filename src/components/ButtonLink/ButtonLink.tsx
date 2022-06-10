import Link from 'next/link'
import styles from '@/components/ButtonLink/ButtonLink.module.scss'

interface Props {
  color: string
  text: string
  href: string
  target?: string
}

const Button = (props: Props) => {
  return (
    <Link href={props.href}>
      <a className={styles.button} style={{ backgroundColor: props.color }} target={props.target}>
        {props.text}
      </a>
    </Link>
  )
}

export default Button
