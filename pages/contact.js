import Head from 'next/head'
import Card from '../components/Card'
import Contacts from '../components/Contacts'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Contact() {
    const desc = "I'm so happy you want to contact me! Please find in the logos below via which service you want to contact me, if I don't reply in a business day, perhaps I'm busy! If that happens, please contact me again 😀."
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact me!</title>
                <meta name="description" content="Contact Francisco Molina" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <main className={styles.main}>
                <Card title={'Contact me'} txt={desc}></Card>
                <Contacts></Contacts>
            </main>
            
            <footer className={styles.footer}>
                <p>Made with ❤ using NextJS</p>
            </footer>
        </div>
    )
}
