import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import Footer from '../components/Footer'
import reducer, {initialState} from '../components/reducer'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Commercity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header placeholder={undefined} />
      <Banner />
      <SmallCard />
     
        <Footer />
     
      
    </div>
  )
}

export default Home
