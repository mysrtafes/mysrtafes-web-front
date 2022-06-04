import type { NextPage } from 'next'
import styles from '@/styles/Event.module.scss'
import Link from 'next/link'
import Header from '@/components/Header/SubPageHeader'
import DownloadLink from '@/components/DownloadLink/DownloadLink'
import DiscordLink from '@/components/DiscordLink/DiscordLink'
import Footer from '@/components/Footer/Footer'
import { Link as Scroll } from 'react-scroll'
import Head from 'next/head'

const ChallengeDungeon: NextPage = () => {
  return (
    <>
      <Head>
          <title>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』とは</title>
          <meta 
            name="description" 
            content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。" 
          />
      </Head>

      <Header />
      <div className={styles.main}>
        <div className={styles.inner}>
          <h2>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』とは</h2>
          <div className={styles.p}>
            <strong>
              『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)
            </strong>
            は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。
            <br />
            <br />
            挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。
            <br />
            <br />
            日本国内では他にも<strong>『<Link href="https://hackfest.rtain.jp/"><a>RTAハッカソン</a></Link>』『<Link href="https://w.atwiki.jp/roadtotherecord/pages/18.html"><a>Deep Running</a></Link>』</strong>
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
          <h2>開催期間</h2>
          <div className={styles.p}>
            <strong className={styles.strong}>2022年6月17日(金)～7月10日(日)</strong>
          </div>
          <h2>応募について</h2>
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
            <br />
            <Link href="/event/challenge-dungeon/submissions">
              <a className={styles.joinEventButton}>応募一覧</a>
            </Link>
          </div>
          <h2>Q＆A</h2>
          <ul className={styles.list}>
            <li className={styles.listQuestion}>Q: イベントに関する質問はどこから行えますか？</li>
            <li className={styles.listAnswer}>
              A: <Link href="https://twitter.com/mysrtafes"><a target="blank">公式Twitter</a></Link>や<Scroll smooth={true} duration={600} to="discordLink">公式Discord</Scroll>内に作成したチャンネルへお気軽にご質問ください。
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
          {/* <h2>ロゴ等</h2>
          <div className={styles.p}>
            <DownloadLink />
            配信を行う際にご活用ください。
            <br />
            素材の改変や公序良俗に反する目的での利用は避けるようにお願いします。
          </div> */}
          <h2 id="discordLink">Discord</h2>
          <DiscordLink />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChallengeDungeon
