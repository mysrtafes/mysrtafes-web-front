import styles from '@/components/page/Index/FirstView/FirstView.module.scss'
import GreenButtonLink from '@/components/ButtonLink/GreenButtonLink'

interface Props {
  imageUrl: string
  title: string
  url: string
  applicationPeriod: string
  holdingPeriod: string
}

const FirstView = (props: Props) => {
  const backgroundImageUrl = 'url(' + props.imageUrl + ')'

  return (
    <div className={styles.inner}>
      <div
        className={styles.firstView}
        id="first-view"
        style={{ backgroundImage: backgroundImageUrl }}
      >
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
