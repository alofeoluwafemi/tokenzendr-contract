pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
* @title BearToken is a basic ERC20 Token
*/
contract BearToken is ERC20, Ownable{

    /**
    * @dev assign totalSupply to account creating this contract
    */
    constructor()  ERC20("BearToken","CUB"){
        _setupDecimals(5);
        _mint(msg.sender, 100000000000);
    }
}
