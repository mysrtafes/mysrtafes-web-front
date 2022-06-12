import ButtonLink from '@/components/ButtonLink/ButtonLink'

interface Props {
  text: string
  href: string
  target?: string
}

const GreenButtonLink = (props: Props) => {
  return (
    <ButtonLink color="rgb(92,170,155)" text={props.text} href={props.href} target={props.target} />
  )
}

export default GreenButtonLink
