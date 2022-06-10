import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Challenge from '@/components/page/event/Challenge/Challenge'
import type { NextPage } from 'next'
import Head from 'next/head'

const ChallengePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ふしチャレ！～不思議のダンジョンRTAフェス外伝～ | 不思議のダンジョンRTAフェス</title>
        <meta
          property="og:title"
          content="ふしチャレ！～不思議のダンジョンRTAフェス外伝～ | 不思議のダンジョンRTAフェス"
          key="og:title"
        />
        <meta
          name="description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
          key="description"
        />
        <meta
          name="og:description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
          key="og:description"
        />
      </Head>

      <Header />
      <Challenge />
      <Footer />
    </>
  )
}

export default ChallengePage
