import styles from '@/components/page/event/submissions/SearchBox/InputBox/InputBox.module.scss'
import { Challenger } from '@prisma/client'
import { useEffect, useState } from 'react'

interface Props {
  challengers: Challenger[]
  setChallengers: (challengers: Challenger[]) => void
}

const InputBox = (props: Props) => {
  const { challengers, setChallengers } = props
  const [search, setSearch] = useState('')

  useEffect(() => {
    const searchChallengers = challengers.filter(challenger => {
      if (
        challenger.Name.includes(search) ||
        challenger.Game1.includes(search) ||
        challenger.Game2?.includes(search) ||
        challenger.Game3?.includes(search)
      ) {
        return true
      }
    })
    setChallengers(searchChallengers)
  }, [search])

  const changeText = (e: any) => {
    setSearch(e.target.value)
  }
  return (
    <div className={styles.inputBox}>
      <input type="text" placeholder="ゲームまたはユーザー名で検索" onChange={changeText} />
    </div>
  )
}

export default InputBox
