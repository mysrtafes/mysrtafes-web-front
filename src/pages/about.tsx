import type { NextPage } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import About from '@/components/page/about/About/About'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>不思議RTAフェスとは？ | 不思議のダンジョンRTAフェス</title>
        <meta
          property="og:title"
          content="不思議のダンジョンRTAフェスとは？ | 不思議のダンジョンRTAフェス"
          key="og:title"
        />
        <meta
          name="description"
          content="不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。"
          key="description"
        />
        <meta
          name="og:description"
          content="不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。"
          key="og:description"
        />
      </Head>

      <Header />
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
