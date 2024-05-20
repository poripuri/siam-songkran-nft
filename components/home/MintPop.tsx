import { useState, useEffect } from 'react';
import { MinusCircleFillIcon, CheckCircleFillIcon } from '../common/icons';
import { Button } from 'react-scroll';

const steps = [
  {
    id: 1,
    title: "Whitelist Mint",
    date: "Apr 10, 12 PM - Apr 10, 1 PM (UTC)"
  },
  {
    id: 2,
    title: "Public Mint",
    date: "Apr 10, 1 PM - Apr 11, 12 PM (UTC)"
  },
  {
    id: 3,
    title: "Open Box",
    date: "Apr 11, 13 PM - (UTC)"
  },
  /*{
    id: 3,
    title: "Raffle and Airfrop",
    date: "Feb 3,8 PM - Feb 4,8 PM (UTC+7)"
  },*/
]

export default function MintPop() {

  const [step, setStep] = useState(0)
  const [showPop, setShowPop] = useState(1);

  const mintingTime = 1712750400000;
  const mintingPublicTime = 1712754000000;
  const openTime = 1712836800000;
  const currentTime = new Date().getTime();
  useEffect(() => {
    if (currentTime >= openTime) {
      setStep(3)
    } else if (currentTime >= mintingPublicTime) {
      setStep(2)
    } else if (currentTime >= mintingTime) {
      setStep(1)
    }
  },[currentTime]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowPop(0);
      }
      if (window.scrollY > 800) {
        setShowPop(2);
      }
      if (window.scrollY < 200) {
        setShowPop(1);
      }
      //console.log(showPop)
    };
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });

  return (
    <>
      <div className="md:h-[164px] xl:h-[88px]"></div>
      <div className={`${showPop === 1 ? 'is-show' : showPop === 2 ? 'is-last' : ''} mint-pop pt-0.5 bg-gradient-to-r from-[#A5764D] via-[#F5E3C9] to-[#A5764D] z-40`}>
        <div className="relative overflow-hidden bg-black after:content-normal after:absolute after:-top-2/3 after:left-0 after:h-full after:w-full after:bg-[#FCEB96] after:rounded-[100%] after:blur-3xl xl:after:blur-xl after:opacity-20">
          <div className="container max-w-7xl flex gap-6 flex-col xl:flex-row xl:justify-between">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              {steps.map((data, index) => (
                <div className={`flex items-center gap-4 ${data.id !== step ? 'text-white' : 'text-primary'}`} key={index}>
                  <div className={`mint-step min-h-12 ${data.id !== step ? 'after:border-white' : ' after:border-primary'}`}>
                    {data.id !== step ? <MinusCircleFillIcon className="z-10" /> : <CheckCircleFillIcon className="z-10" />}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h6 className="font-display font-bold uppercase">{data.title}</h6>
                    <p>{data.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="block text-center w-full xl:max-w-[230px]">
              <Button
                to={'mint'}
                spy={true}
                smooth={true}
                duration={500}
                className="btn-primary text-xl w-full max-w-[230px]"
              >MINT</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}