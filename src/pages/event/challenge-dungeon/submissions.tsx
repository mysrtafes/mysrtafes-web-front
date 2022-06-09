import type { NextPage } from 'next'
import styles from '@/styles/Submissions.module.scss'
import Header from '@/components/Header/SubPageHeader'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import SubmissionContainer from '@/components/page/event/SubmissionContainer/SubmissionContainer'
import SearchBox from '@/components/page/event/SearchBox/SearchBox'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』応募一覧</title>
        <meta
          name="description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
        />
      </Head>

      <Header />
      <div className={styles.main}>
        <div className={styles.inner}>
          <SearchBox />
          <SubmissionContainer
            name="ベア"
            furigana="べあ"
            title1="風来のシレン２外伝女剣士アスカ見参！forWindows"
            department1="通販化粧品"
            goal1="白蛇島を3時間以内に打開することを目標にがんばります！"
            title2="風来のシレン２外伝女剣士アスカ見参！forWindows"
            department2="通販化粧品"
            goal2="白蛇島を3時間以内に打開することを目標にがんばります！"
            title3="風来のシレン２外伝女剣士アスカ見参！forWindows"
            department3="通販化粧品"
            goal3="白蛇島を3時間以内に打開することを目標にがんばります！"
            message="白蛇島が大好きだったんです！"
            broadcastUrl="testurl"
            twitterId="bearfaust0123"
          />
          <SubmissionContainer
            name="ベア"
            furigana="べあ"
            title1="風来のシレン２外伝女剣士アスカ見参！forWindows"
            department1="通販化粧品"
            goal1="白蛇島を3時間以内に打開することを目標にがんばります！"
            message="白蛇島が大好きだったんです！"
            broadcastUrl="testurl"
            twitterId="bearfaust0123"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
