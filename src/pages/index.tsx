import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import About from '@/components/page/index/About/About'
import EventArchives from '@/components/page/index/EventArchives/EventArchives'
import FirstView from '@/components/page/index/FirstView/FirstView'
import OfficialLinks from '@/components/page/index/OfficialLinks/OfficialLinks'
import SpecialThanks from '@/components/page/index/SpecialThanks/SpecialThanks'
import TweetListSP from '@/components/TweetList/TweetListSP'
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery'
import styles from '@/styles/Home.module.scss'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const isPC = useBetterMediaQuery('(min-width: 768px)')
  return (
    <>
      <Header isTopPage={true} />
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
      {!isPC && <TweetListSP />}
      <Footer />
    </>
  )
}

export default Home
