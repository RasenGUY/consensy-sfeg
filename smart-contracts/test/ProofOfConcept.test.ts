import { expect } from 'chai';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';
import { ethers } from 'hardhat';
import { Contract, parseEther, toBigInt, ZeroAddress } from 'ethers';
import { 
  Borrow,
  Borrow__factory,
  Pledge,
  Pledge__factory,
  IPledge,
} from '../../client/src/types';

export type RequestInput = (string | number | bigint)[]

describe("Proof Of Concept", () => {

  // contracts
  let borrow: Borrow,
      pledge: Pledge;
      
  // factories
  let borrowFactory: Borrow__factory,
      pledgeFactory: Pledge__factory;


  // accounts
  let signers: HardhatEthersSigner[],
      coinbase: HardhatEthersSigner,
      alice: HardhatEthersSigner,
      bob: HardhatEthersSigner;
  
  let aliceNFTs: IPledge.MintParamsStruct[], bobNFTs: IPledge.MintParamsStruct[];

  before(async () => {
    // accounts setup
    signers = await ethers.getSigners();
    [coinbase, alice, bob, ...signers] = signers;
    
    // factory setup
    borrowFactory = new Borrow__factory(coinbase);
    pledgeFactory = new Pledge__factory(coinbase);
    
    
    pledge = await pledgeFactory.deploy('Pledge', 'PLD');
    await pledge.waitForDeployment();

    // deploy contracts
    borrow = await borrowFactory.deploy(pledge.target);
    await borrow.waitForDeployment();
    
    // mint some nfts to people
    aliceNFTs = [
      {
        gradientOne: 'green',
        gradientTwo: 'blue',
        diameter: BigInt(Math.floor(Math.random() * 256))
      },
      {
        gradientOne: 'gray',
        gradientTwo: 'yellow',
        diameter: BigInt(Math.floor(Math.random() * 256))
      },
      {
        gradientOne: 'black',
        gradientTwo: 'white',
        diameter: BigInt(Math.floor(Math.random() * 256))
      }
    ];

    bobNFTs = [
      {
        gradientOne: 'purple',
        gradientTwo: 'black',
        diameter: BigInt(Math.floor(Math.random() * 256))
      },
      {
        gradientOne: 'red',
        gradientTwo: 'green',
        diameter: BigInt(Math.floor(Math.random() * 256))
      },
      {
        gradientOne: 'green',
        gradientTwo: 'gray',
        diameter: BigInt(Math.floor(Math.random() * 256))
      }
    ];
    await pledge.connect(coinbase).mintMany(alice.address, aliceNFTs);
    await pledge.connect(coinbase).mintMany(bob.address, bobNFTs);
  });

  describe("Pledge", () => {
    it('should mint the nfts and return the correct nft count', async () => {
      const nftCount = await pledge.balanceOf(alice.address);
      expect(nftCount).to.equal(3);
    });
    it('should return the correct nft data', async () => {
      const controlNft = aliceNFTs[0];
      const nft = await pledge.getNFT(0);
      expect(nft.gradientOne).to.equal(controlNft.gradientOne);
      expect(nft.gradientTwo).to.equal(controlNft.gradientTwo);
      expect(nft.diameter).to.equal(controlNft.diameter);
    });
    it('should return the correct total supply', async () => {
      expect((await pledge.getNFTs()).length).length.to.equal(6);
    })
  });

  describe("Borrow", () => {
    it('should throw if there is not sufficient eth in the contract', async () => {
      await expect(borrow.connect(alice).borrowEthForNFT(BigInt(0))).to.be.revertedWith('INSUFFICIENT_LIQUIDITY');
    })
    it('should throw if the user does not have the nft', async () => {
      await expect(borrow.connect(alice).borrowEthForNFT(BigInt(4))).to.be.revertedWith('INVALID_NFT_OWNER');
    })
    it('should allow anyone to add liquidity', async () => {
      await borrow.connect(coinbase).addLiquidity({ value: parseEther('1') });
      const liquidity = await borrow.getLiquidity();
      expect(liquidity).to.equal(parseEther('1'));
    })
    it('should allow a user to borrow eth for an nft', async () => {
      const nftId = 0;
      await pledge.connect(alice).approve(borrow.target, nftId);
      await borrow.connect(alice).borrowEthForNFT(nftId);
      const nftOwner = await pledge.ownerOf(nftId);
      expect(nftOwner).to.equal(borrow.target);
    });
  })
});
