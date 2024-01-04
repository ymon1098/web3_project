require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/9Sxp3nLiu2llrAhyQO7sZ18ej18EqqVQ',
      accounts: ['9156205ca8782707f9eebdfcf847356ea47891e93fa07718d5e805b39ab79849']
    }
  }
}