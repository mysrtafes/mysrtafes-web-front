import BlueButtonLink from '@/components/ButtonLink/BlueButtonLink'
import OutLineGreenButtonLink from '@/components/ButtonLink/OutLineGreenButtonLink'
import SmallDiscordLink from '@/components/DiscordLink/SmallDiscordLink'
import styles from '@/components/page/event/challenge/Challenge.module.scss'
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
          期間中の途中参加も大歓迎です！
          <br />
          <br />
          <OutLineGreenButtonLink href="/event/challenge/submissions" text="応募一覧" />
        </p>

        <h2>結果報告</h2>
        <p className={styles.message}>
          結果報告は以下のGoogleフォームから行ってください。
          <br />
          <br />
          <BlueButtonLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpkSiXNHFRKFQDJNjmzQ4uhuGsU7lJEUo9dCi3HmaIMbfoKQ/viewform?usp=sf_link"
            text="結果を報告する"
            target="_blank"
          />
        </p>
        <h2>公式配信</h2>
        <p className={styles.message}>
          イベント期間中、運営側で配信企画を行います。
          <br />
          配信場所：
          <a href={links.twitch} className={styles.link} target="_blank" rel="noreferrer noopener">
            不思議RTAフェスTwitchチャンネル
          </a>
          <ul className={styles.schedule}>
            <li className={styles.major}>
              <h3>開会式</h3>
              <ul>
                <li className={styles.datetime}>6/24(金)20:45</li>
                <li>
                  21時のイベント開始と同時に主催のポンズさんが挑戦を開始します。
                  みんなで一緒にプレーを開始しましょう。
                </li>
              </ul>
            </li>
            <li className={styles.major}>
              <h3>ふしチャレスタッフの挑戦</h3>
              <ul>
                <li className={styles.datetime}>
                  6/25(土)21:00、7/2(土)21:00、7/9(土)21:00、7/16(土)21:00
                </li>
                <li>
                  イベント期間中の毎週土曜に、ふしチャレ運営スタッフがふしチャレに挑戦する様子を配信します。
                </li>
              </ul>
            </li>
            <li className={styles.major}>
              <h3>ふしチャレ中間報告会</h3>
              <ul>
                <li className={styles.datetime}>7/3(日)21:00、7/17(日)21:00</li>
                <li>参加者からの挑戦結果報告を流させて頂きます。</li>
              </ul>
            </li>
            <li className={styles.major}>
              <h3>閉会式</h3>
              <ul>
                <li className={styles.datetime}> 7/23(土)21:00</li>
                <li>最終的な挑戦結果報告を流し、イベントの総括をします</li>
              </ul>
            </li>
          </ul>
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
            一応最低限のルールとして、先に申請した全ての挑戦に目処がついたら(目標達成、あるいは断念)次の申請を行うようお願いします。
            <br />
            挑戦する目標の上限はありませんので、思う存分挑戦してください。
          </li>
        </ul>
        <p className={styles.message}>
          <a
            href="https://docs.google.com/spreadsheets/d/1NYcEgQBZacYUk0y54N-OAz3eNZd7s-9nNAXyulwiPsA/edit#gid=0"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.link}
          >
            その他のQ&Aはこちら
          </a>
        </p>

        <h2>ロゴ</h2>
        <p className={styles.message}>
          <Image
            className={styles.image}
            src="/images/challenger-logo.png"
            alt="ふしチャレロゴ"
            width={405}
            height={217}
          />
          <br />
          配信を行う際にご活用ください。
          <br />
          素材の改変や公序良俗に反する目的での利用は避けるようにお願いします。
          <br />
          <a
            href="/images/challenger-logo.png"
            className={styles.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            元画像はこちら
          </a>
          <br />
          <a
            href="/images/challenger-logo-white.png"
            className={styles.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            白抜き画像はこちら
          </a>
        </p>
        <h2>Discord</h2>
        <SmallDiscordLink />
      </div>
    </div>
  )
}

export default Challenge
