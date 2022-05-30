import Link from 'next/link'
import styles from '@/components/Button/Button.module.scss'
import Button from './Button'

interface Props {
    text: string;
    href: string;
}

const GrayButton = (props: Props) => {
  return (
    <Button color="#989898" text={props.text} href={props.href}/>
  )
}

export default GrayButton

