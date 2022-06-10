import styles from '@/components/page/Index/StaffNameList/StaffNameList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
          className={styles.twitterIcon}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )}
    </li>
  )
}

export default StaffNameList
