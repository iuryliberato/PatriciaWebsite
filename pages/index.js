import Head from 'next/head'
import Image from 'next/image'

import NavBar from "../components/NavBar"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { GlobalStyles } from "../components/GlobalStyles"


export default function Home() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Main>
      </Main>
      <Footer />
    </>
  )
}



