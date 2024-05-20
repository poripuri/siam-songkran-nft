import React, { useEffect, useState } from 'react';
import {
  ConnectWallet,
  useAddress,
  useChain,
  useContract,
  useContractRead,
  useContractWrite,
  useSwitchChain
} from '@thirdweb-dev/react';
import Image from 'next/image';
import {MinusCircleFillIcon, CheckCircleFillIcon, OpenseaIcon} from '../common/icons';
import NftABI from "../../abis/nft.json";
import { nftAddress } from "../../data/Address";
import { ethers } from "ethers";
import toast, { Toaster } from 'react-hot-toast';
import NFTData from "../../data/NFT";
import Link from "next/link";

const mintSteps = [
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
    date: "Feb 3,8 PM - Feb 4,8 PM (UTC+8)"
  },*/
]

const shortenAddress = (address: string) => {
  return `${address.slice(0, 4)}....${address.slice(-4)}`;
};

export default function Mint() {

  const [step, setStep] = useState(0)
  const address = useAddress();
  const shortenedAddress = address && shortenAddress(address);
  const chain = useChain();
  const switchChain = useSwitchChain();

  // NFT Contract
  const { contract: nftContract, isLoading: isNFTLoading } =
    useContract(nftAddress, NftABI);

  // Read Total Minted Amount
  const { data: mintedAmount, refetch: refetchMintedAmount, isLoading: isMintedAmountLoading } = useContractRead(
    nftContract,
    "totalSupply",
    []
  );

  // Read Account Minted Amount
  const { data: mintedWallet, refetch: refetchMintedWallet, isLoading: isMintedWalletLoading } = useContractRead(
    nftContract,
    "mintedWallet",
    [address]
  );

  // Read Account Token ID Holding
  const { data: holdingWallet, refetch: refetchHoldingWallet, isLoading: isHoldingWalletLoading } = useContractRead(
    nftContract,
    "balanceTokensOf",
    [address]
  );

  // Read Contributors List
  const { data: contributors, refetch: refetchContributors, isLoading: isContributorsLoading } = useContractRead(
    nftContract,
    "contributorsList",
    []
  );

  // Read Whitelist Amount
  const { data: whitelist, refetch: refetchWLWallet, isLoading: isWLLoading } = useContractRead(
    nftContract,
    "whitelist",
    [address]
  );

  const {
    mutateAsync: mint,
    isLoading: mintLoading,
    error: mintError,
  } = useContractWrite(nftContract, "mint");

  // Push Mint
  const handleMint = async () => {
    const amountInEther = ethers.utils.parseUnits(
      "0.049",
      "ether"
    );
    const gasLimit = 350000;
    const mintAction = await mint({
      args: [],
      overrides: {
        value: amountInEther,
        gasLimit: gasLimit
      },
    });
    if (mintAction && mintAction.receipt.status === 1) {
      toast.success('Successfully Mint!')
    } else {
      toast.error('Something went wrong!')
    }
  };

  const {
    mutateAsync: openBox,
    isLoading: openBoxLoading,
    error: openBoxError,
  } = useContractWrite(nftContract, "openBox");

  // Push Reveal
  const handleOpenBox = async (tokenId: number) => {
    const gasLimit = 350000;
    const openBoxAction = await openBox({
      args: [tokenId],
      overrides: {
        gasLimit: gasLimit
      },
    });
    if (openBoxAction && openBoxAction.receipt.status === 1) {
      toast.success('Successfully Reveal!')
    } else {
      toast.error('Something went wrong!')
    }
  };

  const totalMintedAmount = mintedAmount ? Number(ethers.utils.formatUnits(mintedAmount, 0)) : 0;
  const accountMintedAmount = mintedWallet ? Number(ethers.utils.formatUnits(mintedWallet, 0)) : 0;
  const isWhitelisted = whitelist ? whitelist : false;
  const myHolding = holdingWallet ? holdingWallet[0].map((obj: any, index: number) => ({
    tokenId: Number(ethers.utils.formatUnits(obj, 0)),
    typeId: Number(ethers.utils.formatUnits(holdingWallet[1][index], 0))
  })) : [];
  const contributorList = contributors ? contributors.map((obj: any, index: number) => ({
    address: obj,
  })) : [];

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
  }, [currentTime]);

  return (
    <div className="relative z-10 -mt-10 pb-10 lg:pb-20">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="anchor -translate-y-20 md:-translate-y-24" id="mint"></div>
      <div className="container">
        <div className="grid gap-4 lg:gap-6 grid-col-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-4 lg:gap-6 grid-col-1">
              <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
                <div className="h-full w-full p-4 md:p-5 xl:p-6 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
                  <div className="flex flex-col md:flex-row gap-6 xl:gap-8 mb-6">
                    <div className="w-full md:max-w-[220px] flex-shrink-0">
                      <Image
                        width={512}
                        height={512}
                        src="/image/mint-nft.png"
                        alt="Mint NFT"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-primary text-3xl xl:text-[34px] font-display uppercase font-bold mb-6">Mint Your NFT</h3>
                      <p className="uppercase">Total offering: 300</p>
                      <p className="uppercase">Price: 0.049 ETH</p>
                      <p className="uppercase">Max mint per address: 1</p>
                    </div>
                  </div>
                  <div className="mb-3 p-5 flex flex-col rounded-xl bg-gradient-to-b from-[#A5764D]/20 via-[#F5E3C9]/20 to-[#A5764D]/20">
                    <div className="flex gap-4 flex-col lg:flex-row justify-between">
                      {address ?
                        chain && chain.chainId !== Number(process.env.NEXT_PUBLIC_CHAIN_ID) ? (
                          <>
                            <p className="text-sm xl:text-base">Please change to Optimism Chain</p>
                            <button
                              className="btn-primary"
                              onClick={() => switchChain(Number(process.env.NEXT_PUBLIC_CHAIN_ID))}
                            >
                              Switch to Optimism Chain
                            </button>
                          </>
                        ) : (
                          currentTime >= mintingTime ? (
                            isWhitelisted || true ? (
                              accountMintedAmount === 0 ? (
                                <>
                                  <p className="text-sm xl:text-base"></p>
                                  <button
                                    className="btn-primary"
                                    onClick={() => { handleMint() }}
                                    disabled={mintLoading || totalMintedAmount == 300}
                                  >
                                    {mintLoading ? 'Minting...' : totalMintedAmount == 300 ? 'Mint is Over' : 'Mint Now'}
                                  </button>
                                  <p className="text-sm xl:text-base"></p>
                                </>
                              ) : (
                                <>
                                  <p className="text-sm xl:text-base">You already minted the NFT. You can check your NFT at the below.
                                    The NFT will be able to reveal at the final stage.</p>
                                  <button
                                    className="btn-primary" disabled>
                                    Minted
                                  </button>
                                </>
                              )
                            ) : (
                              <>
                                <p className="text-sm xl:text-base">You are not in the whitelist. Please wait until the public round.</p>
                                <button
                                  className="btn-primary" disabled>
                                  Not Whitelisted
                                </button>
                              </>
                            )
                          ) : (
                            <>
                              <p className="text-sm xl:text-base">The mint has not started yet.</p>
                              <button
                                className="btn-primary" disabled>
                                Waiting
                              </button>
                            </>
                          )
                        ) : (
                            <>
                              <p className="text-sm xl:text-base">Please connect your wallet</p>
                              <ConnectWallet
                                className="btn-primary"
                                btnTitle="Connect Wallet"
                                detailsBtn={() => {
                                  return (
                                    <button
                                      className="btn-primary">
                                      {shortenedAddress}
                                    </button>
                                  );
                                }}
                              />
                          </>
                        )}
                    </div>
                    {address &&
                        chain && chain.chainId == Number(process.env.NEXT_PUBLIC_CHAIN_ID) && myHolding.length > 0 && (
                        <div className="flex flex-wrap justify-center">
                          {myHolding.map((item: any, index: number) => (
                            <div key={index} className="max-w-72 lg:max-w-64 xl:max-w-72 flex flex-col mt-6 mx-auto">
                              <Image
                              width={512}
                              height={512}
                              src={NFTData.find((obj) => obj.id === item.typeId)?.image ?? ''}
                              alt="NFT"
                              className="rounded-xl mb-3"
                              />
                              <div className="text-center">
                                <h5 className="font-display font-bold text-lg mb-3">Token ID : {item.tokenId}</h5>
                                <h5 className="font-display font-bold text-lg mb-3">Name : {NFTData.find((obj) => obj.id === item.typeId)?.name ?? ''}</h5>
                                <button
                                  className="btn-primary uppercase min-w-32"
                                  disabled={!(currentTime >= openTime) || item.typeId != 0}
                                  onClick={() => {handleOpenBox(item.tokenId)}}
                                >
                                Reveal
                                </button>
                                <Link href={`https://opensea.io/assets/optimism/${nftAddress}/${item.tokenId}`} target={'_blank'}>
                                  <button
                                      className="btn-primary uppercase text-sm min-w-32 mx-2"
                                  >
                                    View on <OpenseaIcon className="text-2xl" />
                                  </button>
                                </Link>
                              </div>
                            </div>
                          ))}
                    </div>
                    )}
                  </div>
                  <p className="text-xs md:text-sm">SIAM SONGKRAN NFT Smart Contract: {nftAddress}</p>
                </div>
              </div>
              <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
                <div className="h-full w-full p-4 md:p-5 xl:p-6 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
                  <h3 className="text-primary text-lg font-display uppercase font-bold mb-3">Featuring 300 Limited NFTS (6 Rare Golden Pieces):</h3>
                  <ul className="list-disc ps-6">
                    <li>Garuda (Festival Guardian)</li>
                    <li>Nakas (Spirit Guide)</li>
                    <li>Vessavana (Embodiment of Energy)</li>
                    <li>Phali (Ambassador of Joy)</li>
                    <li>Kumar Thong (Embodiment of Protection and Food Fortune)</li>
                    <li>Ganesha (Symbol of Wisdom and Guidance)</li>
                  </ul>
                  <h3 className="text-primary text-lg font-display uppercase font-bold mt-2 mb-1">6 Golden Piece (Ultra Rare)</h3>
                  <h3 className="text-primary text-lg font-display uppercase font-bold mb-3">50 Each Style</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="grid gap-4 lg:gap-6 grid-col-1">
              <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
                <div className="h-full w-full p-4 md:p-5 xl:p-6 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
                  <h3 className="text-primary text-lg font-display uppercase font-bold mb-3">REAL TIME NUMBER</h3>
                  <p className="text-2xl uppercase italic"><span className="text-4xl font-bold me-4">{isMintedAmountLoading ? <span className="animate-pulse inline-block h-7 w-16 bg-white rounded-full"></span> : currentTime < mintingTime ? 0 : totalMintedAmount} / 300</span>Pieces</p>
                </div>
              </div>
              <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
                <div className="h-full w-full p-4 md:p-5 xl:p-6 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
                  <h3 className="text-primary text-lg font-display uppercase font-bold mb-3">Mint Your NFT</h3>
                  <div className="flex flex-col gap-3">
                    {mintSteps.map((data, index) => (
                      <div className={`flex items-center gap-2 xl:gap-4 ${data.id !== step ? 'text-white opacity-50' : 'text-primary'}`} key={index}>
                        <div className={`mint-step min-h-12 ${data.id !== step ? 'after:border-white' : ' after:border-primary'}`}>
                          {data.id !== step ? <MinusCircleFillIcon className="text-xl z-10" /> : <CheckCircleFillIcon className="text-xl z-10" />}
                        </div>
                        <div className="flex flex-col">
                          <h6 className="uppercase font-normal">{data.title}</h6>
                          <p className="text-sm xl:text-base">{data.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-full w-full p-px bg-gradient-to-r from-secondary via-[#F5E3C9] to-secondary rounded-[10px]">
                <div className="h-full w-full p-4 md:p-5 xl:p-6 rounded-[9px] bg-[url(/image/box-bg.svg)] bg-no-repeat bg-cover">
                  <h3 className="text-primary text-lg font-display uppercase font-bold mb-3">Deposited User</h3>
                  <ul className="flex flex-col gap-2 mb-2">
                    {
                      contributorList.length > 0 && currentTime >= mintingTime ? (
                        contributorList.slice(-10).reverse().map((data: any, index: number) => (
                          <li className="flex justify-between" key={index}>
                            <span>{shortenAddress(data.address)}</span><span>0.049 ETH</span>
                          </li>
                        ))
                      ) : (
                        <li className="flex justify-between">
                          <span>No deposit yet</span>
                        </li>
                      )
                    }
                    {/*<li className="flex justify-between">
                      <span>0x135D…3C3D</span><span>0.19527 ETH</span>
                    </li>
                    <li className="flex justify-between">
                      <span>0x512f…c9c7</span><span>0.19527 ETH</span>
                    </li>
                    <li className="flex justify-between">
                      <span>0xDfc0…0984</span><span>0.19527 ETH</span>
                    </li>
                    <li className="flex justify-between">
                      <span>0x48DF…af22</span><span>0.19527 ETH</span>
                    </li>
                    <li className="flex justify-between">
                      <span>0x3697…1E05</span><span>0.19527 ETH</span>
                    </li>
                    <li className="flex justify-between">
                      <span>0xFAD8…44Dd</span><span>0.19527 ETH</span>
                    </li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}