import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TweetListSP from '@/components/TweetList/TweetListSP'
import FirstView from '@/components/Index/FirstView/FirstView'
import EventArchives from '@/components/Index/EventArchives/EventArchives'
import AboutFushigiFes from '@/components/Index/AboutFushigiFes/AboutFushigiFes'
import ComunityLinks from '@/components/Index/ComunityLinks/ComunityLinks'
import SpecialThanks from '@/components/Index/SpecialThanks/SpecialThanks'

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <div className={styles.main}>
        <FirstView holdingPeriod='2022年6月17日(金)～7月10日(日)' title="チャレンジダンジョン！" applicationPeriod='応募期間：2022年6月17日(金)～7月10日(日)' url='/show' imageUrl="/images/first-view.png"/>
        <AboutFushigiFes />
        <EventArchives />
        <ComunityLinks />
        <SpecialThanks />
      </div>
      <TweetListSP />
      <Footer />
    </>
  )

}

export default Home