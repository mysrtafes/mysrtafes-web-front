import ButtonLink from '@/components/ButtonLink/ButtonLink'

interface Props {
  text: string
  href: string
  target?: string
}

const BlueButton = (props: Props) => {
  return <ButtonLink color="#5865F2" text={props.text} href={props.href} target={props.target} />
}

export default BlueButton
