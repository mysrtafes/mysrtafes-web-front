import styles from '@/components/page/Index/EventArchives/EventArchives.module.scss'
import EventArchiveContentExternalLink from '@/components/EventArchiveContent/EventArchiveContentExternalLink'

const EventArchives = () => {
  return (
    <div className={styles.eventArchives} id="event-archives">
      <h2>過去イベント</h2>
      <ul>
        <EventArchiveContentExternalLink
          imageUrl="/images/mysrtafes3.png"
          period="2022/2/11 - 2/13"
          title="第3回不思議のダンジョンRTAフェス"
          twitchUrl="https://horaro.org/mystery-dungeon-rta-fes/mysrtafes3"
          youtubeUrl="https://www.youtube.com/playlist?list=PLFvJYuQufMw4R3ZVgFuFYyaWKjF2nrlf_"
        />
        <EventArchiveContentExternalLink
          imageUrl="/images/mysrtafes2.png"
          period="2021/2/12 - 2/14"
          title="第2回不思議のダンジョンRTAフェス"
          twitchUrl="https://horaro.org/mystery-dungeon-rta-fes/mysrtafes2"
          youtubeUrl=" https://www.youtube.com/playlist?list=PLFvJYuQufMw6LBml2iDvkQ4KMk2Lb4D-h"
        />
        <EventArchiveContentExternalLink
          imageUrl="/images/mysrtafes1.png"
          period="2020/2/29 - 3/1"
          title="不思議のダンジョンシリーズRTAフェス"
          twitchUrl="https://horaro.org/mystery-dungeon-rta-fes/mysrtafes1"
          youtubeUrl="https://www.youtube.com/playlist?list=PLFvJYuQufMw5PcGusQNgAPnRZIVZXKZIT"
        />
      </ul>
    </div>
  )
}

export default EventArchives
