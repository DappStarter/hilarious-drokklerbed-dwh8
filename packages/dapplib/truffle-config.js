require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile prosper include kitten suspect sunset'; 
let testAccounts = [
"0x96b84b133db6600db1e23732a0da85f0d7319e47b74f8f655f72be6d6c5d0e30",
"0x6d0db9d2e45610a21cfa4a66d62692b4600813b030639239823dff1224f20a65",
"0xe183bc231ca494dc5b6d525aec6719432f59a89da844ab7bdc36e2077ac28b4f",
"0x8221a88e17ab40684380a4ddae28149ed6caf5a46748bc69c6065890e1c6280b",
"0x8ee59973fb8806ad3789a5820f2d567bdec6175896150cf18ee2cfd05089b518",
"0x75342096a14e73506e47291ab62d3c5f36af672d88ad24a8cc01bf8ac7c808df",
"0x5cdc6f08f2bd3f1da228b8c79a224ef696563b041d3576e337752ed9e7746787",
"0x310ce4297562ba2d0e16db1a935abda730be3c32a327016d8eee1ce365ad7754",
"0xc27ac925984db6aab6a7d912d6ac2ffddf2ac1651cb103ae82dc7f331c241727",
"0xe3f66741383ca5909837bcc25540fe4e0072cf597f1f727eb38a2537323cd436"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

