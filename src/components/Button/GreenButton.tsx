import Link from 'next/link'
import styles from '@/components/Button/Button.module.scss'
import Button from './Button'

interface Props {
    text: string;
    href: string;
}

const GreenButton = (props: Props) => {
  return (
    <Button color="rgb(92,170,155)" text={props.text} href={props.href}/>
  )
}

export default GreenButton

