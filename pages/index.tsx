import React, { useEffect } from 'react';
import type { NextPage } from "next";
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from "../components/Header";
import Mint from "../components/home/Mint";
import Discover from "../components/home/Discover";
import Process from "../components/home/Process"
import NFT from "../components/home/NFT"
import Benefit from "../components/home/Benefit"
import PartnerAndFAQ from "../components/home/PartnerAndFAQ"
import MintPop from "../components/home/MintPop"

const Hero = dynamic(() => import('../components/home/Hero'), {
  ssr: false,
})


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>SIAM SONGKRAN NFT</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Mint />
        <Discover />
        <Process />
        <NFT />
        <Benefit />
        <PartnerAndFAQ />
        <MintPop />
      </main>
    </>
  );
};

export default Home;
