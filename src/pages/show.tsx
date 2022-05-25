import type { NextPage } from 'next'
import styles from '../styles/Show.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import DiscordLink from '../components/discordLink'
import DownloadLink from '../components/downloadLink'
import TwitterLink from '../components/twitterLink'
import EventArchiveContent from '../components/eventArchiveContent'
import Link from 'next/link'

const Show: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
            <div className={styles.inner}>
                <h2 className={styles.h2}>不思議のダンジョンRTAフェスについて</h2>
                <div className={styles.p}>
                    不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。<br />
                    RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。<br />
                    <div className={styles.aboutFushigiRtaFes}>
                        <h3 className={styles.h3}>RTAとは</h3><br />
                        RTAとは、ゲームを最初からプレイして実時間でどれだけ早くクリアできるのかを競う遊び方です。<br />
                        実時間で時間を競うことから、リアルタイムアタックと呼ばれており、RTAはReal Time Attackの頭文字を取った略称です。<br /><br />
                        タイムアタックは海外ではSpeedrunという呼び方でも親しまれており、世界各国で楽しまれているゲームの遊び方です。<br />
                        「RTA in Japan 公式サイトから引用」
                    </div>
                    長年愛され続けているローグライクゲームのさらなる発展を願い、より多くの方に楽しさを知ってもらうことを目標に活動しています。
                </div>
                <h2 className={styles.h2}>開催期間</h2>
                <p className={styles.p}>
                    <strong className={styles.strong}>2022年6月17日(金)～7月10日(日)</strong>
                </p>
                <h2 className={styles.h2}>応募について</h2>
                <p className={styles.p}>
                    どなたでも応募可能です。<br />
                    応募は以下のGoogleフォームから行ってください。<br />
                    期間中の途中参加も大歓迎です！
                </p>
                <h2 className={styles.h2}>Q＆A</h2>
                <ul className={styles.list}>
                    <li className={styles.listQuestion}>Q: イベントに関する質問はどこから行えますか？</li>
                    <li className={styles.listAnswer}>A: 公式Twitterや公式Discord内に作成したチャンネルへお気軽にご質問ください。</li>
                    <li className={styles.listQuestion}>Q: 選ぶ作品がジャンルに合っているかどうか確認する必要はありますか？</li>
                    <li className={styles.listAnswer}>A: 特に確認は必要ありません。<br />昨今のローグライク(ローグライト)のジャンル線引きは非常に難しくなっていますので、ご自分でローグライク(ローグライト)と判断したものを選んで自由に挑戦してください。</li>
                    <li className={styles.listQuestion}>Q: 4つ以上の挑戦を行いたい場合はどうすればいいですか？</li>
                    <li className={styles.listAnswer}>A: 3つまでの申請と同様に、新たに応募フォームから申請してください。<br />挑戦する目標の上限はありませんので、思う存分挑戦してください。</li>
                </ul>
                <h2 className={styles.h2}>ロゴ等</h2>
                <p className={styles.p}>
                    <DownloadLink />
                    配信を行う際にご活用ください。<br />
                    素材の改変や公序良俗に反する目的での利用は避けるようにお願いします。
                </p>
                <h2 className={styles.h2}>Discord</h2>
                <DiscordLink />
            </div>
      </div>
      <Footer />
    </>
  )
}

export default Show
