import styles from '@/components/Index/SpecialThanks/SpecialThanks.module.scss'

const SpecialThanks = () => {
  return (
    <div className={styles.specialThanks} id="special-thanks">
      <div className={styles.inner}>
        <h2>主催・運営</h2>
        <table>
          <tbody>
            <tr>
              <td>主催</td>
              <td>ポンズ</td>
            </tr>
            <tr>
              <td>運営</td>
              <td>
                <ul>
                  <li>yagamuu</li>
                  <li>深爪</li>
                  <li>ファジー</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>SuperStaff</td>
              <td>
                <ul>
                  <li>CHROM-D-</li>
                  <li>isuZu</li>
                  <li>kajiro</li>
                  <li>ping値</li>
                  <li>sisuka</li>
                  <li>あーる</li>
                  <li>アジーン</li>
                  <li>イカロす</li>
                  <li>イリィ→</li>
                  <li>うたたね</li>
                  <li>エクシーク</li>
                  <li>ぶたまん</li>
                  <li>ベア</li>
                  <li>ぼぶそん</li>
                  <li>ゆうさく</li>
                  <li>リヒト</li>
                  <li>ロック</li>
                  <li>ねこ</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>ロゴ&イラスト</td>
              <td>isuZu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SpecialThanks
