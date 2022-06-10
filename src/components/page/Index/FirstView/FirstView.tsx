import styles from '@/components/page/Index/FirstView/FirstView.module.scss'
import GreenButtonLink from '@/components/ButtonLink/GreenButtonLink'
import Image from 'next/image'

interface Props {
  imageUrl: string
  title: string
  url: string
  applicationPeriod: string
  holdingPeriod: string
}

const FirstView = (props: Props) => {
  return (
    <div className={styles.inner}>
      <div className={styles.firstView} id="first-view">
        <Image
          src={props.imageUrl}
          alt="ファーストビューロゴ"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className={styles.innerBox}>
          <p className={styles.eventHoldingPeriod}>{props.holdingPeriod}</p>
          <p className={styles.eventTitle}>{props.title}</p>
          <p className={styles.eventApplicationPeriod}>応募期間：{props.applicationPeriod}</p>
          <GreenButtonLink text="応募はこちら" href={props.url} />
        </div>
      </div>
    </div>
  )
}

export default FirstView
