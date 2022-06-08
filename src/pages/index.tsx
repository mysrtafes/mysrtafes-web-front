import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TweetListSP from '@/components/TweetList/TweetListSP'
import FirstView from '@/components/page/Index/FirstView/FirstView'
import EventArchives from '@/components/page/Index/EventArchives/EventArchives'
import About from '@/components/page/Index/About/About'
import OfficialLinks from '@/components/page/Index/OfficialLinks/OfficialLinks'
import SpecialThanks from '@/components/page/Index/SpecialThanks/SpecialThanks'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <FirstView
          holdingPeriod="2022年6月24日(日)～7月18日(月)"
          title="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』"
          applicationPeriod="2022年6月17日(日)～"
          url="/event/challenge"
          imageUrl="/images/first-view.png"
        />
        <EventArchives />
        <OfficialLinks />
        <SpecialThanks />
        <About />
      </div>
      <TweetListSP />
      <Footer />
    </>
  )
}

export default Home
