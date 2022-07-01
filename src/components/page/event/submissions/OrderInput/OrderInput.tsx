import styles from './OrderInput.module.scss'
interface Props {
  order: string
  Asc: () => void
  Desc: () => void
}

const OrderInput = (props: Props) => {
  const { order, Asc, Desc } = props
  return (
    <div className={styles.order}>
      <button
        name="order"
        value="asc"
        onClick={Asc}
        className={order === 'asc' ? styles.selected : ''}
      >
        応募の古い順
      </button>

      <button
        name="order"
        value="desc"
        onClick={Desc}
        className={order === 'desc' ? styles.selected : ''}
      >
        応募の新しい順
      </button>
    </div>
  )
}
export default OrderInput
