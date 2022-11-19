import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from "../components/Footer";
import Button from "../components/Button";
import AllBlogs from "../components/AllBlogs";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title >Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20">
        <h1 className="font-heading text-6xl font-bold">
          A Bit {' '}
          <span className="text-purple-800 underline">
            Technical
          </span>
        </h1>

        <AllBlogs/>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
