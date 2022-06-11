import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'
import usePageView from '@/hooks/usePageView'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <>
      <Head>
        <title>不思議のダンジョンRTAフェス</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mysrtafes" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="不思議のダンジョンRTAフェス" />
        <meta property="og:url" content="https://mysrtafes.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="不思議のダンジョンRTAフェス" key="og:title" />
        <meta
          name="description"
          content="不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。"
          key="description"
        />
        <meta
          property="og:description"
          content="不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。RTAという遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。"
          key="og:description"
        />
        <meta property="og:image" content="/images/mysrtafes.png" key="og:image" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
