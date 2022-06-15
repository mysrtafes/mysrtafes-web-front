import GreenButtonLink from '@/components/ButtonLink/GreenButtonLink'
import styles from '@/components/page/index/FirstView/FirstView.module.scss'
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
    <div className={styles.firstView} id="first-view">
      <Image
        className={styles.image}
        src={props.imageUrl}
        alt="ファーストビューロゴ"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <div className={styles.imageFilter}>
        <div className={styles.innerBox}>
          <div className={styles.innerBoxLeft}>
            <Image
              className={styles.image}
              src="/images/challenger-logo.png"
              alt="ふしチャレロゴ"
              priority={true}
              width={405}
              height={217}
            />
          </div>
          <div className={styles.innerBoxRight}>
            <p className={styles.eventHoldingPeriod}>{props.holdingPeriod}</p>
            <p className={styles.eventTitle}>{props.title}</p>
            <p className={styles.eventApplicationPeriod}>応募受付中！</p>
            <GreenButtonLink text="応募はこちら" href={props.url} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstView
