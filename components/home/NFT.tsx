import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const nft = [
  {
    name: 'Garudar',
    description: "He is the festival's guardian. He danced the night away, his presence electrifying the crowds and reminding everyone of the magic that resided in the heart of music.",
    character: 'Festival Guardian',
    src: {
      nft: '/image/garuda.png',
      theme: '/image/garuda-theme.png',
      face: '/image/garuda-face.png',
    }
  },
  {
    name: 'Naga',
    description: "It became a legend, the festival's spirit guide, a symbol of connection and unity.",
    character: 'Festival Spirit Guide',
    src: {
      nft: '/image/naga.png',
      theme: '/image/naga-theme.png',
      face: '/image/naga-face.png',
    }
  },
  {
    name: 'Yaksa',
    description: "It became a legend, the festival's embodiment of raw energy, a bridge between the primal and the present.",
    character: 'Embodiment of Raw Energy',
    src: {
      nft: '/image/yaksa.png',
      theme: '/image/yaksa-theme.png',
      face: '/image/yaksa-face.png',
    }
  },
  {
    name: 'Ganessa',
    description: "He became a legend, the festival's symbol of wisdom and guidance, a bridge between the chaos and the calm.",
    character: "Festival's Symbol of Wisdom and Guidance",
    src: {
      nft: '/image/ganesaa.png',
      theme: '/image/ganesaa-theme.png',
      face: '/image/ganesaa-face.png',
    }
  },
  {
    name: 'Monkey',
    description: "He became a legend, the festival's ambassador of joy, a reminder that music could be a source of pure, unadulterated fun.",
    character: 'Ambassador of joy',
    src: {
      nft: '/image/monkey.png',
      theme: '/image/monkey-theme.png',
      face: '/image/monkey-face.png',
    }
  },
  {
    name: 'Golden Boy',
    description: "He became a legend, the festival's embodiment of protection and good fortune, a bridge between the physical and the spiritual.",
    character: 'Embodiment of Protection and Fortune',
    src: {
      nft: '/image/golden-boy.png',
      theme: '/image/golden-boy-theme.png',
      face: '/image/golden-boy-face.png',
    }
  },
]

export default function NFT() {

  return (
    <div className="relative pb-5 flex flex-col">
      <div className="anchor -translate-y-14 lg:-translate-y-10 xl:-translate-y-6" id="art-toy-nf"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black"></div>
      <div className="container relative z-20 mt-10 md:mb-10 lg:my-16 xl:my-20">
        <h2 className="h2 text-center mb-10 xl:mb-16 relative z-10">Discover The SIAM Songkran Lineup</h2>
        <div className="relative slide-nft">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-2/3 md:w-auto">
            <Image
              width={518}
              height={507}
              src="/image/glare.png"
              alt="SIAM SONGKRAN NFTNFT"
              priority={true}
            />
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.slide-nft-next',
              prevEl: '.slide-nft-prev',
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: '.pagination-nft',
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="relative z-10"
          >
            {nft.map((data, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="h-full w-full p-px lg:p-0.5 bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[16px]">
                  <div
                    className={`h-full w-full flex flex-col md:flex-row bg-black p-4 md:p-6 lg:p-8 xl:p-10 rounded-[15px] bg-[length:0] md:bg-contain bg-no-repeat bg-right`}
                    style={{ backgroundImage: `url(${data.src.face})` }}
                  >
                    <div className="w-full md:w-5/12 lg:w-1/3 mb-6 md:mb-0">
                      <Image
                        width={512}
                        height={512}
                        src={data.src.theme}
                        alt={data.name}
                        className="rounded-xl"
                      />
                    </div>
                    <div
                      className="flex-grow w-full md:w-7/12 lg:w-2/3 flex flex-col gap-3 md:gap-4 lg:gap-8 xl:gap-10 md:justify-center md:ps-10"
                    >
                      <h3 className="text-3xl font-display font-bold text-gold uppercase">{data.name}</h3>
                      <p>{data.description}</p>
                      <div><span className="text-primary">Characteristic:</span> {data.character}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev slide-nft-prev !left-0 xl:!left-auto xl:!right-full xl:me-6 font-bold px-6 py-6 hover:bg-white/10 hover:backdrop-blur-lg rounded-xl"></div>
          <div className="swiper-button-next slide-nft-next !right-0 xl:!left-full x:!right-auto xl:ms-6 font-bold px-6 py-6 hover:bg-white/10 hover:backdrop-blur-lg rounded-xl"></div>
          <div className="pagination-nft swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal py-6 xl:py-10 !bottom-auto !top-full z-10"></div>
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={1440}
              height={1314}
              src="/image/burry-ellipse.svg"
              alt="Burry Ellipse"
            />
          </div>
        </div>
      </div>
      <div className="container relative pt-16 md:pt-24 lg:pt-32 z-10">
        <div className="absolute bottom-0 left-0 scale-110 opacity-40">
          <Image
            width={1354}
            height={493}
            src="/image/bg-nft-cover.svg"
            alt="BG NFT Cover"
          />
        </div>
        <h3 className="text-xl md:text-4xl text-center relative z-10">BIGGEST COLLABORATION IN HISTORY</h3>
        <div className="flex relative">
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
            <Image
              width={1440}
              height={1100}
              src="/image/burry-ellipse2.svg"
              alt="Burry Ellipse"
            />
          </div>
          {nft.map((data, index) => (
            <div key={index} className="w-1/6 aspect-[1/2] relative">
              <Image
                fill
                src={data.src.nft}
                alt="SIAM SONGKRAN NFTNFT"
                className="object-contain object-bottom"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}