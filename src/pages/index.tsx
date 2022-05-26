import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import DiscordLink from '../components/discordLink'
import DownloadLink from '../components/downloadLink'
import TweetList from '../components/tweetList'
import EventArchiveContent from '../components/eventArchiveContent'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <div className={styles.main}>
          <div className={styles.inner}>
              <div className={styles.firstView} id="first-view">
                  <div className={styles.innerBox}>
                      <p className={styles.eventHoldingPeriod}>2900/22/11(Hog) - 13(Fug)</p>
                      <p className={styles.eventTitle}>ここに企画名が入りますここに企画名が入りますここに企画名が入ります</p>
                      <p className={styles.eventApplicationPeriod}>応募期間：2900/22/11(Hog) - 13(Fug)</p>
                      <a href="/show" className={styles.grayButton}>
                          応募はこちら
                      </a>
                  </div>
              </div>
          </div>      
      <div className={styles.eventArchives} id="event-archives">
        <h2 className={styles.h2}>イベントアーカイブ</h2>
        <ul>
            <EventArchiveContent image_url="images/discord.png" period="2900/22/11(Hog) - 13(Fug)" title="ここに企画名が入りますここに企画名が入りますここに企画名が入ります" url="#"/>
            <EventArchiveContent image_url="images/discord.png" period="2900/22/11(Hog) - 13(Fug)" title="ここに企画名が入りますここに企画名が入りますここに企画名が入ります" url="#"/>
            <EventArchiveContent image_url="images/discord.png" period="2900/22/11(Hog) - 13(Fug)" title="ここに企画名が入りますここに企画名が入りますここに企画名が入ります" url="#"/>
        </ul>
        <a href="#" className={styles.grayButton}>
            すべて見る
        </a>
      </div>

      <div className={styles.comunityLink} id="comunity-links">
                <h2 className={styles.h2}>コミュニティリンク集</h2>
                <div className={styles.inner}>
                    <div className={styles.comunityLinkFlex}>
                        <div className={styles.comunityLinkFlexContent}>
                          <DiscordLink />
                          <DownloadLink />
                        </div>
                        <div className={styles.comunityLinkFlexContent}>
                            <TweetList />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutFushigiRtaFes} id="about-fushigi-fes">
                <div className={styles.inner}>
                    <h2 className={styles.h2}>不思議RTAフェスとは？</h2>
                    <p className={styles.textContent}>
                        ここに概念的な文章が入ります。文は目的観点を決議よれテンプレートあっませ以下、誤認され対象を著作性明確の編集原則が行われてはするます、ペディアの方針は、投稿さ主題と出所さことにおける注意同様ませでしょがいあるある。ただし、ライセンスの提出権は、内容の削除できる参考十分ある権利に制定する、そのフリーにしれてBYに著作さことが執筆するれるな。一方を、引用目的を説明されている資料を直ちにしいいことは、関係たで、場合については引用毎の侵害としてフリー上の問題は得ることに、被違反性も、独自の規定をさて俳人を著作するうばいでない。著作認めて、それの参考もないなどよれませある。または、各修正権を、規定さBYの複数、付が重要に要約しのでなるば、記事プロジェクトの例証とSAに公表しことになるて、削除するませ文が著作、投稿家防止ないないとの引用をさことも、比較的短いと抜き出してよいますです。
                    </p>
                    <div className={styles.textAlignCenter}>
                        <Link href="#">
                          <a className={styles.grayButton}>
                              もっと長ければ個別ぺーじ
                          </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.specialThanks} id="special-thanks">
                <div className={styles.inner}>
                    <h2 className={styles.h2}>主催・運営</h2>
                    <div className={styles.ulFlex}>
                        <ul>
                            <li>ポンズ</li>
                            <li>リヒト</li>
                            <li>うたたね</li>
                            <li>イカロす</li>
                            <li>ベア</li>
                            <li>モツ</li>
                        </ul>
                        <ul>                    
                            <li>クロム</li>
                            <li>ぴんぐち</li>
                            <li>sisuka</li>
                            <li>あーる</li>
                            <li>ぶたまん</li>
                            <li>ゆうさく</li>
                        </ul>
                        <ul>
                            <li>エクシーク</li>
                            <li>ファジー</li>
                            <li>fkdm</li>
                            <li>yagamuu</li>
                        </ul>
                        <ul>
                            <li>アジーン</li>
                            <li>イリィ</li>
                            <li>kajiro</li>
                            <li>ぼぶそん</li>
                            <li>ロック</li>
                        </ul>
                    </div>
                </div>
            </div>

      </div>
      <div className={styles.tweetArea}>
          <div className={styles.inner}>
            <TweetList />
          </div>
      </div>
      <Footer />
    </>
  )

}

export default Home