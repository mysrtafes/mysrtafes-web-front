import styles from '@/components/Index/EventArchives/EventArchives.module.scss'
// import GreenButtonLink from '@/components/ButtonLink/GreenButtonLink'
// import EventArchiveContent from '@/components/EventArchiveContent/EventArchiveContent'
import EventArchiveContentExternalLink from '@/components/EventArchiveContent/EventArchiveContentExternalLink'

const EventArchives = () => {
  return (
    <div className={styles.eventArchives} id="event-archives">
      <h2>イベントアーカイブ</h2>
      <ul>
        <EventArchiveContentExternalLink
          imageUrl="/images/mysrtafes1.png"
          period="2020/2/29 - 3/1"
          title="不思議のダンジョンシリーズRTAフェス"
          twitchUrl="https://horaro.org/mystery-dungeon-rta-fes/mysrtafes1"
          youtubeUrl="https://www.youtube.com/playlist?list=PLFvJYuQufMw5PcGusQNgAPnRZIVZXKZIT"
        />
        <EventArchiveContentExternalLink
          imageUrl="/images/mysrtafes2.png"
          period="2021/3/12 - 3/14"
          title="第2回不思議のダンジョンRTAフェス"
          twitchUrl="https://horaro.org/mystery-dungeon-rta-fes/mysrtafes2"
          youtubeUrl=" https://www.youtube.com/playlist?list=PLFvJYuQufMw6LBml2iDvkQ4KMk2Lb4D-h"
        />
        <EventArchiveContentExternalLink
          imageUrl="/images/mysrtafes3.png"
          period="2022/2/11 - 2/13"
          title="第3回不思議のダンジョンRTAフェス"
          twitchUrl="https://horaro.org/mystery-dungeon-rta-fes/mysrtafes3"
          youtubeUrl="https://www.youtube.com/playlist?list=PLFvJYuQufMw4R3ZVgFuFYyaWKjF2nrlf_"
        />
      </ul>
      {/* <GreenButtonLink text="すべて見る" href="#" /> 一覧ページがまだ存在しないため、コメントアウトしています */}
    </div>
  )
}

export default EventArchives
