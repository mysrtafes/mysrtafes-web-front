import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TweetListSP from '@/components/TweetList/TweetListSP'
import FirstView from '@/components/Index/FirstView/FirstView'
import EventArchives from '@/components/Index/EventArchives/EventArchives'
import AboutFushigiFes from '@/components/Index/AboutFushigiFes/AboutFushigiFes'
import ComunityLinks from '@/components/Index/ComunityLinks/ComunityLinks'
import SpecialThanks from '@/components/Index/SpecialThanks/SpecialThanks'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>不思議のダンジョンRTAフェス公式ウェブサイト</title>
          <meta 
            name="description" 
            content="不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。" 
          />
      </Head>

      <Header />
      <div className={styles.main}>
        <FirstView
          holdingPeriod="2022年6月17日(金)～7月10日(日)"
          title="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』"
          applicationPeriod="2022年6月17日(金)～7月10日(日)"
          url="/event/challenge-dungeon"
          imageUrl="/images/first-view.png"
        />
        <EventArchives />
        <ComunityLinks />
        <SpecialThanks />
        <AboutFushigiFes />
      </div>
      <TweetListSP />
      <Footer />
    </>
  )
}

export default Home
