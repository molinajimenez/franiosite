import Head from 'next/head'
import Intro from '../components/Intro'
import NavBar from '../components/Navbar'
import Radar from '../components/Radar'
import Resume from '../components/Resume'
import Techs from '../components/Techs'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>franio.net</title>
        <meta name="description" content="Personal site for Francisco Molina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main className={styles.main}>
        <Intro></Intro>
        
      </main>
      <Techs />
      <Resume />
      <Radar/>
      <footer className={styles.footer}>
        <p>Made with ❤ using NextJS</p>
      </footer>
    </div>
  )
}
