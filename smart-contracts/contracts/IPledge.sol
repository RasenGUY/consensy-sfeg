// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IPledge {
    struct MintParams {
        string gradientOne;
        string gradientTwo;
        uint256 diameter;
    }
    struct PledgeNFT {
        uint256 tokenId;
        address nftAddress;
        string gradientOne;
        string gradientTwo;
        uint256 diameter;
    }
    function getNFTs() external view returns (PledgeNFT[] memory);
    function getNFTsOf(address owner) external view returns (PledgeNFT[] memory);
    function getNFT(uint256 tokenId) external view returns (PledgeNFT memory);
    function mintMany(address to, MintParams[] memory) external;
    function mintPledge(address to, MintParams memory) external;
}