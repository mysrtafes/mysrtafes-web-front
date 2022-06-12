import styles from '@/components/page/event/SearchBox/InputBox/InputBox.module.scss'

const InputBox = () => {
  return (
    <div className={styles.inputBox}>
      <input type="text" placeholder="ゲームまたはユーザー名で検索" />
    </div>
  )
}

export default InputBox
