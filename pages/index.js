import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/home/Main'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Yafet | Full-Stack Developer</title>
            <meta name="description" content="I’m a Full-Stack web developer specializing in building (and occasionally designing) exceptional digital experiences." />
            <link rel="icon" href="/fav.png" />
        </Head>
        <Main />
    </div>
  )
}
