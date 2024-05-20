const addressConfig = {
    "10": {
        nftAddress: "0x6498ec434dbB689c1e4bdF6233841c495fC2b4bf",
    },
    "97": {
        nftAddress: "0x2F0B2F102E0bF18C59f21c04e1DECFB059654660",
    },
};
type ChainId = keyof typeof addressConfig;
const chainId: ChainId = (process.env.NEXT_PUBLIC_CHAIN_ID as ChainId) || "10";

export const { nftAddress } = addressConfig[chainId];