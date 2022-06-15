import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Challenge from '@/components/page/event/Challenge/Challenge'
import TwitterShareArea from '@/components/TwitterShare/TwitterShareArea'
import links from '@/const/links'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const ChallengePage: NextPage = () => {
  const router = useRouter()
  const currentUrl = links.webSite + router.pathname
  const title = 'ふしチャレ！～不思議のダンジョンRTAフェス外伝～ | 不思議のダンジョンRTAフェス'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          name="description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
          key="description"
        />
        <meta
          property="og:description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
          key="og:description"
        />
        <meta
          property="og:image"
          content={`${links.webSite}/images/challenge-ogp.png`}
          key="og:image"
        />
      </Head>

      <Header />
      <Challenge />
      <TwitterShareArea url={currentUrl} text={title} hashtags={['ふしチャレ']} />
      <Footer />
    </>
  )
}

export default ChallengePage
