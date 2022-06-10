import styles from '@/components/page/index/SpecialThanks/SpecialThanks.module.scss'
import StaffNameList from '@/components/page/index/StaffNameList/StaffNameList'
import staffList from '@/const/staffList'

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
                  {staffList.organizers.map(organizer => (
                    <StaffNameList
                      name={organizer.name}
                      twitterId={organizer.twitterId}
                      key={organizer.name}
                    />
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>運営</td>
              <td>
                <ul>
                  {staffList.managers.map(manager => (
                    <StaffNameList
                      name={manager.name}
                      twitterId={manager.twitterId}
                      key={manager.name}
                    />
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>SuperStaff</td>
              <td>
                <ul>
                  {staffList.superStaffs.map(superStaff => (
                    <StaffNameList
                      name={superStaff.name}
                      twitterId={superStaff.twitterId}
                      key={superStaff.name}
                    />
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>キービジュアル&ロゴ</td>
              <td>
                <ul>
                  {staffList.logoCreators.map(logoCreator => (
                    <StaffNameList
                      name={logoCreator.name}
                      twitterId={logoCreator.twitterId}
                      key={logoCreator.name}
                    />
                  ))}
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
