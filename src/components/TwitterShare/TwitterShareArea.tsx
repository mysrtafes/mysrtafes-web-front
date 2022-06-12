import styles from '@/components/TwitterShare/TwitterShareArea.module.scss'
import TwitterShareButton from './TwitterShareButton'

interface Props {
  text: string
  url: string
  hashtags?: string[]
}

const TwitterShareArea = (props: Props) => {
  return (
    <div className={styles.twitterShareArea}>
      <span className={styles.share}>このページをシェアする</span>
      <TwitterShareButton {...props} />
    </div>
  )
}

export default TwitterShareArea
