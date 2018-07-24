const TokenZendR = artifacts.require('./TokenZendR.sol');

const should = require('chai')
    .use(require('chai-as-promised'))
    .should();

let sender;

contract('token_management', async (accounts) => {

    beforeEach(async () => {
        sender = await TokenZendR.new();
        await sender.addNewToken('OPEN', '0x69c4bb240cf05d51eeab6985bab35527d04a8c64');
    });

    it("should add new supported token", async() => {
        let address = await sender.tokens.call('OPEN');

        address.should.equal('0x69c4bb240cf05d51eeab6985bab35527d04a8c64');
    });

    it("should update supported token address", async() => {
        await sender.addNewToken('OPEN', '0x3472059945ee170660a9a97892a3cf77857eba3a');

        let address = await sender.tokens.call('OPEN');

        address.should.equal('0x3472059945ee170660a9a97892a3cf77857eba3a');
    });

    it("should remove unused supported token address", async() => {
        await sender.removeToken('OPEN');

        let address = await sender.tokens.call('OPEN');

        address.should.equal('0x0000000000000000000000000000000000000000');
    });
});