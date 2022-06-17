import styles from '@/components/page/event/SearchBox/SearchBox.module.scss'
import SelectBox from '@/components/page/event/submissions/SearchBox/SelectBox/SelectBox'

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <SelectBox />
    </div>
  )
}

export default SearchBox
