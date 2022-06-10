import GreenButtonLink from '@/components/ButtonLink/GreenButtonLink'
import styles from '@/components/page/index/About/About.module.scss'

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.inner}>
        <h2>不思議RTAフェスとは？</h2>
        <div className={styles.textContent}>
          不思議のダンジョンRTAフェス(略称:不思議RTAフェス)は、「不思議のダンジョンシリーズ」及び「その他のローグライクゲーム」をテーマにしたイベント開催などを行っている団体です。
          <br />
          <strong>RTA</strong>
          という遊び方を通して本ジャンルの面白さを伝えるための活動を主に行っています。
          <br />
          <br />
        </div>
        <div className={styles.textAlignCenter}>
          <GreenButtonLink text="もっと見る" href="/about" />
        </div>
      </div>
    </div>
  )
}

export default About
