import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import About from '@/components/page/index/About/About'
import EventArchives from '@/components/page/index/EventArchives/EventArchives'
import FirstView from '@/components/page/index/FirstView/FirstView'
import OfficialLinks from '@/components/page/index/OfficialLinks/OfficialLinks'
import SpecialThanks from '@/components/page/index/SpecialThanks/SpecialThanks'
import TweetListSP from '@/components/TweetList/TweetListSP'
import TwitterShareArea from '@/components/TwitterShare/TwitterShareArea'
import links from '@/const/links'
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery'
import styles from '@/styles/Home.module.scss'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const isPC = useBetterMediaQuery('(min-width: 768px)')
  return (
    <>
      <Header isTopPage={true} />
      <div className={styles.main}>
        <FirstView
          holdingPeriod="2022年6月24日(金)～7月18日(月)"
          title="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』"
          applicationPeriod="2022年6月17日(金)～"
          url="/event/challenge"
          imageUrl="/images/first-view.png"
        />
        <EventArchives />
        <OfficialLinks />
        <SpecialThanks />
        <About />
      </div>
      {!isPC && <TweetListSP />}
      <TwitterShareArea url={links.webSite + router.pathname} text="不思議のダンジョンRTAフェス" />
      <Footer />
    </>
  )
}

export default Home
