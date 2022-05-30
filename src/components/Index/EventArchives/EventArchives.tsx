import styles from '@/components/Index/EventArchives/EventArchives.module.scss'
import GreenButton from '@/components/Button/GreenButton'
import EventArchiveContent from '@/components/EventArchiveContent/EventArchiveContent'

const EventArchives = () => {
  return (
    <div className={styles.eventArchives} id="event-archives">
        <h2 className={styles.h2}>イベントアーカイブ</h2>
        <ul>
            <EventArchiveContent image_url="/images/discord.png" period="2900/22/11(Hog) - 13(Fug)" title="ここに企画名が入りますここに企画名が入りますここに企画名が入ります" url="#"/>
            <EventArchiveContent image_url="/images/discord.png" period="2900/22/11(Hog) - 13(Fug)" title="ここに企画名が入りますここに企画名が入りますここに企画名が入ります" url="#"/>
            <EventArchiveContent image_url="/images/discord.png" period="2900/22/11(Hog) - 13(Fug)" title="ここに企画名が入りますここに企画名が入りますここに企画名が入ります" url="#"/>
        </ul>
        <GreenButton text="すべて見る" href="#"/>
  </div>
    
  )
}

export default EventArchives
