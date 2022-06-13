import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import SubmissionContainer from '@/components/page/event/SubmissionContainer/SubmissionContainer'
import TwitterShareArea from '@/components/TwitterShare/TwitterShareArea'
import links from '@/const/links'
import useChallengers from '@/hooks/useChallenger'
import styles from '@/styles/Submissions.module.scss'
import { Challenger, PrismaClient } from '@prisma/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  challengers: Challenger[]
}

const Submission: NextPage<Props> = (props: Props) => {
  const { challengers, isLoading } = useChallengers(props.challengers)
  const router = useRouter()
  const title =
    '『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』応募一覧 | 不思議のダンジョンRTAフェス'
  return (
    <>
      <Head>
        <title>{title}</title>
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
      </Head>

      <Header />
      <div className={styles.main}>
        <h2 className={styles.title}>ふしチャレ！応募一覧</h2>
        <div className={styles.inner}>
          {!isLoading &&
            challengers?.map(challenger => (
              <SubmissionContainer challenger={challenger} key={challenger.id} />
            ))}
        </div>
      </div>
      <TwitterShareArea
        url={links.webSite + router.pathname}
        text={title}
        hashtags={['ふしチャレ']}
      />
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
