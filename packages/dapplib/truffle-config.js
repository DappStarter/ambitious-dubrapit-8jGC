require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile prosper install bean obscure tide'; 
let testAccounts = [
"0x70b6699af848768c353ba8eeb4be6a98e8353b3bc1767b19db333418dd10f21c",
"0x7845613ea3b7eef7dca71f6867fc398e5c70e75fa0471f856ee2247c2e876f06",
"0x1bf4746b6df7490dcbff3238d9f099eaee8bc328116377ae0f0d3900bd63b8cc",
"0x4b1853e1dd1107a79d4b0ca8cdf834f56cbe2eecda7aab5ae592fab79e1e5b07",
"0x1c550bccd42a589cae51d3dd0196f6e89badf3f920fcac8de9da72ea81f7fed4",
"0xf903a7a89c8d4c6501cc52627112ccc37d6c1379b5e7fcd77955a165c8d9fcf7",
"0xb6b46bea51f8d863515b36a6970b61c0810e58f92cc0af92093e947ab08ea862",
"0xb5103f349da6e4e3668b48b84cffe5eba7cdc780e03fe9802f41f770e8ae33b5",
"0xd61ef2f915f9fcfc63b77fcdab206e82b63229d491a601c5cf920ee4252b6806",
"0x7692b3013add4d2d774fc89f70c9a4ec8ab0b0cf0b180f0296224d152f67720b"
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

