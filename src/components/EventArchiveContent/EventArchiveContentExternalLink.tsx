import Link from 'next/link'
import styles from '@/components/EventArchiveContent/EventArchiveContent.module.scss'
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
          <Image src={props.imageUrl} width={1206} height={680} />
        </div>
        <p>{props.period}</p>
        <h3>{props.title}</h3>
        <a target="_blank" href={props.twitchUrl} className={styles.twitchLink}>
          <Image src="/images/twitch.svg" height="18" width="18" />
          <p>タイムテーブル</p>
        </a>
        <a target="_blank" href={props.youtubeUrl} className={styles.youtubeLink}>
          <Image src="/images/youtube.svg" height="13" width="18" />
          <p>Youtubeアーカイブ</p>
        </a>
      </div>
    </li>
  )
}

export default EventArchiveContentExternalLink
