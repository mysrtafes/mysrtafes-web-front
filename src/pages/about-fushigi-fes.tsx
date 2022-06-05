import type { NextPage } from 'next'
import Header from '@/components/Header/SubPageHeader'
import Footer from '@/components/Footer/Footer'
import styles from '@/styles/AboutFushigiFes.module.scss'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>不思議RTAフェスとは？</title>
          <meta 
            name="description" 
            content="不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。" 
          />
      </Head>
      
      <Header />
      <div className={styles.aboutFushigiFes} id="about-fushigi-fes">
        <div className={styles.inner}>
            <h2>不思議RTAフェスとは？</h2>
            <div className={styles.textContent}>
            不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。
            <br />
            <strong>RTA</strong>
            という遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。
            <br />
            </div>
            <div className={styles.aboutRTA}>
                <h3>RTAとは</h3>
                RTAとは、ゲームを最初からプレイして実時間でどれだけ早くクリアできるのかを競う遊び方です。
                <br />
                実時間で時間を競うことから、リアルタイムアタックと呼ばれており、RTAはReal Time
                Attackの頭文字を取った略称です。
                <br />
                タイムアタックは海外ではSpeedrunという呼び方でも親しまれており、世界各国で楽しまれているゲームの遊び方です。
                <br />
            </div>
            <p className={styles.textAlignRight}>「<a target="_blank" href="https://rtain.jp/">RTA in Japan 公式サイト</a>から引用」</p>
            <br />
            <br />
            長年愛され続けているローグライクゲームのさらなる発展を願い、より多くの方に楽しさを知ってもらうことを目標に活動しています。
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
