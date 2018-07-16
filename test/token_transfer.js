const TokenZendR = artifacts.require('./TokenZendR.sol');
const BearToken = artifacts.require('./BearToken.sol');
const CubToken = artifacts.require('./CubToken.sol');

const BigNumber = web3.BigNumber;

const should = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

let sender, bear, cub;

contract('token_management', async (accounts) => {

    let accountA, accountB, accountC, accountD;

    [accountA, accountB, accountC, accountD ] = accounts;

    beforeEach(async () => {
        sender = await TokenZendR.new();
        bear = await BearToken.new();
        cub = await CubToken.new();

        await sender.addNewToken('BEAR', bear.address);
        await sender.addNewToken('CUB', cub.address);
    });

    it("should be able to transfer sender token to another wallet", async() => {
        let amount = new BigNumber(500000e5);

        await bear.approve(sender.address, amount,{from: accountA});

        await sender.transferTokens('BEAR',accountB, amount,{from: accountA});

        let balance = ((await  bear.balanceOf(accountB)).toString());

        balance.should.equal(amount.toString())
    });

});