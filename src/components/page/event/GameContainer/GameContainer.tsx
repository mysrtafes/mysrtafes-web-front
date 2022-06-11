import styles from '@/components/page/event/GameContainer/GameContainer.module.scss'

interface Props {
  title: string
  department: string
  goal: string
}

const GameContainer = (props: Props) => {
  return (
    <li className={styles.gameContainer}>
      <div className={styles.head}>{props.title}</div>
      <div className={styles.goal}>
        <ul>
          <li>
            <span className={styles.left}>部門</span>
            <span className={styles.right}>{props.department}</span>
          </li>
          <li>
            <span className={styles.left}>目標</span>
            <span className={styles.right}>{props.goal}</span>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default GameContainer
