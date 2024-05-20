import Image from 'next/image'
import { Button, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Benefit() {
  return (
    <div>
      <div className="lg:hidden">
        <Image
          width={800}
          height={520}
          src="/image/perks-and-benefit.png"
          alt="Golden Boy"
        />
      </div>
      <div className="relative bg-[url('/image/bg-perks-and-benefit.jpg')] bg-right lg:bg-[length:1400px_auto] lg:bg-[left_30%_center] xl:bg-[length:1600px_auto] xl:bg-center 2xl:bg-cover">
        <div className="container py-10 xl:py-10 flex justify-center lg:justify-end">
          <div className="2xl:py-10 ps-8">
            <h2 className="h2 uppercase mb-4">NFT Holders <br />Perks & Benefit</h2>
            <ul className="list-disc mb-4 text-xl">
              <li>Physical Art Toy</li>
              <li>Free Drinks at Siam Songkran EDM Festival</li>
              <li>Access to VIP Lounge</li>
              <li>AUG - UNSEEN Music (Exclusive Benefit)</li>
              <li>Early Access to Version 2 NFT Collection</li>
              <li>Exclusive DJ Album Drops</li>
              <li>Future Airdrops</li>
              <li>Additional Benefits to Be Announced</li>
            </ul>
            <p className="mb-4">SPECIAL BENEFIT FOR GOLDEN HOLDERS</p>
            <Button
                to={'mint'}
                spy={true}
                smooth={true}
                duration={500}
                className="btn-primary min-w-40"
              >MINT</Button>
          </div>
        </div>
      </div>
    </div>
  );
}