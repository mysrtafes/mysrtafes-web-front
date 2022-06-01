import Link from 'next/link'
import styles from '@/components/ButtonLink/ButtonLink.module.scss'
import ButtonLink from '@/components/ButtonLink/ButtonLink'

interface Props {
  text: string
  href: string
}

const GrayButton = (props: Props) => {
  return <ButtonLink color="#989898" text={props.text} href={props.href} />
}

export default GrayButton
