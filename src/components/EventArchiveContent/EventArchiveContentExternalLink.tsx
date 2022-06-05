import styles from '@/components/EventArchiveContent/EventArchiveContent.module.scss'
import Image from 'next/image'

interface Props {
  image_url: string
  period: string
  title: string
  youtubeUrl: string
  twitchUrl: string
}

const EventArchiveContentExternalLink = (props: Props) => {
  return (
    <li className={styles.eventArchiveContent}>
    <div className={styles.eventArchivesLink}>
        <div className={styles.thumbnail} style={{backgroundImage: "url(" + props.image_url + ")"}} />
        <p>{props.period}</p>
        <h3>{props.title}</h3>
        <a href={props.twitchUrl} target="_blank" className={styles.twitchLink}>
            <Image src="/images/twitch.svg" height="18" width="18" />
            <p>タイムテーブル</p>
        </a>
        <a href={props.youtubeUrl} target="_blank" className={styles.youtubeLink}>
            <Image src="/images/youtube.svg" height="13" width="18" />
            <p>Youtubeアーカイブ</p>
        </a>
    </div>
    </li>
  )
}

export default EventArchiveContentExternalLink
