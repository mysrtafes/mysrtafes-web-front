import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TweetListSP from '@/components/TweetList/TweetListSP'
import FirstView from '@/components/page/Index/FirstView/FirstView'
import EventArchives from '@/components/page/Index/EventArchives/EventArchives'
import AboutFushigiFes from '@/components/page/Index/AboutFushigiFes/AboutFushigiFes'
import CommunityLinks from '@/components/page/Index/CommunityLinks/CommunityLinks'
import SpecialThanks from '@/components/page/Index/SpecialThanks/SpecialThanks'
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
          holdingPeriod="2022年6月24日(日)～7月18日(月)"
          title="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』"
          applicationPeriod="2022年6月24日(日)～7月18日(月)"
          url="/event/challenge-dungeon"
          imageUrl="/images/first-view.png"
        />
        <EventArchives />
        <CommunityLinks />
        <SpecialThanks />
        <AboutFushigiFes />
      </div>
      <TweetListSP />
      <Footer />
    </>
  )
}

export default Home
