// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IBorrow {
    event LiquidityAdded(address indexed adminstrator, uint256 indexed amount);
    event Withdrawn(address indexed account, uint256 amount);
    event LockNFT(address indexed collection, address indexed owner, uint256 indexed tokenId);
    struct CollatoralizedNFT {
        bytes32 id;
        address nft;
        uint256 tokenId;
        address owner;
        uint256 rate;
    }
    function borrowEthForNFT(uint256 tokenId) external;
    function getLiquidity() external view returns (uint256);
    function accountBalance(address account) external view returns (uint256);
}
