const TokenZendR = artifacts.require('./TokenZendR.sol');
require('dotenv').config();

const should = require('chai')
    .use(require('chai-as-promised'))
    .should();

let sender;
contract('token_management', async (accounts) => {

    beforeEach(async () => {
        sender = await TokenZendR.new();
        await sender.addNewToken(web3.utils.fromAscii("OPEN"), process.env.CUB_ADDRESS);
    });

    it("should add new supported token", async() => {
        let address = await sender.tokens.call(web3.utils.fromAscii("OPEN"));

        address.should.equal(process.env.CUB_ADDRESS);
    });

    it("should update supported token address", async() => {
        await sender.addNewToken(web3.utils.fromAscii("OPEN"), process.env.BEAR_ADDRESS);

        let address = await sender.tokens.call(web3.utils.fromAscii("OPEN"));

        address.should.equal(process.env.BEAR_ADDRESS);
    });

    it("should remove unused supported token address", async() => {
        await sender.removeToken(web3.utils.fromAscii("OPEN"));

        let address = await sender.tokens.call(web3.utils.fromAscii("OPEN"));

        address.should.equal('0x0000000000000000000000000000000000000000');
    });
});
