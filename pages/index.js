import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Range from '../components/range'
import Speed from '../components/speed'

import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sirius Future</title>
        <link rel="icon" href="/Sirius_Future_Logo.png" />
      </Head>

      <header className={styles.header}>
        <p>Тренажер «Поле зрения»</p>
        <img src='/Sirius_Future_Full_Logo.png' className={styles.fullLogo}></img>
      </header>

      <main className={styles.main}>

          <div className={styles.selectionBlock}>
            <Range label='Сколько слов' min={1} max={10} step={1} value={6} name='count_word'/>
          </div>

          <div className={styles.selectionBlock}>
            <Range label='Стартовое расстояние' min={5} max={40} step={5} value={25} name='distance'/>
          </div>

          <div className={styles.selectionBlock}>
            <Range label='Сколько букв в словах' min={3} max={12} step={1} value={8} name='count_letters'/>
          </div>

          <div className={styles.selectionBlock}>
            <Range label='Увеличение расстояния' min={5} max={40} step={5} value={25} name='inc_distance'/>
          </div>

          <div className={styles.selectionBlock}>
            <Speed/>
          </div>

          <div className={styles.selectionBlock, styles.start}>
            <Link href='/game'><button className={styles.startButton}>Старт</button></Link>
          </div>
        


      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
