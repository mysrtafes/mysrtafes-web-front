import styles from '@/components/EventArchiveContent/EventArchiveContentExternalLink.module.scss'
import { faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

interface Props {
  imageUrl: string
  period: string
  title: string
  youtubeUrl: string
  twitchUrl: string
}

const EventArchiveContentExternalLink = (props: Props) => {
  return (
    <li className={styles.eventArchiveContent}>
      <div className={styles.eventArchivesLink}>
        <div className={styles.thumbnail}>
          <Image src={props.imageUrl} alt="イベントサムネ" width={1200} height={670} quality={5} />
        </div>
        <p>{props.period}</p>
        <h3>{props.title}</h3>
        <a href={props.twitchUrl} target="_blank" rel="noreferrer" className={styles.twitchLink}>
          <FontAwesomeIcon icon={faTwitch} className={styles.twitchIcon} />
          <p>タイムテーブル</p>
        </a>
        <a href={props.youtubeUrl} target="_blank" rel="noreferrer" className={styles.youtubeLink}>
          <FontAwesomeIcon icon={faYoutube} className={styles.youtubeIcon} />
          <p>Youtubeアーカイブ</p>
        </a>
      </div>
    </li>
  )
}

export default EventArchiveContentExternalLink
