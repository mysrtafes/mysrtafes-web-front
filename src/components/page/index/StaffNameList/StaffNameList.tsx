import styles from '@/components/page/index/StaffNameList/StaffNameList.module.scss'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  name: string
  twitterId: string
}
const StaffNameList = (props: Props) => {
  const { name, twitterId } = props
  return (
    <li className={styles.staffNameList}>
      {name}
      {twitterId && (
        <a
          href={`https://twitter.com/${twitterId}`}
          aria-label="twitterページへ"
          className={styles.twitterIcon}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )}
    </li>
  )
}

export default StaffNameList
