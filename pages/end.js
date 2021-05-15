import Head from 'next/head'
import styles from '../styles/End.module.css'
import Link from 'next/link'


export default function End() {
    return(
        <>
        <Head>
            <title>Sirius Future</title>
            <link rel="icon" href="/Sirius_Future_Logo.png" />
        </Head>
        <header className={styles.header}>
            <Link href='/'><img src='/Sirius_Future_Full_Logo.png' className={styles.fullLogo}></img></Link>
            
        </header>
        <main>
            <img src='/SF_1s.png' className={styles.endImg}></img>
        </main>
        </>
    );
}