import styles from '@/components/ButtonLink/ButtonLink.module.scss'
import Link from 'next/link'

interface Props {
  color: string
  text: string
  href: string
  target?: string
}

const ButtonLink = (props: Props) => {
  return (
    <Link href={props.href}>
      <a className={styles.button} style={{ backgroundColor: props.color }} target={props.target}>
        {props.text}
      </a>
    </Link>
  )
}

export default ButtonLink
