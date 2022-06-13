import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import About from '@/components/page/about/About/About'
import TwitterShareArea from '@/components/TwitterShare/TwitterShareArea'
import links from '@/const/links'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const AboutPage: NextPage = () => {
  const router = useRouter()
  const title = '不思議のダンジョンRTAフェスとは？ | 不思議のダンジョンRTAフェス'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="og:title" />
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
      <TwitterShareArea url={links.webSite + router.pathname} text={title} />
      <Footer />
    </>
  )
}

export default AboutPage
