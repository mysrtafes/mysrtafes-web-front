import styles from '@/components/page/event/GameContainer/GameContainer.module.scss'

interface Props {
  title: string
  department: string
  goal: string
}

const GameContainer = (props: Props) => {
  const department = props.department.replace('部門', '')
  const departmentStyle = department == 'もっと不思議' ? 'more' : 'little'
  return (
    <li className={styles.gameContainer}>
      <div className={styles.head}>{props.title}</div>
      <div className={styles.body}>
        <ul>
          <li>
            <span className={`${styles.department} ${styles[departmentStyle]}`}>{department}</span>
            <span className={styles.goal}>{props.goal}</span>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default GameContainer
