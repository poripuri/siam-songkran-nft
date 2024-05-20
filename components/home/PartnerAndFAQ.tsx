import Link from 'next/link'
import Image from 'next/image';
import { OpenseaIcon, FacebookIcon, LineIcon, DiscordIcon } from '../common/icons';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const social = [
  {
    icon: <OpenseaIcon className="text-3xl md:text-4xl" />,
    title: "Opensea",
    url: "https://opensea.io/collection/ongthep"
  },
  {
    icon: <FacebookIcon className="text-3xl md:text-4xl" />,
    title: "Facebook",
    url: "https://www.facebook.com/siamsongkranmusicfestival"
  },
  {
    icon: <InstagramIcon className="text-3xl md:text-4xl" />,
    title: "Instagram",
    url: "https://www.instagram.com/siamsongkran"
  },
  {
    icon: <YouTubeIcon className="text-3xl md:text-4xl" />,
    title: "Youtube",
    url: "https://www.youtube.com/@siamsongkranmusicfestival486"
  },
  {
    icon: <LineIcon className="text-3xl md:text-4xl" />,
    title: "Line",
    url: "https://line.me/R/ti/p/@siamsongkran"
  },
  {
    icon: <DiscordIcon className="text-3xl md:text-4xl" />,
    title: "Discord",
    url: "https://discord.gg/TGsSdVnky2"
  },
]

const faqs = [
  {
    header: "When is the siam songkran music festival 2024?",
    content: "The festival is held from April 12th to April 15th, 2024"
  },
  {
    header: "Where is the event venue?",
    content: "The event is at RCA Central Park, near BRAVO BKK (SHOW DC)."
  },
  {
    header: "Where is can i buy tickets?",
    content: "Tickets can be purchased at http://www.siamsongkran.info and Ticketing Partners Megatix, Ticketmelon."
  },
  {
    header: "who is in the lineup?",
    content: "MARTIN GARRIX, TIESTO, ZEDD, STEVE AOKI, VINI VICI, and many more."
  },
  {
    header: "what types of tickets are available for sale?",
    content: "4 Types of tickets:\n" +
        "\n" +
        "GA 3 DAY PASS.\n" +
        "GA 1 DAY PASS.\n" +
        "VIP 3 DAY PASS.\n" +
        "VIP 1 DAY PASS."
  },
  {
    header: "how does the vip ticket differ from ga?",
    content: "VIP tickets with special privileges such as\n" +
        "\n" +
        "FAST LANE\n" +
        "DRY ZONE\n" +
        "PRIVATE ZONE\n" +
        "PRIVATE BAR\n" +
        "PRIVATE TOILET"
  },
  {
    header: "Does vip have tables?",
    content: "VIP is a standing area, there are no tables."
  },
]

export default function PartnerAndFAQ() {

  return (
    <div className="py-10 md:py-16 lg:py-20 relative bg-[url('/image/galaxy-full.jpg')] bg-cover xl:bg-[length:100%_auto] bg-top bg-no-repeat">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="h2 text-center uppercase mb-4">Siam Songkran Music Festival NFT Collection</h2>
        <div className="flex gap-4 items-center justify-center mb-6 md:mb-10">
          <span>Incubated by</span>
          <Link href={'https://dtcgroup.io'} target={'_blank'}>
            <Image
              width={180}
              height={57}
              src="/image/dtc-group-h.svg"
              alt="DTC Group"
            />
          </Link>
        </div>

        <Image
          width={528}
          height={314}
          src="/image/sponsor.png"
          alt="SIAM Songkran Partner"
        />
        <Image
          width={528}
          height={314}
          src="/image/partner.png"
          alt="SIAM Songkran Partner"
        />
      </div>
      {/* FAQ */}
      <div className="container py-10 relative">
        <div className="invisible xl:visible absolute left-0 top-0 -translate-x-[20%] -translate-y-[15%]">
          <div className="nft-back-light before:bottom-0 before:left-0 before:-translate-x-1/3 ">
            <div className="rotate-[20deg]">
              <Image
                width={168}
                height={387}
                src="/image/golden-boy-left-fit.png"
                alt="Golden Boy"
              />
            </div>
          </div>
        </div>
        <div className="invisible xl:visible absolute right-0 bottom-0 translate-x-[40%] translate-y-[45%]">
          <div className="nft-back-light before:top-0 before:left-0 before:-translate-x-1/6">
            <div className="rotate-[10deg]">
              <Image
                width={207}
                height={347}
                src="/image/ganesaa-right-fit.png"
                alt="Ganesaa"
              />
            </div>
          </div>
        </div>
        <h2 className="h2 text-center uppercase mb-6 md:mb-10">FAQ</h2>
        <Accordion className="faq-accordion">
          {faqs.map(({ header, content }, i) => (
            <AccordionItem
              header={header}
              key={i}
              initialEntered={i === 0 ? true : false}
            >
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Socail */}
      <div className="container py-5 lg:py-10">
        <ul className="flex items-center justify-between md:justify-center gap-0 md:gap-10 mb-10">
          {social.map((data, index) => (
            <li key={index}>
              <Link href={data.url} title={data.title} className="flex justify-center items-center p-1 transition text-primary hover:bg-primary/10 hover:backdrop-blur-md rounded-xl" >{data.icon}</Link>
            </li>
          ))}
        </ul>
        <p className="text-center uppercase text-sm md:text-base">SIAM Songkran Music Festival © 2023 - 2024 All Rights Reserved</p>
      </div>
    </div>
  );
}