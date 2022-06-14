import ButtonLink from '@/components/ButtonLink/ButtonLink'

interface Props {
  text: string
  href: string
  target?: string
}

const BrownButtonLink = (props: Props) => {
  return (
    <ButtonLink
      color="rgb(200, 143, 96)"
      text={props.text}
      href={props.href}
      target={props.target}
    />
  )
}

export default BrownButtonLink
