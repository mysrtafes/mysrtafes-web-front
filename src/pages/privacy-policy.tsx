import type { NextPage } from 'next'
import styles from '@/styles/PlivacyPolicy.module.scss'
import Header from '@/components/Header/SubPageHeader'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

const PlivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』とは</title>
        <meta
          name="description"
          content="『ふしチャレ！～不思議のダンジョンRTAフェス外伝～』(略称：ふしチャレ！)は、不思議のダンジョンRTAフェスが主催する「期間内にゲームに挑戦して目標達成を目指す」イベントです。挑戦するゲームは不思議のダンジョン・ローグライクジャンルとされているものであれば何でもOKです。"
        />
      </Head>

      <Header />
      <div className={styles.main}>
        <div className={styles.inner}>
          <h1>プライバシーポリシー</h1>
          <h2>個人情報の利用目的</h2>
          <div className={styles.p}>
            当Webサイトでは、メールでのお問い合わせ、コメントの投稿などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
            また、PayPalを利用した寄付の際にPayPalに登録した名前を取得します。
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
            プライバシーポリシーの変更について
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlivacyPolicy