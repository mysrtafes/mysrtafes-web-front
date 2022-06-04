import Link from 'next/link'
import styles from '@/components/EventArchiveContent/EventArchiveContent.module.scss'
import Image from 'next/image'

interface Props {
  image_url: string
  period: string
  title: string
  url: string
}

const EventArchiveContent = (props: Props) => {
  return (
    <li className={styles.eventArchiveContent}>
      <Link href={props.url}>
        <a className={styles.eventArchivesLink}>
          <div
            className={styles.thumbnail}
            style={{ backgroundImage: 'url(' + props.image_url + ');' }}
          />
          <p>{props.period}</p>
          <h3>{props.title}</h3>
        </a>
      </Link>
    </li>
  )
}

export default EventArchiveContent
