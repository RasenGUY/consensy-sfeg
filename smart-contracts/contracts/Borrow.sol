// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/Context.sol";

import "./IBorrow.sol";

contract Borrow is IBorrow, ERC721Holder, Context {

    using Address for address payable;
    
    uint256 private _liquidity;
    mapping(address => uint256) private _accountBalances;
    mapping(address => uint256) private _accountDebts;
    
    
    IERC721 private _supportedCollection;
    mapping(bytes32 => CollatoralizedNFT) private _collateralizedNFTs;
    
    uint256 constant public BORROW_RATE = 0.0001 ether;
    
    constructor(address collection) {
        _supportedCollection = IERC721(collection); 
    }
    
    function borrowEthForNFT(uint256 tokenId) public {
        require(_supportedCollection.ownerOf(tokenId) == _msgSender(), "INVALID_NFT_OWNER");
        require(_liquidity >= BORROW_RATE, "INSUFFICIENT_LIQUIDITY");
        _liquidity -= BORROW_RATE;
        _accountBalances[_msgSender()]+= BORROW_RATE;
        bytes32 borrowId = generateBorrowId(
            address(_supportedCollection),
            _msgSender(), 
            tokenId
        );
        _collateralizedNFTs[borrowId] = CollatoralizedNFT({
            id: borrowId,
            nft: address(_supportedCollection),
            tokenId: tokenId,
            owner: _msgSender(),
            rate: BORROW_RATE
        });
        _supportedCollection.transferFrom(_msgSender(), address(this), tokenId);
        emit LockNFT(address(_supportedCollection), _msgSender(), tokenId);
    }

    function addLiquidity() public payable {
        _liquidity += msg.value;
        emit LiquidityAdded(msg.sender, msg.value);
    }

    function accountBalance() public view returns (uint256) {
        return _accountBalances[_msgSender()];
    }
    
    function withdraw() public {
        require(_accountBalances[_msgSender()] > 0, "INSUFFICIENT_BALANCE");
        uint256 totalWithdrawable = _accountBalances[_msgSender()];
        _accountBalances[_msgSender()] = 0;
        _accountDebts[_msgSender()] += totalWithdrawable;
        payable(_msgSender()).sendValue(totalWithdrawable);
        emit Withdrawn(_msgSender(), totalWithdrawable);
    }

    function getLiquidity() public view override returns (uint256) {
        return _liquidity;
    }

    function _msgValue() internal view returns (uint256) {
        return msg.value;
    }

    function generateBorrowId(
        address collection,
        address owner,
        uint256 tokenId
    ) public pure returns (bytes32 borrowId) {
        borrowId = keccak256(abi.encodePacked(
                collection,
                tokenId, 
                owner
            )
        );
    }
}
