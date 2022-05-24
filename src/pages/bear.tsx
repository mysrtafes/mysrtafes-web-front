import Header from '@/components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <p>bearだよ</p>
      <p>
        <Link href="/">
          <a>top</a>
        </Link>
      </p>
    </>
  )
}

export default Home
