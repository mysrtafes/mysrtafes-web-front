import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import TwitterShareArea from '@/components/TwitterShare/TwitterShareArea'
import links from '@/const/links'
import styles from '@/styles/PrivacyPolicy.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const PrivacyPolicy: NextPage = () => {
  const router = useRouter()
  const currentUrl = links.webSite + router.pathname
  const title = 'プライバシーポリシー | 不思議のダンジョンRTAフェス'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:title" content={title} key="og:title" />
      </Head>

      <Header />
      <div className={styles.main}>
        <div className={styles.inner}>
          <h1>プライバシーポリシー</h1>
          <h2>個人情報の利用目的</h2>
          <div className={styles.p}>
            当サイトでは、メールでのお問い合わせ、コメントの投稿などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
            これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          </div>
          <h2>個人情報の第三者への開示</h2>
          <div className={styles.p}>
            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            ・本人のご了解がある場合 ・法令等への協力のため、開示が必要となる場合
            個人情報の開示、訂正、追加、削除、利用停止
            ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
          </div>
          <h2>免責事項</h2>
          <div className={styles.p}>
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </div>
          <h2>プライバシーポリシーの変更について</h2>
          <div className={styles.p}>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </div>
        </div>
      </div>
      <TwitterShareArea url={currentUrl} text={title} />
      <Footer />
    </>
  )
}

export default PrivacyPolicy
