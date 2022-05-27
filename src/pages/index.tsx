import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Header from '@/components/Header'
import EventArchiveContent from '@/components/EventArchiveContent'
import DiscordLink from '@/components/DiscordLink/DiscordLink'
import DownloadLink from '@/components/DownloadLink'
import TweetList from '@/components/TweetList'
import Footer from '@/components/Footer'

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <div className={styles.main}>
          <div className={styles.inner}>
              <div className={styles.firstView} id="first-view">
                  <div className={styles.innerBox}>
                      <p className={styles.eventHoldingPeriod}>2022年6月17日(金)～7月10日(日)</p>
                      <p className={styles.eventTitle}>チャレンジダンジョン！</p>
                      <p className={styles.eventApplicationPeriod}>応募期間：2022年6月17日(金)～7月10日(日)</p>
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
                        不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。<br /><br />
                        RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。<br /><br />
                        
                        <h3>RTAとは</h3><br />
                        RTAとは、ゲームを最初からプレイして実時間でどれだけ早くクリアできるのかを競う遊び方です。<br />
                        実時間で時間を競うことから、リアルタイムアタックと呼ばれており、RTAはReal Time Attackの頭文字を取った略称です。<br /><br />
                        タイムアタックは海外ではSpeedrunという呼び方でも親しまれており、世界各国で楽しまれているゲームの遊び方です。<br />
                        「RTA in Japan 公式サイトから引用」<br /><br />
                        長年愛され続けているローグライクゲームのさらなる発展を願い、より多くの方に楽しさを知ってもらうことを目標に活動しています。
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