import styles from '@/components/GameContainer/GameContainer.module.scss'

interface Props {
  title?: string
  department?: string
  goal?: string
}

const GameContainer = (props: Props) => {
  return (
    <li className={styles.gameContainer}>
      <div className={styles.head}>
        {props.title}（{props.department}部門）
      </div>
      <p>{props.goal}</p>
    </li>
  )
}

export default GameContainer
