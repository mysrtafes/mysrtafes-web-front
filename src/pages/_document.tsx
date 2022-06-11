import { Head, Html, Main, NextScript } from 'next/document'
import { existsGaId, GA_ID } from '@/lib/gtag'

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        {/* Google Analytics */}
        {existsGaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
              }}
            />
          </>
        )}
        <link
          href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
