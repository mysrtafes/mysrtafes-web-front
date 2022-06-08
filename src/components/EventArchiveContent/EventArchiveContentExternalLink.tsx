import styles from '@/components/EventArchiveContent/EventArchiveContentExternalLink.module.scss'
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
          <Image src={props.imageUrl} alt="イベントサムネ" width={1206} height={680} />
        </div>
        <p>{props.period}</p>
        <h3>{props.title}</h3>
        <a href={props.twitchUrl} target="_blank" rel="noreferrer" className={styles.twitchLink}>
          <Image src="/images/twitch.svg" alt="Twitchアイコン" height="18" width="18" />
          <p>タイムテーブル</p>
        </a>
        <a href={props.youtubeUrl} target="_blank" rel="noreferrer" className={styles.youtubeLink}>
          <Image src="/images/youtube.svg" alt="Youtubeアイコン" height="13" width="18" />
          <p>Youtubeアーカイブ</p>
        </a>
      </div>
    </li>
  )
}

export default EventArchiveContentExternalLink
