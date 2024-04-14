import { ethers, toBigInt } from 'ethers';
import { IPledge } from '../../client/src/types';

export function addPercentage(value: bigint, percentage: number): bigint {
 const bps = 10000 * percentage;
 const bpsAsBigInt = toBigInt(bps);
 return value + ((bpsAsBigInt * value / toBigInt(10000))); 
}

export function generateRandomNFTs(length: number): IPledge.MintParamsStruct[] {
 return Array.from({ length }, () => generateRandomNFT());
}

export function generateRandomNFT(): IPledge.MintParamsStruct {
 return {
  gradientOne: getRandomColor(getRandomSeed()),
  gradientTwo: getRandomColor(getRandomSeed()),
  diameter: getRandomDiameter(getRandomSeed()),
 };
}

function getRandomSeed(): number {
 const randomBytes = ethers.randomBytes(4);
 const seed = ethers.hexlify(randomBytes);
 return parseInt(seed.slice(2), 16);
}

function getRandomColor(seed: number): string {
 const random = (seed % 16777216).toString(16); // Generate a random number between 0 and 16777215 and convert it to hexadecimal
 return `#${random.padStart(6, '0')}`; // Pad the random number with leading zeros and prepend with '#'
}

function getRandomDiameter(seed: number): number {
 const random = seed % 101; // Generate a random number between 0 and 100
 return random + 50; // Add 50 to the random number to get a diameter between 50 and 150
}