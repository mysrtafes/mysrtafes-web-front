import styles from '@/components/Index/SpecialThanks/SpecialThanks.module.scss'
import React, {useState} from "react"

const SpecialThanks = () => {
  return (
    <div className={styles.specialThanks} id="special-thanks">
        <div className={styles.inner}>
            <h2 className={styles.h2}>主催・運営</h2>
            <div className={styles.ulFlex}>
                <ul>
                    <li>ポンズ</li>
                    <li>リヒト</li>
                    <li>うたたね</li>
                    <li>イカロす</li>
                    <li>ベア</li>
                    <li>モツ</li>
                </ul>
                <ul>                    
                    <li>クロム</li>
                    <li>ぴんぐち</li>
                    <li>sisuka</li>
                    <li>あーる</li>
                    <li>ぶたまん</li>
                    <li>ゆうさく</li>
                </ul>
                <ul>
                    <li>エクシーク</li>
                    <li>ファジー</li>
                    <li>fkdm</li>
                    <li>yagamuu</li>
                </ul>
                <ul>
                    <li>アジーン</li>
                    <li>イリィ</li>
                    <li>kajiro</li>
                    <li>ぼぶそん</li>
                    <li>ロック</li>
                </ul>
            </div>
        </div>
    </div>  
  )
}

export default SpecialThanks
