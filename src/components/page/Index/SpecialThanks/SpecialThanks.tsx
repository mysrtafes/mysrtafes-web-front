import styles from '@/components/page/Index/SpecialThanks/SpecialThanks.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const SpecialThanks = () => {
  return (
    <div className={styles.specialThanks} id="special-thanks">
      <div className={styles.inner}>
        <h2>主催・運営</h2>
        <table>
          <tbody>
            <tr>
              <td>主催</td>
              <td>
                <ul>
                  <li>
                    ポンズ
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>運営</td>
              <td>
                <ul>
                  <li>
                    yagamuu
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    深爪
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    ファジー
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>SuperStaff</td>
              <td>
                <ul>
                  <li>
                    CHROM-D-
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    isuZu
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>kajiro</li>
                  <li>
                    ping値
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    sisuka
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    あーる
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    アジーン
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    イカロす
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    イリィ→
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    うたたね
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>エクシーク</li>
                  <li>
                    ねこ
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    ぶたまん
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    ベア
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    ぼぶそん
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    ゆうさく
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    リヒト
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                  <li>
                    ロック
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>キービジュアル&ロゴ</td>
              <td>
                <ul>
                  <li>
                    isuZu
                    <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SpecialThanks
