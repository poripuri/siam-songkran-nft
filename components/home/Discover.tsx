import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import YouTube, { YouTubeProps } from 'react-youtube';

const Discover: React.FC = () => {

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1
    }
  };

  return (
    <div className="relative flex flex-col bg-[url('/image/siam-songkran-discover.jpg')] bg-[length:900px_auto]  lg:bg-[length:1200px_auto] xl:bg-[length:1700px_auto] 2xl:bg-contain bg-no-repeat bg-bottom">
      <div className="anchor -translate-y-16 lg:-translate-y-14 xl:-translate-y-10" id="what-is-ssk"></div>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-black"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between p-3 py-6 md:p-6 lg:p-10 xl:p-16">
            <div className="text-gold text-4xl font-bold font-display">
              #SSK <br />#SSK2024
            </div>
            <div className="md:text-end text-sm md:text-base">
              <p>LET&apos;S CELEBRATE WITH THAI NEW YEARAT</p>
              <p>SIAM SONGKRAN MUSIC FESTIVAL</p>
              <p>ON 12-15 APRIL 2024</p>
              <p>AT RCA CENTRAL PARK, BANGKOK, THAILAND.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mb-6 md:mb-10 aspect-video rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
          <YouTube
            videoId="75lGW9e1a4k"
            opts={videoOptions}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="anchor -translate-y-14 lg:-translate-y-16" id="lineup"></div>
          <div className="py-6 md:py-10">
            <h2 className="h2 text-center mb-4">Discover The SIAM Songkran Lineup</h2>
            <p className="text-2xl text-gold font-bold font-display text-center">12 APR - 15 APR 2024 </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center py-6 md:py-10">
            <div className="md:px-3 lg:px-4 xl:px-6">
              <Image
                width={529}
                height={326}
                src="/image/artist-primary1.png"
                alt="Artist of SIAM Songkran 2024"
                className="rounded-2xl inline-block w-full max-w-full"
              />
            </div>
            <div className="md:px-3 lg:px-4 xl:px-6">
              <Image
                width={568}
                height={727}
                src="/image/artist-primary2.png"
                alt="Artist of SIAM Songkran 2024"
                className="rounded-2xl inline-block w-full max-w-full"
              />
            </div>
          </div>
          <div className="relative">
            <div className="invisible xl:visible absolute left-0 top-0 -translate-x-full -translate-y-1/4">
              <div className="nft-back-light before:bottom-0 before:left-0 before:-translate-x-1/2 ">
                <div className="rotate-[30deg] opacity-0 xl:opacity-100 scale-90">
                  <Image
                    width={184}
                    height={362}
                    src="/image/monkey-right-fit.png"
                    alt="Monkey"
                  />
                </div>
              </div>
            </div>
            <div className="invisible xl:visible absolute right-0 bottom-0 translate-x-full">
              <div className="nft-back-light before:bottom-0 before:right-0 before:translate-x-1/3">
                <div className="-rotate-[15deg] opacity-0 xl:opacity-100 scale-90">
                  <Image
                    width={170}
                    height={408}
                    src="/image/yaksa-left-fit.png"
                    alt="Yaksa"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-5/6 xl:w-4/6 2xl:w-5/6 mx-auto">
              <Image
                width={955}
                height={568}
                src="/image/artist.png"
                alt="Artist of SIAM Songkran 2024"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Discover;