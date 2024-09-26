



require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.4',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/NraMk8f-kwxJlP3HMSOYIZlxTR6yKdIL',
      accounts:['fd94ba03676b78414593e1b1d149853fd2cfc824f8597a0429579d645dda33df']
    }
  }
}