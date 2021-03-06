import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Submissions from '@/components/page/event/submissions/Submissions'
import TwitterShareArea from '@/components/TwitterShare/TwitterShareArea'
import links from '@/const/links'
import { Challenger, PrismaClient } from '@prisma/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  challengers: Challenger[]
}

const Submission: NextPage<Props> = (props: Props) => {
  const router = useRouter()
  const currentUrl = links.webSite + router.pathname
  const title =
    '『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』応募一覧 | 不思議のダンジョンRTAフェス'

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
          name="og:description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
          key="og:description"
        />
        <meta
          name="og:image"
          content={`${links.webSite}/images/challenge-ogp.png`}
          key="og:image"
        />
      </Head>

      <Header />
      <Submissions challengers={props.challengers} />
      <TwitterShareArea url={currentUrl} text={title} hashtags={['ふしチャレ']} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const prisma = new PrismaClient()
  const challengers = await prisma.challenger.findMany({
    select: {
      id: true,
      Name: true,
      Furigana: true,
      StreamUrl: true,
      TwitterId: true,
      Message: true,
      Game1: true,
      Department1: true,
      Goal1: true,
      Game2: true,
      Department2: true,
      Goal2: true,
      Game3: true,
      Department3: true,
      Goal3: true,
    },
    orderBy: [
      {
        id: 'asc',
      },
      {
        Name: 'desc',
      },
    ],
  })

  return {
    props: {
      challengers,
    },
  }
}

export default Submission
