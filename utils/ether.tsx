import {ethers} from "ethers";

export const formatUnits = (value: any, units: number) => Number(ethers.utils.formatUnits(value || 0, units));