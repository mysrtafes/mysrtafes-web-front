import styles from '@/components/Index/FirstView/FirstView.module.scss'
import React, {useState} from "react"
import Image from 'next/image'
import GreenButton from '@/components/Button/GreenButton'

const FirstView = () => {
  return (
    <div className={styles.inner}>
        <div className={styles.firstView} id="first-view">
            <div className={styles.innerBox}>
                <p className={styles.eventHoldingPeriod}>2022年6月17日(金)～7月10日(日)</p>
                <p className={styles.eventTitle}>チャレンジダンジョン！</p>
                <p className={styles.eventApplicationPeriod}>応募期間：2022年6月17日(金)～7月10日(日)</p>
                <GreenButton text="応募はこちら" href="/show"/>
            </div>
        </div>
    </div>      
  )
}

export default FirstView
