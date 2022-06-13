import BlueButton from '@/components/ButtonLink/BlueButtonLink'
import OutLineGreenButtonLink from '@/components/ButtonLink/OutLineGreenButtonLink'
import SmallDiscordLink from '@/components/DiscordLink/SmallDiscordLink'
import styles from '@/components/page/event/Challenge/Challenge.module.scss'
import links from '@/const/links'
import Image from 'next/image'

const Challenge = () => {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <Image
          src="/images/challenge1.png"
          alt="ふしチャレフライヤー"
          width={640}
          height={360}
          priority={true}
          quality={30}
        />
        <h2>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』とは</h2>
        <p className={styles.message}>
          <strong>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)</strong>
          は、
          <br />
          不思議のダンジョンRTAフェスが主催する
          <strong>「期間内にゲームに挑戦して目標達成を目指す」</strong>イベントです。
          <br />
          <br />
          挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。
          <br />
          <br />
          日本国内では他にも
          <strong>
            『
            <a href="https://hackfest.rtain.jp/" target="_blank" rel="noreferrer noopener">
              RTAハッカソン
            </a>
            』『
            <a
              href="https://w.atwiki.jp/roadtotherecord/pages/18.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Deep Running
            </a>
            』
          </strong>
          などのRTAに挑戦するイベントが開催されていますが、
          <br />
          本イベントでは
          <strong>「RTA以外の挑戦」</strong>も歓迎します。
          <br />
          <br />
          <Image
            src="/images/challenge2.png"
            alt="ちょっと不思議部門説明"
            width={640}
            height={360}
            quality={30}
          />
          <br />
          <strong>「ちょっと不思議部門」</strong>
          はタイムなどは気にせず、シンプルなクリアを目指す部門です。
          <br />
          これから不思議のダンジョン・ローグライクゲームに挑戦していきたい！と考えている人におすすめです。
          <br />
          <br />
          <Image
            src="/images/challenge3.png"
            alt="もっと不思議部門説明"
            width={640}
            height={360}
            quality={30}
          />
          <br />
          <strong>「もっと不思議部門」</strong>
          は普通のクリアだけでは満足できないやりこみプレイヤー向けの部門です。
          <br />
          また、ちょっと不思議部門でクリアした作品をさらに突き詰めたいと思った人にもおすすめです。
          <br />
          <br />
          <br />
          初心者の方も熟練プレイヤーの方も、是非この機会に新しい目標に挑戦して、
          <br />
          不思議のダンジョン・ローグライクゲームの楽しさに触れて頂けたら幸いです。
        </p>

        <h2>イベントスケジュール</h2>
        <p className={styles.message}>
          <strong>2022年6月24日(金)21:00 ～ 7月18日(月)24:00</strong>
          <br />
          <br />
          6月24日(金)20:30頃に
          <a href={links.twitch} className={styles.link} target="_blank" rel="noreferrer noopener">
            公式Twitchチャンネル
          </a>
          にて開幕配信を行います！
        </p>

        <h2>参加方法</h2>
        <p className={styles.message}>
          <Image
            src="/images/challenge4.png"
            alt="参加方法説明"
            width={640}
            height={360}
            quality={50}
          />
          <br />
          どなたでも応募可能です。
          <br />
          イベント応募と結果報告は以下のGoogleフォームから行ってください。
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
          <br />
          <OutLineGreenButtonLink href="/event/challenge/submissions" text="応募一覧" />
        </p>

        <h2>Q＆A</h2>
        <ul className={styles.list}>
          <li className={styles.listQuestion}>Q: イベントに関する質問はどこから行えますか？</li>
          <li className={styles.listAnswer}>
            A:
            <a
              href={links.twitter}
              target="blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              公式Twitter
            </a>
            や
            <a
              href={links.discord}
              target="blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
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
            昨今のローグライク(ローグライト)のジャンル線引きは非常に難しくなっていますので、
            <br />
            ご自分でローグライク(ローグライト)と判断したものを選んで自由に挑戦してください。
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
        <SmallDiscordLink />
      </div>
    </div>
  )
}

export default Challenge
