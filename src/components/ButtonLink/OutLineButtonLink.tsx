import styles from '@/components/ButtonLink/OutLineButtonLink.module.scss'
import Link from 'next/link'

interface Props {
  color: string
  text: string
  href: string
  target?: string
}

const OutLineButtonLink = (props: Props) => {
  return (
    <Link href={props.href}>
      <a
        className={styles.button}
        style={{ color: props.color, borderColor: props.color }}
        target={props.target}
      >
        {props.text}
      </a>
    </Link>
  )
}

export default OutLineButtonLink
