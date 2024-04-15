// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Nonces.sol";
import "./IPledge.sol";

contract Pledge is IPledge, ERC721, Ownable {
    
    uint256 public tokenIds;

    mapping(uint256 => PledgeNFT) private _nfts;
    
    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) Ownable(_msgSender()) {
        tokenIds = 0;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://pledge.borrow/";
    }

    function mintMany(address to, MintParams[] memory mintParams) public override {
        for(uint256 i = 0; i < mintParams.length; i++) {
            mintPledge(to, mintParams[i]);
        }
    }

    function mintPledge(
        address to, 
        MintParams memory mintParams
    ) public override {
        uint256 currentTokenId = tokenIds;
        _nfts[tokenIds] = PledgeNFT({
            gradientOne: mintParams.gradientOne,
            gradientTwo: mintParams.gradientTwo,
            nftAddress: address(this),
            diameter: mintParams.diameter,
            tokenId: currentTokenId
        });
        _safeMint(to, tokenIds);
        tokenIds++;
    }

    function getNFTs() public view returns (PledgeNFT[] memory) {
        uint256 totalTokenIds = tokenIds;
        PledgeNFT[] memory nfts = new PledgeNFT[](totalTokenIds);
        for(uint256 i = 0; i < totalTokenIds; i++){
            nfts[i] = _nfts[i];
        }
        return nfts;
    }

    function getNFTsOf(address owner) public view returns (PledgeNFT[] memory) {
        uint256 ownerTokenIds = balanceOf(owner);
        uint256 totalTokenIds = tokenIds;
        PledgeNFT[] memory nfts = new PledgeNFT[](ownerTokenIds);
        uint256 j = 0;
        for(uint256 i = 0; i < totalTokenIds ; i++) {
            if(_ownerOf(i) == owner) {
                nfts[j] = _nfts[i];
                j++;
            }
        }
        return nfts;
    }

    function getNFT(uint256 tokenId) public view returns (PledgeNFT memory) {
        return _nfts[tokenId];
    }
}