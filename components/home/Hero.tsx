import { useState, useEffect } from 'react'
import Image from 'next/image';
import Countdown, { zeroPad } from "react-countdown";
import { Button, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu from '../../utils/menu';

export default function Hero() {

  // const [start] = useState('2024-04-04T18:00:00+07:00');
  const [start] = useState('2024-04-10T19:00:00+07:00');

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <div className="text-6xl font-display font-bold text-center text-primary uppercase [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-black/50">Started</div>;
    } else {
      return (
        <span className="flex font-display text-2xl md:text-4xl font-bold text-white [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-black/50 leading-snug">
          <span className="text-center drop-shadow">{zeroPad(days)}<br />Days</span>
          <span className="p-2">:</span>
          <span className="text-center drop-shadow">{zeroPad(hours)}<br />HRS</span>
          <span className="p-2">:</span>
          <span className="text-center drop-shadow">{zeroPad(minutes)}<br />MINS</span>
          <span className="p-2">:</span>
          <span className="text-center drop-shadow">{zeroPad(seconds)}<br />SECS</span>
        </span>
      );
    }
  };

  return (
    <div className="relative xl:min-h-[105vh] flex items-end bg-[url('/image/siam-songkran-edm.jpg')] bg-cover bg-center">
      <div className="absolute left-[14%] 2xl:left-[16%] top-[22%] 2xl:top-[23%]">
        <div className=" invisible xl:visible opacity-0 xl:opacity-100 scale-90 2xl:scale-100 rotate-[-20deg] ">
          <Image
            width={147}
            height={249}
            src="/image/garuda-right-fit.png"
            alt="Garuda"
          />
        </div>
      </div>
      <div className="absolute top-[19%] 2xl:top-[23%] right-[4%] 2xl:right-[12%]">
        <div className=" invisible xl:visible opacity-0 xl:opacity-100 scale-90 2xl:scale-100 mix-blend-luminosity">
          <Image
            width={247}
            height={280}
            src="/image/artist1.png"
            alt="Artist"
          />
        </div>
      </div>
      <div className="absolute left-[8%] 2xl:left-[15%] bottom-[18%]">
        <div className=" invisible xl:visible opacity-0 xl:opacity-100 scale-90 2xl:scale-100 mix-blend-luminosity">
          <Image
            width={189}
            height={248}
            src="/image/artist2.png"
            alt="Artist"
          />
        </div>
      </div>
      <div className="absolute right-[10%] 2xl:right-[13%] bottom-[15%]">
        <div className=" invisible xl:visible opacity-0 xl:opacity-100 scale-90 2xl:scale-100 rotate-[10deg] ">
          <Image
            width={128}
            height={265}
            src="/image/naga-left-fit.png"
            alt="Naga"
          />
        </div>
      </div>
      <div className="container flex flex-col pt-[80vw] pb-[20vw] md:pt-[60vw] md:pb-[15vw] xl:py-[22vh]">
        <div className="flex justify-center py-8">
          <div className="relative before:content-normal before:absolute before:w-full before:h-[125%] before:bg-black before:left-1/2 before:top-0 before:-translate-x-1/2 before:rounded-[100%] before:scale-150 before:blur-[28px]">
            <Countdown
              date={start}
              renderer={renderer}
            />
          </div>
        </div>
        <div className="text-center relative z-10">
          <Button
            to={'mint'}
            spy={true}
            smooth={true}
            duration={500}
            className="btn-primary text-xl min-w-40"
          >MINT</Button>
          <p className="text-white uppercase mt-8">Welcome to #SIAM2024 #SSK2024 #SIAMSONGKRAN</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}