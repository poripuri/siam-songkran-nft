import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {ConnectWallet, useAddress, useChain, useNetwork, useNetworkMismatch, useSwitchChain} from '@thirdweb-dev/react';
import { OpenseaIcon, FacebookIcon, LineIcon, DiscordIcon } from '../components/common/icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { handleClientScriptLoad } from 'next/script';
import { title } from 'process';
import { Button, animateScroll as scroll, scrollSpy } from 'react-scroll';
import networkData from '../data/Network';
import MenuToggle from '../components/widgets/MenuToggle';
import menu from '../utils/menu';

const shortenAddress = (address: string) => {
  return `${address.slice(0, 4)}....${address.slice(-4)}`;
};

const social = [
  {
    icon: <OpenseaIcon className="text-3xl" />,
    title: "Opensea",
    url: "https://opensea.io/collection/ongthep"
  },
  {
    icon: <TwitterIcon className="text-3xl" />,
    title: "Twitter",
    url: "https://twitter.com/SiamSongkran"
  },
  {
    icon: <InstagramIcon className="text-3xl" />,
    title: "Instagram",
    url: "https://www.instagram.com/siamsongkran"
  },
  {
    icon: <DiscordIcon className="text-3xl" />,
    title: "Discord",
    url: "https://discord.gg/TGsSdVnky2"
  },
]

const Header = () => {

  const address = useAddress();
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const shortenedAddress = address && shortenAddress(address);
  const chain = useChain();
  const switchChain = useSwitchChain();

  useEffect(() => {
    if (address && chain?.chainId && chain?.chainId !== Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      switchChain(Number(process.env.NEXT_PUBLIC_CHAIN_ID))
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error('Error switching chain:', error);
          });
    }
  }, [address, chain, switchChain]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 120)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
      <header className={`header ${sticky ? 'is-sticky' : ''}`}>
        <div className="container flex-grow flex items-center justify-between">
          <Link href="/" className="inline-block w-24 lg:hidden">
            <Image
              width={742}
              height={309}
              src="/image/logo-siam-songkran.png"
              alt="Siam Songkran"
            />
          </Link>
          <div className="hidden lg:flex flex-col z-20">
            <div
              className="flex justify-between items-center lg:hidden px-8 py-4 border-b border-black/10 dark:border-white/10">
              <h5 className="text-2xl font-bold text-primary font-display uppercase">Menu</h5>
              <button
                type="button"
                className="transition flex -me-3 hover:text-dark/80 dark:text-white/50 dark:hover:text-white/80"
                onClick={() => setShowMenu(false)}
              ><CloseIcon />
              </button>
            </div>
            <div className="py-4 px-3l lg:p-0 ">
              <ul className="navbar-nav">
                {menu.primary.map((menu, menuIndex) => (
                  <li className="nav-item" key={menuIndex}>
                    {menu.id !== 1 ? <Button
                      to={menu.url}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >{menu.title}</Button>
                      : <Link href={menu.url} className="nav-link">{menu.title}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <ul className="hidden xl:flex items-center gap-4">
              {social.map((data, index) => (
                <li key={index}>
                  <Link href={data.url} title={data.title} className="flex justify-center items-center p-2 transition text-primary hover:bg-primary/10 hover:backdrop-blur-md rounded-full" >{data.icon}</Link>
                </li>
              ))}
            </ul>
            <ConnectWallet
              className="btn-wallet"
              btnTitle="Connect Wallet"
              detailsBtn={() => {
                return (
                  <button
                    className="btn-wallet">
                    {shortenedAddress}
                  </button>
                );
              }}
            />
            <MenuToggle onClick={() => { setShowMenu(true) }} />
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${showMenu ? 'is-show_menu' : ''} flex lg:hidden flex-col shadow-lg z-[60]`}>
        <div
          className="flex justify-between items-center lg:hidden px-8 py-4 border-b border-black/10 dark:border-white/10">
          <h5 className="text-2xl font-bold text-primary font-display uppercase">Menu</h5>
          <button
            type="button"
            className="transition flex -me-3 hover:text-dark/80 dark:text-white/50 dark:hover:text-white/80"
            onClick={() => setShowMenu(false)}
          ><CloseIcon />
          </button>
        </div>
        <div className="flex-grow py-4 px-3l lg:p-0 ">
          <ul className="navbar-nav">
            {menu.primary.map((menu, menuIndex) => (
              <li className="nav-item" key={menuIndex}>
                {menu.id !== 1 ? <Button
                  to={menu.url}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={() => setShowMenu(false)}
                >{menu.title}</Button>
                  : <Link href={menu.url} className="nav-link">{menu.title}</Link>
                }
              </li>
            ))}

          </ul>
        </div>
        <div className="px-6 py-4">
          <ul className="flex items-center justify-center gap-2">
            {social.map((data, index) => (
              <li key={index}>
                <Link href={data.url} title={data.title} className="flex justify-center items-center p-2 transition text-primary hover:bg-primary/10 hover:backdrop-blur-md rounded-full" >{data.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showMenu ? (
        <div
          className="fixed left-0 top-0 w-screen h-screen bg-black/25 z-[55] xl:hidden"
          onClick={() => setShowMenu(false)}
        ></div>) : null}
    </>
  );
}

export default Header;