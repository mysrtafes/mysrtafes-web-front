import styles from '@/components/TwitterShare/TwitterShareButton.module.scss'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  text: string
  url: string
  hashtags?: string[]
}

const TwitterShareButton = (props: Props) => {
  const { text, url, hashtags } = props
  const href = new URL('https://twitter.com/intent/tweet')
  href.searchParams.set('text', text)
  href.searchParams.set('url', url)
  if (hashtags) {
    href.searchParams.set('hashtags', ['不思議RTAフェス'].concat(hashtags).join(','))
  } else {
    href.searchParams.set('hashtags', '不思議RTAフェス')
  }

  return (
    <a
      href={href.toString()}
      className={styles.twitterShareButton}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
      <span className={styles.tweet}>ツイート</span>
    </a>
  )
}

export default TwitterShareButton
