import Link from 'next/link'
import styles from '@/components/ButtonLink/ButtonLink.module.scss'
import ButtonLink from '@/components/ButtonLink/ButtonLink'

interface Props {
  text: string
  href: string
}

const GreenButton = (props: Props) => {
  return <ButtonLink color="rgb(92,170,155)" text={props.text} href={props.href} />
}

export default GreenButton
