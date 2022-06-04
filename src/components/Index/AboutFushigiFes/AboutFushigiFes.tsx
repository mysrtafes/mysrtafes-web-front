import styles from '@/components/Index/AboutFushigiFes/AboutFushigiFes.module.scss'
import GreenButtonLink from '@/components/ButtonLink/GreenButtonLink'

const AboutFushigiFes = () => {
  return (
    <div className={styles.aboutFushigiFes} id="about-fushigi-fes">
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
          <GreenButtonLink text="もっと見る" href="/about-fushigi-fes" />
        </div>
      </div>
    </div>
  )
}

export default AboutFushigiFes
