import Link from 'next/link'
import styles from '../styles/EventArchiveContent.module.scss'

interface Props {
    image_url: string,
    period: string,
    title: string,
    url: string,
}

const EventArchiveContent = (props: Props ) => {
  return (
    <li className={styles.eventArchiveContent}>
        <Link href={props.url}>
            <a className={styles.eventArchivesLink}>
            <img className={styles.eventArchivesImage} src={props.image_url} />
                <p className={styles.eventArchivesHoldingPeriod}>{ props.period }</p>
                <h3 className={styles.eventArchivesTitle}>{props.title}</h3>
            </a>
        </Link>
    </li>
  )
}

export default EventArchiveContent
