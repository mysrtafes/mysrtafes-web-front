import OutLineButtonLink from '@/components/ButtonLink/OutLineButtonLink'

interface Props {
  text: string
  href: string
  target?: string
}

const OutLineGreenButtonLink = (props: Props) => {
  return (
    <OutLineButtonLink
      color="rgb(92,170,155)"
      text={props.text}
      href={props.href}
      target={props.target}
    />
  )
}

export default OutLineGreenButtonLink
