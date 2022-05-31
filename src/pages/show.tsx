import type { NextPage } from 'next'
import styles from '../styles/Show.module.scss'
import Link from 'next/link'
import Header from '@/components/Header/SubPageHeader'
import DownloadLink from '@/components/DownloadLink/DownloadLink'
import DiscordLink from '@/components/DiscordLink/DiscordLink'
import Footer from '@/components/Footer/Footer'

const Show: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>チャレンジダンジョン！とは</h2>
          <div className={styles.p}>
            <strong>
              『チャレンジダンジョン！～不思議のダンジョンRTAフェス外伝～』(略称：チャレダン)
            </strong>
            は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。
            <br />
            <br />
            挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。
            <br />
            <br />
            日本国内では他にも<strong>『RTAハッカソン』『Deep Running』</strong>
            などのRTAに挑戦するイベントが開催されていますが、本イベントでは「RTA以外の挑戦」も歓迎します。
            <br />
            <br />
            <strong>「ちょっと不思議部門」</strong>は各作品・ダンジョンのクリアが目標になります。
            <br />
            <strong>「もっと不思議部門」</strong>
            はRTAやスコアアタック、高難易度ダンジョンや縛りプレイなど、やりこみクリアを目標にして頂きます。
            <br />
            <br />
            初心者の方も熟練プレイヤーの方も、是非この機会に新しい目標に挑戦して、不思議のダンジョン・ローグライクゲームの楽しさに触れて頂けたら幸いです。
          </div>
          <h2 className={styles.h2}>開催期間</h2>
          <div className={styles.p}>
            <strong className={styles.strong}>2022年6月17日(金)～7月10日(日)</strong>
          </div>
          <h2 className={styles.h2}>応募について</h2>
          <div className={styles.p}>
            どなたでも応募可能です。
            <br />
            応募は以下のGoogleフォームから行ってください。
            <br />
            期間中の途中参加も大歓迎です！
            <br />
            <br />
            <Link href="(googleformのurl)">
              <a className={styles.joinEventButton}>イベントに応募する</a>
            </Link>
          </div>
          <h2 className={styles.h2}>Q＆A</h2>
          <ul className={styles.list}>
            <li className={styles.listQuestion}>Q: イベントに関する質問はどこから行えますか？</li>
            <li className={styles.listAnswer}>
              A: 公式Twitterや公式Discord内に作成したチャンネルへお気軽にご質問ください。
            </li>
            <li className={styles.listQuestion}>
              Q: 選ぶ作品がジャンルに合っているかどうか確認する必要はありますか？
            </li>
            <li className={styles.listAnswer}>
              A: 特に確認は必要ありません。
              <br />
              昨今のローグライク(ローグライト)のジャンル線引きは非常に難しくなっていますので、ご自分でローグライク(ローグライト)と判断したものを選んで自由に挑戦してください。
            </li>
            <li className={styles.listQuestion}>
              Q: 4つ以上の挑戦を行いたい場合はどうすればいいですか？
            </li>
            <li className={styles.listAnswer}>
              A: 3つまでの申請と同様に、新たに応募フォームから申請してください。
              <br />
              挑戦する目標の上限はありませんので、思う存分挑戦してください。
            </li>
          </ul>
          <h2 className={styles.h2}>ロゴ等</h2>
          <div className={styles.p}>
            <DownloadLink />
            配信を行う際にご活用ください。
            <br />
            素材の改変や公序良俗に反する目的での利用は避けるようにお願いします。
          </div>
          <h2 className={styles.h2}>Discord</h2>
          <DiscordLink />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Show
