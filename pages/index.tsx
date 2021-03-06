import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { database, app } from '../lib/firebaseClient'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import Header from '../components/header';

const Home: NextPage = (data) => {
    return (
        <div>
            <Head>
                <title>Minecraft Plugin Store</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

           <main>
                <Header />
            </main>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const plugins = collection(database, 'plugins');
    const snapshot = await getDocs(plugins);
    const data = snapshot.docs.map(doc => doc.data());

    return { props: { data } }
}

export default Home;