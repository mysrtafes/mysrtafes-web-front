import styles from '@/components/page/event/SearchBox/SearchBox.module.scss'
import InputBox from '@/components/page/event/SearchBox/InputBox/InputBox'
import SelectBox from '@/components/page/event/SearchBox/SelectBox/SelectBox'

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <InputBox />
      <SelectBox />
    </div>
  )
}

export default SearchBox
