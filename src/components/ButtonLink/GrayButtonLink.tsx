import ButtonLink from '@/components/ButtonLink/ButtonLink'

interface Props {
  text: string
  href: string
  target?: string
}

const GrayButtonLink = (props: Props) => {
  return <ButtonLink color="#989898" text={props.text} href={props.href} target={props.target} />
}

export default GrayButtonLink
