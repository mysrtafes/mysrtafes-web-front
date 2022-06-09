import styles from '@/components/page/event/SearchBox/SearchBox.module.scss'

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
        <input type="text" placeholder='ゲームまたはユーザー名で検索' />
    </div>
  )
}

export default SearchBox
