import type { NextPage } from 'next'
import styles from '@/styles/Event.module.scss'
import Link from 'next/link'
import Header from '@/components/Header/SubPageHeader'
import DiscordLink from '@/components/DiscordLink/DiscordLink'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import BlueButton from '@/components/ButtonLink/BlueButtonLink'
import Image from 'next/image'

const Challenge: NextPage = () => {
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
          <Image
            src="/images/challenge-dungeon1.png"
            alt="ふしチャレフライヤー"
            width="640px"
            height="360px"
          />
          <h2>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』とは</h2>
          <div className={styles.p}>
            <strong>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)</strong>
            は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。
            <br />
            <br />
            挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。
            <br />
            <br />
            日本国内では他にも
            <strong>
              『
              <a href="https://hackfest.rtain.jp/" target="_blank" rel="noreferrer">
                RTAハッカソン
              </a>
              』『
              <a
                href="https://w.atwiki.jp/roadtotherecord/pages/18.html"
                target="_blank"
                rel="noreferrer"
              >
                Deep Running
              </a>
              』
            </strong>
            などのRTAに挑戦するイベントが開催されていますが、本イベントでは「RTA以外の挑戦」も歓迎します。
            <br />
            <br />
            <Image
              src="/images/challenge-dungeon2.png"
              alt="ちょっと不思議部門説明"
              width="640px"
              height="360px"
            />
            <br />
            <strong>「ちょっと不思議部門」</strong>
            はタイムなどは気にせず、シンプルなクリアを目指す部門です。
            <br />
            これから不思議のダンジョン・ローグライクゲームに挑戦していきたい！と考えている人におすすめです。
            <br />
            <br />
            <Image
              src="/images/challenge-dungeon3.png"
              alt="もっと不思議部門説明"
              width="640px"
              height="360px"
            />
            <br />
            <strong>「もっと不思議部門」</strong>
            は普通のクリアだけでは満足できないやりこみプレイヤー向けの部門です。
            <br />
            また、ちょっと不思議部門でクリアした作品をさらに突き詰めたいと思った人にもおすすめです。
            <br />
            <br />
            <br />
            初心者の方も熟練プレイヤーの方も、是非この機会に新しい目標に挑戦して、不思議のダンジョン・ローグライクゲームの楽しさに触れて頂けたら幸いです。
          </div>
          <h2>開催期間</h2>
          <div className={styles.p}>
            <strong className={styles.strong}>2022年6月24日(日)～7月18日(月)</strong>
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
            <BlueButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1C2o799W9tmZCbBWRBkvv2fXxNUtOdP0pOfNywUj5z901xw/viewform?usp=sf_link"
              text="イベントに応募する"
              target="_blank"
            />
            <br />
            <Link href="/event/challenge/submissions">
              <a className={styles.linkToSubmission}>応募一覧</a>
            </Link>
          </div>
          <h2>Q＆A</h2>
          <ul className={styles.list}>
            <li className={styles.listQuestion}>Q: イベントに関する質問はどこから行えますか？</li>
            <li className={styles.listAnswer}>
              A:
              <a href="https://twitter.com/mysrtafes" target="blank" rel="noreferrer">
                公式Twitter
              </a>
              や
              <a href="https://discord.gg/5z4hG4uzAd" target="blank" rel="noreferrer">
                公式Discord
              </a>
              内に作成したチャンネルへお気軽にご質問ください。
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
          <h2>Discord</h2>
          <DiscordLink />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Challenge
