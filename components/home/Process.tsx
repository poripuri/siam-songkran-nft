import Link from 'next/link';
import { DiscordIcon } from '../common/icons';

export default function Process() {
  return (
    <div className="relative py-4 z-30 mt-10 xl:mt-20">
      <div className="container">
        <h2 className="h2 text-center uppercase mb-10 xl:mb-16">Minting process</h2>
        <div className="grid gap-4 md:gap-6 xl:gap-10 grid-cols-1 md:grid-cols-4 relative after:content-normal after:absolute md:after:w-full after:h-full md:after:h-0 after:border-r md:after:border-b after:border-primary after:border-dashed  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-z-[1]">
          <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
            <div className="h-full w-full text-center py-6 px-2 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
              <div className="text-4xl font-display font-bold mb-3"><span className="drop-shadow">1</span></div>
              <h3 className="mb-3 text-xl lg:text-2xl leading-tight">Get Whitelisted <br /></h3>
              <p>Click here to gain privileged access through our Discord channel.</p>
              <Link href={'https://discord.gg/TGsSdVnky2'} className="text-primary" >
                <DiscordIcon className="text-4xl" />
              </Link>
            </div>
          </div>
          <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
            <div className="h-full w-full text-center py-6 px-2 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
              <div className="text-4xl font-display font-bold mb-3"><span className="drop-shadow">2</span></div>
              <h3 className="mb-3 text-xl lg:text-2xl leading-tight">Await Your Moment</h3>
              <p>Patience is key.  Your time to shine is just around the corner.</p>
            </div>
          </div>
          <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
            <div className="h-full w-full text-center py-6 px-2 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
              <div className="text-4xl font-display font-bold mb-3"><span className="drop-shadow">3</span></div>
              <h3 className="mb-3 text-xl lg:text-2xl leading-tight">Secure Your Connection</h3>
              <p>Connect your wallet seamlessly for a secure and integrated experience.</p>
            </div>
          </div>
          <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
            <div className="h-full w-full text-center py-6 px-2 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
              <div className="text-4xl font-display font-bold mb-3"><span className="drop-shadow">4</span></div>
              <h3 className="mb-3 text-xl lg:text-2xl leading-tight">Initiate Your Minting Process</h3>
              <p>Begin the journey of minting with ease and confidence.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}